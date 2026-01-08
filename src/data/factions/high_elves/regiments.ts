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
        name: 'Champion',
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
        name: 'Champion',
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
        name: 'Champion',
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
    equipment: ['Hand Weapon', 'Lance', 'Light armor', 'Shield'],
    specialRules: ['Elven stoicism', 'Fast cavalry'],
    options: [
      {id: 'heavy_armor', name: 'Heavy armor', points: 7, replaces: 'Light armor', conflicts: ['standard_bearer'] },
      {id: 'barding', name: 'Barding', points: 0, conflicts: ['standard_bearer'] },
      {id: 'standard_bearer', name: 'Standard Bearer', points: 10, isFixedCost: true, conflicts: ['heavy_armor', 'barding'] },
      {
        id: 'champion',
        name: 'Commander',
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
        name: 'Champion',
        points: 20,
        maxPerUnit: 1,
        stats: HE_STATS.elvenChampion,
        isFixedCost: true
      }
    ]
  },
  {
    id: 'sword_masters',
    name: 'Sword Masters of Hoeth',
    modelName: 'Sword Master',
    role: 'regiments',
    type: 'Infantry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 12,
    stats: HE_STATS.swordMasters,
    equipment: ['Hand Weapon', 'Double handed weapons', 'Light armor'],
    specialRules: ['Elven stoicism', 'Swift blades'],
    options: [
      {id: 'heavy_armor', name: 'Heavy armor', points: 2, replaces: 'Light armor' },
      {
        id: 'Commander',
        name: 'Commander',
        points: 30,
        maxPerUnit: 1,
        stats: HE_STATS.elvenCommander,
        isFixedCost: true
      }
    ]
  },
  {
    id: 'dragon_princes',
    name: 'Dragon Princes',
    modelName: 'Elite',
    role: 'regiments',
    type: 'Cavalry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 27,
    stats: HE_STATS.elvenElite,
    additionalProfiles:[
      {
        name: 'Elven Steed',
        stats: HE_STATS.elvenSteed
      }
    ],
    equipment: ['Hand Weapon', 'Lance', 'Dragon armor', 'Shield', 'Barding'],
    specialRules: ['Elven stoicism'],
    options: [
      {
        id: 'Commander',
        name: 'Commander',
        points: 30,
        maxPerUnit: 1,
        stats: HE_STATS.elvenCommander,
        isFixedCost: true
      }
    ]
  },
  {
    id: 'sea_guards',
    name: 'Lothern Sea Guards',
    modelName: 'Warrior',
    role: 'regiments',
    type: 'Infantry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 10,
    stats: HE_STATS.elvenWarrior,
    equipment: ['Hand Weapon', 'Spear', 'Bow', 'Light armor', 'Shield'],
    specialRules: ['Elven stoicism'],
    options: [
      {id: 'long_bow', name: 'Long Bow', points: 2, replaces: 'Bow' },
      {
        id: 'champion',
        name: 'Champion',
        points: 20,
        maxPerUnit: 1,
        stats: HE_STATS.elvenChampion,
        isFixedCost: true
      }
    ]
  },
  {
    id: 'shadow_warriors',
    name: 'Shadow Warriors',
    modelName: 'Warrior',
    role: 'regiments',
    type: 'Infantry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 15,
    stats: HE_STATS.elvenWarrior,
    equipment: ['Hand Weapon', 'Long bow', 'Light armor', 'Shield'],
    specialRules: ['Elven stoicism', 'Skirmish', 'Scout', 'Hate Dark Elves'],
    options: [
      {
        id: 'champion',
        name: 'Champion',
        points: 20,
        maxPerUnit: 1,
        stats: HE_STATS.elvenChampion,
        isFixedCost: true
      }
    ]
  },
  {
    id: 'phoenix_guards',
    name: 'Phoenix Guards',
    modelName: 'Elite',
    role: 'regiments',
    type: 'Infantry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 10,
    stats: HE_STATS.elvenElite,
    equipment: ['Hand Weapon', 'Halberds', 'Light armor'],
    specialRules: ['Elven stoicism', 'Immune to psychology'],
    options: [
      {id: 'heavy_armor', name: 'Heavy armor', points: 2, replaces: 'Light armor' },
      {
        id: 'commander',
        name: 'Commander',
        points: 30,
        maxPerUnit: 1,
        stats: HE_STATS.elvenCommander,
        isFixedCost: true
      }
    ]
  },
  {
    id: 'hand_maidens',
    name: 'Hand Maidens of the Everqueen',
    modelName: 'Hand Maiden',
    role: 'regiments',
    type: 'Infantry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 13,
    stats: HE_STATS.handMaidens,
    equipment: ['Hand Weapon', 'Spear', 'Long bow', 'Light armor'],
    specialRules: ['Elven stoicism'],
    options: [
      {
        id: 'shield_maiden',
        name: 'Shield Maiden',
        points: 30,
        maxPerUnit: 1,
        stats: HE_STATS.elvenCommander,
        isFixedCost: true
      }
    ]
  },
  {
    id: 'white_lions',
    name: 'White Lions of Chrace',
    modelName: 'White Lion',
    role: 'regiments',
    type: 'Infantry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 14,
    stats: HE_STATS.whiteLions,
    equipment: ['Hand Weapon', 'Double handed weapon', 'Light armor', 'Lion pelt'],
    specialRules: ['Elven stoicism', 'Traverse woods without penalty', 'Lion axes'],
    options: [
      {
        id: 'commander',
        name: 'Commander',
        points: 30,
        maxPerUnit: 1,
        stats: HE_STATS.elvenCommander,
        isFixedCost: true
      }
    ]
  },
]