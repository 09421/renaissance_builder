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
  const [activeSource, setActiveSource] = useState<ItemSource>('faction'); // Default to Faction items

  // 1. Get ALL items (Memoized to prevent recalc)
  const allItems = useMemo(() => getMagicItems(faction), [faction]);

  // 2. Split Items into Buckets
  const { factionItems, commonItems } = useMemo(() => {
    return {
      // Items that match the current army specifically
      factionItems: allItems.filter(i => i.faction === faction),
      // Items marked as common (or not belonging to this specific faction)
      commonItems: allItems.filter(i => i.faction === 'common' || i.faction !== faction)
    };
  }, [allItems, faction]);

  // --- ALLOWANCE CALCULATION ---
  // (This logic remains global - limits apply regardless of which tab you are on)
  let maxItems = definition.magicAllowance?.maxItems || 0;
  let allowedCategories = new Set<string>(definition.magicAllowance?.allowedCategories || []);

  definition.options.forEach(opt => {
    if ((unit.selectedOptions[opt.id] || 0) > 0 && opt.magicAllowance) {
      maxItems += (opt.magicAllowance.maxItems || 0);
      if (opt.magicAllowance.allowedCategories) {
        opt.magicAllowance.allowedCategories.forEach(c => allowedCategories.add(c));
      }
    }
  });

  if (maxItems === 0) return null;

  // --- SELECTION STATE ---
  const selectedMagicItems = Object.entries(unit.selectedOptions).filter(([id, count]) => {
    return allItems.find(i => i.id === id);
  });

  const currentCount = selectedMagicItems.reduce((sum, [_, count]) => sum + count, 0);
  const remainingSlots = maxItems - currentCount;

  const isCharacter = definition.role === 'character';
  const validCategories = isCharacter ? null : Array.from(allowedCategories);

  const isMounted = definition.options.some(opt => {
    const isSelected = (unit.selectedOptions[opt.id] || 0) > 0;
    const isMountType = opt.category === 'mount' || opt.group === 'mount';
    return isSelected && isMountType;
  });

  // --- FILTERING FOR DISPLAY ---
  // 1. Filter by Source Tab
  const sourceList = activeSource === 'faction' ? factionItems : commonItems;

  // 2. Filter by Category Tab
  const displayedItems = sourceList.filter(i => i.type === activeCategory);

  // Helper for Global Checks
  const hasItemOfCategory = (cat: MagicItemCategory) => {
    return selectedMagicItems.some(([id]) => {
      const itemDef = allItems.find(i => i.id === id);
      return itemDef?.type === cat;
    });
  };

  return (
    <div className="mt-8 border-t border-slate-700 pt-6">

      {/* HEADER & SLOTS */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-bold text-slate-400 uppercase">Magic Items</h3>
        <div className={`text-xs font-mono font-bold ${remainingSlots < 0 ? 'text-red-500' : 'text-amber-500'}`}>
          {currentCount} / {maxItems} Slots
        </div>
      </div>

      {/* --- LEVEL 1: SOURCE TABS (Faction vs Common) --- */}
      <div className="flex p-1 bg-slate-900 rounded mb-4 border border-slate-800">
        <button
          onClick={() => setActiveSource('faction')}
          className={`flex-1 py-1.5 text-xs font-bold uppercase tracking-wide rounded transition-all
            ${activeSource === 'faction' ? 'bg-slate-700 text-white shadow' : 'text-slate-500 hover:text-slate-300'}
          `}
        >
          {faction.replace(/_/g, ' ')} Items
        </button>
        <div className="w-px bg-slate-800 mx-1"></div>
        <button
          onClick={() => setActiveSource('common')}
          className={`flex-1 py-1.5 text-xs font-bold uppercase tracking-wide rounded transition-all
            ${activeSource === 'common' ? 'bg-slate-700 text-white shadow' : 'text-slate-500 hover:text-slate-300'}
          `}
        >
          Common Items
        </button>
      </div>

      {/* --- LEVEL 2: CATEGORY TABS (Weapon, Armour...) --- */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-2 no-scrollbar">
        {['weapon', 'armour', 'enchanted', 'arcane', 'familiar', 'banner'].map(cat => {
          if (validCategories && !validCategories.includes(cat as string)) return null;

          // Calculate if we have selected items in this category (for dot indicator)
          const hasSelection = selectedMagicItems.some(([id]) => {
            const i = allItems.find(x => x.id === id);
            return i?.type === cat;
          });

          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat as MagicItemCategory)}
              className={`relative px-3 py-1 text-xs font-bold rounded capitalize whitespace-nowrap transition-colors border
                ${activeCategory === cat
                  ? 'bg-amber-600 text-white border-amber-500'
                  : 'bg-slate-800 text-slate-400 border-slate-700 hover:bg-slate-700'}
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

      {/* ITEM LIST */}
      <div className="space-y-2 min-h-[200px]">
        {displayedItems.length === 0 ? (
          <div className="text-center py-8 text-slate-600 text-xs italic">
            No {activeSource === 'common' ? 'Common' : 'Faction'} {activeCategory}s available.
          </div>
        ) : (
          displayedItems.map(item => {
            const count = unit.selectedOptions[item.id] || 0;
            const isSelected = count > 0;

            // Basic Slot Check
            const isFull = !isSelected && remainingSlots <= 0;

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

            const isDisabled = (!isSelected && remainingSlots <= 0) || !isTypeAllowed || missingMundane || isTakenBySomeoneElse || categoryLimitReached || !gotTag || !isGeneral || isFootRestricted || hasForbiddenTag;

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
              <div key={item.id} className={`p-2 rounded border ${isSelected ? 'border-amber-500 bg-amber-900/10' : 'border-slate-700 bg-slate-800'} flex justify-between items-center group relative`}>
                <div className={`text-sm ${isDisabled && !isSelected ? 'opacity-40 grayscale' : ''}`}>
                  <div className="font-bold text-slate-200">
                    {item.name}
                    {isDisabled && !isSelected && (
                      <span className="ml-2 text-[10px] text-red-400 font-bold uppercase tracking-wide">
                        {errorLabel}
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-slate-500">{item.points} pts</div>
                  <div className="text-xs text-slate-500">{item.description}</div>
                </div>

                <button
                  disabled={isDisabled}
                  onClick={() => setOptionCount(unit.instanceId, item.id, isSelected ? 0 : 1, definition)}
                  className={`w-6 h-6 rounded flex items-center justify-center text-sm font-bold transition-all
                        ${isSelected ? 'bg-red-900/50 text-red-400 hover:bg-red-900 border border-red-800' : 'bg-slate-700 text-slate-400 hover:text-white border border-slate-600'}
                        ${isDisabled ? 'opacity-20 cursor-not-allowed border-none' : ''}
                        `}
                >
                  {isSelected ? '✕' : '+'}
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};