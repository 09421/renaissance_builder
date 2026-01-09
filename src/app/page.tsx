'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useArmyStore } from '@/store/armyStore';
import { useStorageStore, SavedList } from '@/store/storageStore';
import { FACTIONS } from '@/data/factions'

export default function LandingPage() {
  const router = useRouter();
  
  const { resetArmy, setListName, setPointsLimit } = useArmyStore();
  const { savedLists, deleteList } = useStorageStore();

  const [selectedFaction, setSelectedFaction] = useState<string>();
  const [armyName, setArmyName] = useState('');
  const [pointsInput, setPointsInput] = useState(2000);

  const handleMuster = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFaction) return;

    resetArmy(selectedFaction);
    
    const finalName = armyName.trim() || `New ${FACTIONS.find(f => f.key === selectedFaction)?.name} Army`;
  
    const params = new URLSearchParams({
      name: finalName || `${FACTIONS.find(f => f.key === selectedFaction)?.name} List`,
      points: pointsInput.toString(),
      faction: selectedFaction,
    });
  
    setListName(finalName);
    setPointsLimit(pointsInput);
    router.push(`/builder?${params.toString()}`);
  };

  const handleLoad = (list: SavedList) => {
    
    const params = new URLSearchParams({    
      load: list.id,
      points: list.points.toString(),
      faction: list.faction,
      name: list.name
    });
    console.log('list: ', list)
    router.push(`/builder?${params.toString()}`);
  };

  const formatDate = (ts: number) => new Date(ts).toLocaleDateString(undefined, { month: 'short', day: 'numeric' });

  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center justify-center p-4">
      <div className="text-center mb-10 mt-8">
        <h1 className="text-5xl md:text-6xl font-bold text-amber-500 mb-3 font-serif tracking-wider uppercase drop-shadow-xl">
          Warhammer Renaissance
        </h1>
        <p className="text-slate-400 text-lg tracking-widest uppercase opacity-80">
          Army List Builder
        </p>
      </div>
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-slate-800 rounded-xl shadow-2xl p-8 border border-slate-700 flex flex-col h-full">          
          <div className="mb-6 pb-4 border-b border-slate-700">
             <h2 className="text-2xl font-bold text-slate-200 font-serif tracking-wide">
               Muster Forces
             </h2>
             <p className="text-sm text-slate-400 mt-1">Create a new roster</p>
          </div>

          <form onSubmit={handleMuster} className="space-y-8 flex-1 flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="listName" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  List Name
                </label>
                <input
                  id="listName"
                  type="text"
                  placeholder="e.g. Grimgor's Big Mob"
                  value={armyName}
                  onChange={(e) => setArmyName(e.target.value)}
                  className="bg-slate-900 border border-slate-700 rounded-lg p-3 focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all text-slate-100 placeholder-slate-600"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="points" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Point Limit
                </label>
                <input
                  id="points"
                  type="number"
                  min="500"
                  step="250"
                  value={pointsInput}
                  onChange={(e) => setPointsInput(Number(e.target.value))}
                  className="bg-slate-900 border border-slate-700 rounded-lg p-3 focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all text-slate-100 font-mono"
                />
              </div>
            </div>

            <div className="space-y-3 flex-1">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Choose Faction</span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 h-full">
                {FACTIONS.map((faction) => (
                  <button
                    key={faction.key}
                    type="button"
                    disabled={faction.disabled}
                    onClick={() => setSelectedFaction(faction.key)}
                    className={`
                      p-4 rounded-lg border text-left transition-all enabled:hover:scale-[1.02] flex flex-col justify-start disabled:opacity-30 h-full
                      ${selectedFaction === faction.key 
                        ? 'bg-amber-600/20 border-amber-500 ring-1 ring-amber-500 shadow-lg shadow-amber-900/10' 
                        : 'bg-slate-900 border-slate-700 hover:border-slate-500'}
                    `}
                  >
                    <div className="font-bold text-base text-amber-50 mb-1">{faction.name}</div>
                    <div className="text-xs text-slate-400 leading-relaxed">{faction.description}</div>
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={!selectedFaction}
              className={`
                w-full py-4 rounded-lg font-bold text-lg uppercase tracking-widest transition-all mt-auto
                ${selectedFaction 
                  ? 'bg-amber-600 hover:bg-amber-500 text-white shadow-lg shadow-amber-900/20' 
                  : 'bg-slate-700 text-slate-500 cursor-not-allowed'}
              `}
            >
              Muster Army
            </button>
          </form>
        </div>

        <div className="bg-slate-800 rounded-xl shadow-2xl p-8 border border-slate-700 flex flex-col h-full min-h-[500px]">
           <div className="mb-6 pb-4 border-b border-slate-700 flex justify-between items-end">
              <div>
                <h2 className="text-2xl font-bold text-slate-200 font-serif tracking-wide">
                  The Barracks
                </h2>
                <p className="text-sm text-slate-400 mt-1">Load existing roster</p>
              </div>
              <div className="text-xs font-mono text-slate-500 bg-slate-900 px-2 py-1 rounded border border-slate-700">
                {savedLists.length} Saved
              </div>
           </div>

           <div className="flex-1 overflow-y-auto space-y-3 pr-1 custom-scrollbar">
             {savedLists.length === 0 ? (
               <div className="h-full flex flex-col items-center justify-center text-slate-600 space-y-4 opacity-60">
                 <svg className="w-16 h-16 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                 <span className="text-sm font-semibold uppercase tracking-wider">No armies mustered yet</span>
               </div>
             ) : (
               savedLists.map(list => (
                 <div 
                   key={list.id} 
                   onClick={() => handleLoad(list)}
                   className="group relative bg-slate-900 border border-slate-700 p-4 rounded-lg cursor-pointer hover:border-amber-500/50 hover:bg-slate-900/80 transition-all flex justify-between items-center"
                 >
                   <div>
                     <div className="font-bold text-lg text-slate-200 group-hover:text-amber-500 transition-colors">
                       {list.name}
                     </div>
                     <div className="text-xs text-slate-500 mt-1 flex items-center gap-2">
                       <span className="capitalize font-semibold text-slate-400">{list.faction.replace('_', ' ')}</span>
                       <span className="text-slate-700">•</span>
                       <span className="font-mono text-amber-600">{list.points} pts</span>
                     </div>
                   </div>

                   <div className="flex flex-col items-end gap-2">
                     <span className="text-[10px] text-slate-600 font-mono font-bold uppercase tracking-wider">
                       {formatDate(list.updatedAt)}
                     </span>
                     <button
                       onClick={(e) => { e.stopPropagation(); deleteList(list.id); }}
                       className="text-slate-600 hover:text-red-400 hover:bg-red-900/20 p-1.5 rounded opacity-0 group-hover:opacity-100 transition-all"
                       title="Delete"
                     >
                       <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                     </button>
                   </div>
                 </div>
               ))
             )}
           </div>
        </div>
      </div>
    </main>
  );
}