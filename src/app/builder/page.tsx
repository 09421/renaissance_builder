'use client';

import { useMemo, Suspense } from 'react'; 
import { useSearchParams } from 'next/navigation';
import { useArmyStore } from '@/store/armyStore';
import { getFactionRoster, getUnitDef } from '@/utils/getFactionData';
import { UnitList } from '@/components/builder/UnitList';
import { ArmyList } from '@/components/builder/armylist/ArmyList';
import { UnitEditor } from '@/components/builder/UnitEditor';
import Link from 'next/link';
import {SaveControls} from '@/components/builder/SaveControls'

function BuilderContent() {
  const searchParams = useSearchParams();
  const factionKey = searchParams.get('faction') || 'orcs_goblins';
  const pointsLimit = Number(searchParams.get('points') || 2000);
  const listName = searchParams.get('name');

  const { selectedUnitId, roster, getPointsTotal, getRegimentPoints, loadArmy } = useArmyStore();

  const availableUnits = useMemo(() => getFactionRoster(factionKey), [factionKey]);
  const selectedUnit = roster.find(u => u.instanceId === selectedUnitId);
  const selectedUnitDef = selectedUnit ? getUnitDef(factionKey, selectedUnit.defId) : null;

  const totalPoints = getPointsTotal();
  const regimentsPoints = getRegimentPoints();  
  const minRegimentPoints = pointsLimit * 0.50; 
  const isCoreValid = regimentsPoints >= minRegimentPoints;
  const regimentsPercentage = totalPoints > 0 ? ((regimentsPoints / pointsLimit) * 100).toFixed(2) : 0;

  return (
    <main className="flex h-screen w-full bg-slate-900 text-slate-100 overflow-hidden">

      {/* LEFT COLUMN */}
      <aside className="w-80 flex-none border-r border-slate-700 flex flex-col bg-slate-800/50">
        <div className="h-16 flex items-center justify-between px-4 border-b border-slate-700 gap-3">
          <Link
            href="/"
            className="text-slate-400 hover:text-amber-500 hover:bg-slate-700/50 p-2 rounded-full transition-all"
            title="Back to Main Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
          </Link>
          <div>            
            <SaveControls/>
          </div>
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

          <div className={`text-sm font-mono flex flex-col items-end ${isCoreValid ? 'text-green-500' : 'text-red-400'}`}>
            <span className="font-bold">{regimentsPoints} pts Regiments</span>
            <span className="text-xs opacity-80">{regimentsPercentage}% (Min 50%)</span>
          </div>
          <div className={`text-2xl font-bold font-mono ${totalPoints > pointsLimit ? 'text-red-500' : 'text-amber-500'}`}>
            {totalPoints} / {pointsLimit}            
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-6">
          <ArmyList />
        </div>
      </section>

      {/* RIGHT COLUMN */}
      <aside className="w-96 flex-none border-l border-slate-700 flex flex-col bg-slate-900 shadow-2xl z-10">
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