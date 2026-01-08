import { UnitDefinition } from '@/types/army';
import { HE_STATS } from './stats';

export const regiments: UnitDefinition[] = [
  {
    id: 'spearmen',
    name: 'Spearmen',
    modelName: 'Warrior',
    role: 'regiments',
    type: 'Infantry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 8,
    stats: HE_STATS.elvenWarrior,
    equipment: ['Hand Weapon', 'Light armor', 'Shield'],
    specialRules: ['Elven stoicism'],
    options: [
      {id: 'heavy_armor', name: 'Heavy armor', points: 2, replaces: 'Light armor' },
      {
        id: 'champion',
        name: 'Elven Champion',
        points: 20,
        maxPerUnit: 1,
        stats: HE_STATS.elvenChampion,
        isFixedCost: true
      }
    ]
  },
  {
    id: 'warriors',
    name: 'Warriors',
    modelName: 'Warrior',
    role: 'regiments',
    type: 'Infantry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 7,
    stats: HE_STATS.elvenWarrior,
    equipment: ['Hand Weapon', 'Shield'],
    specialRules: ['Elven stoicism'],
    options: [
      {id: 'add_hw', name: 'Additional hand weapons', points: 0, group: 'weapon' },
      {id: 'great_wpn', name: 'Double handed weapons', points: 2, group: 'weapon'},
      {id: 'light_armor', name: 'Light armor', points: 0.5 },
      {
        id: 'champion',
        name: 'Elven Champion',
        points: 20,
        maxPerUnit: 1,
        stats: HE_STATS.elvenChampion,
        isFixedCost: true
      }
    ]
  },
  {
    id: 'archers',
    name: 'Archers',
    modelName: 'Warrior',
    role: 'regiments',
    type: 'Infantry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 9,
    stats: HE_STATS.elvenWarrior,
    equipment: ['Hand Weapon', 'Long bow'],
    specialRules: ['Elven stoicism'],
    options: [
      {id: 'light_armor', name: 'Light armor', points: 0.5 },
      {
        id: 'champion',
        name: 'Elven Champion',
        points: 20,
        maxPerUnit: 1,
        stats: HE_STATS.elvenChampion,
        isFixedCost: true
      }
    ]
  },
  {
    id: 'silver_helm',
    name: 'Silver Helm Knights',
    modelName: 'Elite',
    role: 'regiments',
    type: 'Cavalry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 20,
    stats: HE_STATS.elvenElite,
    additionalProfiles:[
      {
        name: 'Elven Steed',
        stats: HE_STATS.elvenSteed
      }
    ],
    equipment: ['Hand Weapon', 'Lances', 'Light armor', 'Shield'],
    specialRules: ['Elven stoicism', 'Fast cavalry'],
    options: [
      {id: 'heavy_armor', name: 'Heavy armor', points: 7, replaces: 'Light armor', conflicts: ['standard_bearer'] },
      {id: 'barding', name: 'Barding', points: 0, conflicts: ['standard_bearer'] },
      {id: 'standard_bearer', name: 'Standard Bearer', points: 10, isFixedCost: true, conflicts: ['heavy_armor', 'barding'] },
      {
        id: 'champion',
        name: 'Elven Commander',
        points: 30,
        maxPerUnit: 1,
        stats: HE_STATS.elvenCommander,
        isFixedCost: true
      }
    ]
  },
  {
    id: 'reaver_knights',
    name: 'Reaver Knights',
    modelName: 'Warrior',
    role: 'regiments',
    type: 'Cavalry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 22,
    stats: HE_STATS.elvenWarrior,
    additionalProfiles:[
      {
        name: 'Elven Steed',
        stats: HE_STATS.elvenSteed
      }
    ],
    equipment: ['Hand Weapon', 'spears', 'Light armor', 'Bow'],
    specialRules: ['Elven stoicism', 'Fast cavalry', 'Skirmish', 'Vanguard', 'Fire & Flee'],
    options: [
      {id: 'shield', name: 'Shields', points: 2 },
      {id: 'long_bow', name: 'Long Bow', points: 2, replaces: 'Bow' },
      {id: 'standard_bearer', name: 'Standard Bearer', points: 10, isFixedCost: true },
      {
        id: 'champion',
        name: 'Elven Champion',
        points: 30,
        maxPerUnit: 1,
        stats: HE_STATS.elvenChampion,
        isFixedCost: true
      }
    ]
  },
]