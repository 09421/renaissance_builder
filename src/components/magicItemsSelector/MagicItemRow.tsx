import { useArmyStore } from '@/store/armyStore';
import { MagicItem } from '@/types/magicItems';
import { UnitDefinition, ArmyUnit } from '@/types/army';

interface Props {
  item: MagicItem;
  unit: ArmyUnit;
  definition: UnitDefinition;
  status: {
    isSelected: boolean;
    isDisabled: boolean;
    errorLabel: string | null;
  };
}

export const MagicItemRow = ({ item, unit, definition, status }: Props) => {
  const { setOptionCount } = useArmyStore();
  const { isSelected, isDisabled, errorLabel } = status;

  return (
    <div 
      className={`
        p-2 rounded border flex justify-between items-center transition-colors
        ${isSelected 
          ? 'border-amber-500 bg-amber-900/10' 
          : 'border-slate-700 bg-slate-800'
        }
      `}
    >
      <div className={`text-sm ${isDisabled && !isSelected ? 'opacity-40 grayscale' : ''}`}>
        <div className="font-bold text-slate-200 flex items-center gap-2">
          {item.name}
          {isDisabled && !isSelected && errorLabel && (
            <span className="text-[10px] text-red-400 font-bold uppercase tracking-wider">
              {errorLabel}
            </span>
          )}
        </div>
        <div className="text-xs text-slate-500">{item.points} pts</div>
      </div>

      <button
        disabled={isDisabled}
        onClick={() => setOptionCount(unit.instanceId, item.id, isSelected ? 0 : 1, definition)}
        className={`
          w-6 h-6 rounded flex items-center justify-center text-sm font-bold transition-all
          ${isSelected 
            ? 'bg-red-900 text-red-400 hover:bg-red-800 shadow-inner' 
            : 'bg-slate-700 text-slate-400 hover:text-white hover:bg-slate-600 shadow'
          }
          ${isDisabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
        `}
      >
        {isSelected ? '✕' : '+'}
      </button>
    </div>
  );
};