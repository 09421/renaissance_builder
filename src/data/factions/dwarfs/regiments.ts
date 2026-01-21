import { UnitDefinition } from '@/types/army';
import { DWARF_STATS } from './stats';

export const regiments: UnitDefinition[] = [
  {
    id: 'dwarf_warriors',
    name: 'Warriors',
    modelName: 'Soldier',
    role: 'regiments',
    type: 'Infantry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 7,
    stats: DWARF_STATS.dwarfSoldier,
    equipment: ['Hand Weapon', 'Light armour'],
    specialRules: ['hate Orcs & Goblins'],
    options: [
      { id: 'heavy_armour', name: 'Heavy armour', points: 1, category:'armour', replaces:['Light armour'] },
      { id: 'shield', name: 'Shields', points: 1, category:'armour' },
      { id: 'spear', name: 'Spear', points: 2, group: 'weapon', category:'weapon' },
      { id: 'great_weapon', name: 'Double handed weapons', points: 3, group: 'weapon', category:'weapon' },
      {
        id: 'champion',
        name: 'Champion',
        points: 20,
        stats: DWARF_STATS.champion,
        isFixedCost: true, 
        isExternalPoints: true,
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
    id: 'dwarf_crossbowmen',
    name: 'Crossbowmen',
    modelName: 'Soldier',
    role: 'regiments',
    type: 'Infantry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 11,
    stats: DWARF_STATS.dwarfSoldier,
    equipment: ['Hand Weapon', 'Crossbow', 'Light armour'],
    specialRules: ['hate Orcs & Goblins', 'Unbreakable', 'Slayer'],
    options: [
      { id: 'heavy_armour', name: 'Heavy armour', points: 1, category:'armour', group:'armour', replaces:['Light armour'] },
      { id: 'shield', name: 'Shields', points: 1, group:'armour', category:'armour' },
      { id: 'heavy_shield', name: 'Heavy armour and shield', points: 3, group:'armour', category:'armour', replaces:['Light armour'] },
      {
        id: 'champion',
        name: 'Champion',
        points: 20,
        stats: DWARF_STATS.dwarfChampion,
        isFixedCost: true, 
        isExternalPoints: true,
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
    id: 'dwarf_thunderers',
    name: 'Thunderers',
    modelName: 'Soldier',
    role: 'regiments',
    type: 'Infantry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 11,
    stats: DWARF_STATS.dwarfSoldier,
    equipment: ['Hand Weapon', 'Hand gun','Light armour'],
    specialRules: ['hate Orcs & Goblins'],
    options: [
      { id: 'heavy_armour', name: 'Heavy armour', points: 1, category:'armour', group:'armour', replaces:['Light armour'] },
      { id: 'shield', name: 'Shields', points: 1, group:'armour', category:'armour' },
      { id: 'heavy_shield', name: 'Heavy armour and shield', points: 3, group:'armour', category:'armour', replaces:['Light armour'] },
      {
        id: 'champion',
        name: 'Champion',
        points: 20,
        stats: DWARF_STATS.dwarfChampion,
        isFixedCost: true, 
        isExternalPoints: true,
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
    id: 'dwarf_rangers',
    name: 'Rangers',
    modelName: 'Soldier',
    role: 'regiments',
    type: 'Infantry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 16,
    restrictions:{
      maxPerArmy: 1
    },
    stats: DWARF_STATS.dwarfSoldier,
    equipment: ['Hand Weapon', 'Crossbow', 'Shields', 'Light armour',],
    specialRules: ['hate Orcs & Goblins', 'Skirmish', 'Scout'],
    options: [
      { id: 'heavy_armour', name: 'Heavy armour', points: 2, category:'armour', group:'armour', replaces:['Light armour'] },
      { id: 'great_weapon', name: 'Double handed weapons', points: 2, group: 'weapon', category:'weapon' },
      {
        id: 'champion',
        name: 'Champion',
        points: 20,
        stats: DWARF_STATS.dwarfChampion,
        isFixedCost: true, 
        isExternalPoints: true,
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
    id: 'dwarf_miners',
    name: 'Miners',
    modelName: 'Soldier',
    role: 'regiments',
    type: 'Infantry',
    minSize: 5,
    maxSize: null,
    unitBaseCost: 80,
    pointsPerModel: 11,
    restrictions:{
      maxPerArmy: 1
    },
    stats: DWARF_STATS.dwarfSoldier,
    equipment: ['Hand Weapon', 'Double handed weapons', 'Light armour',],
    specialRules: ['hate Orcs & Goblins', 'Ambush'],
    options: [
      { id: 'heavy_armour', name: 'Heavy armour', points: 1, category:'armour', replaces:['Light armour'] },
      { id: 'shield', name: 'Shields', points: 1, category:'armour' },
      {
        id: 'champion',
        name: 'Champion',
        points: 20,
        stats: DWARF_STATS.dwarfChampion,
        isFixedCost: true, 
        isExternalPoints: true,
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
    id: 'dwarf_hammerers',
    name: 'Hammerers',
    modelName: 'Elite',
    role: 'regiments',
    type: 'Infantry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 15,
    restrictions:{
      maxPerArmy: 1
    },
    stats: DWARF_STATS.dwarfElite,
    equipment: ['Hand Weapon', 'Double handed weapons','Gromril Armour'],
    specialRules: ['hate Orcs & Goblins'],
    options: [
      { id: 'shield', name: 'Shields', points: 1, group:'armour', category:'armour' },
      {
        id: 'commander',
        name: 'Commander',
        points: 30,
        stats: DWARF_STATS.dwarfCommander,
        isFixedCost: true, 
        isExternalPoints: true,
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
    id: 'dwarf_iron_breakers',
    name: 'Iron Breakers',
    modelName: 'Elite',
    role: 'regiments',
    type: 'Infantry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 15,
    restrictions:{
      maxPerArmy: 1
    },
    stats: DWARF_STATS.dwarfElite,
    equipment: ['Hand Weapon', 'Shields','Gromril armour', 'Rune of Stone'],
    specialRules: ['hate Orcs & Goblins', 'Rune of Stone'],
    options: [
      {
        id: 'commander',
        name: 'Commander',
        points: 30,
        stats: DWARF_STATS.dwarfCommander,
        isFixedCost: true, 
        isExternalPoints: true,
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
    id: 'dwarf_longbeards',
    name: 'Longbeards',
    modelName: 'Elite',
    role: 'regiments',
    type: 'Infantry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 13,
    restrictions:{
      maxPerArmy: 1
    },
    stats: DWARF_STATS.dwarfElite,
    equipment: ['Hand Weapon', 'Shields','Gromril armour'],
    specialRules: ['hate Orcs & Goblins'],
    options: [
      { id: 'great_weapon', name: 'Double handed weapons', points: 3, group: 'weapon', category:'weapon' },
      {
        id: 'commander',
        name: 'Commander',
        points: 30,
        stats: DWARF_STATS.dwarfCommander,
        isFixedCost: true, 
        isExternalPoints: true,
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
    id: 'dwarf_trollslayers',
    name: 'Troll Slayers',
    modelName: 'Slayer',
    role: 'regiments',
    type: 'Infantry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 13,
    stats: DWARF_STATS.trollSlayer,
    equipment: ['Hand Weapon', 'Additional hand weapons'],
    specialRules: ['hate Orcs & Goblins', 'Unbreakable', 'Slayer'],
    options: [
      { id: 'great_weapon', name: 'Double handed weapons', points: 0, group: 'weapon', category:'weapon', replaces:['Additional hand weapons'] },
      {
        id: 'giantSlayer',
        name: 'Giant Slayer',
        points: 20,
        maxPerUnit: 999,
        stats: DWARF_STATS.giantSlayer,
        isFixedCost: true, 
        isExternalPoints: true,
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