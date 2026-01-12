import { UnitDefinition } from '@/types/army';
import { HE_STATS } from './stats';

export const chariots: UnitDefinition[] = [
  {
    id: 'tiranoc_chariots',
    name: 'Tiranoc Chariots',
    modelName: 'Heavy chariot',
    role: 'chariots',
    type: 'Chariot',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 60,
    baseCrew: 2,
    stats: HE_STATS.heavyChariot,
    additionalProfiles:[
      {
        name: 'Warrior',
        stats: HE_STATS.elvenWarrior
      },
      {
        name: 'Elven steed',
        stats: HE_STATS.elvenSteed
      }
    ],
    equipment: ['Hand Weapon', 'Spears', 'Long bows', 'Light armour', 'Shield'],
    specialRules: ['Elven stoicism'],
    options: [
      { id: 'halberds', name: 'Halberds', points: 0, group: 'weapon', isFixedCost: true, replaces:['Spears', 'Shield'] },
      { id: 'scythed', name: 'Scythed wheels', points: 20, group: 'weapon', isFixedCost: true, },
      {
        id: 'additional_crew',
        name: 'additional Warrior',
        points: 10,
        maxPerUnit: 2,
        isFixedCost: true,
        isExtraCrew: true,
      },
      { 
        id: 'extra_crew_champ', 
        name: 'Champion', 
        points: 33,
        maxPerUnit: 1,
        requires: ['additional_crew'],
        stats:HE_STATS.elvenWarrior
      },
      {
        id: 'additional_steed',
        name: 'additional Steed',
        points: 5,
        maxPerUnit: 2,
        isFixedCost: true,
      }
    ]
  },
  {
    id: 'whiteLion_chariots',
    name: 'White Lion Chariots',
    modelName: 'Heavy chariot',
    role: 'chariots',
    type: 'Chariot',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 80,
    baseCrew: 2,
    stats: HE_STATS.heavyChariot,
    restrictions:{ 
      requiresTag:'White Lions'
    },
    additionalProfiles:[
      {
        name: 'Warrior',
        stats: HE_STATS.elvenWarrior
      },
      {
        name: 'White lion',
        stats: HE_STATS.whiteLion
      }
    ],
    equipment: ['Hand Weapon', 'Spears', 'Long bows', 'Light armour', 'Shield'],
    specialRules: ['Elven stoicism'],
    options: [
      { id: 'halberds', name: 'Halberds', points: 0, isFixedCost: true, replaces:['Spears', 'Shield'] },
      { id: 'scythed', name: 'Scythed wheels', points: 20, isFixedCost: true, },
      { id: 'barding', name: 'Barding', points: 5, isFixedCost: true, },
      {
        id: 'additional_crew',
        name: 'additional Warrior',
        points: 10,
        maxPerUnit: 2,
        isFixedCost: true,
        isExtraCrew: true,
      },
      { 
        id: 'extra_crew_champ', 
        name: 'Champion', 
        points: 33,
        maxPerUnit: 1,
        requires: ['additional_crew'],
        stats:HE_STATS.elvenWarrior
      },
      {
        id: 'additional_steed',
        name: 'additional white Lion',
        points: 17,
        maxPerUnit: 2,
        isFixedCost: true,
      }
    ]
  },
]