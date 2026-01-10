import { UnitDefinition } from '@/types/army';
import { EMP_STATS } from './stats';

export const auxiliary: UnitDefinition[] = [
  {
    id: 'flagellants',
    name: 'Flagellants',
    modelName: 'Flagellant',
    role: 'auxiliary',
    type: 'Infantry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 10,
    stats: EMP_STATS.flagellant,
    equipment: ['Hand Weapon'],
    specialRules: ['unbreakable', 'Must charge'],
    options: [
      { id: 'flails', name: 'Flails', points: 2 },
      {
        id: 'prophetOfDoom',
        name: 'Prophet of Doom',
        points: 20,
        stats: EMP_STATS.prophetOfDoom,
        isFixedCost: true
      }
    ]
  },
  {
    id: 'winged_lancers',
    name: 'Kislev Winged Lancers',
    modelName: 'Winged Lancer',
    role: 'auxiliary',
    type: 'Cavalry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 17,
    stats: EMP_STATS.kislevWingedLancer,
    additionalProfiles:[
      {
        name: 'War horse',
        stats: EMP_STATS.Warhorse
      }
    ],
    equipment: ['Hand Weapon', 'Lances', 'Light armor', 'Shield'],
    specialRules: ['Fast cavalry'],
    options: [
      { id: 'backBanners', name: 'Shrieking back banners', points: 3 },
      { id: 'standardbearer', name: 'standard bearer', points: 10, isFixedCost: true },
      {
        id: 'captain',
        name: 'Kislev Captain',
        points: 30,
        stats: EMP_STATS.kislevCaptain,
        isFixedCost: true
      }
    ]
  },
  {
    id: 'Kossars',
    name: 'Kislev Kossars',
    modelName: 'Kossar',
    role: 'auxiliary',
    type: 'Infantry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 9,
    stats: EMP_STATS.fighter,
    equipment: ['Hand Weapon', 'Double handed weapons', 'Bows', 'Light armor'],
    specialRules: [],
    options: [
      {
        id: 'champion',
        name: 'Kislev Champion',
        points: 20,
        stats: EMP_STATS.fighterChampion,
        isFixedCost: true
      }
    ]
  },
  {
    id: 'horse_archers',
    name: 'Kislev Horse Archers',
    modelName: 'Horse Arhcer',
    role: 'auxiliary',
    type: 'Cavalry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 10,
    stats: EMP_STATS.fighter,
    additionalProfiles:[
      {
        name: 'War horse',
        stats: EMP_STATS.horse
      }
    ],
    equipment: ['Hand Weapon', 'Bows'],
    specialRules: ['Fast cavalry', 'Skirmish'],
    options: [
      { id: 'standardbearer', name: 'standard bearer', points: 10, isFixedCost: true },
      {
        id: 'champion',
        name: 'Kislev Champion',
        points: 20,
        stats: EMP_STATS.fighterChampion,
        isFixedCost: true
      }
    ]
  },
  {
    id: 'free_company',
    name: 'Free Company',
    modelName: 'Fighter',
    role: 'auxiliary',
    type: 'Infantry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 5.5,
    stats: EMP_STATS.fighter,
    equipment: ['Hand Weapon', 'Additional hand weapons'],
    specialRules: [''],
    options: [
      { id: 'light_armor', name: 'Light armor', points: 0.5 },
      { id: 'state_troops', name: 'State Troop Training', points: 0.5 },
      {
        id: 'champion',
        name: 'Champion',
        points: 20,
        stats: EMP_STATS.fighterChampion,
        isFixedCost: true
      }
    ]
  },
  {
    id: 'halfling_bowmen',
    name: 'Halfling Bowmen',
    modelName: 'Halfling',
    role: 'auxiliary',
    type: 'Infantry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 7,
    stats: EMP_STATS.halfling,
    equipment: ['Hand Weapon', 'Bows'],
    specialRules: ['Skirmish', 'Move through woods without penalties to movement'],
    options: [
      {
        id: 'champion',
        name: 'Halfling Champion',
        points: 10,
        stats: EMP_STATS.halflingChampion,
        isFixedCost: true
      }
    ]
  },
  {
    id: 'halfling_militia',
    name: 'Halfling Militia',
    modelName: 'Halfling',
    role: 'auxiliary',
    type: 'Infantry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 2.5,
    stats: EMP_STATS.halfling,
    equipment: ['Hand Weapon', 'Light armor', 'Shields'],
    specialRules: ['Move through woods without penalties to movement'],
    options: [      
      { id: 'spear', name: 'Spears', points: 0.5 },
      {
        id: 'champion',
        name: 'Halfling Champion',
        points: 10,
        stats: EMP_STATS.halflingChampion,
        isFixedCost: true
      }
    ]
  },
  {
    id: 'ogre_mercs',
    name: 'Ogre Mercenaries',
    modelName: 'Ogre',
    role: 'auxiliary',
    type: 'Monstrous Infantry',
    minSize: 3,
    maxSize: null,
    pointsPerModel: 24,
    stats: EMP_STATS.ogre,
    equipment: ['Hand Weapon', 'Light armor'],
    specialRules: ['Fear'],
    options: [
      { id: 'add_hw', name: 'Additional hand weapons', points: 6, group: 'weapon' },
      { id: 'great_wpn', name: 'Double handed weapons', points: 8, group: 'weapon' },
      { id: 'flail', name: 'Flails', points: 8, group: 'weapon' },      
      { id: 'heavy_armor', name: 'Heavy armor', points: 4, replaces: 'Light armor' },
      { id: 'standardbearer', name: 'standard bearer', points: 10, isFixedCost: true },
      {
        id: 'champion',
        name: 'Ogre Champion',
        points: 50,
        stats: EMP_STATS.ogreChampion,
        isFixedCost: true
      }
    ]
  },
  {
    id: 'dwarf_warriors',
    name: 'Dwarf Warriors',
    modelName: 'Dwarf Warrior',
    role: 'auxiliary',
    type: 'Infantry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 8,
    stats: EMP_STATS.dwarf,
    equipment: ['Hand Weapon', 'Light armor'],
    specialRules: ['Dwarf'],
    options: [
      { id: 'spear', name: 'Spears', points: 2, group: 'weapon' },
      { id: 'great_wpn', name: 'Double handed weapons', points: 3, group: 'weapon' },
      { id: 'crossbow', name: 'crossbows', points: 4, group: 'weapon', conflicts: ['shield']},
      { id: 'heavy_armor', name: 'Heavy armor', points: 2, replaces: 'Light armor' },
      { id: 'shield', name: 'Shields', points: 1 },
      {
        id: 'champion',
        name: 'Dwarf Champion',
        points: 20,
        stats: EMP_STATS.dwarfChampion,
        isFixedCost: true
      }
    ]
  },
]