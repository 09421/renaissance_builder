import {withFaction} from '@/data/utils';

export const OG_MAGIC_WEAPONS = withFaction('orcs_goblins', [
  {
    id: 'one_hit_wunda',
    name: 'Wollopa’s One Hit Wunda',
    type: 'weapon',
    points: 10,
    description: 'In the first melee round the bearer fights, all hits may be resolved with strength 10. One use only',
    requiresMundaneOption: ['Hand weapon'],
    requiresTags:['common goblin']
  },
  {
    id: 'sword_ork',
    name: 'Sword of Bork',
    type: 'weapon',
    points: 40,
    description: 'The bearer’s regiment ignores animosity',
    requiresMundaneOption: ['Hand weapon'],
    requiresTags:['common orc']
  },
  {
    id: 'axe_grom',
    name: 'Axe of Grom',
    type: 'weapon',
    points: 50,
    description: 'No armour save. 1D3 wounds',
    requiresMundaneOption: ['great_weapon'],
    requiresTags:['common goblin']
  },
  {
    id: 'battle-axe_last_waaagh',
    name: 'Battle-Axe of the Last Waaagh!',
    type: 'weapon',
    points: 75,
    description: '+1S and +1 attack per rank of at least four models behind the first in the bearer’s unit',
    requiresTags:['common orc']
  },
  {
    id: 'morgor_mangler',
    name: 'Morgor the Mangler',
    type: 'weapon',
    points: 100,
    description: '+1WS, +1S, +1T, always strike first, no armour save',
    requiresTags:['common orc']
  },
]);