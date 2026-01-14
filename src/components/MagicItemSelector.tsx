import { useState, useMemo } from 'react';
import { useArmyStore } from '@/store/armyStore';
import { MagicItemCategory } from '@/types/magicItems';
import { UnitDefinition, ArmyUnit } from '@/types/army';
import { getMagicItems } from '@/utils/getFactionData';

interface Props {
  unit: ArmyUnit;
  definition: UnitDefinition;
  faction: string;
}

type ItemSource = 'faction' | 'common';

export const MagicItemSelector = ({ unit, definition, faction }: Props) => {
  const { setOptionCount, roster } = useArmyStore();

  // UI State
  const [activeCategory, setActiveCategory] = useState<MagicItemCategory>('weapon');
  const [activeSource, setActiveSource] = useState<ItemSource>('faction');

  // 1. Get ALL items
  const allItems = useMemo(() => getMagicItems(faction), [faction]);

  // 2. Split Items into Buckets
  const { factionItems, commonItems } = useMemo(() => {
    return {
      factionItems: allItems.filter(i => i.faction === faction),
      commonItems: allItems.filter(i => i.faction === 'common' || i.faction !== faction)
    };
  }, [allItems, faction]);


  // --- 1. ALLOWANCE CALCULATION ---

  // Initialize limits based on the base unit (usually characters)
  let maxTotal = definition.magicAllowance?.maxItems || 0;
  let maxBanners = 0;
  let maxNonBanners = 0;

  const baseAllowed = definition.magicAllowance?.allowedCategories || [];

  // Check if base unit allows these categories
  if (baseAllowed.includes('banner') || baseAllowed.length === 0) maxBanners += maxTotal;
  // If allowed list is empty (default), assume it allows non-banners too
  if (!baseAllowed.includes('banner') || baseAllowed.length > 1 || baseAllowed.length === 0) maxNonBanners += maxTotal;

  // Track the union of all allowed categories for the UI Tabs
  let allowedCategories = new Set<string>(baseAllowed);

  // Loop through options (Champion, Standard Bearer)
  definition.options.forEach(opt => {
    if ((unit.selectedOptions[opt.id] || 0) > 0 && opt.magicAllowance) {
      const amount = opt.magicAllowance.maxItems || 0;
      const cats = opt.magicAllowance.allowedCategories || [];

      // 1. Increase Total Cap
      maxTotal += amount;

      // 2. Increase Specific Caps
      if (cats.includes('banner')) {
        maxBanners += amount;
      }

      // If it allows ANYTHING other than JUST banners, it adds to Non-Banners
      // (e.g. ['weapon', 'armour'] OR ['banner', 'weapon'] OR [])
      const hasNonBanner = cats.length === 0 || cats.some(c => c !== 'banner');
      if (hasNonBanner) {
        maxNonBanners += amount;
      }

      // Merge allowed categories for UI
      cats.forEach(c => allowedCategories.add(c));
    }
  });

  if (maxTotal === 0) return null;


  // --- CURRENT USAGE ---
  const selectedMagicItems = Object.entries(unit.selectedOptions).flatMap(([id, count]) => {
    if (count <= 0) return [];
    const item = allItems.find(i => i.id === id);
    return item ? [{ item, count }] : [];
  });
  // Count Totals
  const countTotal = selectedMagicItems.reduce((sum, x) => sum + x.count, 0);
  const countBanners = selectedMagicItems
    .filter(x => x.item.type === 'banner')
    .reduce((sum, x) => sum + x.count, 0);
  const countNonBanners = countTotal - countBanners;
  const remainingSlots = maxTotal - countTotal;

  // --- TABS VISIBILITY ---
  // Use the calculated 'allowedCategories' set to determine which tabs to show
  const validCategories = Array.from(allowedCategories);

  // Filter Items for Display
  const sourceList = activeSource === 'faction' ? factionItems : commonItems;
  const displayedItems = sourceList.filter(i => i.type === activeCategory);

  // Helper for "Max 1 Weapon" check
  const hasItemOfCategory = (cat: MagicItemCategory) => {
    return selectedMagicItems.some((entry) => {
      return entry.item.type === cat;
    });
  };

  // Helper for "Is Wizard" check (to hide Arcane/Familiar tabs)
  const isMounted = definition.options.some(opt => {
    const isSelected = (unit.selectedOptions[opt.id] || 0) > 0;
    const isMountType = opt.category === 'mount' || opt.group === 'mount';
    return isSelected && isMountType;
  });

  const isWizard = definition.tags?.some(tag =>
    ['wizard', 'mage', 'shaman', 'necromancer'].includes(tag)
  ) || definition.specialRules?.includes('Wizard');

  return (
    <div className="mt-8 border-t border-slate-700 pt-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-bold text-slate-400 uppercase">Magic Items</h3>
        <div className={`text-xs font-mono font-bold ${remainingSlots < 0 ? 'text-red-500' : 'text-amber-500'}`}>
          {countTotal} / {maxTotal} Slots
        </div>
      </div>

      {/* --- SOURCE TABS --- */}
      <div className="flex p-1 bg-slate-900 rounded mb-4 border border-slate-800">
        <button onClick={() => setActiveSource('faction')} className={`flex-1 py-1.5 text-xs font-bold uppercase tracking-wide rounded transition-all ${activeSource === 'faction' ? 'bg-slate-700 text-white shadow' : 'text-slate-500 hover:text-slate-300'}`}>
          {faction.replace(/_/g, ' ')} Items
        </button>
        <div className="w-px bg-slate-800 mx-1"></div>
        <button onClick={() => setActiveSource('common')} className={`flex-1 py-1.5 text-xs font-bold uppercase tracking-wide rounded transition-all ${activeSource === 'common' ? 'bg-slate-700 text-white shadow' : 'text-slate-500 hover:text-slate-300'}`}>
          Common Items
        </button>
      </div>

      {/* --- CATEGORY TABS --- */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-2 no-scrollbar">
        {['weapon', 'armour', 'talisman', 'enchanted', 'arcane', 'familiar', 'banner'].map(cat => {
          // 1. Check if this category is unlocked by the unit or its upgrades
          if (!validCategories.includes(cat)) return null;

          // 2. Hide Wizard items for non-Wizards
          if ((cat === 'arcane' || cat === 'familiar') && !isWizard) return null;

          // Calculate dot indicator
          const hasSelection = selectedMagicItems.some(entry => entry.item.type === cat);

          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat as MagicItemCategory)}
              className={`relative px-3 py-1 text-xs font-bold rounded capitalize whitespace-nowrap transition-colors border
                ${activeCategory === cat ? 'bg-amber-600 text-white border-amber-500' : 'bg-slate-800 text-slate-400 border-slate-700 hover:bg-slate-700'}
              `}
            >
              {cat}
              {hasSelection && (
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-500 rounded-full border-2 border-slate-900"></span>
              )}
            </button>
          );
        })}
      </div>

      {/* --- ITEM LIST --- */}
      <div className="space-y-2">
        {displayedItems.map(item => {
          const count = unit.selectedOptions[item.id] || 0;
          const isSelected = count > 0;
          const isBanner = item.type === 'banner';

          // --- VALIDATIONS ---          
          const totalFull = !isSelected && (countTotal >= maxTotal);
          const specificCapReached = !isSelected && (
            isBanner
              ? countBanners >= maxBanners
              : countNonBanners >= maxNonBanners
          );

          const slotFull = totalFull || specificCapReached;

          // Category Allowed Check
          const isTypeAllowed = validCategories ? validCategories.includes(item.type) : true;

          // requires general
          const isGeneral = !item.requiresGeneral || unit.selectedOptions.general === 1;

          // Check for Tags
          const gotTag = item.requiresTags?.some(tag => definition.tags?.includes(tag)) ?? true;
          const hasForbiddenTag = item.incompatibleTags?.some(tag => definition.tags?.includes(tag));

          //mount restricted
          const isFootRestricted = item.onlyOnFoot && isMounted;

          // Mundane Requirement Check
          let missingMundane = false;
          if (item.requiresMundaneOption && item.requiresMundaneOption.length > 0) {
            const hasRequirement = item.requiresMundaneOption.some(reqId => {
              const hasOption = (unit.selectedOptions[reqId] || 0) > 0;
              const hasDefault = definition.equipment.some(eq =>
                eq.toLowerCase() === reqId.replace(/_/g, ' ').toLowerCase() ||
                eq.toLowerCase() === reqId.toLowerCase()
              );
              return hasOption || hasDefault;
            });
            if (!hasRequirement) missingMundane = true;
          }

          const isTakenBySomeoneElse = roster.some(u => {
            if (u.instanceId === unit.instanceId) return false;
            return (u.selectedOptions[item.id] || 0) > 0;
          });

          let categoryLimitReached = false;
          if (!isSelected && (activeCategory === 'weapon' || activeCategory === 'armour')) {
            if (hasItemOfCategory(activeCategory)) categoryLimitReached = true;
          }

          const isDisabled = (!isSelected && remainingSlots <= 0) || !isTypeAllowed || missingMundane || isTakenBySomeoneElse || categoryLimitReached || !gotTag || !isGeneral || isFootRestricted || hasForbiddenTag || slotFull;

          let errorLabel = '';
          if (isTakenBySomeoneElse) errorLabel = 'Already taken';
          else if (categoryLimitReached) errorLabel = `Max 1 Magic ${activeCategory}`;
          else if (missingMundane) {
            const reqLabels = item.requiresMundaneOption
              ?.map(r => r.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase()))
              .join(' or ');
            errorLabel = `Requires ${reqLabels}`;
          }
          else if (!gotTag) errorLabel = `Requires ${item.requiresTags}`;
          else if (!isGeneral) errorLabel = `Requires General`;
          else if (isFootRestricted) errorLabel = `Models on foot only`;
          else if (hasForbiddenTag) errorLabel = `Cannot be ${item.incompatibleTags}`;

          return (
            <div key={item.id} className={`p-2 rounded border ${isSelected ? 'border-amber-500 bg-amber-900/10' : 'border-slate-700 bg-slate-800'} flex justify-between items-center`}>
              <div className={`text-sm ${isDisabled && !isSelected ? 'opacity-40 grayscale' : ''}`}>
                <div className="font-bold text-slate-200">
                  {item.name}
                  {isDisabled && !isSelected && <span className="ml-2 text-[10px] text-red-400 font-bold uppercase">{errorLabel}</span>}
                </div>
                <div className="text-xs text-slate-500">{item.points} pts</div>
              </div>
              <button
                disabled={isDisabled}
                onClick={() => setOptionCount(unit.instanceId, item.id, isSelected ? 0 : 1, definition)}
                className={`w-6 h-6 rounded flex items-center justify-center text-sm font-bold ${isSelected ? 'bg-red-900 text-red-400' : 'bg-slate-700 text-slate-400'}`}
              >
                {isSelected ? '✕' : '+'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};