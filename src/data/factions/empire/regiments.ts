import { UnitDefinition } from '@/types/army';
import { EMP_STATS } from './stats';

export const regiments: UnitDefinition[] = [
  {
    id: 'halberdiers',
    name: 'Halberdiers',
    modelName: 'State Troop',
    role: 'regiments',
    type: 'Infantry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 5,
    stats: EMP_STATS.trooper,
    equipment: ['Hand Weapon', 'halberds'],
    specialRules: ['Detachment'],
    options: [
      { id: 'light_armor', name: 'Light armor', points: 0.5 },
      { id: 'shield', name: 'Shields', points: 0.5 },
      {
        id: 'champion',
        name: 'Champion',
        points: 20,
        stats: EMP_STATS.champion,
        isFixedCost: true
      }
    ]
  },
  {
    id: 'spearmen',
    name: 'Spearmen',
    modelName: 'State Troop',
    role: 'regiments',
    type: 'Infantry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 5,
    stats: EMP_STATS.trooper,
    equipment: ['Hand Weapon', 'Spears'],
    specialRules: ['Detachment'],
    options: [
      { id: 'light_armor', name: 'Light armor', points: 0.5 },
      { id: 'shield', name: 'Shields', points: 0.5 },
      {
        id: 'champion',
        name: 'Champion',
        points: 20,
        stats: EMP_STATS.champion,
        isFixedCost: true
      }
    ]
  },
  {
    id: 'pikemen',
    name: 'Pikemen',
    modelName: 'State Troop',
    role: 'regiments',
    type: 'Infantry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 8,
    stats: EMP_STATS.trooper,
    equipment: ['Hand Weapon', 'Pikes'],
    specialRules: ['Detachment'],
    options: [
      { id: 'light_armor', name: 'Light armor', points: 0.5 },
      {
        id: 'champion',
        name: 'Champion',
        points: 20,
        stats: EMP_STATS.champion,
        isFixedCost: true
      }
    ]
  },
  {
    id: 'greatswords',
    name: 'Greatswords',
    modelName: 'State Troop',
    role: 'regiments',
    type: 'Infantry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 6,
    stats: EMP_STATS.trooper,
    equipment: ['Hand Weapon', 'Double handed weapons'],
    specialRules: ['Detachment'],
    options: [
      { id: 'light_armor', name: 'Light armor', points: 0.5 },
      {
        id: 'champion',
        name: 'Champion',
        points: 20,
        stats: EMP_STATS.champion,
        isFixedCost: true
      }
    ]
  },
  {
    id: 'swordsmen',
    name: 'Swordsmen',
    modelName: 'Swordsman',
    role: 'regiments',
    type: 'Infantry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 5.5,
    stats: EMP_STATS.swordsman,
    equipment: ['Hand Weapon', 'Shield'],
    specialRules: ['Detachment'],
    options: [
      { id: 'light_armor', name: 'Light armor', points: 0.5 },
      {
        id: 'captain',
        name: 'Captain',
        points: 30,
        stats: EMP_STATS.captain,
        isFixedCost: true
      }
    ]
  },
  {
    id: 'archers',
    name: 'Archers',
    modelName: 'State Troop',
    role: 'regiments',
    type: 'Infantry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 7,
    stats: EMP_STATS.trooper,
    equipment: ['Hand Weapon', 'Long bows'],
    specialRules: ['Detachment', 'Skirmish'],
    options: [
      { id: 'light_armor', name: 'Light armor', points: 0.5 },
      {
        id: 'champion',
        name: 'Champion',
        points: 20,
        stats: EMP_STATS.champion,
        isFixedCost: true
      }
    ]
  },
  {
    id: 'crossbowmen',
    name: 'Crossbowmen',
    modelName: 'State Troop',
    role: 'regiments',
    type: 'Infantry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 9,
    stats: EMP_STATS.trooper,
    equipment: ['Hand Weapon', 'Crossbows'],
    specialRules: ['Detachment'],
    options: [
      { id: 'light_armor', name: 'Light armor', points: 0.5 },
      {
        id: 'champion',
        name: 'Champion',
        points: 20,
        stats: EMP_STATS.champion,
        isFixedCost: true
      }
    ]
  },
  {
    id: 'hand_gunners',
    name: 'Hand gunners',
    modelName: 'State Troop',
    role: 'regiments',
    type: 'Infantry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 9,
    stats: EMP_STATS.trooper,
    equipment: ['Hand Weapon', 'Handguns'],
    specialRules: ['Detachment'],
    options: [
      { id: 'light_armor', name: 'Light armor', points: 0.5 },
      {
        id: 'champion',
        name: 'Champion',
        points: 20,
        stats: EMP_STATS.champion,
        isFixedCost: true
      }
    ]
  },
  {
    id: 'pistoliers',
    name: 'Pistoliers',
    modelName: 'State Troop',
    role: 'regiments',
    type: 'Cavalry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 17,
    stats: EMP_STATS.trooper,
    additionalProfiles: [
      {
        name: 'Horse',
        stats: EMP_STATS.horse
      }
    ],
    equipment: ['Hand Weapon', 'Two pistols', 'Light armor'],
    specialRules: ['Detachment', 'Skirmish'],
    options: [
      { id: 'standard', name: 'Standard bearer', points: 10, isFixedCost: true },
      {
        id: 'captain',
        name: 'Captain',
        points: 20,
        stats: EMP_STATS.captain,
        isFixedCost: true
      },
      { id: 'long_rifle', name: 'Hochland long rifle', points: 10, requires: ['captain'], group:'experimental' },
      { id: 'repeating_handgun', name: 'Repeating handgun', points: 10, requires: ['captain'], group:'experimental' },
      { id: 'repeating_pistol', name: 'Repeating pistol.', points: 10, requires: ['captain'], group:'experimental' },
    ]
  },
  {
    id: 'outriders',
    name: 'Outriders',
    modelName: 'State Troop',
    role: 'regiments',
    type: 'Cavalry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 17,
    stats: EMP_STATS.trooper,
    additionalProfiles: [
      {
        name: 'Horse',
        stats: EMP_STATS.horse
      }
    ],
    equipment: ['Hand Weapon', 'Repeating handguns', 'Light armor', 'Barding'],
    specialRules: ['Detachment', 'Skirmish'],
    options: [
      { id: 'standard', name: 'Standard bearer', points: 10, isFixedCost: true },
      {
        id: 'captain',
        name: 'Captain',
        points: 20,
        stats: EMP_STATS.captain,
        isFixedCost: true
      }
    ]
  },
  {
    id: 'white_wolf_knights',
    name: 'Knights of the White Wolf',
    modelName: 'Knight',
    role: 'regiments',
    type: 'Cavalry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 20,
    stats: EMP_STATS.knight,
    restrictions: {
      uniqueGroup: 'knightly_order',
      uniqueType: 'teutogen_wolves'
    },
    additionalProfiles: [
      {
        name: 'War horse',
        stats: EMP_STATS.Warhorse
      }
    ],
    equipment: ['Hand Weapon', 'Double handed weapons', 'Full plate', 'Barding'],
    specialRules: [],
    options: [
      {
        id: 'captain',
        name: 'Captain',
        points: 30,
        stats: EMP_STATS.captain,
        isFixedCost: true
      }
    ]
  },
  {
    id: 'Knights_Panther',
    name: 'Knights Panther',
    modelName: 'Knight',
    role: 'regiments',
    type: 'Cavalry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 25,
    stats: EMP_STATS.knight,
    restrictions: {
      uniqueGroup: 'knightly_order',
    },
    additionalProfiles: [
      {
        name: 'War horse',
        stats: EMP_STATS.Warhorse
      }
    ],
    equipment: ['Hand Weapon', 'Lances', 'Full plate', 'shield', 'Barding'],
    specialRules: [],
    options: [
      {
        id: 'captain',
        name: 'Captain',
        points: 30,
        stats: EMP_STATS.captain,
        isFixedCost: true
      }
    ]
  },
  {
    id: 'blazing_sun',
    name: 'Knights of the Blazing Sun',
    modelName: 'Knight',
    role: 'regiments',
    type: 'Cavalry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 25,
    stats: EMP_STATS.knight,
    restrictions: {
      uniqueGroup: 'knightly_order',
    },
    additionalProfiles: [
      {
        name: 'War horse',
        stats: EMP_STATS.Warhorse
      }
    ],
    equipment: ['Hand Weapon', 'Lances', 'Full plate', 'shield', 'Barding'],
    specialRules: [],
    options: [
      {
        id: 'captain',
        name: 'Captain',
        points: 30,
        stats: EMP_STATS.captain,
        isFixedCost: true
      }
    ]
  },
  {
    id: 'teutogen_Foot',
    name: 'Teutogen Foot Knights',
    modelName: 'Knight',
    role: 'regiments',
    type: 'Infantry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 13,
    stats: EMP_STATS.knight,
    restrictions: {
      uniqueGroup: 'knightly_order',
      uniqueType: 'teutogen_wolves'
    },
    equipment: ['Hand Weapon', 'Double handed weapons', 'Full plate'],
    specialRules: [],
    options: [
      {
        id: 'captain',
        name: 'Captain',
        points: 30,
        stats: EMP_STATS.captain,
        isFixedCost: true
      }
    ]
  },
  {
    id: 'reiksguard_foot',
    name: 'Reiksguard Foot Knights',
    modelName: 'Knight',
    role: 'regiments',
    type: 'Infantry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 11,
    stats: EMP_STATS.knight,
    restrictions: {
      uniqueGroup: 'knightly_order',
      uniqueType: 'reiksguard'
    },
    equipment: ['Hand Weapon', 'Full plate', 'shield'],
    specialRules: [],
    options: [
      { id: 'great_weapon', name: 'Double handed weapon', points: 2, replaces:'shield' },
      {
        id: 'commander',
        name: 'Commander',
        points: 50,
        stats: EMP_STATS.commander,
        isFixedCost: true
      }
    ]
  },
  {
    id: 'reiksguard',
    name: 'Reiksguard Knights',
    modelName: 'Knight',
    role: 'regiments',
    type: 'Cavalry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 25,
    stats: EMP_STATS.knight,
    restrictions: {
      uniqueGroup: 'knightly_order',
      uniqueType: 'reiksguard'
    },
    additionalProfiles: [
      {
        name: 'War horse',
        stats: EMP_STATS.Warhorse
      }
    ],
    equipment: ['Hand Weapon', 'Lances', 'Full plate', 'shield', 'Barding'],
    specialRules: [],
    options: [
      {
        id: 'commander',
        name: 'Commander',
        points: 50,
        stats: EMP_STATS.commander,
        isFixedCost: true
      }
    ]
  },
]