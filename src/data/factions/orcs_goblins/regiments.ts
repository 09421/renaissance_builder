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
    modelName: 'Arrer Boy',
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
    modelName: 'Boar Boy',
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
]