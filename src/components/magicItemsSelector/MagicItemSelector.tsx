import { useState, useMemo } from 'react';
import { getMagicItems } from '@/utils/getFactionData';
import { MagicItemCategory } from '@/types/magicItems';
import { UnitDefinition, ArmyUnit } from '@/types/army';
import { useMagicItemLogic } from './useMagicItemLogic';
import { MagicItemTabs } from './MagicItemTabs';
import { MagicItemList } from './MagicItemList';

interface Props {
  unit: ArmyUnit;
  definition: UnitDefinition;
  faction: string;
}

export type ItemSource = 'faction' | 'common';

export const MagicItemSelector = ({ unit, definition, faction }: Props) => {
  const [activeCategory, setActiveCategory] = useState<MagicItemCategory>('weapon');
  const [activeSource, setActiveSource] = useState<ItemSource>('faction');

  const allItems = useMemo(() => getMagicItems(faction), [faction]);
  const isRunicFaction = (faction === 'dwarfs');
  
  const { factionItems, commonItems } = useMemo(() => ({
    factionItems: allItems.filter(i => i.faction === faction),
    commonItems: allItems.filter(i => i.faction === 'common' || i.faction !== faction)
  }), [allItems, faction]);

  const { allowance, usage, getItemStatus, isWizard } = useMagicItemLogic(
    unit, 
    definition, 
    allItems,
    isRunicFaction
  );

  if (allowance.maxTotal === 0) return null;

  const currentList = activeSource === 'faction' ? factionItems : commonItems;
  const displayedItems = currentList.filter(i => i.type === activeCategory);

  return (
    <div className="mt-8 border-t border-slate-700 pt-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-bold text-slate-400 uppercase">Magic Items</h3>
        <div className={`text-xs font-mono font-bold ${usage.countTotal > allowance.maxTotal ? 'text-red-500' : 'text-amber-500'}`}>
          {usage.countTotal} / {allowance.maxTotal} Slots
        </div>
      </div>

      <MagicItemTabs 
        activeSource={activeSource}
        setActiveSource={setActiveSource}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        allowedCategories={allowance.allowedCategories}
        isWizard={isWizard}
        factionName={faction}
        selectedItems={usage.selectedItems}
      />

      <MagicItemList 
        items={displayedItems}
        getItemStatus={getItemStatus}
        unit={unit}
        definition={definition}
      />
    </div>
  );
};