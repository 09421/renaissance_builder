import { useState, useCallback } from 'react';
import { useArmyStore } from '@/store/armyStore';
import { useStorageStore } from '@/store/storageStore';

export const useSaveArmy = () => {
  const [isSaved, setIsSaved] = useState(false);
  
  const { roster, faction, listName, activeListId, getPointsTotal } = useArmyStore();
  const { saveList } = useStorageStore();

  const saveArmy = useCallback(() => {
    const id = activeListId || crypto.randomUUID();

    const payload = {
      id,
      name: listName,
      faction,
      roster,
      points: getPointsTotal(),
      createdAt: Date.now(), 
      updatedAt: Date.now()
    };

    saveList(payload as any);

    useArmyStore.setState({ activeListId: id });

    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
    
    return id;
  }, [roster, faction, listName, activeListId, getPointsTotal, saveList]);

  return { saveArmy, isSaved };
};