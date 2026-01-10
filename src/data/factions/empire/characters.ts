import { UnitDefinition } from '@/types/army';
import { EMP_STATS } from './stats';

export const characters: UnitDefinition[] = [
  {
    id: 'empire_lord',
    name: 'Empire Lord',
    modelName: 'Empire Lord',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 100,
    stats: EMP_STATS.empireLord,
    equipment: ['Hand Weapon'],
    magicAllowance: {
      maxItems: 3
    },
    specialRules: [],
    options: [
      { id: 'warhorse', name: 'War Horse', points: 20, group: 'mount', optionProfile: { name: 'War Horse', stats: EMP_STATS.Warhorse } },
      { id: 'barding', name: 'Barding', points: 0, requires: ['warhorse'] },
      { id: 'pegasus', name: 'Pegasus', points: 55, group: 'mount', optionProfile: { name: 'Pegasus', stats: EMP_STATS.Pegasus } },
      { id: 'griffon', name: 'Griffon', points: 175, group: 'mount', optionProfile: { name: 'Griffon', stats: EMP_STATS.Griffon } },

      { id: 'shield', name: 'Shield', points: 0 },
      { id: 'light_armor', name: 'Light armor', points: 0, group: 'armor' },
      { id: 'heavy_armor', name: 'Heavy armor', points: 0, group: 'armor' },
      { id: 'full_plate', name: 'Full plate', points: 0, group: 'armor' },

      { id: 'flail', name: 'Flail', points: 0, group: 'weapon'},
      { id: 'add_hw', name: 'Additional hand weapon', points: 0, group: 'weapon'},
      { id: 'spear', name: 'Spear', points: 0, group: 'weapon' },
      { id: 'halberd', name: 'Halberd', points: 0, group: 'weapon' },
      { id: 'great_weapon', name: 'Double handed weapon', points: 0, group: 'weapon' },
      { id: 'lance', name: 'Lance', points: 0, group: 'weapon' },

      
      { id: 'bow', name: 'Bow', points: 10, group: 'ranged_weapon' },
      { id: 'long_bow', name: 'Long Bow', points: 10, group: 'ranged_weapon' },
      { id: 'crossbow', name: 'Crossbow', points: 10, group: 'ranged_weapon' },
      { id: 'handgun', name: 'Handgun', points: 10, group: 'ranged_weapon' },
      { id: 'pistol', name: 'Pistol', points: 10, group: 'ranged_weapon' },
      { id: 'two_pistol', name: 'Two Pistols', points: 10, group: 'ranged_weapon' },
    ]
  },
  {
    id: 'empire_hero',
    name: 'Empire Hero',
    modelName: 'Empire Hero',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 60,
    stats: EMP_STATS.empireHero,
    equipment: ['Hand Weapon'],
    magicAllowance: {
      maxItems: 2
    },
    specialRules: [],
    options: [
      { id: 'warhorse', name: 'War Horse', points: 15, group: 'mount', optionProfile: { name: 'War Horse', stats: EMP_STATS.Warhorse } },
      { id: 'barding', name: 'Barding', points: 0, requires: ['warhorse'] },
      { id: 'pegasus', name: 'Pegasus', points: 50, group: 'mount', optionProfile: { name: 'Pegasus', stats: EMP_STATS.Pegasus } },
      { id: 'griffon', name: 'Griffon', points: 170, group: 'mount', optionProfile: { name: 'Griffon', stats: EMP_STATS.Griffon } },

      { id: 'shield', name: 'Shield', points: 0 },
      { id: 'light_armor', name: 'Light armor', points: 0, group: 'armor' },
      { id: 'heavy_armor', name: 'Heavy armor', points: 0, group: 'armor' },
      { id: 'full_plate', name: 'Full plate', points: 0, group: 'armor' },

      { id: 'flail', name: 'Flail', points: 0, group: 'weapon'},
      { id: 'add_hw', name: 'Additional hand weapon', points: 0, group: 'weapon'},
      { id: 'spear', name: 'Spear', points: 0, group: 'weapon' },
      { id: 'halberd', name: 'Halberd', points: 0, group: 'weapon' },
      { id: 'great_weapon', name: 'Double handed weapon', points: 0, group: 'weapon' },
      { id: 'lance', name: 'Lance', points: 0, group: 'weapon' },

      
      { id: 'bow', name: 'Bow', points: 10, group: 'ranged_weapon' },
      { id: 'long_bow', name: 'Long Bow', points: 10, group: 'ranged_weapon' },
      { id: 'crossbow', name: 'Crossbow', points: 10, group: 'ranged_weapon' },
      { id: 'handgun', name: 'Handgun', points: 10, group: 'ranged_weapon' },
      { id: 'pistol', name: 'Pistol', points: 10, group: 'ranged_weapon' },
      { id: 'two_pistol', name: 'Two Pistols', points: 10, group: 'ranged_weapon' },
      
      { id: 'long_rigle', name: 'Hochland long rifle', points: 10, group: 'experimantal_weapon' },
      { id: 'repeating_handgun', name: 'Repeating Handgun', points: 10, group: 'experimantal_weapon' },
      { id: 'repeating_pistol', name: 'Repeating Pistol', points: 10, group: 'experimantal_weapon' },
    ]
  },
  {
    id: 'empire_bsb',
    name: 'Battle Standard Bearer',
    modelName: 'Bsb',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 80,
    stats: EMP_STATS.empireBSB,
    equipment: ['Hand Weapon'],
    magicAllowance: {
      maxItems: 1
    },
    specialRules: [],
    options: [
      { id: 'warhorse', name: 'War Horse', points: 10, group: 'mount', optionProfile: { name: 'War Horse', stats: EMP_STATS.Warhorse } },
      { id: 'barding', name: 'Barding', points: 0, requires: ['warhorse'] },

      { id: 'light_armor', name: 'Light armor', points: 0, group: 'armor' },
      { id: 'heavy_armor', name: 'Heavy armor', points: 0, group: 'armor' },
      { id: 'full_plate', name: 'Full plate', points: 0, group: 'armor' },
    ]
  },
]