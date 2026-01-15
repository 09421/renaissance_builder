import {withFaction} from '@/data/utils';
export const COMMON_MAGIC_ARMOUR = withFaction('common', [
  {
    id: 'dragonhelm',
    name: 'Dragonhelm',
    type: 'armour',
    points: 10,
    description: 'The bearer is immune to fire-based attacks and breath weapons. The bearer is immune to terror',
    requiresOptionCategory: ['armour']
  },
  {
    id: 'enchanted_shield',
    name: 'Enchanted Shield',
    type: 'armour',
    points: 10,
    description: '+1 armour save',
    requiresMundaneOption: ['shield'],
  },
  {
    id: 'armour_endurance',
    name: 'Armour Of Endurance',
    type: 'armour',
    points: 10,
    description: '6+ ward save',
    requiresMundaneOption: ['heavy_armour'],
  },
]);