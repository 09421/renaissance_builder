import { useArmyStore } from '@/store/armyStore';
import { getUnitDef } from '@/utils/getFactionData';
import { calculateUnitCost } from '@/utils/armyMath';
import { SECTION_ORDER, SECTION_TITLES } from '@/utils/sections'; 
import { UnitDefinition, StatBlock } from '@/types/army';

export const ArmyList = () => {
  const { roster, selectUnit, selectedUnitId, removeUnit, faction } = useArmyStore();

  if (roster.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-slate-600">
        <p>No units recruited.</p>
        <p className="text-sm">Select units from the left sidebar.</p>
      </div>
    );
  }

  // Helper to render a single row of stats
  const renderStatRow = (label: string, stats: StatBlock, isHighlight = false) => (
    <>
      <div className={`col-span-2 py-1 px-2 text-left font-bold text-xs flex items-center ${isHighlight ? 'text-amber-500' : 'text-slate-300'}`}>
        {label}
      </div>
      {['M', 'Ws', 'Bs', 'S', 'T', 'W', 'I', 'A', 'Ld'].map((key) => (
        <div key={key} className={`py-1 text-xs font-mono text-center ${isHighlight ? 'text-amber-500 font-bold' : 'text-slate-400'}`}>
           {/* @ts-ignore - Indexing StatBlock with string key */}
          {stats[key as keyof StatBlock]}
        </div>
      ))}
    </>
  );

  return (
    <div className="space-y-8 max-w-3xl mx-auto pb-20">
      {SECTION_ORDER.map((role) => {
        const roleUnits = roster.filter(u => u.role === role);
        if (roleUnits.length === 0) return null;

        // Calculate Subtotal
        const sectionPoints = roleUnits.reduce((sum, unit) => {
          const def = getUnitDef(faction, unit.defId);
          return sum + (def ? calculateUnitCost(unit, def) : 0);
        }, 0);

        return (
          <div key={role} className="space-y-3">
            {/* Section Header */}
            <div className="flex items-center justify-between border-b-2 border-slate-700 pb-2 mb-4">
              <h2 className="text-xl font-serif font-bold text-amber-500 uppercase tracking-widest">
                {SECTION_TITLES[role]}
              </h2>
              <div className="text-sm font-mono text-slate-400 font-bold bg-slate-800 px-2 py-1 rounded">
                {sectionPoints} pts
              </div>
            </div>

            {/* Unit Cards */}
            <div className="space-y-3">
              {roleUnits.map((unit) => {
                const def = getUnitDef(faction, unit.defId);
                if (!def) return null;
                const points = calculateUnitCost(unit, def);

                // --- 1. GEAR LOGIC (With Swaps) ---
                const selectedOptions = def.options.filter(o => unit.selectedOptions.includes(o.id));
                
                // Find items to remove (e.g. "Bows")
                const replacedItems = selectedOptions
                  .map(o => o.replaces)
                  .filter((item): item is string => !!item);

                // Filter base gear
                const activeBaseGear = def.equipment.filter(item => !replacedItems.includes(item));

                // Combine for display
                const fullGearList = [
                  ...activeBaseGear, 
                  ...selectedOptions.map(o => o.name)
                ].join(', ');

                // --- 2. STAT LOGIC (Champions) ---
                const activeProfiles = def.options
                  .filter(o => unit.selectedOptions.includes(o.id) && o.stats);

                return (
                  <div 
                    key={unit.instanceId}
                    onClick={() => selectUnit(unit.instanceId)}
                    className={`
                      relative p-4 rounded-lg border cursor-pointer transition-all group
                      ${selectedUnitId === unit.instanceId 
                        ? 'bg-slate-800 border-amber-500 ring-1 ring-amber-500/50 shadow-lg' 
                        : 'bg-slate-900 border-slate-700 hover:border-slate-500 hover:bg-slate-800'}
                    `}
                  >
                    {/* Header: Name & Points */}
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-bold text-lg text-slate-100">{unit.name}</h3>
                      <div className="flex items-center gap-4">
                        <div className="text-sm text-amber-500 font-mono font-bold">
                          {unit.modelCount} Models • {points} pts
                        </div>
                        <button 
                          onClick={(e) => { e.stopPropagation(); removeUnit(unit.instanceId); }}
                          className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-500 hover:text-red-400"
                        >
                          ✕
                        </button>
                      </div>
                    </div>

                    {/* DYNAMIC STAT GRID */}
                    <div className="grid grid-cols-11 gap-px bg-slate-700/50 border border-slate-700 rounded overflow-hidden mb-3">
                        
                      {/* Header */}
                      <div className="col-span-2 bg-slate-800"></div>
                      {['M', 'Ws', 'Bs', 'S', 'T', 'W', 'I', 'A', 'Ld'].map(s => (
                        <div key={s} className="bg-slate-800 py-1 text-[10px] font-bold text-slate-400 text-center">{s}</div>
                      ))}

                      {/* 1. Base Unit Stats */}
                      {renderStatRow(def.role === 'character' ? 'Hero' : def.modelName, def.stats)}

                      {/* 2. Champions / Modifiers (Merged Stats) */}
                      {/* (Existing code for champions) */}
                      {def.options
                        .filter(o => unit.selectedOptions.includes(o.id) && o.stats)
                        .map(opt => {
                          const mergedStats = { ...def.stats, ...opt.stats };
                          return (
                            <div key={opt.id} className="contents bg-slate-800/30">
                              {renderStatRow(opt.name, mergedStats as StatBlock, true)}
                            </div>
                          );
                        })}

                      {/* 3. Intrinsic Profiles (e.g., Boar Boyz Boars) */}
                      {def.additionalProfiles?.map((profile, idx) => (
                        <div key={`fixed-profile-${idx}`} className="contents bg-slate-900/40">
                          {renderStatRow(profile.name, profile.stats)}
                        </div>
                      ))}

                      {/* 4. Optional Mounts (e.g., Warboss on Wyvern) */}
                      {def.options
                        .filter(o => unit.selectedOptions.includes(o.id) && o.mountProfile)
                        .map(opt => (
                          <div key={`mount-${opt.id}`} className="contents bg-slate-900/40">
                            {/* We use ! because we filtered for it above */}
                            {renderStatRow(opt.mountProfile!.name, opt.mountProfile!.stats)}
                          </div>
                        ))}
                    </div>

                    {/* Gear List */}
                    <div className="text-xs text-slate-400">
                      <span className="font-semibold text-slate-500 uppercase mr-1">Gear:</span>
                      {fullGearList}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};