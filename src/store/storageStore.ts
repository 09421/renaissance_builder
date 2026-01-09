import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ArmyUnit } from '@/types/army';

export interface SavedList {
  id: string;
  name: string;
  faction: string;
  roster: ArmyUnit[];
  points: number;
  createdAt: number;
  updatedAt: number;
}

interface StorageState {
  savedLists: SavedList[];
  saveList: (list: SavedList) => void;
  deleteList: (id: string) => void;
}

export const useStorageStore = create<StorageState>()(
  persist(
    (set) => ({
      savedLists: [],

      saveList: (newList) => set((state) => {
        const existingIndex = state.savedLists.findIndex(l => l.id === newList.id);
        
        if (existingIndex >= 0) {
          const updated = [...state.savedLists];
          updated[existingIndex] = { ...newList, updatedAt: Date.now() };
          return { savedLists: updated };
        } else {
          return { 
            savedLists: [
              ...state.savedLists, 
              { ...newList, createdAt: Date.now(), updatedAt: Date.now() }
            ] 
          };
        }
      }),

      deleteList: (id) => set((state) => ({
        savedLists: state.savedLists.filter(l => l.id !== id)
      })),
    }),
    {
      name: 'warhammer-renaissance-army-storage',
    }
  )
);