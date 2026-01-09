import { useState } from 'react';
import { useArmyStore } from '@/store/armyStore';
import { MagicItemCategory } from '@/types/magicItems'
import { UnitDefinition, ArmyUnit } from '@/types/army';
import { getMagicItems } from '@/utils/getFactionData';

interface Props {
  unit: ArmyUnit;
  definition: UnitDefinition;
  faction: string;
}

export const MagicItemSelector = ({ unit, definition, faction }: Props) => {
  const { setOptionCount } = useArmyStore();
  const [activeCategory, setActiveCategory] = useState<MagicItemCategory>('weapon');

  const allItems = getMagicItems(faction);

  // --- 1. CALCULATE DYNAMIC ALLOWANCE ---
  // Start with Character base allowance (if any)
  let maxItems = definition.magicAllowance?.maxItems || 0;
  let allowedCategories = new Set<string>(definition.magicAllowance?.allowedCategories || []);

  // Add allowance from Selected Options (Champions/Banners)
  definition.options.forEach(opt => {
    // Is this option selected?
    if ((unit.selectedOptions[opt.id] || 0) > 0 && opt.magicAllowance) {
      
      // Add to Total Limit
      maxItems += (opt.magicAllowance.maxItems || 0);
      
      // Add to Allowed Categories (if specific)
      // If the set is empty initially (meaning "Any"), we keep it "Any".
      // But if we are in "Restricted Mode" (Regiment), we build the list.
      if (opt.magicAllowance.allowedCategories) {
        opt.magicAllowance.allowedCategories.forEach(c => allowedCategories.add(c));
      } else {
        // If an option grants "Any", we handle that logic... usually simpler to just allow all.
      }
    }
  });

  // If we have 0 allowance, don't show the component
  if (maxItems === 0) return null;

  // --- 2. CALCULATE CURRENT USAGE ---
  const selectedMagicItems = Object.entries(unit.selectedOptions).filter(([id, count]) => {
    return allItems.find(i => i.id === id); // Is it a magic item?
  });
  
  const currentCount = selectedMagicItems.reduce((sum, [_, count]) => sum + count, 0);
  const remainingSlots = maxItems - currentCount;

  // --- 3. FILTER VISIBLE ITEMS ---
  // If allowedCategories has entries, only show those types. 
  // (Empty set usually implies "All Allowed" for characters, but for Regiments we might start empty. 
  // Logic Fix: If it's a Character, allow all. If Regiment, rely on the Set.)
  
  const isCharacter = definition.role === 'character';
  const validCategories = isCharacter 
     ? null // Allow all
     : Array.from(allowedCategories); // Only allow what Champion/Banner adds

  const categoryItems = allItems.filter(i => i.type === activeCategory);

  return (
    <div className="mt-8 border-t border-slate-700 pt-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-bold text-slate-400 uppercase">Magic Items</h3>
        <div className={`text-xs font-mono font-bold ${remainingSlots < 0 ? 'text-red-500' : 'text-amber-500'}`}>
          {currentCount} / {maxItems} Slots
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-2 no-scrollbar">
        {['weapon', 'armour', 'talisman', 'arcane', 'enchanted', 'banner'].map(cat => {
           // Disable tabs that aren't relevant
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

      {/* Items List */}
      <div className="space-y-2">
        {categoryItems.map(item => {
          const count = unit.selectedOptions[item.id] || 0;
          const isSelected = count > 0;
          
          // --- VALIDATION ---
          // 1. Can we afford the slot? (Unless we already have it)
          const isFull = !isSelected && remainingSlots <= 0;
          
          // 2. Is this specific Category allowed? (Redundant visual check)
          const isTypeAllowed = validCategories ? validCategories.includes(item.type) : true;

          // 3. Wizard Check
          // (You'll need a "isWizard" flag on your unit definition or special rules)
          const isWizardRestricted = item.onlyWizards && !definition.specialRules?.includes('Wizard');


          let missingMundane = false;

          if (item.requiresMundaneOption) {
            const reqId = item.requiresMundaneOption;            
            const hasOption = (unit.selectedOptions[reqId] || 0) > 0;
            
            const hasDefault = definition.equipment.some(eq => 
              eq.toLowerCase() === reqId.replace(/_/g, ' ').toLowerCase() ||
              eq.toLowerCase() === reqId.toLowerCase()
            );

            if (!hasOption && !hasDefault) {
              missingMundane = true;
            }
          }

          const isDisabled = isFull || !isTypeAllowed || isWizardRestricted || missingMundane;

          return (
             <div key={item.id} className={`p-2 rounded border ${isSelected ? 'border-amber-500 bg-amber-900/10' : 'border-slate-700 bg-slate-800'} flex justify-between items-center`}>
               <div className={`text-sm ${isDisabled && !isSelected ? 'opacity-40 grayscale' : ''}`}>
                 <div className="font-bold text-slate-200">{item.name}</div>
                 <div className="text-xs text-slate-500">{item.points} pts</div>
                 {/* Descriptions are nice! */}
                 {item.description && <div className="text-[10px] text-slate-400 italic">{item.description}</div>}
               </div>

               <button
                 disabled={isDisabled}
                 onClick={() => setOptionCount(unit.instanceId, item.id, isSelected ? 0 : 1, definition)}
                 className={`w-6 h-6 rounded flex items-center justify-center text-sm font-bold
                   ${isSelected ? 'bg-red-900/50 text-red-400 hover:bg-red-900' : 'bg-slate-700 text-slate-400 hover:text-white'}
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