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
  isRunicFaction: boolean = false
) => {
  const { roster } = useArmyStore();

  // --- 1. ALLOWANCE (Unchanged) ---
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
      // Check both standard allowance AND penalty logic (e.g. Acolytes)
      const count = unit.selectedOptions[opt.id] || 0;
      if (count > 0) {
        if (opt.magicAllowance) {
          const amount = opt.magicAllowance.maxItems || 0;
          const cats = opt.magicAllowance.allowedCategories || [];
          maxTotal += amount;
          addLimits(amount, cats);
          cats.forEach(c => allowedSet.add(c));
        }
        // Handle "Reduces Item Limit" (like Acolytes)
        // if (opt.magicAllowancePenalty) {
        //   maxTotal -= opt.magicAllowancePenalty;
        //   // Also reduce specific buckets to be safe
        //   maxNonBanners -= opt.magicAllowancePenalty;
        // }
      }
    });

    return {
      maxTotal: Math.max(0, maxTotal),
      maxBanners,
      maxNonBanners,
      allowedCategories: allowedSet
    };
  }, [definition, unit.selectedOptions]);


  // --- 2. USAGE (FIXED FOR RUNES) ---
  const usage = useMemo(() => {
    const selectedEntries = Object.entries(unit.selectedOptions).flatMap(([id, count]) => {
      if (count <= 0) return [];
      const item = allItems.find(i => i.id === id);
      return item ? [{ item, count }] : [];
    });

    let countTotal = 0;
    const activeRuneCategories = new Set<string>();

    selectedEntries.forEach(({ item, count }) => {
       if (isRunicFaction && item.isRune) {
           // For Runes: We don't sum 'count'. We just mark this Category as "Occupied"
           // Example: 3 Weapon runes -> 'weapon' is added once.
           activeRuneCategories.add(item.type);
       } else {
           // For Standard Items: Count them normally (usually 1)
           countTotal += count;
       }
    });

    // Add 1 "Slot" for each category that has Runes
    if (isRunicFaction) {
        countTotal += activeRuneCategories.size;
    }

    // Banner specific counts (for the BSB cap)
    // Note: A "Rune Banner" counts as 1 Banner.
    const countBanners = selectedEntries
      .filter(x => x.item.type === 'banner')
      .reduce((sum, x) => {
         // If it's a rune banner, don't double count if we handled it in the block above?
         // Actually, simpler logic for sub-caps:
         if (isRunicFaction && x.item.isRune) return 1; // 1 Rune banner = 1 Banner used
         return sum + x.count;
      }, 0);

    // If we have multiple banner runes, they still only count as 1 Banner Slot total
    // But since you can only have 1 Banner (Magic Standard), the logic holds.
    
    return {
      selectedItems: selectedEntries,
      countTotal,
      countBanners,
      countNonBanners: countTotal - countBanners,
      remainingSlots: allowance.maxTotal - countTotal
    };
  }, [unit.selectedOptions, allItems, allowance.maxTotal, isRunicFaction]);


  // --- 3. RUNE HELPERS ---
  const runeUsage = useMemo(() => {
    if (!isRunicFaction) return null;
    const byCategory: Record<string, string[]> = {};

    usage.selectedItems.forEach(({ item, count }) => {
      // Only track actual Runes here
      if (!item.isRune) return; 

      if (!byCategory[item.type]) byCategory[item.type] = [];
      for (let i = 0; i < count; i++) {
        byCategory[item.type].push(item.id);
      }
    });
    return byCategory;
  }, [usage.selectedItems, isRunicFaction]);

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


