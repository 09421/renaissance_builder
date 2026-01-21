import { useArmyStore } from '@/store/armyStore';
import { MagicItem } from '@/types/magicItems';
import { UnitDefinition, ArmyUnit } from '@/types/army';

interface Props {
  item: MagicItem;
  unit: ArmyUnit;
  definition: UnitDefinition;
  status: {
    isSelected: boolean;
    currentCount: number;
    isDisabled: boolean;
    errorLabel: string | null;
  };
}

export const MagicItemRow = ({ item, unit, definition, status }: Props) => {
  const { setOptionCount } = useArmyStore();
  const { currentCount, isDisabled, errorLabel } = status;

  const maxCount = item.maxCount ?? 1;
  const isMultiSelect = maxCount > 1;

  const handleSetCount = (newCount: number) => {
    setOptionCount(unit.instanceId, item.id, newCount, definition);
  };

  return (
    <div 
      className={`
        p-2 rounded border flex justify-between items-center transition-colors
        ${status.isSelected 
          ? 'border-amber-500 bg-amber-900/10' 
          : 'border-slate-700 bg-slate-800'
        }
      `}
    >
      <div className={`text-sm ${isDisabled && currentCount === 0 ? 'opacity-40 grayscale' : ''}`}>
        <div className="font-bold text-slate-200 flex items-center gap-2">
          {item.name}
          
          {isDisabled && !status.isSelected && errorLabel && (
            <span className="text-[10px] text-red-400 font-bold uppercase tracking-wider">
              {errorLabel}
            </span>
          )}
          
          {isMultiSelect && (
            <span className="text-[10px] text-slate-500 font-normal">
              (Max {maxCount})
            </span>
          )}
        </div>
        <div className="text-xs text-slate-500">
          {item.points} pts {isMultiSelect ? 'each' : ''}
        </div>
      </div>

      {isMultiSelect ? (
        <div className="flex items-center bg-slate-900 rounded border border-slate-700 h-6">
          <button
            onClick={() => handleSetCount(Math.max(0, currentCount - 1))}
            disabled={currentCount === 0}
            className="w-6 h-full flex items-center justify-center text-slate-400 hover:text-white disabled:opacity-30 disabled:hover:text-slate-400 transition-colors"
          >
            -
          </button>
          
          <div className="w-6 text-center text-xs font-bold text-slate-200 border-x border-slate-700 h-full flex items-center justify-center bg-slate-800">
            {currentCount}
          </div>
          
          <button
            onClick={() => handleSetCount(Math.min(maxCount, currentCount + 1))}
            disabled={currentCount >= maxCount || isDisabled}
            className={`
              w-6 h-full flex items-center justify-center transition-colors
              ${isDisabled || currentCount >= maxCount
                 ? 'text-slate-600 cursor-not-allowed' 
                 : 'text-slate-400 hover:text-white hover:bg-slate-700'
              }
            `}
          >
            +
          </button>
        </div>
      ) : (
        <button
          disabled={isDisabled}
          onClick={() => handleSetCount(status.isSelected ? 0 : 1)}
          className={`
            w-6 h-6 rounded flex items-center justify-center text-sm font-bold transition-all
            ${status.isSelected 
              ? 'bg-red-900 text-red-400 hover:bg-red-800 shadow-inner' 
              : 'bg-slate-700 text-slate-400 hover:text-white hover:bg-slate-600 shadow'
            }
            ${isDisabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
          `}
        >
          {status.isSelected ? '✕' : '+'}
        </button>
      )}
    </div>
  );
};