import { UnitRole } from '@/types/army';

export const SECTION_ORDER: UnitRole[] = [
  'character',
  'regiments',
  'chariots',
  'warmachines',
  'monsters',
];

export const SECTION_TITLES: Record<UnitRole, string> = {
  character: 'Characters',
  regiments: 'Regiments',
  chariots: 'Chariots',
  warmachines: 'War Machines',
  monsters: 'Monsters'
};