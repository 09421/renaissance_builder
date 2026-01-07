'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FACTIONS, FactionKey } from '@/data/factions';

export default function LandingPage() {
  const router = useRouter();

  // Local state for form inputs
  const [listName, setListName] = useState('');
  const [points, setPoints] = useState(2000);
  const [selectedFaction, setSelectedFaction] = useState<FactionKey | null>(null);

  const handleStartBuilder = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedFaction) return;

    // Navigate to the builder page with data in URL
    // e.g., /builder?name=MyArmy&points=2000&faction=empire
    const params = new URLSearchParams({
      name: listName || `${FACTIONS.find(f => f.key === selectedFaction)?.name} List`, // Default name if empty
      points: points.toString(),
      faction: selectedFaction,
    });

    router.push(`/builder?${params.toString()}`);
  };

  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-slate-800 rounded-xl shadow-2xl p-8 border border-slate-700">
        
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-amber-500 mb-2 font-serif tracking-wider uppercase">
            Warhammer Renaissance
          </h1>
          <p className="text-slate-400">Army List Builder</p>
        </div>

        <form onSubmit={handleStartBuilder} className="space-y-8">
          
          {/* Top Row: Name & Points */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="listName" className="text-sm font-semibold text-slate-300 uppercase">
                List Name
              </label>
              <input
                id="listName"
                type="text"
                placeholder="e.g. Army of Altdorf"
                value={listName}
                onChange={(e) => setListName(e.target.value)}
                className="bg-slate-900 border border-slate-700 rounded-lg p-3 focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="points" className="text-sm font-semibold text-slate-300 uppercase">
                Point Limit
              </label>
              <input
                id="points"
                type="number"
                min="500"
                step="250"
                value={points}
                onChange={(e) => setPoints(Number(e.target.value))}
                className="bg-slate-900 border border-slate-700 rounded-lg p-3 focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all"
              />
            </div>
          </div>

          {/* Faction Selection Grid */}
          <div className="space-y-3">
            <span className="text-sm font-semibold text-slate-300 uppercase">Choose Faction</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {FACTIONS.map((faction) => (
                <button
                  key={faction.key}
                  type="button"
                  onClick={() => setSelectedFaction(faction.key)}
                  className={`
                    p-3 rounded-lg border text-left transition-all hover:scale-[1.02] flex flex-col justify-between
                    ${selectedFaction === faction.key 
                      ? 'bg-amber-600/20 border-amber-500 ring-1 ring-amber-500' 
                      : 'bg-slate-900 border-slate-700 hover:border-slate-500'}
                  `}
                >
                  <div className="font-bold text-base text-amber-50">{faction.name}</div>
                  <div className="text-xs text-slate-400 mt-1 line-clamp-2">{faction.description}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!selectedFaction}
            className={`
              w-full py-4 rounded-lg font-bold text-lg uppercase tracking-widest transition-all
              ${selectedFaction 
                ? 'bg-amber-600 hover:bg-amber-500 text-white shadow-lg shadow-amber-900/20' 
                : 'bg-slate-700 text-slate-500 cursor-not-allowed'}
            `}
          >
            Muster Army
          </button>

        </form>
      </div>
    </main>
  );
}