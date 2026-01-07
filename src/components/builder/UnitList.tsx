import { UnitDefinition } from '@/types/army';
import { useArmyStore } from '@/store/armyStore';
import { SECTION_ORDER, SECTION_TITLES } from '@/utils/sections'; // adjust import path

export const UnitList = ({ units }: { units: UnitDefinition[] }) => {
  const addUnit = useArmyStore(s => s.addUnit);

  return (
    <div className="space-y-6 pb-10">
      {SECTION_ORDER.map((role) => {
        // Filter units for this section
        const sectionUnits = units.filter(u => u.role === role);
        
        // Don't show header if no units exist for this role (e.g. Faction has no Chariots)
        if (sectionUnits.length === 0) return null;

        return (
          <div key={role}>
            {/* Section Header */}
            <div className="sticky top-0 bg-slate-800/95 backdrop-blur py-2 z-10 border-b border-slate-700 mb-2">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                {SECTION_TITLES[role]}
              </h3>
            </div>

            {/* Unit Buttons */}
            <div className="space-y-2">
              {sectionUnits.map(unit => (
                <button
                  key={unit.id}
                  onClick={() => addUnit(unit)}
                  className="w-full text-left px-3 py-2 bg-slate-800 hover:bg-slate-700 rounded border border-slate-700 hover:border-amber-500/50 transition-colors flex justify-between items-center group"
                >
                  <span className="font-semibold text-sm text-slate-300 group-hover:text-white">
                    {unit.name}
                  </span>
                  <span className="text-xs text-amber-600 font-mono">
                    {unit.role === 'character' ? `${unit.pointsPerModel}pts` : `${unit.pointsPerModel} / ${unit.pointsPerModel * unit.minSize}pts`}
                  </span>
                </button>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};