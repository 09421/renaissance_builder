import { useMemo, useCallback } from 'react';
import { useArmyStore } from '@/store/armyStore';
import { UnitDefinition, ArmyUnit } from '@/types/army';
import { MagicItem, MagicItemCategory } from '@/types/magicItems';

type ValidationResult = {
  isValid: boolean;
  error?: string;
};

export const useMagicItemLogic = (
  unit: ArmyUnit,
  definition: UnitDefinition,
  allItems: MagicItem[],
  activeCategory: MagicItemCategory
) => {
  const { roster } = useArmyStore();

  const allowance = useMemo(() => {
    let maxTotal = definition.magicAllowance?.maxItems || 0;
    let maxBanners = 0;
    let maxNonBanners = 0;
    
    const allowedSet = new Set<string>(definition.magicAllowance?.allowedCategories || []);

    const addLimits = (amount: number, cats: string[]) => {
      if (cats.includes('banner') || cats.length === 0) maxBanners += amount;

      const hasNonBanner = cats.length === 0 || cats.some(c => c !== 'banner');
      if (hasNonBanner) maxNonBanners += amount;
    };

    addLimits(maxTotal, Array.from(allowedSet));

    definition.options.forEach(opt => {
      if ((unit.selectedOptions[opt.id] || 0) > 0 && opt.magicAllowance) {
        const amount = opt.magicAllowance.maxItems || 0;
        const cats = opt.magicAllowance.allowedCategories || [];

        maxTotal += amount;
        addLimits(amount, cats);
        cats.forEach(c => allowedSet.add(c));
      }
    });

    return { 
      maxTotal, 
      maxBanners, 
      maxNonBanners, 
      allowedCategories: allowedSet 
    };
  }, [definition, unit.selectedOptions]);

  const usage = useMemo(() => {
    const selectedItems = Object.entries(unit.selectedOptions).flatMap(([id, count]) => {
      if (count <= 0) return [];
      const item = allItems.find(i => i.id === id);
      return item ? [{ item, count }] : [];
    });

    const countTotal = selectedItems.reduce((sum, x) => sum + x.count, 0);
    const countBanners = selectedItems
      .filter(x => x.item.type === 'banner')
      .reduce((sum, x) => sum + x.count, 0);
    
    return {
      selectedItems,
      countTotal,
      countBanners,
      countNonBanners: countTotal - countBanners,
      remainingSlots: allowance.maxTotal - countTotal
    };
  }, [unit.selectedOptions, allItems, allowance.maxTotal]);

  const isWizard = useMemo(() => 
    definition.tags?.some(t => ['wizard', 'mage', 'shaman', 'necromancer'].includes(t)) || 
    definition.specialRules?.includes('Wizard'),
  [definition]);

  const isMounted = useMemo(() => 
    definition.options.some(opt => {
      const isSelected = (unit.selectedOptions[opt.id] || 0) > 0;
      return isSelected && (opt.category === 'mount' || opt.group === 'mount');
    }),
  [definition, unit.selectedOptions]);

  
const getItemStatus = useCallback((item: MagicItem) => {
    const isSelected = (unit.selectedOptions[item.id] || 0) > 0;
    
    if (isSelected) {
      return { isSelected: true, isDisabled: false, errorLabel: null };
    }

    if (checkIsTakenByOthers(item, unit, roster)) {
      return { isSelected, isDisabled: true, errorLabel: 'Already taken' };
    }

    if (checkCategoryDuplicate(item, usage.selectedItems)) {
      return { isSelected, isDisabled: true, errorLabel: `Max 1 Magic ${item.type}` };
    }

    const mundaneCheck = checkMundaneRequirements(item, definition);
    if (!mundaneCheck.isValid) {
      return { isSelected, isDisabled: true, errorLabel: mundaneCheck.error ?? null };
    }

    const catCheck = checkCategoryRequirements(item, definition);
    if (!catCheck.isValid) {
      return { isSelected, isDisabled: true, errorLabel: catCheck.error ?? null };
    }

    const tagCheck = checkTagsAndRestrictions(item, definition, unit, isMounted);
    if (!tagCheck.isValid) {
      return { isSelected, isDisabled: true, errorLabel: tagCheck.error ?? null };
    }

    if (usage.remainingSlots <= 0) {
      return { isSelected, isDisabled: true, errorLabel: null };
    }

    const isBanner = item.type === 'banner';
    if (isBanner && usage.countBanners >= allowance.maxBanners) {
      return { isSelected, isDisabled: true, errorLabel: null };
    }
    if (!isBanner && usage.countNonBanners >= allowance.maxNonBanners) {
      return { isSelected, isDisabled: true, errorLabel: null };
    }

    return { isSelected: false, isDisabled: false, errorLabel: null };

  }, [unit, roster, usage, definition, isMounted, allowance]);


  return {
    allowance,
    usage,
    getItemStatus,
    isWizard,
    isMounted
  };
};


