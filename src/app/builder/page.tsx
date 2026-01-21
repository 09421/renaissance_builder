'use client';

import { useMemo, Suspense, useEffect, useState } from 'react'; 
import { useSearchParams } from 'next/navigation';
import { useArmyStore } from '@/store/armyStore';
import { getFactionRoster, getUnitDef } from '@/utils/getFactionData';
import { UnitListContainer } from '@/components/builder/unitList/UnitListContainer';
import { ArmyList } from '@/components/builder/armylist/ArmyList';
import { UnitEditor } from '@/components/builder/unitEditor/UnitEditor';
import { useRouter } from 'next/navigation';
import { useSaveArmy } from '@/components/hooks/useSaveArmy'
import {SaveControls} from '@/components/builder/SaveControls'
import {useStorageStore} from '@/store/storageStore';

type TabType = 'units' | 'army' | 'editor';

function BuilderContent() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabType>('units');

  const searchParams = useSearchParams();
  const factionKey = searchParams.get('faction') || 'orcs_goblins';
  const pointsLimit = Number(searchParams.get('points') || 2000);
  const listName = searchParams.get('name');
  const [isLoadingFromUrl, setIsLoadingFromUrl] = useState(false);
  const { loadArmy, activeListId } = useArmyStore(); 
  const { savedLists } = useStorageStore();

  const { selectedUnitId, roster, getPointsTotal, getRegimentPoints } = useArmyStore();

  const availableUnits = useMemo(() => getFactionRoster(factionKey), [factionKey]);
  const selectedUnit = roster.find(u => u.instanceId === selectedUnitId);
  const selectedUnitDef = selectedUnit ? getUnitDef(factionKey, selectedUnit.defId) : null;

  const totalPoints = getPointsTotal();
  const regimentsPoints = getRegimentPoints();  
  const minRegimentPoints = pointsLimit * 0.50; 
  const isCoreValid = regimentsPoints >= minRegimentPoints;
  const regimentsPercentage = totalPoints > 0 ? ((regimentsPoints / pointsLimit) * 100).toFixed(2) : 0;

  useEffect(() => {
    const listIdToLoad = searchParams.get('load');

    if (!listIdToLoad) return;
    if (activeListId === listIdToLoad) {
      return;
    }
    if (savedLists.length === 0) return;

    setIsLoadingFromUrl(true);

    const foundList = savedLists.find(l => l.id === listIdToLoad);

    if (foundList) {
      loadArmy(foundList);
      
    } else {
      console.warn("Army not found:", listIdToLoad);
    }

    setTimeout(() => setIsLoadingFromUrl(false), 200);

  }, [searchParams, savedLists, activeListId, loadArmy, router]);
  
  const { saveArmy } = useSaveArmy();
  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    saveArmy();
    router.push('/');
  };

  return (
    <main className="flex flex-col lg:flex-row fixed inset-0 w-full bg-slate-900 text-slate-100 overflow-hidden">

      {/* LEFT COLUMN - HIDDEN ON MOBILE, VISIBLE ON LG+ */}
      <aside className="hidden lg:flex lg:w-80 flex-none border-r border-slate-700 flex-col bg-slate-800/50 min-h-0">
        <div className="h-16 flex items-center justify-between px-4 border-b border-slate-700 gap-3">
          <button
            onClick={handleBack}
            className="text-slate-400 hover:text-amber-500 hover:bg-slate-700/50 p-2 rounded-full transition-all"
            title="Back to Main Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
          </button>
          <div>            
            <SaveControls/>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <UnitListContainer units={availableUnits} />
        </div>
      </aside>

      {/* CENTER COLUMN - MAIN CONTENT */}
      <section className="flex-1 flex flex-col min-w-0 bg-slate-950">
        <header className="h-16 lg:h-16 border-b border-slate-700 flex items-center justify-between px-3 lg:px-6 bg-slate-900 shadow-sm flex-shrink-0">
          <div className="min-w-0 flex-1">
            <h1 className="text-lg lg:text-xl font-serif font-bold text-slate-200 truncate">
              {listName}
            </h1>
            <div className="text-xs text-slate-500 uppercase tracking-widest">
              {pointsLimit} Points • {factionKey.replace('_', ' ')}
            </div>
          </div>

          <div className={`text-xs lg:text-sm font-mono flex flex-col items-end flex-shrink-0 ${isCoreValid ? 'text-green-500' : 'text-red-400'}`}>
            <span className="font-bold">{regimentsPoints} pts</span>
            <span className="text-xs opacity-80 hidden sm:inline">(Min 50%)</span>
          </div>
          <div className={`text-lg lg:text-2xl font-bold font-mono ml-3 flex-shrink-0 ${totalPoints > pointsLimit ? 'text-red-500' : 'text-amber-500'}`}>
            {totalPoints}/{pointsLimit}            
          </div>
        </header>

        {/* MOBILE TABS - VISIBLE ON MOBILE, HIDDEN ON LG+ */}
        <div className="lg:hidden flex border-b border-slate-700 bg-slate-900/50 flex-shrink-0">
          <button
            onClick={() => setActiveTab('units')}
            className={`flex-1 py-2 px-3 text-xs sm:text-sm font-bold border-b-2 transition-colors ${
              activeTab === 'units'
                ? 'border-amber-500 text-amber-400'
                : 'border-transparent text-slate-400 hover:text-slate-300'
            }`}
          >
            Units ({availableUnits.length})
          </button>
          <button
            onClick={() => setActiveTab('army')}
            className={`flex-1 py-2 px-3 text-xs sm:text-sm font-bold border-b-2 transition-colors ${
              activeTab === 'army'
                ? 'border-amber-500 text-amber-400'
                : 'border-transparent text-slate-400 hover:text-slate-300'
            }`}
          >
            Army ({roster.length})
          </button>
          {selectedUnit && (
            <button
              onClick={() => setActiveTab('editor')}
              className={`flex-1 py-2 px-3 text-xs sm:text-sm font-bold border-b-2 transition-colors ${
                activeTab === 'editor'
                  ? 'border-amber-500 text-amber-400'
                  : 'border-transparent text-slate-400 hover:text-slate-300'
              }`}
            >
              Editor
            </button>
          )}
        </div>

        {/* MOBILE BACK BUTTON & SAVE - VISIBLE ONLY ON MOBILE */}
        <div className="lg:hidden h-14 flex items-center justify-between px-4 border-b border-slate-700 gap-3 bg-slate-900/30 flex-shrink-0">
          <button
            onClick={handleBack}
            className="text-slate-400 hover:text-amber-500 hover:bg-slate-700/50 p-2 rounded transition-all"
            title="Back to Main Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
          </button>
          <SaveControls/>
        </div>

        {/* CONTENT AREA - RESPONSIVE FIX */}
        {/* We use flex-1 to fill space, but relative so children can absolute position themselves */}
        <div className="flex-1 flex flex-col min-h-0 relative bg-slate-950">
          
          {/* Desktop: Show army list */}
          <div className="hidden lg:block absolute inset-0 overflow-y-auto p-6 custom-scrollbar">
            <ArmyList />
          </div>

          {/* Mobile: Tab-based content */}
          {/* This container fills the remaining space provided by flex-1 */}
          <div className="lg:hidden w-full h-full relative">
            
            {activeTab === 'units' && (
              /* ABSOLUTE INSET-0: This forces the div to be exactly the size of the parent,
                 regardless of how many units are inside. This forces overflow to scroll. */
              <div className="absolute inset-0 overflow-y-auto custom-scrollbar">
                <div className="p-4 pb-20"> 
                   {/* Added pb-20 so the last unit isn't hidden behind bottom UI if any */}
                   <UnitListContainer units={availableUnits} />
                </div>
              </div>
            )}

            {activeTab === 'army' && (
              <div className="absolute inset-0 overflow-y-auto custom-scrollbar">
                 <div className="p-4 pb-20">
                    <ArmyList />
                 </div>
              </div>
            )}

            {activeTab === 'editor' && selectedUnit && selectedUnitDef && (
              <div className="absolute inset-0 overflow-y-auto custom-scrollbar">
                 <div className="p-4 pb-20">
                    <UnitEditor unit={selectedUnit} definition={selectedUnitDef} faction={factionKey}/>
                 </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* RIGHT COLUMN - HIDDEN ON MOBILE, VISIBLE ON LG+ */}
      <aside className="hidden lg:flex lg:w-96 flex-none border-l border-slate-700 flex-col bg-slate-900 shadow-2xl z-10 min-h-0">
        {selectedUnit && selectedUnitDef ? (
          <UnitEditor unit={selectedUnit} definition={selectedUnitDef} faction={factionKey}/>
        ) : (
          <div className="flex-1 flex items-center justify-center text-slate-500 p-8 text-center italic">
            Select a unit from the list to edit its loadout.
          </div>
        )}
      </aside>

    </main>
  );
}

export default function BuilderPage() {
  return (
    <Suspense fallback={<div className="flex h-screen items-center justify-center text-slate-500">Loading Army Builder...</div>}>
      <BuilderContent />
    </Suspense>
  );
}