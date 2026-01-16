import { MagicItemCategory, MagicItem } from '@/types/magicItems';
import { ItemSource } from './MagicItemSelector';

interface Props {
  activeSource: ItemSource;
  setActiveSource: (source: ItemSource) => void;
  activeCategory: MagicItemCategory;
  setActiveCategory: (category: MagicItemCategory) => void;
  allowedCategories: Set<string>;
  isWizard: boolean;
  factionName: string;
  selectedItems: { item: MagicItem }[];
}

const ALL_CATEGORIES: MagicItemCategory[] = [
  'weapon', 
  'armour', 
  'enchanted', 
  'arcane', 
  'familiar', 
  'banner'
];

export const MagicItemTabs = ({
  activeSource,
  setActiveSource,
  activeCategory,
  setActiveCategory,
  allowedCategories,
  isWizard,
  factionName,
  selectedItems
}: Props) => {

  return (
    <>
      <div className="flex p-1 bg-slate-900 rounded mb-4 border border-slate-800">
        <TabButton 
          isActive={activeSource === 'faction'} 
          onClick={() => setActiveSource('faction')}
        >
          {factionName.replace(/_/g, ' ')} Items
        </TabButton>
        
        <div className="w-px bg-slate-800 mx-1"></div>
        
        <TabButton 
          isActive={activeSource === 'common'} 
          onClick={() => setActiveSource('common')}
        >
          Common Items
        </TabButton>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2 mb-2 no-scrollbar mask-gradient-right">
        {ALL_CATEGORIES.map(cat => {
          if (!allowedCategories.has(cat)) return null;

          if ((cat === 'arcane' || cat === 'familiar') && !isWizard) return null;

          const hasSelection = selectedItems.some(entry => entry.item.type === cat);

          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`
                relative px-3 py-1 text-xs font-bold rounded capitalize whitespace-nowrap transition-colors border
                ${activeCategory === cat 
                  ? 'bg-amber-600 text-white border-amber-500 shadow-md' 
                  : 'bg-slate-800 text-slate-400 border-slate-700 hover:bg-slate-700 hover:text-slate-200'
                }
              `}
            >
              {cat}

              {hasSelection && (
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-500 rounded-full border-2 border-slate-900 shadow-sm"></span>
              )}
            </button>
          );
        })}
      </div>
    </>
  );
};

const TabButton = ({ isActive, onClick, children }: { isActive: boolean, onClick: () => void, children: React.ReactNode }) => (
  <button 
    onClick={onClick} 
    className={`
      flex-1 py-1.5 text-xs font-bold uppercase tracking-wide rounded transition-all
      ${isActive 
        ? 'bg-slate-700 text-white shadow' 
        : 'text-slate-500 hover:text-slate-300'
      }
    `}
  >
    {children}
  </button>
);