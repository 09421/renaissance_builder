import { UnitDefinition } from '@/types/army';
import { OG_STATS } from './stats';

export const warmachines: UnitDefinition[] = [

  {
    id: 'spear_chukka_goblin',
    name: 'Spear Chukka, Goblin',
    modelName: 'Spear Chukka',
    role: 'warmachines',
    type: 'War Machine',
    minSize: 1,
    maxSize: 1,
    baseCrew: 3,
    pointsPerModel: 42.5,
    stats: OG_STATS.warmachine,
    additionalProfiles:[
      {
        name: 'Crew',
        stats: OG_STATS.goblin
      }
    ],
    equipment: ['Hand Weapon', 'Bolt thrower'],
    specialRules: ['Animosity', 'Fear Elves'],
    options: [
      {
        id: 'crew',
        name: 'additional crew members',
        points: 2.5,
        maxPerUnit: 2,
        isFixedCost: true,
        isExtraCrew: true,
      }
    ]
  },
  {
    id: 'spear_chukka_orc',
    name: 'Spear Chukka, Orcs',
    modelName: 'Spear Chukka',
    role: 'warmachines',
    type: 'War Machine',
    minSize: 1,
    maxSize: 1,
    baseCrew: 3,
    pointsPerModel: 50,
    stats: OG_STATS.warmachine,
    additionalProfiles:[
      {
        name: 'Crew',
        stats: OG_STATS.commonOrc
      }
    ],
    equipment: ['Hand Weapon', 'Bolt thrower'],
    specialRules: ['Animosity', 'Ignore panic induced by Goblins'],
    options: [
      {
        id: 'crew',
        name: 'additional crew members',
        points: 5,
        maxPerUnit: 2,
        isFixedCost: true,
        isExtraCrew: true,
      }
    ]
  },
  {
    id: 'small_lobber_goblin',
    name: 'Small Rock Lobber, Goblin',
    modelName: 'Rock Lobber',
    role: 'warmachines',
    type: 'War Machine',
    minSize: 1,
    maxSize: 1,
    baseCrew: 3,
    pointsPerModel: 72.5,
    stats: OG_STATS.warmachine,
    additionalProfiles:[
      {
        name: 'Crew',
        stats: OG_STATS.goblin
      }
    ],
    equipment: ['Hand Weapon', 'Small stone thrower'],
    specialRules: ['Animosity', 'Fear Elves'],
    options: [
      {
        id: 'crew',
        name: 'additional crew members',
        points: 2.5,
        maxPerUnit: 2,
        isFixedCost: true,
        isExtraCrew: true,
      }
    ]
  },
  {
    id: 'small_lobber_orc',
    name: 'Small Rock Lobber, Orcs',
    modelName: 'Rock Lobber',
    role: 'warmachines',
    type: 'War Machine',
    minSize: 1,
    maxSize: 1,
    baseCrew: 3,
    pointsPerModel: 80,
    stats: OG_STATS.warmachine,
    additionalProfiles:[
      {
        name: 'Crew',
        stats: OG_STATS.commonOrc
      }
    ],
    equipment: ['Hand Weapon', 'Small stone thrower'],
    specialRules: ['Animosity', 'Ignore panic induced by Goblins'],
    options: [
      {
        id: 'crew',
        name: 'additional crew members',
        points: 2.5,
        maxPerUnit: 2,
        isFixedCost: true,
        isExtraCrew: true,
      }
    ]
  },
  {
    id: 'large_lobber_goblin',
    name: 'Large Rock Lobber, Goblin',
    modelName: 'Rock Lobber',
    role: 'warmachines',
    type: 'War Machine',
    minSize: 1,
    maxSize: 1,
    baseCrew: 3,
    pointsPerModel: 87.5,
    stats: OG_STATS.warmachine,
    additionalProfiles:[
      {
        name: 'Crew',
        stats: OG_STATS.goblin
      }
    ],
    equipment: ['Hand Weapon', 'Large stone thrower'],
    specialRules: ['Animosity', 'Fear Elves'],
    options: [
      {
        id: 'crew',
        name: 'additional crew members',
        points: 2.5,
        maxPerUnit: 2,
        isFixedCost: true,
        isExtraCrew: true,
      }
    ]
  },
  {
    id: 'large_lobber_orc',
    name: 'Large Rock Lobber, Orcs',
    modelName: 'Rock Lobber',
    role: 'warmachines',
    type: 'War Machine',
    minSize: 1,
    maxSize: 1,
    baseCrew: 3,
    pointsPerModel: 95,
    stats: OG_STATS.warmachine,
    additionalProfiles:[
      {
        name: 'Crew',
        stats: OG_STATS.commonOrc
      }
    ],
    equipment: ['Hand Weapon', 'Large stone thrower'],
    specialRules: ['Animosity', 'Ignore panic induced by Goblins'],
    options: [
      {
        id: 'crew',
        name: 'additional crew members',
        points: 2.5,
        maxPerUnit: 2,
        isFixedCost: true,
        isExtraCrew: true,
      }
    ]
  },
  {
    id: 'goblin_doom_diver',
    name: 'Goblin Doom Diver',
    modelName: 'Doom Diver',
    role: 'warmachines',
    type: 'War Machine',
    minSize: 1,
    maxSize: 1,
    baseCrew: 3,
    pointsPerModel: 67.5,
    stats: OG_STATS.warmachine,
    additionalProfiles:[
      {
        name: 'Crew',
        stats: OG_STATS.goblin
      }
    ],
    equipment: ['Hand Weapon', 'Doom Diver'],
    specialRules: ['Animosity', 'Fear Elves'],
    options: []
  },
]