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
        isExtraCrew: true,
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
        isExtraCrew: true,
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
        isExtraCrew: true,
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
        isExtraCrew: true,
      }
    ]
  },
]