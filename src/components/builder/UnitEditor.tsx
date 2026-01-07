import { useArmyStore, ArmyUnit } from '@/store/armyStore';
import { UnitDefinition, UnitOption } from '@/types/army';

interface Props {
  unit: ArmyUnit;
  definition: UnitDefinition;
}

export const UnitEditor = ({ unit, definition }: Props) => {
  const { updateUnitSize, toggleOption } = useArmyStore();

  // --- CALCULATION LOGIC ---
  // 1. Calculate cost of upgrades per model (e.g. Spears + Shields = 3pts)
  const perModelOptionCost = definition.options
    .filter(opt => unit.selectedOptions.includes(opt.id) && !opt.isFixedCost)
    .reduce((sum, opt) => sum + opt.points, 0);

  // 2. Calculate cost of fixed upgrades (e.g. Champion = 20pts)
  const fixedOptionCost = definition.options
    .filter(opt => unit.selectedOptions.includes(opt.id) && opt.isFixedCost)
    .reduce((sum, opt) => sum + opt.points, 0);

  // 3. Grand Total
  const totalCost = ((definition.pointsPerModel + perModelOptionCost) * unit.modelCount) + fixedOptionCost;


  return (
    <div className="flex flex-col h-full bg-slate-900 border-l border-slate-700">
      
      {/* HEADER */}
      <div className="p-6 border-b border-slate-700 bg-slate-800">
        <h2 className="text-2xl font-bold text-slate-100">{definition.name}</h2>
        <div className="text-amber-500 font-mono text-xl mt-1">
          {totalCost} pts
        </div>
      </div>

      {/* SCROLLABLE CONTENT */}
      <div className="flex-1 overflow-y-auto p-6 space-y-8">

        {/* UNIT SIZE CONTROLS */}
        <section>
          <div className="flex justify-between mb-3">
            <label className="text-sm font-bold text-slate-400 uppercase">Unit Size</label>
            <div className="text-xs text-slate-500">
              Min: {definition.minSize} • Max: {definition.maxSize || '∞'}
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            {/* Decrease Button */}
            <button
              onClick={() => {
                const newSize = Math.max(definition.minSize, unit.modelCount - 1);
                updateUnitSize(unit.instanceId, newSize);
              }}
              className="w-12 h-12 rounded bg-slate-800 border border-slate-700 text-slate-300 hover:bg-slate-700 hover:border-amber-500/50 hover:text-amber-500 transition-colors text-xl font-bold"
            >
              −
            </button>

            {/* Numeric Input */}
            <input
              type="number"
              min={definition.minSize}
              max={definition.maxSize || 999}
              value={unit.modelCount}
              onChange={(e) => {
                // Allow typing, but handle empty string nicely
                const val = parseInt(e.target.value);
                if (!isNaN(val)) {
                  updateUnitSize(unit.instanceId, val);
                }
              }}
              onBlur={(e) => {
                // Validation: Clamp value when user clicks away
                let val = parseInt(e.target.value);
                if (isNaN(val)) val = definition.minSize;
                
                // Clamp Min
                if (val < definition.minSize) val = definition.minSize;
                // Clamp Max (if exists)
                if (definition.maxSize && val > definition.maxSize) val = definition.maxSize;
                
                updateUnitSize(unit.instanceId, val);
              }}
              className="flex-1 h-12 bg-slate-950 border border-slate-700 rounded text-center text-xl font-mono text-white focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500
              [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            />

            {/* Increase Button */}
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

        {/* UPGRADES LIST */}
        <section>
          <h3 className="text-sm font-bold text-slate-400 uppercase mb-4">Equipment & Upgrades</h3>
          <div className="space-y-3">
            {definition.options.map((option) => {
              const isSelected = unit.selectedOptions.includes(option.id);
              
              // Helper text for cost
              const costText = option.isFixedCost 
                ? `${option.points}pts`
                : `${option.points}pts / model`;

              return (
                <label 
                  key={option.id} 
                  className={`
                    flex items-start p-3 rounded border cursor-pointer transition-all
                    ${isSelected 
                      ? 'bg-amber-900/20 border-amber-500/50' 
                      : 'bg-slate-800 border-slate-700 hover:border-slate-600'}
                  `}
                >
                  <div className="flex h-5 items-center">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={(e) => toggleOption(unit.instanceId, option, e.target.checked, definition)}
                      className="h-4 w-4 rounded border-slate-600 bg-slate-700 text-amber-600 focus:ring-amber-600 focus:ring-offset-slate-900"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <div className="font-medium text-slate-200">
                      {option.name}
                    </div>
                    <div className="text-slate-500 text-xs mt-0.5">
                      {costText}
                    </div>
                  </div>
                </label>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};