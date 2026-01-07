'use client';

import { useEffect, useMemo, Suspense } from 'react'; // 1. Import Suspense
import { useSearchParams } from 'next/navigation';
import { useArmyStore } from '@/store/armyStore';
import { getFactionRoster, getUnitDef } from '@/utils/getFactionData';
import { UnitList } from '@/components/builder/UnitList';
import { ArmyList } from '@/components/builder/ArmyList';
import { UnitEditor } from '@/components/builder/UnitEditor';

// 2. Extract the main logic into its own component
function BuilderContent() {
  const searchParams = useSearchParams();
  const factionKey = searchParams.get('faction') || 'orcs_goblins';
  const pointsLimit = Number(searchParams.get('points') || 2000);
  const listName = searchParams.get('name');

  const { initializeList, selectedUnitId, roster, getPointsTotal } = useArmyStore();

  const availableUnits = useMemo(() => getFactionRoster(factionKey), [factionKey]);
  const selectedUnit = roster.find(u => u.instanceId === selectedUnitId);
  const selectedUnitDef = selectedUnit ? getUnitDef(factionKey, selectedUnit.defId) : null;
  const currentPoints = getPointsTotal ? getPointsTotal() : 0; // Check if you implemented this yet

  useEffect(() => {
    initializeList(factionKey, pointsLimit);
  }, [factionKey, pointsLimit, initializeList]);

  return (
    <main className="flex h-screen w-full bg-slate-900 text-slate-100 overflow-hidden">
      
      {/* LEFT COLUMN */}
      <aside className="w-80 flex-none border-r border-slate-700 flex flex-col bg-slate-800/50">
        <div className="p-4 border-b border-slate-700 font-bold uppercase tracking-wider text-amber-500">
          Muster Forces
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          <UnitList units={availableUnits} />
        </div>
      </aside>

      {/* CENTER COLUMN */}
      <section className="flex-1 flex flex-col min-w-0 bg-slate-950">
        <header className="h-16 border-b border-slate-800 flex items-center justify-between px-6 bg-slate-900 shadow-sm">
           <div>
             <h1 className="text-xl font-serif font-bold text-slate-200">
               {listName}
             </h1>
             <div className="text-xs text-slate-500 uppercase tracking-widest">
               {pointsLimit} Points • {factionKey.replace('_', ' ')}
             </div>
           </div>
           
           <div className={`text-2xl font-bold font-mono ${currentPoints > pointsLimit ? 'text-red-500' : 'text-amber-500'}`}>
             {/* Note: You need to implement getPointsTotal in store, or calculate it here */}
             0 / {pointsLimit}
           </div>
        </header>
        
        <div className="flex-1 overflow-y-auto p-6">
          <ArmyList />
        </div>
      </section>

      {/* RIGHT COLUMN */}
      <aside className="w-96 flex-none border-l border-slate-700 flex flex-col bg-slate-900 shadow-2xl z-10">
        {selectedUnit && selectedUnitDef ? (
          <UnitEditor unit={selectedUnit} definition={selectedUnitDef} />
        ) : (
          <div className="flex-1 flex items-center justify-center text-slate-500 p-8 text-center italic">
            Select a unit from the list to edit its loadout.
          </div>
        )}
      </aside>

    </main>
  );
}

// 3. Main Page Component wraps the content in Suspense
export default function BuilderPage() {
  return (
    <Suspense fallback={<div className="flex h-screen items-center justify-center text-slate-500">Loading Army Builder...</div>}>
      <BuilderContent />
    </Suspense>
  );
}