import { useState } from 'react';
import { useArmyStore } from '@/store/armyStore';
import { useStorageStore } from '@/store/storageStore';

export const SaveControls = () => {
  const { roster, faction, listName, activeListId, setListName, getPointsTotal } = useArmyStore();
  const { saveList } = useStorageStore();
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    // 1. Determine ID (Use existing or generate new)
    const id = activeListId || crypto.randomUUID();
    
    // 2. Prepare Data
    const payload = {
      id,
      name: listName,
      faction,
      roster,
      points: getPointsTotal(), // Calculate current points for the preview
      createdAt: Date.now(), // Typescript might complain on update, but our store handles it
      updatedAt: Date.now()
    };

    // 3. Save to LocalStorage
    saveList(payload as any); // Type assertion if createdAt logic is strict

    // 4. Update Active ID in ArmyStore (so subsequent saves overwrite)
    useArmyStore.setState({ activeListId: id });

    // 5. Visual Feedback
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  return (
    <div className="flex items-center gap-3">
      {/* Name Input */}
      {/* <input 
        type="text"
        value={listName}
        onChange={(e) => setListName(e.target.value)}
        className="bg-slate-900 border border-slate-700 text-slate-100 px-3 py-1 rounded focus:border-amber-500 focus:outline-none font-bold"
        placeholder="Army Name..."
      /> */}

      {/* Save Button */}
      <button
        onClick={handleSave}
        className={`
          flex items-center gap-2 px-4 py-1.5 rounded font-bold transition-all
          ${isSaved 
            ? 'bg-green-600 text-white' 
            : 'bg-amber-600 hover:bg-amber-500 text-slate-900'}
        `}
      >
        {isSaved ? (
          <>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            Saved
          </>
        ) : (
          <>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" /></svg>
            Save
          </>
        )}
      </button>
    </div>
  );
};