// --- 4. VALIDATION LOGIC ---
  const getItemStatus = useCallback((item: MagicItem) => {
    const currentCount = unit.selectedOptions[item.id] || 0;
    
    // Determine if this is a Toggle (Max 1) or Counter (Max > 1)
    // Note: Master Runes usually behave as Toggle (maxCount: 1 or undefined)
    const isToggle = !item.maxCount || item.maxCount === 1;

    // --- A. ALWAYS ALLOW DESELECTION FOR TOGGLES ---
    // If a Master Rune is selected, we MUST return enabled so the user can click it to turn it OFF.
    if (currentCount > 0 && isToggle) {
      return { isSelected: true, currentCount, isDisabled: false, errorLabel: null };
    }

    // [DELETED BLOCK] 
    // We removed the "currentCount > 0 && !isToggle" bypass. 
    // Now, even if you have 2 Runes of Fury, the code will proceed to check 
    // if adding a 3rd one would break the "Max 3" rule (combined with other runes).

    // --- B. STANDARD CHECKS ---
    if (checkIsTakenByOthers(item, unit, roster)) {
      return { isSelected: false, currentCount, isDisabled: true, errorLabel: 'Already taken' };
    }

    const mundaneCheck = checkMundaneRequirements(item, definition);
    if (!mundaneCheck.isValid) return { isSelected: false, currentCount, isDisabled: true, errorLabel: mundaneCheck.error ?? null };

    const catCheck = checkCategoryRequirements(item, definition);
    if (!catCheck.isValid) return { isSelected: false, currentCount, isDisabled: true, errorLabel: catCheck.error ?? null };

    const tagCheck = checkTagsAndRestrictions(item, definition, unit, isMounted);
    if (!tagCheck.isValid) return { isSelected: false, currentCount, isDisabled: true, errorLabel: tagCheck.error ?? null };


    // --- C. SLOT CAPACITY CHECKS ---
    let costsNewSlot = true;
    if (isRunicFaction && item.isRune) {
        // If we already have runes in this category, adding another costs 0 extra MAGIC ITEM slots
        const existingRunes = runeUsage?.[item.type] || [];
        if (existingRunes.length > 0) costsNewSlot = false;
    }

    if (costsNewSlot && usage.remainingSlots <= 0) {
       // If adding this would cost a slot, and we have none, disable it.
       return { isSelected: false, currentCount, isDisabled: true, errorLabel: null };
    }
    
    // Banner Checks
    const isBanner = item.type === 'banner';
    if (isBanner && usage.countBanners >= allowance.maxBanners) return { isSelected: false, currentCount, isDisabled: true, errorLabel: null };
    if (!isBanner && usage.countNonBanners >= allowance.maxNonBanners) return { isSelected: false, currentCount, isDisabled: true, errorLabel: null };


    // --- D. RUNIC FACTION LOGIC ---
    if (isRunicFaction) {
      const categorySelections = usage.selectedItems.filter(entry => entry.item.type === item.type);
      const hasStandardSelected = categorySelections.some(entry => !entry.item.isRune);
      const hasRuneSelected = categorySelections.some(entry => entry.item.isRune);

      if (item.isRune) {
        // 1. Mutual Exclusivity
        if (hasStandardSelected) {
          return { isSelected: false, currentCount, isDisabled: true, errorLabel: 'Item slot occupied' };
        }

        const runesInCategory = runeUsage?.[item.type] || [];
        
        // 2. Max 3 Runes per Item (TOTAL)
        // This check now correctly runs even if you already have 2 Runes of Fury.
        // If (2 Fury + 1 Master) = 3, this returns Disabled, preventing the 3rd Fury.
        if (runesInCategory.length >= 3) {
           return { isSelected: false, currentCount, isDisabled: true, errorLabel: 'Max 3 Runes' };
        }

        // 3. Rule of Pride (Unique Combinations)
        // Only check when adding a NEW rune instance
        if (currentCount === 0) {
          const proposedCombo = [...runesInCategory, item.id];
          const isComboTaken = roster.some(otherUnit => {
            if (otherUnit.instanceId === unit.instanceId) return false;
            const otherRunes = Object.entries(otherUnit.selectedOptions).flatMap(([id, count]) => {
              const uItem = allItems.find(i => i.id === id);
              if (uItem?.type !== item.type || !uItem.isRune) return [];
              return Array(count).fill(id);
            });
            return areCombosEqual(proposedCombo, otherRunes);
          });

          if (isComboTaken) {
             return { isSelected: false, currentCount, isDisabled: true, errorLabel: 'Combination Exists' };
          }
        }

        // 4. Master Rune Checks
        if (item.isMasterRune) {
          const isTakenAnywhere = roster.some(u => 
             u.instanceId !== unit.instanceId && (u.selectedOptions[item.id] || 0) > 0
          );
          if (isTakenAnywhere) return { isSelected: false, currentCount, isDisabled: true, errorLabel: 'Unique in Army' };

          const hasMasterAlready = runesInCategory.some(id => allItems.find(i => i.id === id)?.isMasterRune);
          // If we haven't selected THIS Master Rune yet, but one exists in the group, block it.
          if (!currentCount && hasMasterAlready) {
             return { isSelected: false, currentCount, isDisabled: true, errorLabel: 'Max 1 Master Rune' };
          }
        }

      } else {
        // Standard Items in Runic Faction
        if (hasRuneSelected) return { isSelected: false, currentCount, isDisabled: true, errorLabel: 'Inscribed with Runes' };
        if (checkCategoryDuplicate(item, usage.selectedItems)) return { isSelected: false, currentCount, isDisabled: true, errorLabel: `Max 1 ${item.type}` };
      }

    } else {
      // Standard Faction Checks
      if (checkCategoryDuplicate(item, usage.selectedItems)) return { isSelected: false, currentCount, isDisabled: true, errorLabel: `Max 1 ${item.type}` };
    }

    // Success (Enable the Plus Button)
    return { isSelected: currentCount > 0, currentCount, isDisabled: false, errorLabel: null };

  }, [unit, roster, usage, definition, isMounted, allowance, isRunicFaction, runeUsage, allItems]);

  return { allowance, usage, getItemStatus, isWizard, isMounted };
};

