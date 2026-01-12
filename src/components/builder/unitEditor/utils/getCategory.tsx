import { ArmyUnit, UnitDefinition, UnitOption, OptionCategory } from '@/types/army';

export const getCategory = (opt: UnitOption): OptionCategory => {
  // 1. Explicit Category (The Gold Standard)
  if (opt.category) return opt.category;
  
  // 2. Fallback: Check 'group' just in case you forgot to add category
  if (opt.group === 'weapon') return 'weapon';
  if (opt.group === 'armour') return 'armour';
  
  return 'other';
}

// --- 2. SUB-COMPONENT: OPTION ROW ---
// This handles the rendering of a single option (Counter vs Checkbox)
export const OptionRow = ({ 
  option, 
  count, 
  unit, 
  definition, 
  onChange,
  isNested = false 
}: { 
  option: UnitOption; 
  count: number; 
  unit: ArmyUnit; 
  definition: UnitDefinition;
  onChange: (val: number) => void;
  isNested?: boolean;
}) => {
  // Limit Logic
  let dynamicLimit = option.maxPerUnit || Infinity;
  let limitReason = '';
  
  if (option.maxPerModel) {
    dynamicLimit = unit.modelCount * option.maxPerModel;
  }

  const isLimitReached = count >= dynamicLimit;
  const isSelected = count > 0;

  // Requirements Check
  const requirementsMet = !option.requires || option.requires.every(reqId => (unit.selectedOptions[reqId] || 0) > 0);

  // Cost Display
  const costText = option.isFixedCost 
    ? `${option.points}pts` 
    : `${option.points}pts/model`;

  return (
    <div className={`
      flex justify-between items-center py-2 px-3 rounded border transition-all mb-1
      ${isNested ? 'bg-slate-900/50 border-slate-700/50 ml-4' : 'bg-slate-800 border-slate-700'}
      ${isSelected && !isNested ? 'border-amber-500/40 bg-amber-900/10' : ''}
      ${!requirementsMet ? 'opacity-40 grayscale pointer-events-none' : ''}
    `}>
      <div className="flex-1">
        <div className="text-sm font-medium text-slate-200">
          {option.name}
          {!requirementsMet && <span className="text-xs text-red-400 ml-2">(Locked)</span>}
        </div>
        <div className="text-xs text-slate-500">{costText}</div>
      </div>

      {/* Control: Counter or Checkbox */}
      {(option.maxPerModel || option.maxPerUnit) ? (
        <div className="flex items-center gap-2 bg-slate-900 rounded p-1 border border-slate-700">
          <button 
            onClick={() => onChange(count - 1)}
            disabled={count <= 0}
            className="w-6 h-6 flex items-center justify-center rounded bg-slate-800 text-slate-400 hover:text-white disabled:opacity-20"
          >
            -
          </button>
          <span className="font-mono font-bold text-amber-500 w-4 text-center text-sm">{count}</span>
          <button 
            onClick={() => onChange(count + 1)}
            disabled={isLimitReached}
            className="w-6 h-6 flex items-center justify-center rounded bg-slate-800 text-slate-400 hover:text-white disabled:opacity-20"
          >
            +
          </button>
        </div>
      ) : (
        <input
          type="checkbox"
          checked={isSelected}
          onChange={(e) => onChange(e.target.checked ? 1 : 0)}
          className="w-5 h-5 rounded border-slate-600 bg-slate-700 text-amber-600 focus:ring-amber-600 cursor-pointer"
        />
      )}
    </div>
  );
};