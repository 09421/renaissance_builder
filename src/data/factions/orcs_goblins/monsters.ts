import { UnitDefinition } from '@/types/army';
import { OG_STATS } from './stats';

export const monsters: UnitDefinition[] = [
  {
    id: 'giant',
    name: 'Giant',
    modelName: 'Giant',
    role: 'monsters',
    type: 'monster',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 200,
    stats: OG_STATS.giant,
    equipment: ['Giant Club'],
    specialRules: ['Large', 'Cause Terror', 'Fall over'],
    options: []
  },
  {
    id: 'monstrous_spider',
    name: 'Monstrous Spider',
    modelName: 'Monstrous Spider',
    role: 'monsters',
    type: 'small monsters',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 40,
    stats: OG_STATS.monstrousSpider,
    equipment: ['Fangs'],
    specialRules: ['fear', 'poisonous (+1 strength)'],
    options: []
  },
  {
    id: 'gargantuan_spider',
    name: 'Gargantuan Spider',
    modelName: 'Gargantuan Spider',
    role: 'monsters',
    type: 'monsters',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 225,
    stats: OG_STATS.gargantuanSpider,
    equipment: ['Fangs'],
    specialRules: ['Large', 'Cause Terror', 'immune to psychology', 'poisonous (+1 strength)'],
    options: []
  },
]