import { UnitDefinition } from '@/types/army';
import { OG_STATS } from './stats';

export const chariots: UnitDefinition[] = [
  {
    id: 'wolf_chariot',
    name: 'Goblin Wolf Chariot',
    modelName: 'Light Chariot',
    role: 'chariots',
    type: 'Chariot',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 44,
    stats: OG_STATS.lightChariot,
    baseCrew: 2,
    additionalProfiles: [
      {
        name: 'Goblin',
        stats: OG_STATS.goblin
      },
      {
        name: 'Wolf',
        stats: OG_STATS.giantWolf
      }
    ],
    equipment: ['Hand Weapon', 'Spears', 'Short bows', 'Light armor', 'Shields'],
    specialRules: ['Animosity'],
    options: [
      { id: 'scythed', name: 'Scythed wheels', points: 10, group: 'weapon', isFixedCost: true, },
      {
        id: 'additional_goblin_crew',
        name: 'additional goblin',
        points: 6,
        maxPerUnit: 2,
        isFixedCost: true,
        isExtraCrew: true,
      },
      { 
        id: 'extra_crew_champ', 
        name: 'Goblin Champion', 
        points: 9,
        maxPerUnit: 1,
        requires: ['additional_goblin_crew'],
        stats:OG_STATS.goblinChampion
      },
      {
        id: 'additional_wolf',
        name: 'additional Wolf',
        points: 8,
        maxPerUnit: 2,
        isFixedCost: true,
      }
    ]
  },
  {
    id: 'boar_chariot',
    name: 'Orc Boar Chariot',
    modelName: 'Heavy Chariot',
    role: 'chariots',
    type: 'Chariot',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 52,
    stats: OG_STATS.heavyChariot,
    baseCrew: 2,
    additionalProfiles: [
      {
        name: 'Orc',
        stats: OG_STATS.commonOrc
      },
      {
        name: 'Wolf',
        stats: OG_STATS.warBoar
      }
    ],
    equipment: ['Hand Weapon', 'Spears', 'Bows', 'Light armor', 'Shields'],
    specialRules: ['Animosity'],
    options: [
      { id: 'scythed', name: 'Scythed wheels', points: 20, group: 'weapon', isFixedCost: true, },
      {
        id: 'additional_orc_crew',
        name: 'additional Orc',
        points: 8,
        maxPerUnit: 2,
        isFixedCost: true,
        isExtraCrew: true,
      },
      { 
        id: 'extra_crew_champ', 
        name: 'Orc Champion', 
        points: 22,
        maxPerUnit: 1,
        requires: ['additional_orc_crew'],
        stats:OG_STATS.commonOrcChampion
      },
      {
        id: 'additional_boar',
        name: 'additional Boar',
        points: 5,
        maxPerUnit: 2,
        isFixedCost: true,
      }
    ]
  },
]