import { UnitDefinition } from '@/types/army';
import {MagicItem} from '@/types/magicItems';
import { ORCS_AND_GOBLINS_ROSTER } from '@/data/factions/orcs_goblins/index'; 
import { HIGH_ELVES_ROSTER } from '@/data/factions/high_elves/index';
import { COMMON_MAGIC_ITEMS } from '@/data/common/magicItems';

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

export const getMagicItems = (faction: string): MagicItem[] => {
  let items = [...COMMON_MAGIC_ITEMS];

  // if (faction === 'orcs_goblins') {
  //   items = [...items, ...OG_MAGIC_ITEMS];
  // }

  return items;
};

export const getMagicItemDef = (id: string, faction: string): MagicItem | undefined => {
  return getMagicItems(faction).find(i => i.id === id);
};