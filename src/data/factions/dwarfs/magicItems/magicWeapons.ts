import {withFaction} from '@/data/utils';

export const DWARF_MAGIC_WEAPONS = withFaction('dwarfs', [
  {
    id: 'red_axe_karak_eight_peaks',
    name: 'Red Axe of Karak Eight Peaks',
    type: 'weapon',
    points: 10,
    description: 'Strictly speaking not magical, so the “magic” property of this weapon cannot be destroyed or nullified - it is psychology alone that makes The Red Axe work. The bearer hates Orcs & Goblins and Skaven and may re-roll to-hit against those creatures in every hand-to-hand combat, not just the first',
    requiresMundaneOption: ['great_weapon']
  },
  {
    id: 'axe_queen_helga',
    name: 'Axe of Queen Helga',
    type: 'weapon',
    points: 10,
    description: 'Double wounds against the first character hit',
    requiresMundaneOption: ['Hand weapon']
  },
  {
    id: 'axe_grimnir',
    name: 'The Axe of Grimnir',
    type: 'weapon',
    points: 100,
    description: 'Always wounds on 2+. No armour save. 1 wound = 1D3 wounds (1D6 against monstrous regiments and all characters based on monstrous regiments, i.e. not only Dragon Ogres, but also Dragon Ogre Heroes and Lords)',
    requiresMundaneOption: ['Hand weapon']
  },
  {
    id: 'gotrek_axe',
    name: 'Gotrek’s Axe',
    type: 'weapon',
    points: 100,
    description: 'Always wounds on 2+. No armour save. 1 wound = 1D3 wounds (1D6 against Dragons and Daemons)',
    requiresMundaneOption: ['Hand weapon']
  },
  {
    id: 'Master Rune of Flight',
    name: 'Master Rune of Flight',
    type: 'weapon',
    isMasterRune:true,
    isRune:true,
    points: 20,
    description: 'The weapon may be thrown up to 12”, it hits automatically and then returns to the wielder’s hand. You may stand and shoot as a charge reaction and target characters within regiments with this weapon',
    requiresMundaneOption: ['Hand weapon']
  },
  {
    id: 'Rune of Fury',
    name: 'Rune of Fury',
    type: 'weapon',
    isRune:true,
    points: 10,
    maxCount: 3,
    description: '+1 attack',
    allowMultipleInGroup:true,
    requiresMundaneOption: ['Hand weapon']
  },
]);