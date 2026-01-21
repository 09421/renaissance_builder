import { useState } from 'react';
import { ArmyUnit, UnitRole } from '@/types/army';
import { getUnitDef } from '@/utils/getFactionData';
import { calculateUnitCost } from '@/utils/armyMath';
import { SECTION_TITLES } from '@/utils/sections'; 
import { UnitCard } from './UnitCard';

interface ArmySectionProps {
  role: string;
  units: ArmyUnit[];
  faction: string;
  selectedUnitId: string | null;
  selectUnit: (id: string) => void;
  removeUnit: (id: string) => void;
}

export const ArmySection = ({ role, units, faction, selectedUnitId, selectUnit, removeUnit }: ArmySectionProps) => {
  const [isOpen, setIsOpen] = useState(true);

  if (units.length === 0) return null;

  const sectionPoints = units.reduce((sum, unit) => {
    const def = getUnitDef(faction, unit.defId);
    return sum + (def ? calculateUnitCost(unit, def, faction) : 0);
  }, 0);

  return (
    <div className="mb-4 sm:mb-6">
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between border-b-2 border-slate-700 pb-2 mb-3 sm:mb-4 cursor-pointer hover:border-slate-500 transition-colors group select-none gap-2"
      >
        <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
           <div className={`p-1 rounded-full bg-slate-800 text-slate-400 group-hover:text-white transition-transform duration-200 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
             <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
           </div>
           <h2 className="text-lg sm:text-xl font-serif font-bold text-amber-500 uppercase tracking-widest group-hover:text-amber-400 truncate">
             {SECTION_TITLES[role as UnitRole]}
           </h2>
        </div>
        <div className="text-xs sm:text-sm font-mono text-slate-400 font-bold bg-slate-800 px-2 sm:px-3 py-1 rounded border border-slate-700 flex-shrink-0">
          {sectionPoints} pts
        </div>
      </div>

      {isOpen && (
        <div className="space-y-2 sm:space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
          {units.map((unit) => (
            <UnitCard 
              key={unit.instanceId}
              unit={unit}
              faction={faction}
              isSelected={selectedUnitId === unit.instanceId}
              onSelect={() => selectUnit(unit.instanceId)}
              onRemove={() => removeUnit(unit.instanceId)}
            />
          ))}
        </div>
      )}
    </div>
  );
};