import { UnitDefinition } from '@/types/army';

export const characters: UnitDefinition[] = [
  {
    id: 'orc_hero',
    name: 'Orc Hero',
    modelName: 'Orc Hero',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 60,
    stats: { M: 4, Ws: 5, Bs: 5, S: 4, T: 5, W: 2, I: 4, A: 3, Ld: 8 },
    equipment: ['Hand Weapon'],
    specialRules: ['Animosity', 'Ignore panic induced by Goblins.'],
    options: [
      { 
        id: 'war_boar', 
        name: 'War Boar', 
        points: 16, 
        group: 'mount',
        optionProfile: 
        {
          name: 'War Boar',
          stats: { M:7, Ws:4, Bs:0, S:3, T:4, W:1, I:3, A:1, Ld:3 } 
        },
      },
      { id: 'boat_chariot', name: 'Boar Chariot', points: 52, group: 'mount' },
      { id: 'wyvern', name: 'Wyvern', points: 150, group: 'mount' },
      { id: 'shield', name: 'Shield', points: 0 },
      { id: 'light_armor', name: 'Light armor', points: 0 },
      { id: 'add_hw', name: 'Additional hand weapon', points: 0, group: 'weapon'},
      { id: 'spear', name: 'Spear,', points: 0, group: 'weapon' },
      { id: 'halberd', name: 'Halberd,', points: 0, group: 'weapon' },
      { id: 'bow', name: 'Bow', points: 10, group: 'ranged_weapon' },
      { id: 'crossbow', name: 'Crossbow', points: 10, group: 'ranged_weapon' },
    ]
  },
]