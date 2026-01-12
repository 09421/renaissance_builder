import { useArmyStore } from '@/store/armyStore';
import { UnitDefinition, ArmyUnit,UnitOption, OptionCategory } from '@/types/army';
import { MagicItemSelector } from '@/components/MagicItemSelector';
import { useMemo, useState } from 'react';
import { OptionRow, getCategory } from './utils';

const CATEGORY_TITLES: Record<OptionCategory, string> = {
  mount: 'Mounts & Chariots',
  weapon: 'Weapons',
  ranged_weapon:'Ranged weapon',
  armour: 'Armour',
  command: 'Command',
  magic: 'Magic School',
  other: 'Upgrades'
};
const CATEGORY_ORDER: OptionCategory[] = ['command', 'magic', 'mount', 'weapon', 'ranged_weapon', 'armour', 'other'];

interface Props {
  unit: ArmyUnit;
  definition: UnitDefinition;
  faction: string;
}

export const UnitEditor = ({ unit, definition, faction }: Props) => {
  const { updateUnitSize, setOptionCount } = useArmyStore();

  // --- CALCULATE TOTAL POINTS ---
  const totalPoints = useMemo(() => {
    let cost = definition.pointsPerModel * unit.modelCount;
    Object.entries(unit.selectedOptions).forEach(([optId, count]) => {
      const opt = definition.options.find(o => o.id === optId);
      if (opt) {
        cost += (opt.isFixedCost ? opt.points : opt.points * unit.modelCount) * count;
      }
      // Add Magic Item calculation here if needed
    });
    return cost;
  }, [unit, definition]);

  // --- GROUP OPTIONS ---
  // We memoize this so it doesn't recalculate on every click
const groupedOptions = useMemo(() => {
    // Initialize groups based on your defined categories
    const groups: Record<string, UnitOption[]> = {};
    CATEGORY_ORDER.forEach(cat => groups[cat] = []);

    definition.options.forEach(opt => {
      // Logic: Hide Child options (nested upgrades)
      const isChild = opt.requires?.some(reqId => definition.options.some(parent => parent.id === reqId));
      
      if (!isChild) {
        const cat = getCategory(opt);
        // Safety check: ensure array exists (in case of typo in data)
        if (!groups[cat]) groups[cat] = [];
        groups[cat].push(opt);
      }
    });
    
    return groups;
  }, [definition]);


  // --- SUB-COMPONENT: CATEGORY SECTION ---
  const CategorySection = ({ title, options, defaultOpen = true }: { title: string, options: UnitOption[], defaultOpen?: boolean }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    if (!options || options.length === 0) return null;

    return (
      <div className="mb-4 bg-slate-900/50 rounded-lg border border-slate-800 overflow-hidden">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex justify-between items-center px-4 py-3 bg-slate-800 hover:bg-slate-700 transition-colors text-left"
        >
          <span className="font-bold text-slate-300 uppercase text-xs tracking-wider">{title}</span>
          <svg className={`w-4 h-4 text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </button>
        
        {isOpen && (
          <div className="p-3 space-y-1">
            {options.map(opt => renderOptionWithChildren(opt))}
          </div>
        )}
      </div>
    );
  };

  // --- RECURSIVE RENDERER ---
  // This is the magic that handles "Chariot -> Extra Crew" nesting
  const renderOptionWithChildren = (opt: UnitOption) => {
    const count = unit.selectedOptions[opt.id] || 0;
    
    // Find children: Options that require THIS option
    const children = definition.options.filter(child => child.requires?.includes(opt.id));

    return (
      <div key={opt.id}>
        {/* Parent Option */}
        <OptionRow 
          option={opt} 
          count={count} 
          unit={unit} 
          definition={definition}
          onChange={(val) => setOptionCount(unit.instanceId, opt.id, val, definition)} 
        />

        {/* Children Options (Only show if parent is selected) */}
        {count > 0 && children.length > 0 && (
          <div className="ml-2 pl-2 border-l-2 border-slate-700 mt-1 space-y-1">
             {/* Optional Label for sub-options */}
             <div className="text-[10px] uppercase font-bold text-slate-500 px-3 mb-1 mt-2">
               {opt.name} Upgrades
             </div>
             {children.map(child => (
               <OptionRow
                 key={child.id}
                 option={child}
                 count={unit.selectedOptions[child.id] || 0}
                 unit={unit}
                 definition={definition}
                 onChange={(val) => setOptionCount(unit.instanceId, child.id, val, definition)}
                 isNested
               />
             ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col h-full bg-slate-950 border-l border-slate-800">

      {/* 1. HEADER */}
      <div className="p-6 border-b border-slate-800 bg-slate-900 sticky top-0 z-10 shadow-xl">
        <h2 className="text-2xl font-bold text-slate-100 mb-1">{definition.name}</h2>
        <div className="flex justify-between items-end">
          <div className="text-amber-500 font-mono text-xl font-bold">
            {totalPoints} pts
          </div>
          <div className="text-xs text-slate-500">
            {unit.modelCount} Models
          </div>
        </div>
      </div>

      {/* 2. SCROLLABLE CONTENT */}
      <div className="flex-1 overflow-y-auto p-4 custom-scrollbar space-y-6">

        {/* SECTION: UNIT SIZE */}
        <section className="bg-slate-900 p-4 rounded-xl border border-slate-800">
          <div className="flex justify-between mb-4">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Regiment Size</label>
            <span className="text-xs text-slate-600 font-mono">Min: {definition.minSize}</span>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={() => updateUnitSize(unit.instanceId, Math.max(definition.minSize, unit.modelCount - 1))}
              className="w-12 h-12 rounded-lg bg-slate-800 border border-slate-700 text-slate-400 hover:text-amber-500 hover:border-amber-500/50 transition-all text-xl font-bold"
            >
              −
            </button>

            <div className="flex-1 relative">
              <input
                type="number"
                disabled={definition.maxSize===1}
                value={unit.modelCount}
                onChange={(e) => updateUnitSize(unit.instanceId, parseInt(e.target.value) || definition.minSize)}
                className="w-full h-12 bg-slate-950 border border-slate-700 rounded-lg text-center text-xl font-mono text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none 
                [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>

            <button
              onClick={() => updateUnitSize(unit.instanceId, Math.min(definition.maxSize || 999, unit.modelCount + 1))}
              className="w-12 h-12 rounded-lg bg-slate-800 border border-slate-700 text-slate-400 hover:text-amber-500 hover:border-amber-500/50 transition-all text-xl font-bold"
            >
              +
            </button>
          </div>
        </section>

        {/* SECTION: CATEGORIES */}
        <div className="space-y-2">
          {CATEGORY_ORDER.map(catKey => {
            const options = groupedOptions[catKey];
            if (!options || options.length === 0) return null;

            return (
              <CategorySection 
                key={catKey} 
                title={CATEGORY_TITLES[catKey]} 
                options={options} 
              />
            );
          })}
        </div>

        {/* SECTION: MAGIC ITEMS */}
        <div className="pt-4 border-t border-slate-800">
           <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-1">Magic Items</h3>
           <MagicItemSelector 
             unit={unit} 
             definition={definition} 
             faction={faction} 
           />
        </div>

      </div>
    </div>
  );
};