import { UnitDefinition } from '@/types/army';
import { EMP_STATS } from './stats';

export const warmachines: UnitDefinition[] = [
  {
    id: 'mortar',
    name: 'Mortar',
    modelName: 'Mortar',
    role: 'warmachines',
    type: 'War Machine',
    minSize: 1,
    maxSize: 1,
    baseCrew: 3,
    pointsPerModel: 80,
    stats: EMP_STATS.warmachine,
    additionalProfiles:[
      {
        name: 'Crew',
        stats: EMP_STATS.trooper
      }
    ],
    equipment: ['Hand Weapon', 'Small stone thrower'],
    specialRules: [],
    options: [
      {
        id: 'crew',
        name: 'additional crew members',
        points: 5,
        maxPerUnit: 2,
        isFixedCost: true,
        addsCrew: 1,
      }
    ]
  },
  {
    id: 'cannon',
    name: 'Cannon',
    modelName: 'Cannon',
    role: 'warmachines',
    type: 'War Machine',
    minSize: 1,
    maxSize: 1,
    baseCrew: 3,
    pointsPerModel: 95,
    stats: EMP_STATS.warmachine,
    additionalProfiles:[
      {
        name: 'Crew',
        stats: EMP_STATS.trooper
      }
    ],
    equipment: ['Hand Weapon', 'Cannon'],
    specialRules: [],
    options: [
      {
        id: 'crew',
        name: 'additional crew members',
        points: 5,
        maxPerUnit: 2,
        isFixedCost: true,
        addsCrew: 1,
      }
    ]
  },
  {
    id: 'great_cannon',
    name: 'Great Cannon',
    modelName: 'Great Cannon',
    role: 'warmachines',
    type: 'War Machine',
    minSize: 1,
    maxSize: 1,
    baseCrew: 3,
    pointsPerModel: 110,
    stats: EMP_STATS.warmachine,
    additionalProfiles:[
      {
        name: 'Crew',
        stats: EMP_STATS.trooper
      }
    ],
    equipment: ['Hand Weapon', 'Great cannon'],
    specialRules: [],
    options: [
      {
        id: 'crew',
        name: 'additional crew members',
        points: 5,
        maxPerUnit: 2,
        isFixedCost: true,
        addsCrew: 1,
      }
    ]
  },
  {
    id: 'helblaster',
    name: 'Helblaster Volley Gun',
    modelName: 'Helblaster',
    role: 'warmachines',
    type: 'War Machine',
    minSize: 1,
    maxSize: 1,
    baseCrew: 3,
    pointsPerModel: 110,
    stats: EMP_STATS.warmachine,
    additionalProfiles:[
      {
        name: 'Crew',
        stats: EMP_STATS.trooper
      }
    ],
    equipment: ['Hand Weapon', 'Helblaster'],
    specialRules: [],
    options: [
      {
        id: 'crew',
        name: 'additional crew members',
        points: 5,
        maxPerUnit: 2,
        isFixedCost: true,
        addsCrew: 1,
      }
    ]
  },
  {
    id: 'warwagon',
    name: 'War Wagon',
    modelName: 'War wagon',
    role: 'warmachines',
    type: 'War Machine',
    minSize: 1,
    maxSize: 1,
    baseCrew: 6,
    baseMounts:2,
    pointsPerModel: 100,
    stats: EMP_STATS.warWagon,
    additionalProfiles:[
      {
        name: 'Engineer',
        stats: EMP_STATS.engineer
      },
      {
        name: 'Warhorse',
        stats: EMP_STATS.Warhorse
      }
    ],
    equipment: ['Hand Weapon', 'Experimental weapons', 'Light armour', 'Barding'],
    specialRules: [],
    options: []
  },
  {
    id: 'hotpot',
    name: 'Halfling Hot-Pot',
    modelName: 'Halfling Hot-Pot',
    role: 'warmachines',
    type: 'War Machine',
    restrictions: {
      requiresTag:'Halfling',
      maxPerArmy:1
    },
    minSize: 1,
    maxSize: 1,
    baseCrew: 3,
    pointsPerModel: 50,
    stats: EMP_STATS.warmachine,
    additionalProfiles:[
      {
        name: 'Crew',
        stats: EMP_STATS.halfling
      }
    ],
    equipment: ['Hand Weapon', 'Hot pot'],
    specialRules: [],
    options: [
      {
        id: 'crew',
        name: 'additional crew members',
        points: 5,
        maxPerUnit: 2,
        isFixedCost: true,
        addsCrew: 1,
      }
    ]
  },
  {
    id: 'steamtank',
    name: 'Steam Tank',
    modelName: 'Steam tank',
    role: 'warmachines',
    type: 'War Machine',
    restrictions: {
      sharedSelection: { 
        group: 'steam_tank', 
        max: 8 
      }
    },
    minSize: 1,
    maxSize: 1,
    baseCrew: 1,
    pointsPerModel: 200,
    stats: EMP_STATS.steamTank,
    additionalProfiles:[
      {
        name: 'Crew',
        stats: EMP_STATS.engineer
      }
    ],
    equipment: ['Hand Weapon', 'Repeating pistol'],
    specialRules: ['Steam tank', 'Terror', 'unbreakable', 'Steam Points'],
    options: [
      { id: 'cannon', name: 'Small Cannon', points: 50, category:'weapon', isFixedCost:true },
      { id: 'SteamCannon', name: 'Steam Cannon', points: 10, category:'weapon', isFixedCost:true },
      { id: 'repeatingHandgun', name: 'Repeating handgun', points: 10, group:'engineerWeapon', category:'weapon', isFixedCost:true },
      { id: 'LongRifle', name: 'Hochland long rifle', points: 10, group:'engineerWeapon', category:'weapon', isFixedCost:true },
    ]
  },
  {
    id: 'platformSteamtank',
    name: 'Fighting platform Steam Tank',
    modelName: 'Steam tank',
    role: 'warmachines',
    type: 'War Machine',
    restrictions: {
      sharedSelection: { 
        group: 'steam_tank', 
        max: 8 
      }
    },
    minSize: 1,
    maxSize: 1,
    baseCrew: 8,
    pointsPerModel: 250,
    stats: EMP_STATS.steamTank,
    additionalProfiles:[
      {
        name: 'Crew',
        stats: EMP_STATS.engineer
      }
    ],
    equipment: ['Hand Weapon', 'Experimental weapons'],
    specialRules: ['Steam tank', 'Terror', 'unbreakable', 'Steam Points'],
    options: []
  },
]