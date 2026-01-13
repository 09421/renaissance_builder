import { useState } from 'react';
import { useArmyStore } from '@/store/armyStore';
import { MagicItemCategory } from '@/types/magicItems';
import { UnitDefinition, ArmyUnit } from '@/types/army';
import { getMagicItems } from '@/utils/getFactionData';

interface Props {
  unit: ArmyUnit;
  definition: UnitDefinition;
  faction: string;
}

export const MagicItemSelector = ({ unit, definition, faction }: Props) => {
  // 1. Grab the full roster so we can check if other units have items
  const { setOptionCount, roster } = useArmyStore(); 
  const [activeCategory, setActiveCategory] = useState<MagicItemCategory>('weapon');

  const allItems = getMagicItems(faction);

  // --- ALLOWANCE CALCULATION (Same as before) ---
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

  // --- CURRENT SELECTION STATE ---
  const selectedMagicItems = Object.entries(unit.selectedOptions).filter(([id, count]) => {
    return allItems.find(i => i.id === id);
  });
  
  const currentCount = selectedMagicItems.reduce((sum, [_, count]) => sum + count, 0);
  const remainingSlots = maxItems - currentCount;
  
  const isCharacter = definition.role === 'character';
  const validCategories = isCharacter ? null : Array.from(allowedCategories);
  const categoryItems = allItems.filter(i => i.type === activeCategory);

  // --- HELPER: CHECK IF CATEGORY IS FULL ---
  // Returns true if the unit ALREADY has a Magic Weapon (and we are looking at weapons)
  const hasItemOfCategory = (cat: MagicItemCategory) => {
    return selectedMagicItems.some(([id]) => {
      const itemDef = allItems.find(i => i.id === id);
      return itemDef?.type === cat;
    });
  };

  return (
    <div className="mt-8 border-t border-slate-700 pt-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-bold text-slate-400 uppercase">Magic Items</h3>
        <div className={`text-xs font-mono font-bold ${remainingSlots < 0 ? 'text-red-500' : 'text-amber-500'}`}>
          {currentCount} / {maxItems} Slots
        </div>
      </div>

      {/* TABS */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-2 no-scrollbar">
        {['weapon', 'armour', 'talisman', 'arcane', 'enchanted', 'banner'].map(cat => {
           if (validCategories && !validCategories.includes(cat as string)) return null;

           return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat as MagicItemCategory)}
              className={`px-3 py-1 text-xs font-bold rounded capitalize whitespace-nowrap transition-colors
                ${activeCategory === cat ? 'bg-amber-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}
              `}
            >
              {cat}
            </button>
           );
        })}
      </div>

      {/* ITEMS LIST */}
      <div className="space-y-2">
        {categoryItems.map(item => {
          const count = unit.selectedOptions[item.id] || 0;
          const isSelected = count > 0;
          
          // --- VALIDATION LOGIC ---

          // 1. Basic Slot Check
          const isFull = !isSelected && remainingSlots <= 0;
          
          // 2. Category Allowed Check
          const isTypeAllowed = validCategories ? validCategories.includes(item.type) : true;
          
          // 3. Wizard Only Check
          const isWizardRestricted = item.onlyWizards && !definition.specialRules?.includes('Wizard');

          // 4. Mundane Requirement Check
          let missingMundane = false;
          if (item.requiresMundaneOption) {
            const reqId = item.requiresMundaneOption;            
            const hasOption = (unit.selectedOptions[reqId] || 0) > 0;
            const hasDefault = definition.equipment.some(eq => 
              eq.toLowerCase() === reqId.replace(/_/g, ' ').toLowerCase() ||
              eq.toLowerCase() === reqId.toLowerCase()
            );
            if (!hasOption && !hasDefault) missingMundane = true;
          }

          // 5. NEW: GLOBAL UNIQUENESS CHECK
          // Check if ANY unit in the roster (except me) has this item
          const isTakenBySomeoneElse = roster.some(u => {
            if (u.instanceId === unit.instanceId) return false; // Skip myself
            return (u.selectedOptions[item.id] || 0) > 0;
          });

          // 6. NEW: MAX 1 PER CATEGORY CHECK (Weapons & Armour only)
          // If I am not selected, do I already have another item of this type?
          let categoryLimitReached = false;
          if (!isSelected && (activeCategory === 'weapon' || activeCategory === 'armour')) {
             if (hasItemOfCategory(activeCategory)) {
               categoryLimitReached = true;
             }
          }

          // Combine all checks
          const isDisabled = isFull || !isTypeAllowed || isWizardRestricted || missingMundane || isTakenBySomeoneElse || categoryLimitReached;

          // Determine Error Message (Prioritized)
          let errorLabel = '';
          if (isTakenBySomeoneElse) errorLabel = 'Already taken';
          else if (categoryLimitReached) errorLabel = `Max 1 Magic ${activeCategory}`;
          else if (missingMundane) errorLabel = `Requires ${item.requiresMundaneOption?.replace(/_/g, ' ')}`;
          else if (isWizardRestricted) errorLabel = 'Wizards Only';

          return (
             <div key={item.id} className={`p-2 rounded border ${isSelected ? 'border-amber-500 bg-amber-900/10' : 'border-slate-700 bg-slate-800'} flex justify-between items-center group relative`}>
               <div className={`text-sm ${isDisabled && !isSelected ? 'opacity-40 grayscale' : ''}`}>
                 <div className="font-bold text-slate-200">
                   {item.name}
                   {/* Display error message if disabled */}
                   {isDisabled && !isSelected && (
                     <span className="ml-2 text-[10px] text-red-400 font-bold uppercase tracking-wide">
                       {errorLabel}
                     </span>
                   )}
                 </div>
                 <div className="text-xs text-slate-500">{item.points} pts</div>
                 {item.description && <div className="text-[10px] text-slate-400 italic">{item.description}</div>}
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
        })}
      </div>
    </div>
  );
};