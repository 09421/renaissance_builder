import {withFaction} from '@/data/utils';

export const EMP_MAGIC_WEAPONS = withFaction('empire', [
  {
    id: 'runefang',
    name: 'Runefang',
    type: 'weapon',
    points: 20,
    description: 'No armour save allowed. Undead and ethereal troops suffer double wounds',
    requiresMundaneOption: ['Hand weapon']
  },
  {
    id: 'dagonbow',
    name: 'Dragon Bow',
    type: 'weapon',
    points: 25,
    description: 'May fire three magical shots each shooting phase with range 36” and S5.',
    requiresMundaneOption: ['bow']
  },
  {
    id: 'sword_justice',
    name: 'Sword of Justice',
    type: 'weapon',
    points: 50,
    description: 'Bearer may re-roll missed to hit rolls. No armour save allowed',
    requiresMundaneOption: ['Hand weapon']
  },
  {
    id: 'fearfrost',
    name: 'Fearfrost',
    type: 'weapon',
    points: 60,
    description: 'No armour save allowed. 1 wound = 1D6 wounds',
    requiresMundaneOption: ['Hand weapon']
  },
  {
    id: 'hammer_igmar',
    name: 'Hammer of Sigmar',
    type: 'weapon',
    points: 80,
    description: 'All hits wound. No armour save allowed',
    requiresMundaneOption: ['Hand weapon']
  },
]);