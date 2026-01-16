import { MagicItem } from '@/types/magicItems';
import { UnitDefinition, ArmyUnit } from '@/types/army';
import { MagicItemRow } from './MagicItemRow';

interface Props {
  items: MagicItem[];
  unit: ArmyUnit;
  definition: UnitDefinition;
  getItemStatus: (item: MagicItem) => {
    isSelected: boolean;
    isDisabled: boolean;
    errorLabel: string | null;
  };
}

export const MagicItemList = ({ items, getItemStatus, unit, definition }: Props) => {
  
  if (items.length === 0) {
    return (
      <div className="p-4 text-center text-xs text-slate-500 italic border border-slate-800 border-dashed rounded">
        No items available in this category.
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {items.map((item) => {
        const status = getItemStatus(item);

        return (
          <MagicItemRow
            key={item.id}
            item={item}
            unit={unit}
            definition={definition}
            status={status}
          />
        );
      })}
    </div>
  );
};