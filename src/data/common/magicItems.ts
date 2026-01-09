import { MagicItem } from '@/types/magicItems';

export const COMMON_MAGIC_ITEMS: MagicItem[] = [
  //weapons
  {
    id: 'biting_blade',
    name: 'Biting Blade',
    type: 'weapon',
    points: 10,
    description: '-2 to armor save',
    requiresMundaneOption: 'Hand Weapon',
  },
  {
    id: 'leaping_copper',
    name: 'Blade of Leaping Copper',
    type: 'weapon',
    points: 10,
    description: '+1 A',
    requiresMundaneOption: 'Hand Weapon',
  },
  {
    id: 'lorenzo',
    name: 'Blades of Lorenzo',
    type: 'weapon',
    points: 10,
    description: '+3 WS',
    requiresMundaneOption: 'add_hw',
  },
  {
    id: 'swift_slaying',
    name: 'Sword of Swift Slaying',
    type: 'weapon',
    points: 10,
    description: 'Always Strike FIrst',
    requiresMundaneOption: 'Hand Weapon',
  },
  {
    id: 'sword_might',
    name: 'Sword of Might',
    type: 'weapon',
    points: 15,
    description: '+1 S',
    requiresMundaneOption: 'Hand Weapon',
  },
]