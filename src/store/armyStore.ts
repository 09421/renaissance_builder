import { create } from 'zustand';
import { UnitDefinition, ArmyUnit } from '@/types/army';
import { getUnitDef, getMagicItemDef } from '@/utils/getFactionData';
import { calculateUnitCost } from '@/utils/armyMath';
import { SavedList } from './storageStore';
import { persist } from 'zustand/middleware';

interface ArmyState {
  faction: string;
  pointLimit: number;
  roster: ArmyUnit[];
  selectedUnitId: string | null;
  activeListId: string | null;
  listName: string;

  initializeList: (faction: string, points: number) => void;
  addUnit: (unitDef: UnitDefinition) => void;
  removeUnit: (instanceId: string) => void;
  updateUnitSize: (instanceId: string, newSize: number) => void;
  setOptionCount: (
    instanceId: string,
    optionId: string,
    count: number,
    unitDef: UnitDefinition
  ) => void;
  selectUnit: (instanceId: string | null) => void;
  setPointsLimit: (points: number) => void;
  getPointsTotal: () => number;
  getRegimentPoints: () => number;

  setListName: (name: string) => void;
  loadArmy: (savedList: SavedList) => void;
  resetArmy: (faction: string) => void;
}

export const useArmyStore = create<ArmyState>()(
  persist(
    (set, get) => ({
      faction: '',
      pointLimit: 2000,
      roster: [],
      selectedUnitId: null,
      activeListId: null,
      listName: 'New Army',

      setListName: (name) => set({ listName: name }),
      setPointsLimit: (points) => set({ pointLimit: points }),
      loadArmy: (savedList) => {
        console.log('saved list: ', savedList);
        const cleanRoster = savedList.roster.map(unit => {
          if (Array.isArray(unit.selectedOptions)) {
            const newOptions: Record<string, number> = {};
            (unit.selectedOptions as string[]).forEach(optId => {
              newOptions[optId] = 1;
            });
            return { ...unit, selectedOptions: newOptions };
          }
          
          if (!unit.selectedOptions) {
            return { ...unit, selectedOptions: {} };
          }

          return unit;
        });

        set({
          roster: cleanRoster,
          faction: savedList.faction || 'orcs_goblins',
          activeListId: savedList.id,
          listName: savedList.name,
          selectedUnitId: null
        });
      },
      resetArmy: (faction) => set({
        roster: [],
        faction: faction,
        activeListId: null,
        listName: 'New Army',
        selectedUnitId: null
      }),

      selectUnit: (instanceId) => set({ selectedUnitId: instanceId }),
      initializeList: (faction, points) => set({ faction, pointLimit: points, roster: [] }),

      addUnit: (unitDef) => set((state) => {
        const newId = crypto.randomUUID();
        return {
          selectedUnitId: newId,
          roster: [...state.roster, {
            instanceId: newId,
            defId: unitDef.id,
            name: unitDef.name,
            role: unitDef.role,
            pointsPerModel: unitDef.pointsPerModel,
            modelCount: unitDef.minSize,
            selectedOptions: {},
          }]
        };
      }),

      removeUnit: (instanceId) => set((state) => ({
        roster: state.roster.filter((u) => u.instanceId !== instanceId)
      })),

      updateUnitSize: (instanceId, newSize) => set((state) => ({
        roster: state.roster.map((u) =>
          u.instanceId === instanceId ? { ...u, modelCount: newSize } : u
        )
      })),

      setOptionCount: (instanceId, optionId, count, unitDef) => set((state) => ({
        roster: state.roster.map((u) => {
          if (u.instanceId !== instanceId) return u;

          const newOptions = { ...u.selectedOptions };
          let optionDef:any = unitDef.options.find(o => o.id === optionId);
          if (!optionDef) {
            optionDef = getMagicItemDef(optionId, state.faction);
          }
          console.log('optionDef: ', optionDef);
          if (!optionDef) return u;

          if (count <= 0) {
            delete newOptions[optionId];
          } else {
            newOptions[optionId] = count;
          }

          if (count > 0) {
            if (optionDef.group) {
              unitDef.options.forEach(o => {
                if (o.group === optionDef.group && o.id !== optionId) {
                  delete newOptions[o.id];
                }
              });
            }

            if (optionDef.conflicts) {
              optionDef.conflicts.forEach((conflictId: string | number) => {
                delete newOptions[conflictId];
              });
            }

            Object.keys(newOptions).forEach(selectedId => {
              if (selectedId === optionId) return; // Skip self

              const existingDef = unitDef.options.find(o => o.id === selectedId);
              if (existingDef?.conflicts?.includes(optionId)) {
                delete newOptions[selectedId];
              }
            });
          }

          if (count <= 0) {
            unitDef.options.forEach(o => {
              if (o.requires?.includes(optionId)) {
                delete newOptions[o.id];
              }
            });
          }

          return { ...u, selectedOptions: newOptions };
        })
      })),

      getPointsTotal: () => {
        const { roster, faction } = get();

        return roster.reduce((total, unit) => {
          const def = getUnitDef(faction, unit.defId);
          if (!def) return total;

          return total + calculateUnitCost(unit, def, faction);
        }, 0);
      },

      getRegimentPoints: () => {
        const { roster, faction } = get();

        const coreUnits = roster.filter(u => u.role === 'regiments');

        return coreUnits.reduce((total, unit) => {
          const def = getUnitDef(faction, unit.defId);
          if (!def) return total;

          const baseCost = unit.modelCount * def.pointsPerModel;

          let optionsCost = 0;
          Object.entries(unit.selectedOptions).forEach(([optId, count]) => {
            const optDef = def.options.find(o => o.id === optId);

            if (optDef && !optDef.isExternalPoints) {
              const cost = optDef.isFixedCost
                ? optDef.points
                : optDef.points * unit.modelCount;

              optionsCost += (cost * count);
            }
          });

          return total + baseCost + optionsCost;
        }, 0);
      },
    }),
    {
      name: 'warhammer-renaissance-workbench',
      
      partialize: (state) => ({ 
        roster: state.roster, 
        faction: state.faction,
        listName: state.listName,
        activeListId: state.activeListId,
        pointsLimit: state.pointLimit
      }),
    }
  )
);