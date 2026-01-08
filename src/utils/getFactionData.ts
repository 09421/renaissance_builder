import { UnitDefinition } from '@/types/army';
import { ORCS_AND_GOBLINS_ROSTER } from '@/data/factions/orcs_goblins/index'; 
import { HIGH_ELVES_ROSTER } from '@/data/factions/high_elves/index'; 

const DB: Record<string, UnitDefinition[]> = {
  'orcs_goblins': ORCS_AND_GOBLINS_ROSTER,
  'high_elves': HIGH_ELVES_ROSTER
};

export const getFactionRoster = (factionKey: string): UnitDefinition[] => {
  return DB[factionKey] || [];
};

export const getUnitDef = (factionKey: string, unitId: string): UnitDefinition | undefined => {
  const roster = getFactionRoster(factionKey);
  return roster.find(u => u.id === unitId);
};