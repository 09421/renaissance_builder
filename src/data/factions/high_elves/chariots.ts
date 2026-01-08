import { UnitDefinition } from '@/types/army';
import { HE_STATS } from './stats';

export const chariots: UnitDefinition[] = [
  {
    id: 'tiranoc_chariots',
    name: 'Tiranoc Chariots',
    modelName: 'Supreme Lord',
    role: 'chariots',
    type: 'Monster',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 225,
    stats: HE_STATS.supremeLord,
    additionalProfiles:[
      {
        name: 'Young Dragon',
        stats: HE_STATS.youngDragon
      }
    ],
    equipment: ['Hand Weapon', 'Lance', 'Dragon armor', 'Shield'],
    specialRules: ['Elven stoicism'],
    options: []
  },
]