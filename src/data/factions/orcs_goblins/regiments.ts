import { UnitDefinition } from '@/types/army';

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
    stats: { M: 4, Ws: 3, Bs: 3, S: 3, T: 4, W: 1, I: 2, A: 1, Ld: 7 },
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
        stats: { Ws:4, Bs:4, S:4, I:3, A:2 },
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
    stats: { M: 4, Ws: 3, Bs: 3, S: 3, T: 4, W: 1, I: 2, A: 1, Ld: 7 },
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
        stats: { Ws:4, Bs:4, S:4, I:3, A:2 },
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
    stats: { M: 4, Ws: 3, Bs: 3, S: 3, T: 4, W: 1, I: 2, A: 1, Ld: 7 },
    additionalProfiles: [
      {
        name: 'War Boar',
        stats: { M:7, Ws:4, Bs:0, S:3, T:4, W:1, I:3, A:1, Ld:3 } 
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
        stats: { Ws:4, Bs:4, S:4, I:3, A:2 },
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
    stats: { M: 4, Ws: 4, Bs: 3, S: 4, T: 4, W: 1, I: 3, A: 1, Ld: 7 },
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
        stats: { Ws:5, Bs:4, I:4, A:2 },
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
    stats: { M: 4, Ws: 4, Bs: 3, S: 4, T: 4, W: 1, I: 3, A: 1, Ld: 7 },
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
        stats: { Ws:5, Bs:4, I:4, A:2 },
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
    stats: { M: 4, Ws: 4, Bs: 3, S: 4, T: 4, W: 1, I: 3, A: 1, Ld: 7 },
    additionalProfiles: [
      {
        name: 'War Boar',
        stats: { M:7, Ws:4, Bs:0, S:3, T:4, W:1, I:3, A:1, Ld:3 } 
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
        stats: { Ws:5, Bs:4, I:4, A:2 },
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
    stats: { M: 4, Ws: 3, Bs: 3, S: 3, T: 4, W: 1, I: 2, A: 1, Ld: 7 },
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
        stats: { Ws:4, Bs:4, S:4, I:3, A:2 },
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
    stats: { M: 4, Ws: 3, Bs: 3, S: 3, T: 4, W: 1, I: 2, A: 1, Ld: 7 },
    equipment: ['Hand Weapon', 'Bows', 'magical tattoos'],
    specialRules: ['Animosity', 'frenzied', 'Ignore panic induced by Goblins.'],
    options: [
      { 
        id: 'champion',
        name: 'Savage Orc Champion', 
        points: 30,
        maxPerUnit: 1,
        stats: { Ws:4, Bs:4, S:4, I:3, A:2 },
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
    stats: { M: 4, Ws: 3, Bs: 3, S: 3, T: 4, W: 1, I: 2, A: 1, Ld: 7 },
    additionalProfiles: [
      {
        name: 'War Boar',
        stats: { M:7, Ws:4, Bs:0, S:3, T:4, W:1, I:3, A:1, Ld:3 } 
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
        stats: { Ws:4, Bs:4, S:4, I:3, A:2 },
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
    stats: { M: 4, Ws: 4, Bs: 3, S: 4, T: 4, W: 1, I: 2, A: 1, Ld: 8 },
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
        stats: { Ws:5, Bs:4, S:5, I:3, A:2, Ld:8 },
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
    stats: { M: 4, Ws: 2, Bs: 3, S: 3, T: 3, W: 1, I: 2, A: 1, Ld: 5 },
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
        stats: { Ws:3, Bs:4, S:4, I:3, A:2 },
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
    stats: { M: 4, Ws: 2, Bs: 3, S: 3, T: 3, W: 1, I: 2, A: 1, Ld: 5 },
    additionalProfiles: [
      {
        name: 'Giant Wolf',
        stats: { M:9, Ws:4, Bs:0, S:3, T:3, W:1, I:3, A:1, Ld:3 } 
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
        stats: { Ws:3, Bs:4, S:4, I:3, A:2 },
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
    stats: { M: 4, Ws: 2, Bs: 3, S: 3, T: 3, W: 1, I: 2, A: 1, Ld: 5 },
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
        stats: { Ws:3, Bs:4, S:4, I:3, A:2 },
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
    stats: { M: 4, Ws: 2, Bs: 3, S: 3, T: 3, W: 1, I: 2, A: 1, Ld: 5 },
    additionalProfiles: [
      {
        name: 'Giant Spider',
        stats: { M:9, Ws:4, Bs:0, S:3, T:3, W:1, I:3, A:1, Ld:3 } 
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
        stats: { Ws:3, Bs:4, S:4, I:3, A:2 },
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
    stats: { M: 4, Ws: 2, Bs: 3, S: 3, T: 3, W: 1, I: 2, A: 1, Ld: 5 },
    equipment: ['Hand Weapon'],
    specialRules: ['Animosity', 'Fear Elves', 'Hate Dwarfs'],
    options: [
      { id: 'spear', name: 'Spears', points: 0.5, group: 'weapon' },
      { id: 'great_wpn', name: 'Double handed weapons', points: 2, group: 'weapon' },
      { id: 'short_bow', name: 'Short Bows', points: 1, group: 'weapon', conflicts: ['shield'] },
      { id: 'shield', name: 'Shields', points: 0.5, conflicts: ['short_bow'] },
      { id: 'fanatic', name: 'Fanatic', points: 30, maxPerUnit: 3, isFixedCost: true, isExternalPoints: true, },
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
        stats: { Ws:3, Bs:4, S:4, I:3, A:2 },
        isFixedCost: true
      }
    ]
  },
]