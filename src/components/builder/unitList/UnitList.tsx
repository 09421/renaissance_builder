import { useState } from 'react';
import { UnitDefinition, UnitRole } from '@/types/army';
import { SECTION_TITLES } from '@/utils/sections';
import { checkUnitRestrictions } from './utils';

interface SectionProps {
  role: UnitRole;
  units: UnitDefinition[];
  addUnit: (u: UnitDefinition) => void;
  roster: any[];
  faction: string;
}

export const UnitList = ({ role, units, addUnit, roster, faction }: SectionProps) => {
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
          {units.map(unit => {
            
            // RUN VALIDATION HERE
            const { allowed, reason } = checkUnitRestrictions(unit, roster, faction);

            return (
              <button
                key={unit.id}
                onClick={() => allowed && addUnit(unit)} // Only click if allowed
                disabled={!allowed}
                className={`
                  w-full text-left px-3 py-2 rounded border transition-all flex justify-between items-center group relative overflow-hidden
                  ${allowed 
                    ? 'bg-slate-800 hover:bg-slate-700 border-slate-700 hover:border-amber-500/50 cursor-pointer' 
                    : 'bg-slate-900 border-slate-800 opacity-60 cursor-not-allowed'}
                `}
              >
                <div>
                  <span className={`font-semibold text-sm block ${allowed ? 'text-slate-300 group-hover:text-white' : 'text-slate-500'}`}>
                    {unit.name}
                  </span>
                  
                  {/* Validation Error Message */}
                  {!allowed && (
                    <span className="text-[10px] font-bold text-amber-600 uppercase flex items-center gap-1 mt-0.5">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                      {reason}
                    </span>
                  )}
                </div>

                <span className={`text-xs font-mono ${allowed ? 'text-amber-600' : 'text-slate-600'}`}>                
                  {unit.minSize === unit.maxSize 
                    ? `${unit.pointsPerModel}pts` 
                    : `${unit.pointsPerModel} / ${unit.pointsPerModel * unit.minSize}pts`}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};