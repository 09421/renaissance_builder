import { UnitDefinition } from '@/types/army';
import { OG_STATS } from './stats';

export const characters: UnitDefinition[] = [
  {
    id: 'blackorc_warlord',
    name: 'Black Orc Warlord',
    modelName: 'Black Orc Warlord',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 148,
    stats: OG_STATS.blackOrcWarlord,
    equipment: ['Hand Weapon'],
    magicAllowance: {
      maxItems: 3
    },
    specialRules: ['Quells animosity', 'Ignore panic induced by Goblins and other orc types'],
    options: [
      { id: 'war_boar', name: 'War Boar', points: 33, group: 'mount', optionProfile: { name: 'War Boar', stats: OG_STATS.warBoar } },
      { id: 'wyvern', name: 'Wyvern', points: 167, group: 'mount', optionProfile: { name: 'Wyvern', stats: OG_STATS.wyvern } },

      { id: 'shield', name: 'Shield', points: 0 },
      { id: 'light_armor', name: 'Light armor', points: 0, group: 'armor' },
      { id: 'heavy_armor', name: 'Heavy armor', points: 0, group: 'armor' },

      { id: 'add_hw', name: 'Additional hand weapon', points: 0, group: 'weapon'},
      { id: 'spear', name: 'Spear,', points: 0, group: 'weapon' },
      { id: 'halberd', name: 'Halberd,', points: 0, group: 'weapon' },
      { id: 'great_weapon', name: 'Double handed weapon', points: 0, group: 'weapon' },
    ]
  },
  {
    id: 'blackorc_hero',
    name: 'Black Orc Hero',
    modelName: 'Black Orc Hero',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 89,
    stats: OG_STATS.blackOrcHero,
    equipment: ['Hand Weapon'],
    magicAllowance: {
      maxItems: 3
    },
    specialRules: ['Quells animosity', 'Ignore panic induced by Goblins and other orc types'],
    options: [
      { id: 'war_boar', name: 'War Boar', points: 24, group: 'mount', optionProfile: { name: 'War Boar', stats: OG_STATS.warBoar } },
      { id: 'wyvern', name: 'Wyvern', points: 158, group: 'mount', optionProfile: { name: 'Wyvern', stats: OG_STATS.wyvern } },

      { id: 'shield', name: 'Shield', points: 0 },
      { id: 'light_armor', name: 'Light armor', points: 0, group: 'armor' },
      { id: 'heavy_armor', name: 'Heavy armor', points: 0, group: 'armor' },

      { id: 'add_hw', name: 'Additional hand weapon', points: 0, group: 'weapon'},
      { id: 'spear', name: 'Spear,', points: 0, group: 'weapon' },
      { id: 'halberd', name: 'Halberd,', points: 0, group: 'weapon' },
      { id: 'great_weapon', name: 'Double handed weapon', points: 0, group: 'weapon' },
    ]
  },
  {
    id: 'orc_warlord',
    name: 'Orc Warlord',
    modelName: 'Orc Warlord',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 100,
    stats: OG_STATS.OrcWarlord,
    equipment: ['Hand Weapon'],
    magicAllowance: {
      maxItems: 3
    },
    specialRules: ['Animosity', 'Ignore panic induced by Goblins'],
    options: [
      { id: 'war_boar', name: 'War Boar', points: 21, group: 'mount', optionProfile: { name: 'War Boar', stats: OG_STATS.warBoar } },
      { id: 'boar_chariot', name: 'Boar Chariot', points: 52, group: 'mount', optionProfile: { name: 'War Boar', stats: OG_STATS.warBoar } },
      { id: 'wyvern', name: 'Wyvern', points: 155, group: 'mount', optionProfile: { name: 'Wyvern', stats: OG_STATS.wyvern } },

      { id: 'shield', name: 'Shield', points: 0 },
      { id: 'light_armor', name: 'Light armor', points: 0 },

      { id: 'add_hw', name: 'Additional hand weapon', points: 0, group: 'weapon'},
      { id: 'spear', name: 'Spear,', points: 0, group: 'weapon' },
      { id: 'halberd', name: 'Halberd,', points: 0, group: 'weapon' },
      { id: 'great_weapon', name: 'Double handed weapon', points: 0, group: 'weapon' },
      { id: 'bow', name: 'Bow', points: 10, group: 'ranged_weapon' },
      { id: 'crossbow', name: 'Crossbow', points: 10, group: 'ranged_weapon' },
    ]
  },
  {
    id: 'orc_hero',
    name: 'Orc Hero',
    modelName: 'Orc Hero',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 60,
    stats: OG_STATS.OrcHero,
    equipment: ['Hand Weapon'],
    magicAllowance: {
      maxItems: 2
    },
    specialRules: ['Animosity', 'Ignore panic induced by Goblins'],
    options: [
      { id: 'war_boar', name: 'War Boar', points: 16, group: 'mount', optionProfile: { name: 'War Boar', stats: OG_STATS.warBoar } },
      { id: 'boar_chariot', name: 'Boar Chariot', points: 52, group: 'mount', optionProfile: { name: 'War Boar', stats: OG_STATS.warBoar } },
      { id: 'wyvern', name: 'Wyvern', points: 150, group: 'mount', optionProfile: { name: 'Wyvern', stats: OG_STATS.wyvern } },

      { id: 'shield', name: 'Shield', points: 0 },
      { id: 'light_armor', name: 'Light armor', points: 0 },

      { id: 'add_hw', name: 'Additional hand weapon', points: 0, group: 'weapon'},
      { id: 'spear', name: 'Spear,', points: 0, group: 'weapon' },
      { id: 'halberd', name: 'Halberd,', points: 0, group: 'weapon' },
      { id: 'great_weapon', name: 'Double handed weapon', points: 0, group: 'weapon' },
      { id: 'bow', name: 'Bow', points: 10, group: 'ranged_weapon' },
      { id: 'crossbow', name: 'Crossbow', points: 10, group: 'ranged_weapon' },
    ]
  },
  {
    id: 'savage_warlord',
    name: 'Savage Orc Warlord',
    modelName: 'Savage Orc Warlord',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 130,
    stats: OG_STATS.OrcWarlord,
    equipment: ['Hand Weapon', 'Magical Tattoos'],
    magicAllowance: {
      maxItems: 3
    },
    specialRules: ['Animosity', 'Frenzy', 'Magical Tattoos', 'Ignore panic induced by Goblins'],
    options: [
      { id: 'war_boar', name: 'War Boar', points: 27, group: 'mount', optionProfile: { name: 'War Boar', stats: OG_STATS.warBoar } },
      { id: 'wyvern', name: 'Wyvern', points: 161, group: 'mount', optionProfile: { name: 'Wyvern', stats: OG_STATS.wyvern } },

      { id: 'shield', name: 'Shield', points: 0 },

      { id: 'add_hw', name: 'Additional hand weapon', points: 0, group: 'weapon'},
      { id: 'spear', name: 'Spear,', points: 0, group: 'weapon' },
      { id: 'great_weapon', name: 'Double handed weapon', points: 0, group: 'weapon' },
      { id: 'bow', name: 'Bow', points: 10, group: 'ranged_weapon' },
    ]
  },
  {
    id: 'savage_hero',
    name: 'Savage Orc Hero',
    modelName: 'Savage Orc Hero',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 90,
    stats: OG_STATS.OrcHero,
    equipment: ['Hand Weapon', 'Magical Tattoos'],
    magicAllowance: {
      maxItems: 3
    },
    specialRules: ['Animosity', 'Frenzy', 'Magical Tattoos', 'Ignore panic induced by Goblins'],
    options: [
      { id: 'war_boar', name: 'War Boar', points: 20, group: 'mount', optionProfile: { name: 'War Boar', stats: OG_STATS.warBoar } },
      { id: 'wyvern', name: 'Wyvern', points: 154, group: 'mount', optionProfile: { name: 'Wyvern', stats: OG_STATS.wyvern } },

      { id: 'shield', name: 'Shield', points: 0 },

      { id: 'add_hw', name: 'Additional hand weapon', points: 0, group: 'weapon'},
      { id: 'spear', name: 'Spear,', points: 0, group: 'weapon' },
      { id: 'great_weapon', name: 'Double handed weapon', points: 0, group: 'weapon' },
      { id: 'bow', name: 'Bow', points: 10, group: 'ranged_weapon' },
    ]
  },
  {
    id: 'goblin_warlord',
    name: 'Goblin Warlord',
    modelName: 'Goblin Warlord',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 60,
    stats: OG_STATS.goblinWarlord,
    equipment: ['Hand Weapon'],
    magicAllowance: {
      maxItems: 3
    },
    specialRules: ['Animosity'],
    options: [
      { id: 'giant_wolf', name: 'Giant Wolf', points: 14, group: 'mount', optionProfile: { name: 'Giant Wolf', stats: OG_STATS.giantWolf } },
      { id: 'wolf_chariot', name: 'Wolf Chariot', points: 44, group: 'mount', optionProfile: { name: 'Wolf Boar', stats: OG_STATS.giantWolf } },
      { id: 'monstrou_spider', name: 'Monstrous Spider', points: 40, group: 'mount', optionProfile: { name: 'Monstrous Spider', stats: OG_STATS.monstrousSpider } },

      { id: 'shield', name: 'Shield', points: 0 },
      { id: 'light_armor', name: 'Light armor', points: 0 },

      { id: 'add_hw', name: 'Additional hand weapon', points: 0, group: 'weapon'},
      { id: 'spear', name: 'Spear,', points: 0, group: 'weapon' },
      { id: 'great_weapon', name: 'Double handed weapon', points: 0, group: 'weapon' },
      { id: 'short_bow', name: 'Short Bow', points: 10, group: 'ranged_weapon' },
    ]
  },
  {
    id: 'goblin_hero',
    name: 'Goblin Hero',
    modelName: 'Goblin Hero',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 36,
    stats: OG_STATS.goblinHero,
    equipment: ['Hand Weapon'],
    magicAllowance: {
      maxItems: 2
    },
    specialRules: ['Animosity'],
    options: [
      { id: 'giant_wolf', name: 'Giant Wolf', points: 11, group: 'mount', optionProfile: { name: 'Giant Wolf', stats: OG_STATS.giantWolf } },
      { id: 'wolf_chariot', name: 'Wolf Chariot', points: 44, group: 'mount', optionProfile: { name: 'Wolf Boar', stats: OG_STATS.giantWolf } },
      { id: 'monstrou_spider', name: 'Monstrous Spider', points: 37, group: 'mount', optionProfile: { name: 'Monstrous Spider', stats: OG_STATS.monstrousSpider } },

      { id: 'shield', name: 'Shield', points: 0 },
      { id: 'light_armor', name: 'Light armor', points: 0 },

      { id: 'add_hw', name: 'Additional hand weapon', points: 0, group: 'weapon'},
      { id: 'spear', name: 'Spear,', points: 0, group: 'weapon' },
      { id: 'bow', name: 'Bow', points: 10, group: 'ranged_weapon' },
    ]
  },
  {
    id: 'forest_goblin_warlord',
    name: 'Forest Goblin Warlord',
    modelName: 'Forest Goblin Warlord',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 60,
    stats: OG_STATS.goblinWarlord,
    equipment: ['Hand Weapon'],
    magicAllowance: {
      maxItems: 3
    },
    specialRules: ['Animosity'],
    options: [
      { id: 'giant_spider', name: 'Giant Spider', points: 13, group: 'mount', optionProfile: { name: 'Giant Spider', stats: OG_STATS.giantSpider } },
      { id: 'monstrou_spider', name: 'Monstrous Spider', points: 40, group: 'mount', optionProfile: { name: 'Monstrous Spider', stats: OG_STATS.monstrousSpider } },

      { id: 'shield', name: 'Shield', points: 0 },

      { id: 'add_hw', name: 'Additional hand weapon', points: 0, group: 'weapon'},
      { id: 'spear', name: 'Spear,', points: 0, group: 'weapon' },
      { id: 'great_weapon', name: 'Double handed weapon', points: 0, group: 'weapon' },
      { id: 'short_bow', name: 'Short Bow', points: 10, group: 'ranged_weapon' },
    ]
  },
  {
    id: 'forest_goblin_hero',
    name: 'Forest Goblin Hero',
    modelName: 'Forest Goblin Hero',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 36,
    stats: OG_STATS.goblinHero,
    equipment: ['Hand Weapon'],
    magicAllowance: {
      maxItems: 2
    },
    specialRules: ['Animosity'],
    options: [
      { id: 'giant_spider', name: 'Giant Spider', points: 10, group: 'mount', optionProfile: { name: 'Giant Spider', stats: OG_STATS.giantSpider } },
      { id: 'monstrou_spider', name: 'Monstrous Spider', points: 37, group: 'mount', optionProfile: { name: 'Monstrous Spider', stats: OG_STATS.monstrousSpider } },

      { id: 'shield', name: 'Shield', points: 0 },
      { id: 'light_armor', name: 'Light armor', points: 0 },

      { id: 'add_hw', name: 'Additional hand weapon', points: 0, group: 'weapon'},
      { id: 'spear', name: 'Spear,', points: 0, group: 'weapon' },
      { id: 'bow', name: 'Bow', points: 10, group: 'ranged_weapon' },
    ]
  },
  {
    id: 'night_goblin_warlord',
    name: 'Night Goblin Warlord',
    modelName: 'Night Goblin Warlord',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 60,
    stats: OG_STATS.goblinWarlord,
    equipment: ['Hand Weapon'],
    magicAllowance: {
      maxItems: 3
    },
    specialRules: ['Animosity'],
    options: [
      { id: 'monstrou_spider', name: 'Monstrous Spider', points: 40, group: 'mount', optionProfile: { name: 'Monstrous Spider', stats: OG_STATS.monstrousSpider } },

      { id: 'shield', name: 'Shield', points: 0 },

      { id: 'add_hw', name: 'Additional hand weapon', points: 0, group: 'weapon'},
      { id: 'spear', name: 'Spear,', points: 0, group: 'weapon' },
      { id: 'great_weapon', name: 'Double handed weapon', points: 0, group: 'weapon' },
      { id: 'short_bow', name: 'Short Bow', points: 10, group: 'ranged_weapon' },
    ]
  },
  {
    id: 'night_goblin_hero',
    name: 'Night Goblin Hero',
    modelName: 'Night Goblin Hero',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 36,
    stats: OG_STATS.goblinHero,
    equipment: ['Hand Weapon'],
    magicAllowance: {
      maxItems: 2
    },
    specialRules: ['Animosity'],
    options: [
      { id: 'monstrou_spider', name: 'Monstrous Spider', points: 37, group: 'mount', optionProfile: { name: 'Monstrous Spider', stats: OG_STATS.monstrousSpider } },

      { id: 'shield', name: 'Shield', points: 0 },
      { id: 'light_armor', name: 'Light armor', points: 0 },

      { id: 'add_hw', name: 'Additional hand weapon', points: 0, group: 'weapon'},
      { id: 'spear', name: 'Spear,', points: 0, group: 'weapon' },
      { id: 'bow', name: 'Bow', points: 10, group: 'ranged_weapon' },
    ]
  },
]