import { UnitRole } from '@/types/army';

export const SECTION_ORDER: UnitRole[] = [
  'character',
  'regiments',
  'auxiliary',
  'chariots',
  'warmachines',
  'monsters',
];

export const SECTION_TITLES: Record<UnitRole, string> = {
  character: 'Characters',
  regiments: 'Regiments',
  chariots: 'Chariots',
  auxiliary: 'auxiliary',
  warmachines: 'War Machines',
  monsters: 'Monsters'
};