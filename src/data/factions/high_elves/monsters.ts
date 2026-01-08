import { UnitDefinition } from '@/types/army';
import { HE_STATS } from './stats';

export const monsters: UnitDefinition[] = [
  {
    id: 'dragon_prince_on_dragon',
    name: 'Dragon Prince on Dragon',
    modelName: 'Supreme Lord',
    role: 'monsters',
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
  {
    id: 'great_eagle',
    name: 'Great Eagle',
    modelName: 'Great Eagle',
    role: 'monsters',
    type: 'Monster',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 60,
    stats: HE_STATS.greatEagle,
    equipment: ['Hand Weapon'],
    specialRules: ['Elven stoicism', 'Fly'],
    options: []
  },
]