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
    equipment: ['Hand Weapon', 'Light armour', 'Shield'],
    specialRules: ['Elven stoicism'],
    options: [
      {id: 'heavy_armour', name: 'Heavy armour', points: 2, replaces: ['Light armour'], category:'armour' },
      {
        id: 'champion',
        name: 'Champion',
        points: 20,
        stats: HE_STATS.elvenChampion,
        isFixedCost: true,
         category:'command'
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
      {id: 'add_hw', name: 'Additional hand weapons', points: 0, group: 'weapon', category:'weapon' },
      {id: 'great_wpn', name: 'Double handed weapons', points: 2, group: 'weapon', category:'weapon'},
      {id: 'light_armour', name: 'Light armour', points: 0.5, category:'armour' },
      {
        id: 'champion',
        name: 'Champion',
        points: 20,
        stats: HE_STATS.elvenChampion,
        isFixedCost: true, 
        category:'command'
        
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
      {id: 'light_armour', name: 'Light armour', points: 0.5, category:'armour' },
      {
        id: 'champion',
        name: 'Champion',
        points: 20,
        stats: HE_STATS.elvenChampion,
        isFixedCost: true,
        category:'command'
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
    equipment: ['Hand Weapon', 'Lance', 'Light armour', 'Shield'],
    specialRules: ['Elven stoicism', 'Fast cavalry'],
    options: [
      {id: 'heavy_armour', name: 'Heavy armour', points: 7, replaces: ['Light armour'], conflicts: ['standard_bearer'], category:'armour' },
      {id: 'barding', name: 'Barding', points: 0, conflicts: ['standard_bearer'], category:'armour' },
      {id: 'standard_bearer', name: 'Standard Bearer', points: 10, isFixedCost: true, conflicts: ['heavy_armour', 'barding'], category:'command' },
      {
        id: 'champion',
        name: 'Commander',
        points: 30,
        stats: HE_STATS.elvenCommander,
        isFixedCost: true,
        category:'command'
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
    equipment: ['Hand Weapon', 'spears', 'Light armour', 'Bow'],
    specialRules: ['Elven stoicism', 'Fast cavalry', 'Skirmish', 'Vanguard', 'Fire & Flee'],
    options: [
      {id: 'shield', name: 'Shields', points: 2, category:'armour' },
      {id: 'long_bow', name: 'Long Bow', points: 2, replaces: ['Bow'], category:'weapon' },
      {id: 'standard_bearer', name: 'Standard Bearer', points: 10, isFixedCost: true, category:'command' },
      {
        id: 'champion',
        name: 'Champion',
        points: 20,
        stats: HE_STATS.elvenChampion,
        isFixedCost: true,
        category:'command'
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
    restrictions:{
      maxPerArmy: 1
    },
    pointsPerModel: 12,
    stats: HE_STATS.swordMasters,
    equipment: ['Hand Weapon', 'Double handed weapons', 'Light armour'],
    specialRules: ['Elven stoicism', 'Swift blades'],
    options: [
      {id: 'heavy_armour', name: 'Heavy armour', points: 2, replaces: ['Light armour'],category:'armour' },
      {
        id: 'Commander',
        name: 'Commander',
        points: 30,
        stats: HE_STATS.elvenCommander,
        isFixedCost: true,
        category:'command'
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
    restrictions:{
      maxPerArmy: 1
    },
    pointsPerModel: 27,
    stats: HE_STATS.elvenElite,
    additionalProfiles:[
      {
        name: 'Elven Steed',
        stats: HE_STATS.elvenSteed
      }
    ],
    equipment: ['Hand Weapon', 'Lance', 'Dragon armour', 'Shield', 'Barding'],
    specialRules: ['Elven stoicism'],
    options: [
      {
        id: 'Commander',
        name: 'Commander',
        points: 30,
        stats: HE_STATS.elvenCommander,
        isFixedCost: true,
        category:'command'
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
    equipment: ['Hand Weapon', 'Spear', 'Bow', 'Light armour', 'Shield'],
    specialRules: ['Elven stoicism'],
    options: [
      {id: 'long_bow', name: 'Long Bow', points: 2, replaces: ['Bow'], category:'weapon' },
      {
        id: 'champion',
        name: 'Champion',
        points: 20,
        stats: HE_STATS.elvenChampion,
        isFixedCost: true,
        category:'command'
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
    equipment: ['Hand Weapon', 'Long bow', 'Light armour', 'Shield'],
    specialRules: ['Elven stoicism', 'Skirmish', 'Scout', 'Hate Dark Elves'],
    options: [
      {
        id: 'champion',
        name: 'Champion',
        points: 20,
        stats: HE_STATS.elvenChampion,
        isFixedCost: true,
        category:'command'
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
    restrictions:{
      maxPerArmy: 1
    },
    pointsPerModel: 10,
    stats: HE_STATS.elvenElite,
    equipment: ['Hand Weapon', 'Halberds', 'Light armour'],
    specialRules: ['Elven stoicism', 'Immune to psychology'],
    options: [
      {id: 'heavy_armour', name: 'Heavy armour', points: 2, replaces: ['Light armour'], category:'armour' },
      {
        id: 'commander',
        name: 'Commander',
        points: 30,
        stats: HE_STATS.elvenCommander,
        isFixedCost: true,
        category:'command'
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
    restrictions:{
      maxPerArmy: 1
    },
    pointsPerModel: 13,
    stats: HE_STATS.handMaidens,
    equipment: ['Hand Weapon', 'Spear', 'Long bow', 'Light armour'],
    specialRules: ['Elven stoicism'],
    options: [
      {
        id: 'shield_maiden',
        name: 'Shield Maiden',
        points: 30,
        stats: HE_STATS.elvenCommander,
        isFixedCost: true,
        category:'command'
      }
    ]
  },
  {
    id: 'white_lions',
    name: 'White Lions of Chrace',
    modelName: 'White Lion',
    role: 'regiments',
    type: 'Infantry',
    tags:['White Lions'],
    minSize: 5,
    maxSize: null,
    restrictions:{
      maxPerArmy: 1
    },
    pointsPerModel: 14,
    stats: HE_STATS.whiteLions,
    equipment: ['Hand Weapon', 'Double handed weapon', 'Light armour', 'Lion pelt'],
    specialRules: ['Elven stoicism', 'Traverse woods without penalty', 'Lion axes'],
    options: [
      {
        id: 'commander',
        name: 'Commander',
        points: 30,
        stats: HE_STATS.elvenCommander,
        isFixedCost: true,
        category:'command'
      }
    ]
  },
]