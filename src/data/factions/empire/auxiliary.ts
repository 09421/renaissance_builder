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
      { id: 'flails', name: 'Flails', points: 2, category:'weapon' },
      {
        id: 'prophetOfDoom',
        name: 'Prophet of Doom',
        points: 20,
        stats: EMP_STATS.prophetOfDoom,
        isFixedCost: true,
        category:'command'
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
    equipment: ['Hand Weapon', 'Lances', 'Light armour', 'Shield'],
    specialRules: ['Fast cavalry'],
    options: [
      { id: 'backBanners', name: 'Shrieking back banners', points: 3, category:'other' },
      { id: 'standardbearer', name: 'standard bearer', points: 10, isFixedCost: true, category:'command' },
      {
        id: 'captain',
        name: 'Kislev Captain',
        points: 30,
        stats: EMP_STATS.kislevCaptain,
        isFixedCost: true,
        category:'command'
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
    equipment: ['Hand Weapon', 'Double handed weapons', 'Bows', 'Light armour'],
    specialRules: [],
    options: [
      {
        id: 'champion',
        name: 'Kislev Champion',
        points: 20,
        stats: EMP_STATS.fighterChampion,
        isFixedCost: true,
        category:'command'
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
      { id: 'standardbearer', name: 'standard bearer', points: 10, isFixedCost: true, category:'command' },
      {
        id: 'champion',
        name: 'Kislev Champion',
        points: 20,
        stats: EMP_STATS.fighterChampion,
        isFixedCost: true,
        category:'command'
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
      { id: 'light_armour', name: 'Light armour', points: 0.5, category:'armour' },
      { id: 'state_troops', name: 'State Troop Training', points: 0.5, category:'other' },
      {
        id: 'champion',
        name: 'Champion',
        points: 20,
        stats: EMP_STATS.fighterChampion,
        isFixedCost: true,
        category:'command'
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
        isFixedCost: true,
        category:'command'
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
    equipment: ['Hand Weapon', 'Light armour', 'Shields'],
    specialRules: ['Move through woods without penalties to movement'],
    options: [      
      { id: 'spear', name: 'Spears', points: 0.5, category:'weapon' },
      {
        id: 'champion',
        name: 'Halfling Champion',
        points: 10,
        stats: EMP_STATS.halflingChampion,
        isFixedCost: true,
        category:'command'
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
    equipment: ['Hand Weapon', 'Light armour'],
    specialRules: ['Fear'],
    options: [
      { id: 'add_hw', name: 'Additional hand weapons', points: 6, group: 'weapon', category:'weapon' },
      { id: 'great_wpn', name: 'Double handed weapons', points: 8, group: 'weapon', category:'weapon' },
      { id: 'flail', name: 'Flails', points: 8, group: 'weapon', category:'weapon' },      
      { id: 'heavy_armour', name: 'Heavy armour', points: 4, replaces: ['Light armour'], category:'armour' },
      { id: 'standardbearer', name: 'standard bearer', points: 10, isFixedCost: true, category:'command' },
      {
        id: 'champion',
        name: 'Ogre Champion',
        points: 50,
        stats: EMP_STATS.ogreChampion,
        isFixedCost: true,
        category:'command'
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
    equipment: ['Hand Weapon', 'Light armour'],
    specialRules: ['Dwarf'],
    options: [
      { id: 'spear', name: 'Spears', points: 2, group: 'weapon', category:'weapon' },
      { id: 'great_wpn', name: 'Double handed weapons', points: 3, group: 'weapon', category:'weapon' },
      { id: 'crossbow', name: 'crossbows', points: 4, group: 'weapon', conflicts: ['shield'], category:'ranged_weapon'},
      { id: 'heavy_armour', name: 'Heavy armour', points: 2, replaces: ['Light armour'], category:'armour' },
      { id: 'shield', name: 'Shields', points: 1, category:'armour' },
      {
        id: 'champion',
        name: 'Dwarf Champion',
        points: 20,
        stats: EMP_STATS.dwarfChampion,
        isFixedCost: true,
        category:'command'
      }
    ]
  },
]