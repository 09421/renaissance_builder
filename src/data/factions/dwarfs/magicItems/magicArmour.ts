import {withFaction} from '@/data/utils';

export const DWARF_MAGIC_ARMOUR = withFaction('dwarfs', [
  {
    id: 'armour_skaldour',
    name: 'Armour of Skaldour',
    type: 'armour',
    points: 80,
    description: 'Armour save 2+ (cannot be improved). Ward save 4+. Immune to fire based attacks',
    requiresMundaneOption:['gromril_armour']
  },
]);