// --- HELPERS (Keep your existing ones) ---
const areCombosEqual = (arr1: string[], arr2: string[]) => {
  if (arr1.length !== arr2.length) return false;
  const sorted1 = [...arr1].sort();
  const sorted2 = [...arr2].sort();
  return sorted1.every((val, index) => val === sorted2[index]);
};

function checkIsTakenByOthers(item: MagicItem, currentUnit: ArmyUnit, roster: ArmyUnit[]): boolean {
  return roster.some(u => {
    if (u.instanceId === currentUnit.instanceId) return false;
    return (u.selectedOptions[item.id] || 0) > 0;
  });
}

function checkCategoryDuplicate(item: MagicItem, selectedItems: { item: MagicItem }[]): boolean {
  // If strict category limit applies
  if (item.type !== 'weapon' && item.type !== 'armour' && item.type !== 'familiar') return false;
  return selectedItems.some(entry => entry.item.type === item.type);
}

// (Keep checkMundaneRequirements, checkCategoryRequirements, checkTagsAndRestrictions as they were)
// Just ensure checkMundaneRequirements handles the ? correctly (returns Valid or Error string)
function checkMundaneRequirements(item: MagicItem, definition: UnitDefinition): ValidationResult {
  if (!item.requiresMundaneOption || item.requiresMundaneOption.length === 0) return { isValid: true };
  
  const hasRequirement = item.requiresMundaneOption.some(reqId => {
    const normalizedReq = reqId.toLowerCase().replace(/_/g, ' ');
    const inDefault = definition.equipment.some(eq => eq.toLowerCase() === normalizedReq || eq.toLowerCase() === reqId.toLowerCase());
    const inOptions = definition.options.some(opt => opt.id === reqId); // Availability check
    return inDefault || inOptions;
  });

  if (!hasRequirement) {
    const labels = item.requiresMundaneOption.map(r => r.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase())).join(' or ');
    return { isValid: false, error: `Requires ${labels}` };
  }
  return { isValid: true };
}

function checkCategoryRequirements(item: MagicItem, definition: UnitDefinition): ValidationResult {
  if (!item.requiresOptionCategory || item.requiresOptionCategory.length === 0) return { isValid: true };
  
  const hasCategoryAccess = item.requiresOptionCategory.some(reqCat => {
    const isShieldType = (str: string) => str.toLowerCase().includes('shield') || str.toLowerCase().includes('buckler');
    
    // Check Options
    const optionExists = definition.options.some(opt => {
      if (opt.category !== 'armour' && opt.category !== reqCat) return false;
      if (reqCat === 'armour') return !isShieldType(opt.id) && !isShieldType(opt.name);
      if (reqCat === 'shield') return isShieldType(opt.id) || isShieldType(opt.name);
      return true;
    });
    if (optionExists) return true;

    // Check Equipment
    return definition.equipment.some(eq => {
      const lowerEq = eq.toLowerCase();
      if (reqCat === 'armour') return (lowerEq.includes('armour') || lowerEq.includes('plate') || lowerEq.includes('mail')) && !isShieldType(lowerEq);
      if (reqCat === 'shield') return isShieldType(lowerEq);
      return false;
    });
  });

  if (!hasCategoryAccess) return { isValid: false, error: `Requires ${item.requiresOptionCategory.join(' or ')}` };
  return { isValid: true };
}

function checkTagsAndRestrictions(item: MagicItem, definition: UnitDefinition, unit: ArmyUnit, isMounted: boolean): ValidationResult {
  if (item.requiresTags && !item.requiresTags.some(tag => definition.tags?.includes(tag))) {
      return { isValid: false, error: `Requires ${item.requiresTags.join('/')}` };
  }
  if (item.incompatibleTags && item.incompatibleTags.some(tag => definition.tags?.includes(tag))) {
      return { isValid: false, error: `Cannot be ${item.incompatibleTags.join('/')}` };
  }
  if (item.requiresGeneral && unit.selectedOptions.general !== 1) return { isValid: false, error: 'Requires General' };
  if (item.onlyOnFoot && isMounted) return { isValid: false, error: 'Models on foot only' };
  
  return { isValid: true };
}