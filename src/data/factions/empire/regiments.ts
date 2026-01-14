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
      { id: 'light_armour', name: 'Light armour', points: 0.5, category:'armour' },
      { id: 'shield', name: 'Shields', points: 0.5, category:'armour' },
      {
        id: 'champion',
        name: 'Champion',
        points: 20,
        stats: EMP_STATS.champion,
        isFixedCost: true, 
        category:'command',
        magicAllowance:{
          maxItems:1,
          allowedCategories:['weapon', 'armour', 'enchanted']
        }
      },
      {
        id: 'standard_bearer',
        name: 'Standard bearer',
        points: 0,
        isFixedCost: true,
        category:'command',
        magicAllowance:{
          maxItems:1,
          allowedCategories:['banner']
        }
      },
      {
        id: 'musician',
        name: 'musician',
        points: 0,
        isFixedCost: true,
        category:'command'
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
      { id: 'light_armour', name: 'Light armour', points: 0.5,category:'armour' },
      { id: 'shield', name: 'Shields', points: 0.5, category:'armour' },
      {
        id: 'champion',
        name: 'Champion',
        points: 20,
        stats: EMP_STATS.champion,
        isFixedCost: true,
        category:'command',
        magicAllowance:{
          maxItems:1,
          allowedCategories:['weapon', 'armour', 'enchanted']
        }
      },
      {
        id: 'standard_bearer',
        name: 'Standard bearer',
        points: 0,
        isFixedCost: true,
        category:'command',
        magicAllowance:{
          maxItems:1,
          allowedCategories:['banner']
        }
      },
      {
        id: 'musician',
        name: 'musician',
        points: 0,
        isFixedCost: true,
        category:'command'
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
      { id: 'light_armour', name: 'Light armour', points: 0.5, category:'armour' },
      {
        id: 'champion',
        name: 'Champion',
        points: 20,
        stats: EMP_STATS.champion,
        isFixedCost: true,
        category:'command',
        magicAllowance:{
          maxItems:1,
          allowedCategories:['weapon', 'armour', 'enchanted']
        }
      },
      {
        id: 'standard_bearer',
        name: 'Standard bearer',
        points: 0,
        isFixedCost: true,
        category:'command',
        magicAllowance:{
          maxItems:1,
          allowedCategories:['banner']
        }
      },
      {
        id: 'musician',
        name: 'musician',
        points: 0,
        isFixedCost: true,
        category:'command'
      }
    ]
  },
  {
    id: 'greatswords',
    name: 'Greatswords',
    modelName: 'State Troop',
    role: 'regiments',
    type: 'Infantry',
    tags:['greatswords'],
    minSize: 5,
    maxSize: null,
    pointsPerModel: 6,
    stats: EMP_STATS.trooper,
    equipment: ['Hand Weapon', 'Double handed weapons'],
    specialRules: ['Detachment'],
    options: [
      { id: 'light_armour', name: 'Light armour', points: 0.5, category:'armour' },
      {
        id: 'champion',
        name: 'Champion',
        points: 20,
        stats: EMP_STATS.champion,
        isFixedCost: true,
        category:'command',
        magicAllowance:{
          maxItems:1,
          allowedCategories:['weapon', 'armour', 'enchanted']
        }
      },
      {
        id: 'standard_bearer',
        name: 'Standard bearer',
        points: 0,
        isFixedCost: true,
        category:'command',
        magicAllowance:{
          maxItems:1,
          allowedCategories:['banner']
        }
      },
      {
        id: 'musician',
        name: 'musician',
        points: 0,
        isFixedCost: true,
        category:'command'
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
      { id: 'light_armour', name: 'Light armour', points: 0.5, category:'armour' },
      {
        id: 'captain',
        name: 'Captain',
        points: 30,
        stats: EMP_STATS.captain,
        isFixedCost: true,
        category:'command',
        magicAllowance:{
          maxItems:1,
          allowedCategories:['weapon', 'armour', 'enchanted']
        }
      },
      {
        id: 'standard_bearer',
        name: 'Standard bearer',
        points: 0,
        isFixedCost: true,
        category:'command',
        magicAllowance:{
          maxItems:1,
          allowedCategories:['banner']
        }
      },
      {
        id: 'musician',
        name: 'musician',
        points: 0,
        isFixedCost: true,
        category:'command'
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
      { id: 'light_armour', name: 'Light armour', points: 0.5, category:'armour' },
      {
        id: 'champion',
        name: 'Champion',
        points: 20,
        stats: EMP_STATS.champion,
        isFixedCost: true,
        category:'command',
        magicAllowance:{
          maxItems:1,
          allowedCategories:['weapon', 'armour', 'enchanted']
        }
      },
      {
        id: 'standard_bearer',
        name: 'Standard bearer',
        points: 0,
        isFixedCost: true,
        category:'command',
        magicAllowance:{
          maxItems:1,
          allowedCategories:['banner']
        }
      },
      {
        id: 'musician',
        name: 'musician',
        points: 0,
        isFixedCost: true,
        category:'command'
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
      { id: 'light_armour', name: 'Light armour', points: 0.5, category:'armour' },
      {
        id: 'champion',
        name: 'Champion',
        points: 20,
        stats: EMP_STATS.champion,
        isFixedCost: true,
        category:'command',
        magicAllowance:{
          maxItems:1,
          allowedCategories:['weapon', 'armour', 'enchanted']
        }
      },
      {
        id: 'standard_bearer',
        name: 'Standard bearer',
        points: 0,
        isFixedCost: true,
        category:'command',
        magicAllowance:{
          maxItems:1,
          allowedCategories:['banner']
        }
      },
      {
        id: 'musician',
        name: 'musician',
        points: 0,
        isFixedCost: true,
        category:'command'
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
      { id: 'light_armour', name: 'Light armour', points: 0.5, category:'armour' },
      {
        id: 'champion',
        name: 'Champion',
        points: 20,
        stats: EMP_STATS.champion,
        isFixedCost: true,
        category:'command',
        magicAllowance:{
          maxItems:1,
          allowedCategories:['weapon', 'armour', 'enchanted']
        }
      },
      {
        id: 'standard_bearer',
        name: 'Standard bearer',
        points: 0,
        isFixedCost: true,
        category:'command',
        magicAllowance:{
          maxItems:1,
          allowedCategories:['banner']
        }
      },
      {
        id: 'musician',
        name: 'musician',
        points: 0,
        isFixedCost: true,
        category:'command'
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
    equipment: ['Hand Weapon', 'Two pistols', 'Light armour'],
    specialRules: ['Detachment', 'Skirmish'],
    options: [
      {
        id: 'captain',
        name: 'Captain',
        points: 20,
        stats: EMP_STATS.captain,
        isFixedCost: true,
        category:'command',
        magicAllowance:{
          maxItems:1,
          allowedCategories:['weapon', 'armour', 'enchanted']
        }
      },
      {
        id: 'standard_bearer',
        name: 'Standard bearer',
        points: 10,
        isFixedCost: true,
        category:'command',
        magicAllowance:{
          maxItems:1,
          allowedCategories:['banner']
        }
      },
      {
        id: 'musician',
        name: 'musician',
        points: 0,
        isFixedCost: true,
        category:'command'
      },
      { id: 'long_rifle', name: 'Hochland long rifle', points: 10, requires: ['captain'], group:'experimental',category:'experimantal' },
      { id: 'repeating_handgun', name: 'Repeating handgun', points: 10, requires: ['captain'], group:'experimental', category:'experimantal' },
      { id: 'repeating_pistol', name: 'Repeating pistol.', points: 10, requires: ['captain'], group:'experimental',category:'experimantal' },
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
    equipment: ['Hand Weapon', 'Repeating handguns', 'Light armour', 'Barding'],
    specialRules: ['Detachment'],
    options: [
      {
        id: 'captain',
        name: 'Captain',
        points: 20,
        stats: EMP_STATS.captain,
        isFixedCost: true,
        category:'command',
        magicAllowance:{
          maxItems:1,
          allowedCategories:['weapon', 'armour', 'enchanted']
        }
      },
      {
        id: 'standard_bearer',
        name: 'Standard bearer',
        points: 0,
        isFixedCost: true,
        category:'command',
        magicAllowance:{
          maxItems:1,
          allowedCategories:['banner']
        }
      },
      {
        id: 'musician',
        name: 'musician',
        points: 0,
        isFixedCost: true,
        category:'command'
      }
    ]
  },
  {
    id: 'white_wolf_knights',
    name: 'Knights of the White Wolf',
    modelName: 'Knight',
    role: 'regiments',
    type: 'Cavalry',
    tags:['teutogen_wolves'],
    minSize: 5,
    maxSize: null,
    pointsPerModel: 20,
    stats: EMP_STATS.knight,
    restrictions: {
      sharedSelection: {
        group: 'knightly_order',
        type: 'teutogen_wolves',
        mode: 'exclusive_subtypes'
      }
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
        isFixedCost: true,
        category:'command',
        magicAllowance:{
          maxItems:1,
          allowedCategories:['weapon', 'armour', 'enchanted']
        }
      },
      {
        id: 'standard_bearer',
        name: 'Standard bearer',
        points: 0,
        isFixedCost: true,
        category:'command',
        magicAllowance:{
          maxItems:1,
          allowedCategories:['banner']
        }
      },
      {
        id: 'musician',
        name: 'musician',
        points: 0,
        isFixedCost: true,
        category:'command'
      }
    ]
  },
  {
    id: 'knights_panther',
    name: 'Knights Panther',
    modelName: 'Knight',
    role: 'regiments',
    type: 'Cavalry',
    tags:['knights_panther'],
    minSize: 5,
    maxSize: null,
    pointsPerModel: 25,
    stats: EMP_STATS.knight,
    restrictions: {
      sharedSelection: {
        group: 'knightly_order',
        type: 'panthers',
        mode: 'exclusive_subtypes'
      }
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
        isFixedCost: true,
        category:'command',
        magicAllowance:{
          maxItems:1,
          allowedCategories:['weapon', 'armour', 'enchanted']
        }
      },
      {
        id: 'standard_bearer',
        name: 'Standard bearer',
        points: 0,
        isFixedCost: true,
        category:'command',
        magicAllowance:{
          maxItems:1,
          allowedCategories:['banner']
        }
      },
      {
        id: 'musician',
        name: 'musician',
        points: 0,
        isFixedCost: true,
        category:'command'
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
      sharedSelection: {
        group: 'knightly_order',
        type: 'blazing_sun',
        mode: 'exclusive_subtypes'
      }
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
        isFixedCost: true,
        category:'command',
        magicAllowance:{
          maxItems:1,
          allowedCategories:['weapon', 'armour', 'enchanted']
        }
      },
      {
        id: 'standard_bearer',
        name: 'Standard bearer',
        points: 0,
        isFixedCost: true,
        category:'command',
        magicAllowance:{
          maxItems:1,
          allowedCategories:['banner']
        }
      },
      {
        id: 'musician',
        name: 'musician',
        points: 0,
        isFixedCost: true,
        category:'command'
      }
    ]
  },
  {
    id: 'teutogen_Foot',
    name: 'Teutogen Foot Knights',
    modelName: 'Knight',
    role: 'regiments',
    type: 'Infantry',
    tags:['teutogen_wolves'],
    minSize: 5,
    maxSize: null,
    pointsPerModel: 13,
    stats: EMP_STATS.knight,
    restrictions: {
      sharedSelection: {
        group: 'knightly_order',
        type: 'teutogen_wolves',
        mode: 'exclusive_subtypes'
      }
    },
    equipment: ['Hand Weapon', 'Double handed weapons', 'Full plate'],
    specialRules: [],
    options: [
      {
        id: 'captain',
        name: 'Captain',
        points: 30,
        stats: EMP_STATS.captain,
        isFixedCost: true,
        category:'command',
        magicAllowance:{
          maxItems:1,
          allowedCategories:['weapon', 'armour', 'enchanted']
        }
      },
      {
        id: 'standard_bearer',
        name: 'Standard bearer',
        points: 0,
        isFixedCost: true,
        category:'command',
        magicAllowance:{
          maxItems:1,
          allowedCategories:['banner']
        }
      },
      {
        id: 'musician',
        name: 'musician',
        points: 0,
        isFixedCost: true,
        category:'command'
      }
    ]
  },
  {
    id: 'reiksguard_foot',
    name: 'Reiksguard Foot Knights',
    modelName: 'Knight',
    role: 'regiments',
    type: 'Infantry',
    tags:['reiksguard'],
    minSize: 5,
    maxSize: null,
    pointsPerModel: 11,
    stats: EMP_STATS.knight,
    restrictions: {
      sharedSelection: {
        group: 'knightly_order',
        type: 'reiksguard',
        mode: 'exclusive_subtypes'
      }
    },
    equipment: ['Hand Weapon', 'Full plate', 'shield'],
    specialRules: [],
    options: [
      { id: 'great_weapon', name: 'Double handed weapon', points: 2, replaces:['shield'],category:'weapon' },
      {
        id: 'commander',
        name: 'Commander',
        points: 50,
        stats: EMP_STATS.commander,
        isFixedCost: true,
        category:'command',
        magicAllowance:{
          maxItems:1,
          allowedCategories:['weapon', 'armour', 'enchanted']
        }
      },
      {
        id: 'standard_bearer',
        name: 'Standard bearer',
        points: 0,
        isFixedCost: true,
        category:'command',
        magicAllowance:{
          maxItems:1,
          allowedCategories:['banner']
        }
      },
      {
        id: 'musician',
        name: 'musician',
        points: 0,
        isFixedCost: true,
        category:'command'
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
      sharedSelection: {
        group: 'knightly_order',
        type: 'reiksguard',
        mode: 'exclusive_subtypes'
      }
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
        isFixedCost: true,
        category:'command',
        magicAllowance:{
          maxItems:1,
          allowedCategories:['weapon', 'armour', 'enchanted']
        }
      },
      {
        id: 'standard_bearer',
        name: 'Standard bearer',
        points: 0,
        isFixedCost: true,
        category:'command',
        magicAllowance:{
          maxItems:1,
          allowedCategories:['banner']
        }
      },
      {
        id: 'musician',
        name: 'musician',
        points: 0,
        isFixedCost: true,
        category:'command'
      }
    ]
  },
]