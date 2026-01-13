import {withFaction} from '@/data/utils';

export const HE_MAGIC_ARMOUR = withFaction('high_elves', [
  {
    id: 'helm_yvresse',
    name: 'Helm of Yvresse',
    type: 'armour',
    points: 10,
    description: 'May always re-roll LD tests',
    requiresMundaneOption:['light_armour', 'dragon_armour']
  },
  {
    id: 'armour_caledor',
    name: 'Armour of Caledor',
    type: 'armour',
    points: 40,
    description: '+1 to armour save. 5+ ward save. Grants immunity to all sorts of dragon breath attacks in addition to immunity to fire-based attacks',
    requiresMundaneOption:['dragon_armour']
  },
  {
    id: 'crown_atrazar',
    name: 'Golden Crown of Atrazar',
    type: 'armour',
    points: 100,
    description: '3+ ward save',
    requiresMundaneOption:['light_armour', 'dragon_armour']
  },
]);