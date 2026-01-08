import { UnitDefinition } from '@/types/army';
import { OG_STATS } from './stats';

export const regiments: UnitDefinition[] = [
  {
    id: 'orc_boyz',
    name: 'Orc Boyz',
    modelName: 'Boy',
    role: 'regiments',
    type: 'Infantry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 5,
    stats: OG_STATS.commonOrc,
    equipment: ['Hand Weapon', 'Light armor'],
    specialRules: ['Animosity', 'Ignore panic induced by Goblins.'],
    options: [
      { id: 'add_hw', name: 'Additional hand weapons', points: 1, group: 'weapon' },
      { id: 'spear', name: 'Spears', points: 2, group: 'weapon' },
      { id: 'halberd', name: 'Halberds', points: 1, group: 'weapon' },
      { id: 'great_wpn', name: 'Double handed weapons', points: 2, group: 'weapon' },
      { id: 'shield', name: 'Shields', points: 1 },
      { 
        id: 'champion',
        name: 'Orc Champion', 
        points: 20,
        maxPerUnit: 1,
        stats: OG_STATS.commonOrcChampion,
        isFixedCost: true
      }
    ]
  },
  {
    id: 'orc_arrer_boyz',
    name: 'Orc Arrer Boyz',
    modelName: 'Boy',
    role: 'regiments',
    type: 'Infantry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 7,
    stats: OG_STATS.commonOrc,
    equipment: ['Hand Weapon', 'Bows'],
    specialRules: ['Animosity', 'Ignore panic induced by Goblins.'],
    options: [
      { id: 'crossbow', name: 'Crossbows', points: 2, group: 'weapon', replaces: 'Bows' },
      { id: 'light_armor', name: 'Light armor', points: 0.5 },
      { 
        id: 'champion',
        name: 'Orc Champion', 
        points: 20,
        maxPerUnit: 1,
        stats: OG_STATS.commonOrcChampion,
        isFixedCost: true
      }
    ]
  },
  {
    id: 'orc_boar_boyz',
    name: 'Orc Boar Boyz',
    modelName: 'Boy',
    role: 'regiments',
    type: 'Cavalry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 15,
    stats: OG_STATS.commonOrc,
    additionalProfiles: [
      {
        name: 'War Boar',
        stats: OG_STATS.warBoar
      }
    ],
    equipment: ['Hand Weapon', 'Light armor', 'Shield', 'War Boars'],
    specialRules: ['Animosity', 'Ignore panic induced by Goblins.'],
    options: [
      { id: 'spear', name: 'Spears', points: 2, group: 'weapon' },
      { 
        id: 'champion',
        name: 'Orc Champion', 
        points: 20,
        maxPerUnit: 1,
        stats: OG_STATS.commonOrcChampion,
        isFixedCost: true
      }
    ]
  },
  {
    id: 'orc_biguns',
    name: 'Orc Big\'uns',
    modelName: 'Big\'un',
    role: 'regiments',
    type: 'Infantry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 7,
    stats: OG_STATS.bigun,
    equipment: ['Hand Weapon', 'Light armor'],
    specialRules: ['Animosity', 'Ignore panic induced by Goblins.'],
    options: [
      { id: 'add_hw', name: 'Additional hand weapons', points: 2, group: 'weapon' },
      { id: 'spear', name: 'Spears', points: 3, group: 'weapon' },
      { id: 'halberd', name: 'Halberds', points: 1, group: 'weapon' },
      { id: 'great_wpn', name: 'Double handed weapons', points: 3, group: 'weapon' },
      { id: 'shield', name: 'Shields', points: 1 },
      { 
        id: 'champion',
        name: 'Big\'un Champion', 
        points: 20,
        maxPerUnit: 1,
        stats: OG_STATS.bigunChampion,
        isFixedCost: true
      }
    ]
  },
  {
    id: 'orc_biguns_arrer_boyz',
    name: 'Orc Big\'uns Arrer Boyz',
    modelName: 'Big\'un',
    role: 'regiments',
    type: 'Infantry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 9,
    stats: OG_STATS.bigun,
    equipment: ['Hand Weapon', 'Bows'],
    specialRules: ['Animosity', 'Ignore panic induced by Goblins.'],
    options: [
      { id: 'crossbow', name: 'Crossbows', points: 2, group: 'weapon', replaces: 'Bows' },
      { id: 'light_armor', name: 'Light armor', points: 0.5 },
      { 
        id: 'champion',
        name: 'Big\'un Champion', 
        points: 20,
        maxPerUnit: 1,
        stats: OG_STATS.bigunChampion,
        isFixedCost: true
      }
    ]
  },
  {
    id: 'orc_biguns_boar_boyz',
    name: 'Orc Big\'un Boar Boyz',
    modelName: 'Big\'un',
    role: 'regiments',
    type: 'Cavalry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 15,
    stats: OG_STATS.bigun,
    additionalProfiles: [
      {
        name: 'War Boar',
        stats: OG_STATS.warBoar
      }
    ],
    equipment: ['Hand Weapon', 'Light armor', 'Shield', 'War Boars'],
    specialRules: ['Animosity', 'Ignore panic induced by Goblins.'],
    options: [
      { id: 'spear', name: 'Spears', points: 2, group: 'weapon' },
      { 
        id: 'champion',
        name: 'Big\'un Champion', 
        points: 20,
        maxPerUnit: 1,
        stats: OG_STATS.bigunChampion,
        isFixedCost: true
      }
    ]
  },
  {
    id: 'savage_orc',
    name: 'Savage Orcs',
    modelName: 'Savage Orc',
    role: 'regiments',
    type: 'Infantry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 8,
    stats: OG_STATS.savageOrc,
    equipment: ['Hand Weapon', 'magical tattoos'],
    specialRules: ['Animosity', 'frenzied', 'Ignore panic induced by Goblins.'],
    options: [
      { id: 'add_hw', name: 'Additional hand weapons', points: 1, group: 'weapon' },
      { id: 'spear', name: 'Spears', points: 1, group: 'weapon' },
      { id: 'great_wpn', name: 'Double handed weapons', points: 4, group: 'weapon' },
      { id: 'shield', name: 'Shields', points: 1 },
      { 
        id: 'champion',
        name: 'Savage Orc Champion', 
        points: 30,
        maxPerUnit: 1,
        stats: OG_STATS.savageChampion,
        isFixedCost: true
      }
    ]
  },
  {
    id: 'savage_arrer_boyz',
    name: 'Savage Orc Arrer Boyz',
    modelName: 'Savage Boy',
    role: 'regiments',
    type: 'Infantry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 10,
    stats: OG_STATS.savageOrc,
    equipment: ['Hand Weapon', 'Bows', 'magical tattoos'],
    specialRules: ['Animosity', 'frenzied', 'Ignore panic induced by Goblins.'],
    options: [
      { 
        id: 'champion',
        name: 'Savage Orc Champion', 
        points: 30,
        maxPerUnit: 1,
        stats: OG_STATS.savageChampion,
        isFixedCost: true
      }
    ]
  },
  {
    id: 'savage_boar_boyz',
    name: 'Savage Orc Boar Boyz',
    modelName: 'Savage Boy',
    role: 'regiments',
    type: 'Cavalry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 20,
    stats: OG_STATS.savageOrc,
    additionalProfiles: [
      {
        name: 'War Boar',
        stats: OG_STATS.warBoar
      }
    ],
    equipment: ['Hand Weapon', 'magical tattoos', 'Shield', 'War Boars'],
    specialRules: ['Animosity', 'frenzied', 'Ignore panic induced by Goblins.'],
    options: [
      { id: 'spear', name: 'Spears', points: 3, group: 'weapon' },
      { id: 'bow', name: 'Bows', points: 2, group: 'ranged_weapon' },
      { 
        id: 'champion',
        name: 'Savage Orc Champion', 
        points: 30,
        maxPerUnit: 1,
        stats: OG_STATS.savageChampion,
        isFixedCost: true
      }
    ]
  },
  {
    id: 'black_orc',
    name: 'Black Orcs',
    modelName: 'Black Orc',
    role: 'regiments',
    type: 'Infantry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 9,
    stats: OG_STATS.blackOrc,
    equipment: ['Hand Weapon', 'Light armor'],
    specialRules: ['Ignore panic induced by Goblins and other orc types'],
    options: [
      { id: 'add_hw', name: 'Additional hand weapons', points: 2, group: 'weapon' },
      { id: 'spear', name: 'Spears', points: 2, group: 'weapon' },
      { id: 'halberd', name: 'Halberds', points: 1, group: 'weapon' },
      { id: 'great_wpn', name: 'Double handed weapons', points: 3, group: 'weapon' },
      { id: 'heavy_armor', name: 'Heavy armor', points: 2, replaces: 'Light armor' },
      { id: 'shield', name: 'Shields', points: 1 },
      { 
        id: 'champion',
        name: 'Black Orc Champion', 
        points: 20,
        maxPerUnit: 1,
        stats: OG_STATS.blackOrcChampion,
        isFixedCost: true
      }
    ]
  },
  {
    id: 'goblin',
    name: 'Goblins',
    modelName: 'goblin',
    role: 'regiments',
    type: 'Infantry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 2.5,
    stats: OG_STATS.goblin,
    equipment: ['Hand Weapon'],
    specialRules: ['Animosity', 'Fear Elves'],
    options: [
      { id: 'spear', name: 'Spears', points: 0.5, group: 'weapon' },
      { id: 'great_wpn', name: 'Double handed weapons', points: 2, group: 'weapon' },
      { id: 'short_bow', name: 'Short Bows', points: 1, group: 'ranged_weapon' },
      { id: 'light_armor', name: 'Light armor', points: 0.5 },
      { id: 'shield', name: 'Shields', points: 0.5 },
      { 
        id: 'champion',
        name: 'Goblin Champion', 
        points: 10,
        maxPerUnit: 1,
        stats: OG_STATS.goblinChampion,
        isFixedCost: true
      }
    ]
  },
  {
    id: 'goblin_wolf_riders',
    name: 'Goblin Wolf Riders',
    modelName: 'Goblin',
    role: 'regiments',
    type: 'Cavalry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 9,
    stats: OG_STATS.goblin,
    additionalProfiles: [
      {
        name: 'Giant Wolf',
        stats: OG_STATS.giantWolf
      }
    ],
    equipment: ['Hand Weapon', 'Giant Wolf'],
    specialRules: ['Animosity', 'Fear Elves'],
    options: [
      { id: 'spear', name: 'Spears', points: 1, group: 'weapon' },
      { id: 'short_bow', name: 'Short Bows', points: 1, group: 'ranged_weapon' },
      { id: 'light_armor', name: 'Light armor', points: 1 },
      { id: 'shield', name: 'Shields', points: 1 },
      { id: 'standard bearer', name: 'Standard Bearer', points: 10, isFixedCost: true },
      { 
        id: 'champion',
        name: 'Goblin Champion', 
        points: 10,
        maxPerUnit: 1,
        stats: OG_STATS.goblinChampion,
        isFixedCost: true
      }
    ]
  },
  {
    id: 'forest_goblin',
    name: 'Forest Goblins',
    modelName: 'Forest Goblin',
    role: 'regiments',
    type: 'Infantry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 2.5,
    stats: OG_STATS.forestGoblin,
    equipment: ['Hand Weapon'],
    specialRules: ['Animosity', 'Fear Elves', 'Traverse woods without penalty'],
    options: [
      { id: 'spear', name: 'Spears', points: 0.5, group: 'weapon' },
      { id: 'great_wpn', name: 'Double handed weapons', points: 2, group: 'weapon' },
      { id: 'short_bow', name: 'Short Bows', points: 1, group: 'weapon', conflicts: ['shield'] },
      { id: 'shield', name: 'Shields', points: 0.5, conflicts: ['short_bow'] },
      { 
        id: 'champion',
        name: 'Goblin Champion', 
        points: 10,
        maxPerUnit: 1,
        stats: OG_STATS.forestGoblinChampion,
        isFixedCost: true
      }
    ]
  },
  {
    id: 'forest_goblin_spider_riders',
    name: 'Forest Goblin Spider Riders',
    modelName: 'Forest Goblin',
    role: 'regiments',
    type: 'Cavalry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 8,
    stats: OG_STATS.forestGoblin,
    additionalProfiles: [
      {
        name: 'Giant Spider',
        stats: OG_STATS.giantSpider
      }
    ],
    equipment: ['Hand Weapon', 'Giant Spider'],
    specialRules: ['Animosity', 'Fear Elves', 'Traverse woods without penalty', 'Traverse obstacles, rocky terrain, buildings, and cliffs without penalties', 'poisonous (+1S)'],
    options: [
      { id: 'spear', name: 'Spears', points: 1, group: 'weapon' },
      { id: 'short_bow', name: 'Short Bows', points: 1, group: 'ranged_weapon' },
      { id: 'shield', name: 'Shields', points: 1 },
      { id: 'standard bearer', name: 'Standard Bearer', points: 10, isFixedCost: true },
      { 
        id: 'champion',
        name: 'Goblin Champion', 
        points: 10,
        maxPerUnit: 1,
        stats: OG_STATS.goblinChampion,
        isFixedCost: true
      }
    ]
  },
  {
    id: 'night_goblin',
    name: 'Night Goblins',
    modelName: 'Night Goblin',
    role: 'regiments',
    type: 'Infantry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 2.5,
    stats: OG_STATS.nightGoblin,
    equipment: ['Hand Weapon'],
    specialRules: ['Animosity', 'Fear Elves', 'Hate Dwarfs'],
    options: [
      { id: 'spear', name: 'Spears', points: 0.5, group: 'weapon' },
      { id: 'great_wpn', name: 'Double handed weapons', points: 2, group: 'weapon' },
      { id: 'short_bow', name: 'Short Bows', points: 1, group: 'weapon', conflicts: ['shield'] },
      { id: 'shield', name: 'Shields', points: 0.5, conflicts: ['short_bow'] },
      { 
        id: 'fanatic', 
        name: 'Fanatic', 
        points: 30, 
        maxPerUnit: 3, 
        isFixedCost: true, 
        isExternalPoints: true,
        stats: OG_STATS.fanatic
      },
      { 
        id: 'mad_cap_mushroom', 
        name: 'Mad Cap Mushroom', 
        points: 20, 
        isFixedCost: true,
        requires: ['fanatic'],
        maxPerUnit: 1
      },
      { 
        id: 'champion',
        name: 'Goblin Champion', 
        points: 10,
        maxPerUnit: 1,
        stats: OG_STATS.goblinChampion,
        isFixedCost: true
      }
    ]
  },
]