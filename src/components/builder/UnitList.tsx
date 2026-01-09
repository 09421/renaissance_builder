import { useState } from 'react';
import { UnitDefinition, UnitRole } from '@/types/army';
import { useArmyStore } from '@/store/armyStore';
import { SECTION_ORDER, SECTION_TITLES } from '@/utils/sections';

const UnitSection = ({ role, units, addUnit }: { role: UnitRole, units: UnitDefinition[], addUnit: (u: UnitDefinition) => void }) => {
  const [isOpen, setIsOpen] = useState(true);

  if (units.length === 0) return null;

  return (
    <div className="mb-2">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="sticky top-0 w-full flex items-center justify-between bg-slate-800/95 backdrop-blur py-2 px-1 z-10 border-b border-slate-700 hover:bg-slate-700/80 transition-colors group text-left"
      >
        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider group-hover:text-slate-200">
          {SECTION_TITLES[role]}
        </span>
        <svg 
          className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="space-y-2 mt-2 pb-4 animate-in slide-in-from-top-2 duration-200 fade-in">
          {units.map(unit => (
            <button
              key={unit.id}
              onClick={() => addUnit(unit)}
              className="w-full text-left px-3 py-2 bg-slate-800 hover:bg-slate-700 rounded border border-slate-700 hover:border-amber-500/50 transition-colors flex justify-between items-center group"
            >
              <span className="font-semibold text-sm text-slate-300 group-hover:text-white">
                {unit.name}
              </span>
              <span className="text-xs text-amber-600 font-mono">                
                {unit.minSize === unit.maxSize ? `${unit.pointsPerModel}pts` : `${unit.pointsPerModel} / ${unit.pointsPerModel * unit.minSize}pts`}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export const UnitList = ({ units }: { units: UnitDefinition[] }) => {
  const addUnit = useArmyStore(s => s.addUnit);

  return (
    <div className="pb-10">
      {SECTION_ORDER.map((role) => (
        <UnitSection 
          key={role} 
          role={role} 
          units={units.filter(u => u.role === role)} 
          addUnit={addUnit} 
        />
      ))}
    </div>
  );
};