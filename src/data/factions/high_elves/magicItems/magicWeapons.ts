import {withFaction} from '@/data/utils';

export const HE_MAGIC_WEAPONS = withFaction('high_elves', [
  {
    id: 'Forenrond_Sword',
    name: 'Forenrond’s Sword',
    type: 'weapon',
    points: 0,
    description: 'The bearer of this ancient heirloom becomes the general and forfeits all normal attacks on his profile and instead makes 4 attacks that hit and wound on 2+ and allow no armour save, and each wound multiplies into 1D3 wounds.',
    requiresMundaneOption: ['Hand weapon']
  },
  {
    id: 'bow_old_world',
    name: 'Bow of the Old-World Colonies',
    type: 'weapon',
    points: 20,
    description: 'May shoot as many shots as the bearer has attacks using the bearer’s strength',
    requiresMundaneOption: ['long_bow']
  },
  {
    id: 'defiler_chaos',
    name: 'Defier of Chaos',
    type: 'weapon',
    points: 20,
    description: 'No armour save. Models from the Chaos Army suffer double wounds',
    requiresMundaneOption: ['Hand weapon']
  },
  {
    id: 'arrow_isha',
    name: 'Arrows of Isha',
    type: 'weapon',
    points: 25,
    description: 'The whole regiment becomes equipped with magic flaming arrows which hit with S4. The Arrows of Isha cannot be nullified and do not disappear if the bearer dies',
    requiresMundaneOption: ['Hand weapon'],
    requiresTags:['shield maiden']
  },
  {
    id: 'fangsword',
    name: 'Fangsword of Eltharion',
    type: 'weapon',
    points: 40,
    description: '-3 to armour save. All models in base contact with the bearer suffer -1A',
    requiresMundaneOption: ['Hand weapon']
  },
  {
    id: 'moonbow',
    name: 'Moonbow',
    type: 'weapon',
    points: 40,
    description: 'Hits are at S6 and allow no armour save, each wound multiplies into 1D3 wounds. Hits penetrate like a single shot from a bolt thrower. Any regiment of Dark Elves taking a casualty from the Moonbow must take an immediate panic test',
    requiresMundaneOption: ['long_bow']
  },
  {
    id: 'bel_korhadris',
    name: 'Blade of Bel-Korhadris',
    type: 'weapon',
    points: 50,
    description: 'Always strike first. No armour save. Once per battle the wielder may strike with 1D6 extra attacks.',
    requiresTags: ['mage'],
  },
]);