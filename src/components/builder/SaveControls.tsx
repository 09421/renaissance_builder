import { useSaveArmy } from '@/components/hooks/useSaveArmy'

export const SaveControls = () => {
  const { saveArmy, isSaved } = useSaveArmy()

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={saveArmy}
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