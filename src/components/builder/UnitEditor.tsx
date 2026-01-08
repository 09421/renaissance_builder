import { useArmyStore } from '@/store/armyStore';
import { UnitDefinition, ArmyUnit } from '@/types/army';

interface Props {
  unit: ArmyUnit;
  definition: UnitDefinition;
}

export const UnitEditor = ({ unit, definition }: Props) => {
  const { updateUnitSize, setOptionCount } = useArmyStore();

  const calculateTotal = () => {
    let optionCost = 0;

    Object.entries(unit.selectedOptions).forEach(([optId, count]) => {
      const optDef = definition.options.find(o => o.id === optId);
      if (!optDef) return;

      const costPerItem = optDef.isFixedCost 
        ? optDef.points 
        : optDef.points * unit.modelCount;
      optionCost += (costPerItem * count);
    });

    return (definition.pointsPerModel * unit.modelCount) + optionCost;
  };

  const totalCost = calculateTotal();

  return (
    <div className="flex flex-col h-full bg-slate-900 border-l border-slate-700">

      <div className="p-6 border-b border-slate-700 bg-slate-800">
        <h2 className="text-2xl font-bold text-slate-100">{definition.name}</h2>
        <div className="text-amber-500 font-mono text-xl mt-1">
          {totalCost} pts
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-8">

        <section>
          <div className="flex justify-between mb-3">
            <label className="text-sm font-bold text-slate-400 uppercase">Unit Size</label>
            <div className="text-xs text-slate-500">
              Min: {definition.minSize} • Max: {definition.maxSize || '∞'}
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={() => {
                const newSize = Math.max(definition.minSize, unit.modelCount - 1);
                updateUnitSize(unit.instanceId, newSize);
              }}
              className="w-12 h-12 rounded bg-slate-800 border border-slate-700 text-slate-300 hover:bg-slate-700 hover:border-amber-500/50 hover:text-amber-500 transition-colors text-xl font-bold"
            >
              −
            </button>

            <input
              type="number"
              min={definition.minSize}
              max={definition.maxSize || 999}
              value={unit.modelCount}
              onChange={(e) => {
                const val = parseInt(e.target.value);
                if (!isNaN(val)) updateUnitSize(unit.instanceId, val);
              }}
              onBlur={(e) => {
                let val = parseInt(e.target.value);
                if (isNaN(val)) val = definition.minSize;
                if (val < definition.minSize) val = definition.minSize;
                if (definition.maxSize && val > definition.maxSize) val = definition.maxSize;
                updateUnitSize(unit.instanceId, val);
              }}
              className="flex-1 h-12 bg-slate-950 border border-slate-700 rounded text-center text-xl font-mono text-white focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500
              [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />

            <button
              onClick={() => {
                const max = definition.maxSize || 999;
                const newSize = Math.min(max, unit.modelCount + 1);
                updateUnitSize(unit.instanceId, newSize);
              }}
              className="w-12 h-12 rounded bg-slate-800 border border-slate-700 text-slate-300 hover:bg-slate-700 hover:border-amber-500/50 hover:text-amber-500 transition-colors text-xl font-bold"
            >
              +
            </button>
          </div>
        </section>

        <section>
          <h3 className="text-sm font-bold text-slate-400 uppercase mb-4">Equipment & Upgrades</h3>
          <div className="space-y-3">
            {definition.options.map((option) => {
              const currentCount = unit.selectedOptions[option.id] || 0;
              const max = option.maxPerUnit || 1;
              const isSelected = currentCount > 0;

              let requirementsMet = true;
              if (option.requires) {
                requirementsMet = option.requires.some(reqId => (unit.selectedOptions[reqId] || 0) > 0);
              }

              const costText = option.isFixedCost 
                ? `${option.points}pts`
                : `${option.points}pts / model`;

              return (
                <div 
                  key={option.id} 
                  className={`
                    p-3 rounded border transition-all
                    ${isSelected 
                      ? 'bg-amber-900/10 border-amber-500/50' 
                      : 'bg-slate-800 border-slate-700 hover:border-slate-600'}
                    ${!requirementsMet ? 'opacity-40 grayscale pointer-events-none select-none' : ''}
                  `}
                >
                  <div className="flex justify-between items-center w-full">
                    <div className="text-sm">
                      <div className="font-medium text-slate-200">
                        {option.name}
                        {!requirementsMet && <span className="text-xs text-red-400 ml-2"> 
                          (requires: {option.requires?.map(reqId => definition.options.find(opt => opt.id === reqId)?.name).join(', ')})
                          </span>
                        }
                      </div>
                      <div className="text-slate-500 text-xs mt-0.5">{costText}</div>
                    </div>

                    {max > 1 ? (
                      <div className="flex items-center space-x-2 bg-slate-900 rounded border border-slate-700 p-1">
                        <button
                          onClick={() => setOptionCount(unit.instanceId, option.id, currentCount - 1, definition)}
                          disabled={!requirementsMet || currentCount <= 0}
                          className="w-7 h-7 flex items-center justify-center rounded bg-slate-800 text-slate-400 hover:text-white disabled:opacity-30 disabled:hover:text-slate-400"
                        >
                          -
                        </button>
                        <span className="font-mono text-amber-500 font-bold w-6 text-center">
                          {currentCount}
                        </span>
                        <button
                          onClick={() => setOptionCount(unit.instanceId, option.id, currentCount + 1, definition)}
                          disabled={!requirementsMet || currentCount >= max}
                          className="w-7 h-7 flex items-center justify-center rounded bg-slate-800 text-slate-400 hover:text-white disabled:opacity-30 disabled:hover:text-slate-400"
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <div className="flex h-5 items-center">
                        <input
                          type="checkbox"
                          checked={isSelected}
                          disabled={!requirementsMet}
                          onChange={(e) => setOptionCount(unit.instanceId, option.id, e.target.checked ? 1 : 0, definition)}
                          className="h-5 w-5 rounded border-slate-600 bg-slate-700 text-amber-600 focus:ring-amber-600 focus:ring-offset-slate-900 cursor-pointer"
                        />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};