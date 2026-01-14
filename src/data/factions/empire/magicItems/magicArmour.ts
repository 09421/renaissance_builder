import {withFaction} from '@/data/utils';

export const EMP_MAGIC_ARMOUR = withFaction('empire', [
  {
    id: 'helm_mandred',
    name: 'Helm of Count Mandred',
    type: 'armour',
    points: 10,
    description: 'The bearer hates Skaven, and Skaven fear the bearer. The helm confers a +1 bonus to armour save',
    requiresMundaneOption:['light_armour', 'heavy_armor', 'full_plate']
  },
  {
    id: 'armour_Tarnus',
    name: 'Armour of Tarnus',
    type: 'armour',
    points: 25,
    description: 'full plate armour. The bearer may wear this armour and still cast spells. May re-roll armour saves',
    requiresTags: ['wizard'],
  },
]);