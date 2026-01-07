import { create } from 'zustand';
import { UnitDefinition, UnitOption } from '@/types/army';

// This is a "Live" unit in your army list
export interface ArmyUnit {
  instanceId: string; // Unique ID (because you might have 2 units of Boyz)
  defId: string;      // The ID from the data file (e.g. 'orc_boyz')
  name: string;
  role: string;
  pointsPerModel: number;
  modelCount: number;
  selectedOptions: string[]; // List of Option IDs (e.g. ['spears', 'shield'])
}

interface ArmyState {
  faction: string;
  pointLimit: number;
  roster: ArmyUnit[];
  selectedUnitId: string | null;

  // Actions
  initializeList: (faction: string, points: number) => void;
  addUnit: (unitDef: UnitDefinition) => void;
  removeUnit: (instanceId: string) => void;
  updateUnitSize: (instanceId: string, newSize: number) => void;
  toggleOption: (instanceId: string, option: UnitOption, isSelected: boolean, unitDef: UnitDefinition) => void;
  selectUnit: (instanceId: string | null) => void;
  
  // Getters
  getPointsTotal: () => number;
  getRegimentPoints: () => number;
}

export const useArmyStore = create<ArmyState>((set, get) => ({
  faction: '',
  pointLimit: 2000,
  roster: [],
  selectedUnitId: null,

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
        selectedOptions: [] 
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

toggleOption: (instanceId, option, isSelected, unitDef) => set((state) => ({
    roster: state.roster.map((u) => {
      if (u.instanceId !== instanceId) return u;

      let newOptions = [...u.selectedOptions];

      if (isSelected) {
        // LOGIC: If this option belongs to a group (e.g. 'weapon')...
        if (option.group) {
          // 1. Find all other Option IDs in this unit definition that share the same group
          const conflictingOptionIds = unitDef.options
            .filter((o) => o.group === option.group && o.id !== option.id)
            .map((o) => o.id);

          // 2. Remove those conflicting IDs from our list
          newOptions = newOptions.filter((id) => !conflictingOptionIds.includes(id));
        }
        
        // 3. Add the new option
        // (Prevent duplicates just in case)
        if (!newOptions.includes(option.id)) {
          newOptions.push(option.id);
        }
      } else {
        // Deselecting: Just remove the ID
        newOptions = newOptions.filter((id) => id !== option.id);
      }

      return { ...u, selectedOptions: newOptions };
    })
  })),

  getPointsTotal: () => {
    const state = get();
    // TODO: We need a way to look up Option Costs here. 
    // Usually, we pass the full definitions to the calculator or store costs in ArmyUnit.
    // Let's refine this in the next step.
    return 0; 
  },
  
  getRegimentPoints: () => {
     // Similar TODO
     return 0;
  }
}));