import { ArmyUnit, StatBlock } from '@/types/army'; 
import { getUnitDef } from '@/utils/getFactionData';
import { calculateUnitCost } from '@/utils/armyMath';
import { StatRow } from './StatRow';

interface UnitCardProps {
  unit: ArmyUnit;
  faction: string;
  isSelected: boolean;
  onSelect: () => void;
  onRemove: () => void;
}

export const UnitCard = ({ unit, faction, isSelected, onSelect, onRemove }: UnitCardProps) => {
  const def = getUnitDef(faction, unit.defId);
  if (!def) return null;

  const points = calculateUnitCost(unit, def);

  let modelDisplayString = `${unit.modelCount} Models`;
  if (def.baseCrew) {
    const extraCrew = def.options
      .filter(o => o.isExtraCrew)
      .reduce((sum, o) => sum + (unit.selectedOptions[o.id] || 0), 0);
    
    const totalCrew = def.baseCrew + extraCrew;
    modelDisplayString = `${unit.modelCount} Machine, ${totalCrew} Crew`;

  } else {
    const extraModels = def.options
      .filter(o => o.maxPerModel)
      .reduce((sum, o) => sum + (unit.selectedOptions[o.id] || 0), 0);

    if (extraModels > 0) {
      modelDisplayString = `${unit.modelCount + extraModels} Models`;
    }
  }

  const selectedOptions = def.options.filter(o => (unit.selectedOptions[o.id] || 0) > 0);

  const replacedItems = selectedOptions
    .map(o => o.replaces)
    .filter((item): item is string => !!item);

  const activeBaseGear = def.equipment.filter(item => !replacedItems.includes(item));

  const fullGearList = [
    ...activeBaseGear, 
    ...selectedOptions.map(o => o.name)
  ].join(', ');

  const championProfiles = def.options.filter(o => (unit.selectedOptions[o.id] || 0) > 0 && o.stats);
  const optionProfiles = def.options.filter(o => (unit.selectedOptions[o.id] || 0) > 0 && o.optionProfile);

  return (
    <div 
      onClick={(e) => { e.stopPropagation(); onSelect(); }} 
      className={`
        relative p-4 rounded-lg border cursor-pointer transition-all group
        ${isSelected 
          ? 'bg-slate-800 border-amber-500 ring-1 ring-amber-500/50 shadow-lg' 
          : 'bg-slate-900 border-slate-700 hover:border-slate-500 hover:bg-slate-800'}
      `}
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-bold text-lg text-slate-100">{unit.name}</h3>
        <div className="flex items-center gap-4">
           <div className="text-sm text-amber-500 font-mono font-bold">
             {modelDisplayString} • {points} pts
           </div>
           <button 
             onClick={(e) => { e.stopPropagation(); onRemove(); }}
             className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-500 hover:text-red-400"
           >
             ✕
           </button>
        </div>
      </div>

      {/* STATS GRID */}
      <div className="grid grid-cols-11 gap-px bg-slate-700/50 border border-slate-700 rounded overflow-hidden mb-3">

         <div className="col-span-2 bg-slate-800"></div>
         {['M', 'WS', 'BS', 'S', 'T', 'W', 'I', 'A', 'Ld'].map(s => (
           <div key={s} className="bg-slate-800 py-1 text-[10px] font-bold text-slate-400 text-center">{s}</div>
         ))}

         <StatRow label={def.modelName} stats={def.stats} />

         {championProfiles.map(opt => (
            <div key={opt.id} className="contents bg-slate-800/30">
              <StatRow label={opt.name} stats={{ ...opt.stats } as StatBlock} isHighlight />
            </div>
         ))}

         {def.additionalProfiles?.map((p, i) => (
            <div key={i} className="contents bg-slate-900/40">
              <StatRow label={p.name} stats={p.stats} />
            </div>
         ))}

         {optionProfiles.map(opt => (
            <div key={opt.id} className="contents bg-slate-900/40">
              <StatRow label={opt.optionProfile!.name} stats={opt.optionProfile!.stats} />
            </div>
         ))}
      </div>

      {/* GEAR */}
      <div className="text-xs text-slate-400">
        <span className="font-semibold text-slate-500 uppercase mr-1">Gear:</span>
        {fullGearList}
      </div>
    </div>
  );
};