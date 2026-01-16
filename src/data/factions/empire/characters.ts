import { UnitDefinition } from '@/types/army';
import { EMP_STATS } from './stats';

export const characters: UnitDefinition[] = [
  {
    id: 'empire_lord',
    name: 'Empire Lord',
    modelName: 'Empire Lord',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 100,
    stats: EMP_STATS.empireLord,
    equipment: ['Hand Weapon'],
    magicAllowance: {
      maxItems: 3,
      allowedCategories:['weapon', 'armour', 'enchanted'],
    },
    specialRules: [],
    options: [
      { id: 'general', name: 'General', points: 0, category:'general', isFixedCost:true },
      { id: 'warhorse', name: 'War Horse', points: 20, group: 'mount', optionProfile: [{ name: 'War Horse', stats: EMP_STATS.Warhorse }], category:'mount' },
      { id: 'barding', name: 'Barding', points: 0, requires: ['warhorse'], category:'mount' },
      { id: 'pegasus', name: 'Pegasus', points: 55, group: 'mount', optionProfile: [{ name: 'Pegasus', stats: EMP_STATS.Pegasus }], category:'mount' },
      { id: 'griffon', name: 'Griffon', points: 175, group: 'mount', optionProfile: [{ name: 'Griffon', stats: EMP_STATS.Griffon }], category:'mount' },

      { id: 'shield', name: 'Shield', points: 0, category:'armour' },
      { id: 'light_armour', name: 'Light armour', points: 0, group: 'armour', category:'armour' },
      { id: 'heavy_armour', name: 'Heavy armour', points: 0, group: 'armour', category:'armour' },
      { id: 'full_plate', name: 'Full plate', points: 0, group: 'armour', category:'armour' },

      { id: 'flail', name: 'Flail', points: 0, group: 'weapon', category:'weapon'},
      { id: 'add_hw', name: 'Additional hand weapon', points: 0, group: 'weapon', category:'weapon'},
      { id: 'spear', name: 'Spear', points: 0, group: 'weapon', category:'weapon' },
      { id: 'halberd', name: 'Halberd', points: 0, group: 'weapon', category:'weapon' },
      { id: 'great_weapon', name: 'Double handed weapon', points: 0, group: 'weapon', category:'weapon' },
      { id: 'lance', name: 'Lance', points: 0, group: 'weapon', category:'weapon' },
      
      { id: 'bow', name: 'Bow', points: 10, group: 'ranged_weapon', category:'ranged_weapon' },
      { id: 'long_bow', name: 'Long Bow', points: 10, group: 'ranged_weapon', category:'ranged_weapon' },
      { id: 'crossbow', name: 'Crossbow', points: 10, group: 'ranged_weapon', category:'ranged_weapon' },
      { id: 'handgun', name: 'Handgun', points: 10, group: 'ranged_weapon', category:'ranged_weapon' },
      { id: 'pistol', name: 'Pistol', points: 10, group: 'ranged_weapon', category:'ranged_weapon' },
      { id: 'two_pistol', name: 'Two Pistols', points: 10, group: 'ranged_weapon', category:'ranged_weapon' },
    ]
  },
  {
    id: 'empire_hero',
    name: 'Empire Hero',
    modelName: 'Empire Hero',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 60,
    stats: EMP_STATS.empireHero,
    equipment: ['Hand Weapon'],
    magicAllowance: {
      maxItems: 2,
      allowedCategories:['weapon', 'armour', 'enchanted'],
    },
    specialRules: [],
    options: [
      { id: 'general', name: 'General', points: 0, category:'general', isFixedCost:true },
      { id: 'warhorse', name: 'War Horse', points: 15, group: 'mount', optionProfile: [{ name: 'War Horse', stats: EMP_STATS.Warhorse }], category:'mount' },
      { id: 'barding', name: 'Barding', points: 0, requires: ['warhorse'], category:'mount' },
      { id: 'pegasus', name: 'Pegasus', points: 50, group: 'mount', optionProfile: [{ name: 'Pegasus', stats: EMP_STATS.Pegasus }], category:'mount' },
      { id: 'griffon', name: 'Griffon', points: 170, group: 'mount', optionProfile: [{ name: 'Griffon', stats: EMP_STATS.Griffon }], category:'mount' },

      { id: 'shield', name: 'Shield', points: 0 },
      { id: 'light_armour', name: 'Light armour', points: 0, group: 'armour', category:'armour' },
      { id: 'heavy_armour', name: 'Heavy armour', points: 0, group: 'armour', category:'armour' },
      { id: 'full_plate', name: 'Full plate', points: 0, group: 'armour', category:'armour' },

      { id: 'flail', name: 'Flail', points: 0, group: 'weapon', category:'weapon'},
      { id: 'add_hw', name: 'Additional hand weapon', points: 0, group: 'weapon', category:'weapon'},
      { id: 'spear', name: 'Spear', points: 0, group: 'weapon', category:'weapon' },
      { id: 'halberd', name: 'Halberd', points: 0, group: 'weapon', category:'weapon' },
      { id: 'great_weapon', name: 'Double handed weapon', points: 0, group: 'weapon', category:'weapon' },
      { id: 'lance', name: 'Lance', points: 0, group: 'weapon', category:'weapon' },

      { id: 'bow', name: 'Bow', points: 10, group: 'ranged_weapon', category:'ranged_weapon' },
      { id: 'long_bow', name: 'Long Bow', points: 10, group: 'ranged_weapon', category:'ranged_weapon' },
      { id: 'crossbow', name: 'Crossbow', points: 10, group: 'ranged_weapon', category:'ranged_weapon' },
      { id: 'handgun', name: 'Handgun', points: 10, group: 'ranged_weapon', category:'ranged_weapon' },
      { id: 'pistol', name: 'Pistol', points: 10, group: 'ranged_weapon', category:'ranged_weapon' },
      { id: 'two_pistol', name: 'Two Pistols', points: 10, group: 'ranged_weapon', category:'ranged_weapon' },
      
      { id: 'long_rigle', name: 'Hochland long rifle', points: 10, group: 'experimantal_weapon', category:'experimantal' },
      { id: 'repeating_handgun', name: 'Repeating Handgun', points: 10, group: 'experimantal_weapon', category:'experimantal' },
      { id: 'repeating_pistol', name: 'Repeating Pistol', points: 10, group: 'experimantal_weapon', category:'experimantal' },
    ]
  },
  {
    id: 'empire_bsb',
    name: 'Battle Standard Bearer',
    modelName: 'Bsb',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 80,
    stats: EMP_STATS.empireBSB,
    equipment: ['Hand Weapon'],
    magicAllowance: {
      maxItems: 1,
      allowedCategories:['weapon', 'armour', 'enchanted', 'banner'],
    },
    specialRules: [],
    options: [
      { id: 'warhorse', name: 'War Horse', points: 10, group: 'mount', optionProfile: [{ name: 'War Horse', stats: EMP_STATS.Warhorse }], category:'mount' },
      { id: 'barding', name: 'Barding', points: 0, requires: ['warhorse'], category:'mount' },

      { id: 'light_armour', name: 'Light armour', points: 0, group: 'armour', category:'armour' },
      { id: 'heavy_armour', name: 'Heavy armour', points: 0, group: 'armour', category:'armour' },
      { id: 'full_plate', name: 'Full plate', points: 0, group: 'armour', category:'armour' },
    ]
  },
  {
    id: 'warpriest',
    name: 'Warrior Priest',
    modelName: 'Warrior Priest',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 65,
    stats: EMP_STATS.warriorPriest,
    equipment: ['Hand Weapon'],
    magicAllowance: {
      maxItems: 1,
      allowedCategories:['weapon', 'armour', 'enchanted'],
    },
    specialRules: ['Religious Fervor'],
    options: [
      { id: 'general', name: 'General', points: 0, category:'general', isFixedCost:true },
      { id: 'warhorse', name: 'War Horse', points: 10, group: 'mount', optionProfile: [{ name: 'War Horse', stats: EMP_STATS.Warhorse }], category:'mount' },
      { id: 'barding', name: 'Barding', points: 0, requires: ['warhorse'], category:'mount' },      
      { id: 'chariot', name: 'LargeChariot', points: 80, group: 'mount', optionProfile: [{ name: 'War Horse', stats: EMP_STATS.Warhorse }], category:'mount' },

      { id: 'light_armour', name: 'Light armour', points: 0, group: 'armour', category:'armour' },
      { id: 'heavy_armour', name: 'Heavy armour', points: 0, group: 'armour', category:'armour' },
      
      { id: 'flail', name: 'Flail', points: 0, group: 'weapon', category:'weapon'},
      { id: 'add_hw', name: 'Additional hand weapon', points: 0, group: 'weapon', category:'weapon'},
      { id: 'great_weapon', name: 'Double handed weapon', points: 0, group: 'weapon', category:'weapon' },
    ]
  },
  {
    id: 'wizard_lord',
    name: 'Wizard Lord (lvl4)',
    modelName: 'Wizard Lord',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 240,
    stats: EMP_STATS.wizardLord,
    equipment: ['Hand Weapon'],
    magicAllowance: {
      maxItems: 4,
      allowedCategories:['weapon', 'armour', 'enchanted', 'arcane', 'familiar'],
    },
    specialRules: ['Level 4 Wizard'],
    options: [
      { id: 'general', name: 'General', points: 0, category:'general', isFixedCost:true },
      { id: 'college', name: 'College Magic', points: 0, group: 'magic_college', category:'magic' },
      { id: 'ice_college', name: 'Ice Magic', points: 0, group: 'magic_college', category:'magic' },

      { id: 'warhorse', name: 'War Horse', points: 0, group: 'mount', optionProfile: [{ name: 'War Horse', stats: EMP_STATS.Warhorse }], category:'mount'},
      { id: 'barding', name: 'Barding', points: 0, requires: ['warhorse'], category:'mount' },
      { id: 'pegasus', name: 'Pegasus', points: 40, group: 'mount', optionProfile: [{ name: 'Pegasus', stats: EMP_STATS.Pegasus }], category:'mount' },
      { id: 'griffon', name: 'Griffon', points: 160, group: 'mount', optionProfile: [{ name: 'Griffon', stats: EMP_STATS.Griffon }], category:'mount' },
    ]
  },
  {
    id: 'master_wizard',
    name: 'Master Wizard (lvl3)',
    modelName: 'Master Wizard',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 170,
    stats: EMP_STATS.masterWizard,
    equipment: ['Hand Weapon'],
    magicAllowance: {
      maxItems: 3,
      allowedCategories:['weapon', 'armour', 'enchanted', 'arcane', 'familiar'],
    },
    specialRules: ['Level 3 Wizard'],
    options: [
      { id: 'general', name: 'General', points: 0, category:'general', isFixedCost:true },
      { id: 'college', name: 'College Magic', points: 0, group: 'magic_college', category:'magic' },
      { id: 'ice_college', name: 'Ice Magic', points: 0, group: 'magic_college', category:'magic' },

      { id: 'warhorse', name: 'War Horse', points: 0, group: 'mount', optionProfile: [{ name: 'War Horse', stats: EMP_STATS.Warhorse }], category:'mount' },
      { id: 'barding', name: 'Barding', points: 0, requires: ['warhorse'], category:'mount' },
      { id: 'pegasus', name: 'Pegasus', points: 40, group: 'mount', optionProfile: [{ name: 'Pegasus', stats: EMP_STATS.Pegasus }], category:'mount' },
    ]
  },
  {
    id: 'wizard_champion',
    name: 'Wizard Champion (lvl2)',
    modelName: 'Wizard Champion',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 110,
    stats: EMP_STATS.wizardChampion,
    equipment: ['Hand Weapon'],
    magicAllowance: {
      maxItems: 2,
      allowedCategories:['weapon', 'armour', 'enchanted', 'arcane', 'familiar'],
    },
    specialRules: ['Level 2 Wizard'],
    options: [
      { id: 'general', name: 'General', points: 0, category:'general', isFixedCost:true },
      { id: 'college', name: 'College Magic', points: 0, group: 'magic_college', category:'magic' },
      { id: 'ice_college', name: 'Ice Magic', points: 0, group: 'magic_college', category:'magic' },

      { id: 'warhorse', name: 'War Horse', points: 0, group: 'mount', optionProfile: [{ name: 'War Horse', stats: EMP_STATS.Warhorse }], category:'mount' },
      { id: 'barding', name: 'Barding', points: 0, requires: ['warhorse'], category:'mount' },
      { id: 'pegasus', name: 'Pegasus', points: 40, group: 'mount', optionProfile: [{ name: 'Pegasus', stats: EMP_STATS.Pegasus }], category:'mount' },
    ]
  },
  {
    id: 'wizard',
    name: 'Wizard (lvl1)',
    modelName: 'Wizard',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 50,
    stats: EMP_STATS.wizard,
    equipment: ['Hand Weapon'],
    magicAllowance: {
      maxItems: 1,
      allowedCategories:['weapon', 'armour', 'enchanted', 'arcane', 'familiar'],
    },
    specialRules: ['Level 1 Wizard'],
    options: [
      { id: 'general', name: 'General', points: 0, category:'general', isFixedCost:true },
      { id: 'college', name: 'College Magic', points: 0, group: 'magic_college', category:'magic' },
      { id: 'ice_college', name: 'Ice Magic', points: 0, group: 'magic_college', category:'magic' },

      { id: 'warhorse', name: 'War Horse', points: 0, group: 'mount', optionProfile: [{ name: 'War Horse', stats: EMP_STATS.Warhorse }], category:'mount' },
      { id: 'barding', name: 'Barding', points: 0, requires: ['warhorse'], category:'mount' },
      { id: 'pegasus', name: 'Pegasus', points: 40, group: 'mount', optionProfile: [{ name: 'Pegasus', stats: EMP_STATS.Pegasus }], category:'mount' },
    ]
  },

]