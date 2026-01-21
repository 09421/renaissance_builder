import {withFaction} from '@/data/utils';

export const DWARF_ENCHANTED_ITEMS = withFaction('dwarfs', [
  {
    id: 'bugman_tankard',
    name: 'Bugman’s Tankard',
    type: 'enchanted',
    points: 10,
    description: 'The bearer or one model in the bearer’s unit recovers one lost wound. Drink it just after a phase (i.e. just after shooting, or just after melee combat, or just after magic). Does not work on dead models! Three uses only',
  },
  {
    id: 'dragon_crown_karaz',
    name: 'Dragon Crown of Karaz',
    type: 'enchanted',
    points: 25,
    description: 'The bearer and the bearer’s unit are immune to psychology',
    requiresTags:['Dwarf lord']
  },
  {
    id: 'firery_ring_thori',
    name: 'Firery Ring of Thori',
    type: 'enchanted',
    points: 25,
    description: 'Used when the unit has finished a normal move. Creates a wall of flame around the bearer’s unit. The unit cannot shoot but can be shot at. No one can charge the unit. The flame wall lasts until the beginning of the Dwarf player’s next turn. Models entering the flame wall by accident – such as Night Goblin Fanatics – are automatically destroyed. One use only'
  },
  {
    id: 'great_book_grudges',
    name: 'Great Book of Grudges',
    type: 'enchanted',
    points: 50,
    description: 'The bearer and the bearer’s unit hate all enemies',
    requiresTags:['Dwarf lord']
  },
  {
    id: 'golden_sceptre_nogrim',
    name: 'Golden Sceptre of Nogrim',
    type: 'enchanted',
    points: 50,
    description: 'Provides +1 armour save to the bearer and the bearer’s unit'
  },
]);