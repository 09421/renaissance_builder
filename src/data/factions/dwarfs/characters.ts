import { UnitDefinition } from '@/types/army';
import { DWARF_STATS } from './stats';

export const characters: UnitDefinition[] = [
  {
    id: 'dwarf_lord',
    name: 'Dwarf Lord',
    modelName: 'Dwarf Lord',
    role: 'character',
    type: 'infantry',
    tags: ['Dwarf lord'],
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 136,
    stats: DWARF_STATS.dwarfLord,
    equipment: ['Hand Weapon'],
    magicAllowance: {
      maxItems: 3,
      allowedCategories:['weapon', 'armour', 'enchanted'],
    },
    specialRules: [''],
    options: [
      { id: 'general', name: 'General', points: 0, category:'general', isFixedCost:true },
      
      { id: 'Shieldbearers', name: 'Shieldbearers', points: 25, group:'mount', category:'mount', isFixedCost:true, requires:['general'] },
      { id: 'throne_power', name: 'Throne of Power', points: 50, group:'mount', category:'mount', isFixedCost:true, requires:['general'] },

      { id: 'shield', name: 'Shield', points: 0, category:'armour', isFixedCost:true },
      { id: 'light_armour', name: 'Light armour', points: 0, group: 'armour', category:'armour', isFixedCost:true },
      { id: 'heavy_armour', name: 'Heavy armour', points: 0, group: 'armour', category:'armour', isFixedCost:true },
      { id: 'gromril_armour', name: 'Gromril armour', points: 0, group: 'armour', category:'armour', isFixedCost:true },

      { id: 'flail', name: 'Flail', points: 0, group: 'weapon', category:'weapon', isFixedCost:true },
      { id: 'add_hw', name: 'Additional hand weapon', points: 0, group: 'weapon', category:'weapon', isFixedCost:true },
      { id: 'spear', name: 'Spear', points: 0, group: 'weapon', category:'weapon', isFixedCost:true },
      { id: 'halberd', name: 'Halberd', points: 0, group: 'weapon', category:'weapon', isFixedCost:true },
      { id: 'great_weapon', name: 'Double handed weapon', points: 0, group: 'weapon', category:'weapon', isFixedCost:true },

      { id: 'handgun', name: 'Handgun', points: 10, group: 'ranged_weapon', category:'ranged_weapon', isFixedCost:true },
      { id: 'crossbow', name: 'Crossbow', points: 10, group: 'ranged_weapon', category:'ranged_weapon', isFixedCost:true },
      { id: 'two_pistols', name: 'Two pistols', points: 10, group: 'ranged_weapon', category:'ranged_weapon', isFixedCost:true },
    ]
  },
  {
    id: 'dwarf_hero',
    name: 'Dwarf Hero',
    modelName: 'Dwarf Hero',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 82,
    stats: DWARF_STATS.dwarfHero,
    equipment: ['Hand Weapon'],
    magicAllowance: {
      maxItems: 2,
      allowedCategories:['weapon', 'armour', 'enchanted'],
    },
    specialRules: [''],
    options: [
      { id: 'general', name: 'General', points: 0, category:'general', isFixedCost:true },

      { id: 'shield', name: 'Shield', points: 0, category:'armour', isFixedCost:true },
      { id: 'light_armour', name: 'Light armour', points: 0, group: 'armour', category:'armour', isFixedCost:true },
      { id: 'heavy_armour', name: 'Heavy armour', points: 0, group: 'armour', category:'armour', isFixedCost:true },
      { id: 'gromril_armour', name: 'Gromril armour', points: 0, group: 'armour', category:'armour', isFixedCost:true },

      { id: 'flail', name: 'Flail', points: 0, group: 'weapon', category:'weapon', isFixedCost:true },
      { id: 'add_hw', name: 'Additional hand weapon', points: 0, group: 'weapon', category:'weapon', isFixedCost:true },
      { id: 'spear', name: 'Spear', points: 0, group: 'weapon', category:'weapon', isFixedCost:true },
      { id: 'halberd', name: 'Halberd', points: 0, group: 'weapon', category:'weapon', isFixedCost:true },
      { id: 'great_weapon', name: 'Double handed weapon', points: 0, group: 'weapon', category:'weapon', isFixedCost:true },

      { id: 'handgun', name: 'Handgun', points: 10, group: 'ranged_weapon', category:'ranged_weapon', isFixedCost:true },
      { id: 'crossbow', name: 'Crossbow', points: 10, group: 'ranged_weapon', category:'ranged_weapon', isFixedCost:true },
      { id: 'two_pistols', name: 'Two pistols', points: 10, group: 'ranged_weapon', category:'ranged_weapon', isFixedCost:true },
    ]
  },
  {
    id: 'dwarf_bsb',
    name: 'Battle Standard Bearer',
    modelName: 'Bsb',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    restrictions:{
      maxPerArmy:1
    },
    pointsPerModel: 92,
    stats: DWARF_STATS.dwarfBsb,
    equipment: ['Hand Weapon'],
    magicAllowance: {
      maxItems: 1,
      allowedCategories:['weapon', 'armour', 'enchanted', 'banner'],
    },
    specialRules: [''],
    options: [
      { id: 'light_armour', name: 'Light armour', points: 0, group: 'armour', category:'armour', isFixedCost:true },
      { id: 'heavy_armour', name: 'Heavy armour', points: 0, group: 'armour', category:'armour', isFixedCost:true },
      { id: 'gromril_armour', name: 'Gromril armour', points: 0, group: 'armour', category:'armour', isFixedCost:true },
    ]
  },
  {
    id: 'daemon_slayer',
    name: 'Daemon Slayer',
    modelName: 'Daemon Slayer',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 100,
    stats: DWARF_STATS.daemonSlayer,
    equipment: ['Hand Weapon'],
    magicAllowance: {
      maxItems: 1,
      allowedCategories:['weapon'],
    },
    specialRules: ['Slayer'],
    options: [
      { id: 'flail', name: 'Flail', points: 0, group: 'weapon', category:'weapon', isFixedCost:true },
      { id: 'add_hw', name: 'Additional hand weapon', points: 0, group: 'weapon', category:'weapon', isFixedCost:true },
      { id: 'spear', name: 'Spear', points: 0, group: 'weapon', category:'weapon', isFixedCost:true },
      { id: 'halberd', name: 'Halberd', points: 0, group: 'weapon', category:'weapon', isFixedCost:true },
      { id: 'great_weapon', name: 'Double handed weapon', points: 0, group: 'weapon', category:'weapon', isFixedCost:true },
    ]
  },
  {
    id: 'dragon_slayer',
    name: 'Dragon Slayer',
    modelName: 'Dragon Slayer',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 60,
    stats: DWARF_STATS.dragonSlayer,
    equipment: ['Hand Weapon'],
    magicAllowance: {
      maxItems: 1,
      allowedCategories:['weapon'],
    },
    specialRules: ['Slayer'],
    options: [
      { id: 'flail', name: 'Flail', points: 0, group: 'weapon', category:'weapon', isFixedCost:true },
      { id: 'add_hw', name: 'Additional hand weapon', points: 0, group: 'weapon', category:'weapon', isFixedCost:true },
      { id: 'spear', name: 'Spear', points: 0, group: 'weapon', category:'weapon', isFixedCost:true },
      { id: 'halberd', name: 'Halberd', points: 0, group: 'weapon', category:'weapon', isFixedCost:true },
      { id: 'great_weapon', name: 'Double handed weapon', points: 0, group: 'weapon', category:'weapon', isFixedCost:true },
    ]
  },
  {
    id: 'runelord',
    name: 'Runelord',
    modelName: 'Runelord',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 160,
    stats: DWARF_STATS.runelord,
    equipment: ['Hand Weapon'],
    magicAllowance: {
      maxItems: 3,
      allowedCategories:['weapon', 'armour', 'enchanted'],
    },
    specialRules: [],
    options: [
      { id: 'general', name: 'General', points: 0, category:'general', isFixedCost:true },
      { id: 'anvil_doom', name: 'Anvil of Doom', points: 100, isFixedCost:true },

      { id: 'shield', name: 'Shield', points: 0, category:'armour', isFixedCost:true },
      { id: 'light_armour', name: 'Light armour', points: 0, group: 'armour', category:'armour', isFixedCost:true },
      { id: 'heavy_armour', name: 'Heavy armour', points: 0, group: 'armour', category:'armour', isFixedCost:true },
      { id: 'gromril_armour', name: 'Gromril armour', points: 0, group: 'armour', category:'armour', isFixedCost:true },

      { id: 'flail', name: 'Flail', points: 0, group: 'weapon', category:'weapon', isFixedCost:true },
      { id: 'add_hw', name: 'Additional hand weapon', points: 0, group: 'weapon', category:'weapon', isFixedCost:true },
      { id: 'spear', name: 'Spear', points: 0, group: 'weapon', category:'weapon', isFixedCost:true },
      { id: 'halberd', name: 'Halberd', points: 0, group: 'weapon', category:'weapon', isFixedCost:true },
      { id: 'great_weapon', name: 'Double handed weapon', points: 0, group: 'weapon', category:'weapon', isFixedCost:true },
    ]
  },
  {
    id: 'master_runesmith',
    name: 'Master Runesmith',
    modelName: 'Master Runesmith',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 120,
    stats: DWARF_STATS.masterRunesmith,
    equipment: ['Hand Weapon'],
    magicAllowance: {
      maxItems: 2,
      allowedCategories:['weapon', 'armour', 'enchanted'],
    },
    specialRules: [],
    options: [
      { id: 'general', name: 'General', points: 0, category:'general', isFixedCost:true },
      { id: 'anvil_doom', name: 'Anvil of Doom', points: 110, isFixedCost:true },

      { id: 'shield', name: 'Shield', points: 0, category:'armour', isFixedCost:true },
      { id: 'light_armour', name: 'Light armour', points: 0, group: 'armour', category:'armour', isFixedCost:true },
      { id: 'heavy_armour', name: 'Heavy armour', points: 0, group: 'armour', category:'armour', isFixedCost:true },
      { id: 'gromril_armour', name: 'Gromril armour', points: 0, group: 'armour', category:'armour', isFixedCost:true },

      { id: 'flail', name: 'Flail', points: 0, group: 'weapon', category:'weapon', isFixedCost:true },
      { id: 'add_hw', name: 'Additional hand weapon', points: 0, group: 'weapon', category:'weapon', isFixedCost:true },
      { id: 'spear', name: 'Spear', points: 0, group: 'weapon', category:'weapon', isFixedCost:true },
      { id: 'halberd', name: 'Halberd', points: 0, group: 'weapon', category:'weapon', isFixedCost:true },
      { id: 'great_weapon', name: 'Double handed weapon', points: 0, group: 'weapon', category:'weapon', isFixedCost:true },
    ]
  },
  {
    id: 'runesmith',
    name: 'Runesmith',
    modelName: 'Runesmith',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 80,
    stats: DWARF_STATS.runesmith,
    equipment: ['Hand Weapon'],
    magicAllowance: {
      maxItems: 1,
      allowedCategories:['weapon', 'armour', 'enchanted'],
    },
    specialRules: [],
    options: [
      { id: 'general', name: 'General', points: 0, category:'general', isFixedCost:true },
      { id: 'anvil_doom', name: 'Anvil of Doom', points: 120, isFixedCost:true },

      { id: 'shield', name: 'Shield', points: 0, category:'armour', isFixedCost:true },
      { id: 'light_armour', name: 'Light armour', points: 0, group: 'armour', category:'armour', isFixedCost:true },
      { id: 'heavy_armour', name: 'Heavy armour', points: 0, group: 'armour', category:'armour', isFixedCost:true },
      { id: 'gromril_armour', name: 'Gromril armour', points: 0, group: 'armour', category:'armour', isFixedCost:true },

      { id: 'flail', name: 'Flail', points: 0, group: 'weapon', category:'weapon', isFixedCost:true },
      { id: 'add_hw', name: 'Additional hand weapon', points: 0, group: 'weapon', category:'weapon', isFixedCost:true },
      { id: 'spear', name: 'Spear', points: 0, group: 'weapon', category:'weapon', isFixedCost:true },
      { id: 'halberd', name: 'Halberd', points: 0, group: 'weapon', category:'weapon', isFixedCost:true },
      { id: 'great_weapon', name: 'Double handed weapon', points: 0, group: 'weapon', category:'weapon', isFixedCost:true },
    ]
  },
]