function checkIsTakenByOthers(item: MagicItem, currentUnit: ArmyUnit, roster: ArmyUnit[]): boolean {
  return roster.some(u => {
    if (u.instanceId === currentUnit.instanceId) return false;
    return (u.selectedOptions[item.id] || 0) > 0;
  });
}

function checkCategoryDuplicate(item: MagicItem, selectedItems: { item: MagicItem }[]): boolean {
  if (item.type !== 'weapon' && item.type !== 'armour') return false;
  return selectedItems.some(entry => entry.item.type === item.type);
}

function checkMundaneRequirements(item: MagicItem, definition: UnitDefinition): ValidationResult {
  if (!item.requiresMundaneOption || item.requiresMundaneOption.length === 0) {
    return { isValid: true };
  }

  const hasRequirement = item.requiresMundaneOption.some(reqId => {
    const normalizedReq = reqId.toLowerCase().replace(/_/g, ' ');
    
    const inDefault = definition.equipment.some(eq => 
      eq.toLowerCase() === normalizedReq || eq.toLowerCase() === reqId.toLowerCase()
    );
    
    const inOptions = definition.options.some(opt => opt.id === reqId);

    return inDefault || inOptions;
  });

  if (!hasRequirement) {
    const labels = item.requiresMundaneOption
      .map(r => r.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase()))
      .join(' or ');
    return { isValid: false, error: `Requires ${labels}` };
  }

  return { isValid: true };
}

function checkCategoryRequirements(item: MagicItem, definition: UnitDefinition): ValidationResult {
  if (!item.requiresOptionCategory || item.requiresOptionCategory.length === 0) {
    return { isValid: true };
  }

  const hasCategoryAccess = item.requiresOptionCategory.some(reqCat => {
    const isShieldType = (str: string) => 
      str.toLowerCase().includes('shield') || str.toLowerCase().includes('buckler');

    const optionExists = definition.options.some(opt => {
      if (opt.category !== 'armour' && opt.category !== reqCat) return false;
      if (reqCat === 'armour') return !isShieldType(opt.id) && !isShieldType(opt.name);
      if (reqCat === 'shield') return isShieldType(opt.id) || isShieldType(opt.name);
      return true;
    });

    if (optionExists) return true;

    return definition.equipment.some(eq => {
      const lowerEq = eq.toLowerCase();
      if (reqCat === 'armour') return (lowerEq.includes('armour') || lowerEq.includes('plate') || lowerEq.includes('mail')) && !isShieldType(lowerEq);
      if (reqCat === 'shield') return isShieldType(lowerEq);
      return false;
    });
  });

  if (!hasCategoryAccess) {
    return { isValid: false, error: `Requires ${item.requiresOptionCategory.join(' or ')}` };
  }

  return { isValid: true };
}

function checkTagsAndRestrictions(
  item: MagicItem, 
  definition: UnitDefinition, 
  unit: ArmyUnit, 
  isMounted: boolean
): ValidationResult {
  
  if (item.requiresTags) {
    const hasTag = item.requiresTags.some(tag => definition.tags?.includes(tag));
    if (!hasTag) return { isValid: false, error: `Requires ${item.requiresTags.join('/')}` };
  }

  if (item.incompatibleTags) {
    const hasForbidden = item.incompatibleTags.some(tag => definition.tags?.includes(tag));
    if (hasForbidden) return { isValid: false, error: `Cannot be ${item.incompatibleTags.join('/')}` };
  }

  if (item.requiresGeneral && unit.selectedOptions.general !== 1) {
    return { isValid: false, error: 'Requires General' };
  }

  if (item.onlyOnFoot && isMounted) {
    return { isValid: false, error: 'Models on foot only' };
  }

  return { isValid: true };
}