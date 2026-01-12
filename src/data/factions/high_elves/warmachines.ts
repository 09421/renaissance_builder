import { UnitDefinition } from '@/types/army';
import { HE_STATS } from './stats';

export const warmachines: UnitDefinition[] = [
  {
    id: 'bolt_thrower',
    name: 'Repeating Bolt Thrower',
    modelName: 'Bolt Thrower',
    role: 'warmachines',
    type: 'War Machine',
    minSize: 1,
    maxSize: 1,
    baseCrew: 2,
    pointsPerModel: 74,
    stats: HE_STATS.boltThrower,
    additionalProfiles:[
      {
        name: 'Crew',
        stats: HE_STATS.elvenWarrior
      }
    ],
    equipment: ['Hand Weapon', 'Repeating Bolt Thrower'],
    specialRules: ['Elven stoicism'],
    options: [
      { id: 'light_armor', name: 'Light armor', points: 1, perCrew: true, category:'armour' },
      {
        id: 'crew',
        name: 'additional crew members',
        points: 7,
        maxPerUnit: 3,
        isFixedCost: true,
        isExtraCrew: true,
        category:'other'
      }
    ]
  },
]