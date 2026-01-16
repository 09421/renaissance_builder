import { UnitDefinition } from '@/types/army';
import { OG_STATS } from './stats';

export const regiments: UnitDefinition[] = [
  {
    id: 'orc_boyz',
    name: 'Orc Boyz',
    modelName: 'Boy',
    role: 'regiments',
    type: 'Infantry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 5,
    stats: OG_STATS.commonOrc,
    equipment: ['Hand Weapon', 'Light armour'],
    specialRules: ['Animosity', 'Ignore panic induced by Goblins.'],
    options: [
      { id: 'add_hw', name: 'Additional hand weapons', points: 1, group: 'weapon', category:'weapon' },
      { id: 'spear', name: 'Spears', points: 2, group: 'weapon', category:'weapon' },
      { id: 'halberd', name: 'Halberds', points: 1, group: 'weapon', category:'weapon' },
      { id: 'great_wpn', name: 'Double handed weapons', points: 2, group: 'weapon', category:'weapon' },
      { id: 'shield', name: 'Shields', points: 1, category:'armour' },
      {
        id: 'champion',
        name: 'Orc Champion',
        points: 20,
        stats: OG_STATS.commonOrcChampion,
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
    id: 'orc_arrer_boyz',
    name: 'Orc Arrer Boyz',
    modelName: 'Boy',
    role: 'regiments',
    type: 'Infantry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 7,
    stats: OG_STATS.commonOrc,
    equipment: ['Hand Weapon', 'Bows'],
    specialRules: ['Animosity', 'Ignore panic induced by Goblins.'],
    options: [
      { id: 'crossbow', name: 'Crossbows', points: 2, group: 'weapon',category:'weapon', replaces: ['Bows'] },
      { id: 'light_armour', name: 'Light armour',category:'armour', points: 0.5 },
      {
        id: 'champion',
        name: 'Orc Champion',
        points: 20,
        stats: OG_STATS.commonOrcChampion,
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
    id: 'orc_boar_boyz',
    name: 'Orc Boar Boyz',
    modelName: 'Boy',
    role: 'regiments',
    type: 'Cavalry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 15,
    stats: OG_STATS.commonOrc,
    additionalProfiles: [
      {
        name: 'War Boar',
        stats: OG_STATS.warBoar
      }
    ],
    equipment: ['Hand Weapon', 'Light armour', 'Shield', 'War Boars'],
    specialRules: ['Animosity', 'Ignore panic induced by Goblins.'],
    options: [
      { id: 'spear', name: 'Spears', points: 2, group: 'weapon', category:'weapon' },
      {
        id: 'champion',
        name: 'Orc Champion',
        points: 20,
        stats: OG_STATS.commonOrcChampion,
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
    id: 'orc_biguns',
    name: 'Orc Big\'uns',
    modelName: 'Big\'un',
    role: 'regiments',
    type: 'Infantry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 7,
    stats: OG_STATS.bigun,
    equipment: ['Hand Weapon', 'Light armour'],
    specialRules: ['Animosity', 'Ignore panic induced by Goblins.'],
    options: [
      { id: 'add_hw', name: 'Additional hand weapons', points: 2, group: 'weapon', category:'weapon' },
      { id: 'spear', name: 'Spears', points: 3, group: 'weapon', category:'weapon' },
      { id: 'halberd', name: 'Halberds', points: 1, group: 'weapon', category:'weapon' },
      { id: 'great_wpn', name: 'Double handed weapons', points: 3, group: 'weapon', category:'weapon' },
      { id: 'shield', name: 'Shields', points: 1, category:'armour' },
      {
        id: 'champion',
        name: 'Big\'un Champion',
        points: 20,
        stats: OG_STATS.bigunChampion,
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
    id: 'orc_biguns_arrer_boyz',
    name: 'Orc Big\'uns Arrer Boyz',
    modelName: 'Big\'un',
    role: 'regiments',
    type: 'Infantry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 9,
    stats: OG_STATS.bigun,
    equipment: ['Hand Weapon', 'Bows'],
    specialRules: ['Animosity', 'Ignore panic induced by Goblins.'],
    options: [
      { id: 'crossbow', name: 'Crossbows', points: 2, group: 'weapon', category:'weapon', replaces:[ 'Bows'] },
      { id: 'light_armour', name: 'Light armour', category:'armour', points: 0.5 },
      {
        id: 'champion',
        name: 'Big\'un Champion',
        points: 20,
        stats: OG_STATS.bigunChampion,
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
    id: 'orc_biguns_boar_boyz',
    name: 'Orc Big\'un Boar Boyz',
    modelName: 'Big\'un',
    role: 'regiments',
    type: 'Cavalry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 18,
    stats: OG_STATS.bigun,
    additionalProfiles: [
      {
        name: 'War Boar',
        stats: OG_STATS.warBoar
      }
    ],
    equipment: ['Hand Weapon', 'Light armour', 'Shield', 'War Boars'],
    specialRules: ['Animosity', 'Ignore panic induced by Goblins.'],
    options: [
      { id: 'spear', name: 'Spears', points: 2, group: 'weapon', category:'weapon' },
      {
        id: 'champion',
        name: 'Big\'un Champion',
        points: 20,
        stats: OG_STATS.bigunChampion,
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
    id: 'savage_orc',
    name: 'Savage Orcs',
    modelName: 'Savage Orc',
    role: 'regiments',
    type: 'Infantry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 8,
    stats: OG_STATS.savageOrc,
    equipment: ['Hand Weapon', 'magical tattoos'],
    specialRules: ['Animosity', 'frenzied', 'Ignore panic induced by Goblins.'],
    options: [
      { id: 'add_hw', name: 'Additional hand weapons', points: 1, group: 'weapon', category:'weapon', },
      { id: 'spear', name: 'Spears', points: 1, group: 'weapon', category:'weapon', },
      { id: 'great_wpn', name: 'Double handed weapons', points: 4, group: 'weapon', category:'weapon', },
      { id: 'shield', name: 'Shields', points: 1, category:'armour', },
      {
        id: 'champion',
        name: 'Savage Orc Champion',
        points: 30,
        stats: OG_STATS.savageChampion,
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
    id: 'savage_arrer_boyz',
    name: 'Savage Orc Arrer Boyz',
    modelName: 'Savage Boy',
    role: 'regiments',
    type: 'Infantry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 10,
    stats: OG_STATS.savageOrc,
    equipment: ['Hand Weapon', 'Bows', 'magical tattoos'],
    specialRules: ['Animosity', 'frenzied', 'Ignore panic induced by Goblins.'],
    options: [
      {
        id: 'champion',
        name: 'Savage Orc Champion',
        points: 30,
        stats: OG_STATS.savageChampion,
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
    id: 'savage_boar_boyz',
    name: 'Savage Orc Boar Boyz',
    modelName: 'Savage Boy',
    role: 'regiments',
    type: 'Cavalry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 20,
    stats: OG_STATS.savageOrc,
    additionalProfiles: [
      {
        name: 'War Boar',
        stats: OG_STATS.warBoar
      }
    ],
    equipment: ['Hand Weapon', 'magical tattoos', 'Shield', 'War Boars'],
    specialRules: ['Animosity', 'frenzied', 'Ignore panic induced by Goblins.'],
    options: [
      { id: 'spear', name: 'Spears', points: 3, group: 'weapon', category:'weapon', },
      { id: 'bow', name: 'Bows', points: 2, group: 'ranged_weapon', category:'ranged_weapon', },
      {
        id: 'champion',
        name: 'Savage Orc Champion',
        points: 30,
        stats: OG_STATS.savageChampion,
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
    id: 'black_orc',
    name: 'Black Orcs',
    modelName: 'Black Orc',
    role: 'regiments',
    type: 'Infantry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 9,
    stats: OG_STATS.blackOrc,
    equipment: ['Hand Weapon', 'Light armour'],
    specialRules: ['Ignore panic induced by Goblins and other orc types'],
    options: [
      { id: 'add_hw', name: 'Additional hand weapons', points: 2, group: 'weapon', category:'weapon', },
      { id: 'spear', name: 'Spears', points: 2, group: 'weapon', category:'weapon', },
      { id: 'halberd', name: 'Halberds', points: 1, group: 'weapon', category:'weapon', },
      { id: 'great_wpn', name: 'Double handed weapons', points: 3, group: 'weapon', category:'weapon', },
      { id: 'heavy_armour', name: 'Heavy armour', points: 2, replaces: ['Light armour'], category:'armour', },
      { id: 'shield', name: 'Shields', points: 1, category:'armour', },
      {
        id: 'champion',
        name: 'Black Orc Champion',
        points: 20,
        stats: OG_STATS.blackOrcChampion,
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
    id: 'goblin',
    name: 'Goblins',
    modelName: 'goblin',
    role: 'regiments',
    type: 'Infantry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 2.5,
    stats: OG_STATS.goblin,
    equipment: ['Hand Weapon'],
    specialRules: ['Animosity', 'Fear Elves'],
    options: [
      { id: 'spear', name: 'Spears', points: 0.5, group: 'weapon', category:'weapon', },
      { id: 'great_wpn', name: 'Double handed weapons', points: 2, group: 'weapon' , category:'weapon',},
      { id: 'short_bow', name: 'Short Bows', points: 1, group: 'ranged_weapon', category:'ranged_weapon', },
      { id: 'light_armour', name: 'Light armour', points: 0.5, category:'armour', },
      { id: 'shield', name: 'Shields', points: 0.5, category:'armour', },
      {
        id: 'champion',
        name: 'Goblin Champion',
        points: 10,
        stats: OG_STATS.goblinChampion,
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
    id: 'goblin_wolf_riders',
    name: 'Goblin Wolf Riders',
    modelName: 'Goblin',
    role: 'regiments',
    type: 'Cavalry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 9,
    stats: OG_STATS.goblin,
    additionalProfiles: [
      {
        name: 'Giant Wolf',
        stats: OG_STATS.giantWolf
      }
    ],
    equipment: ['Hand Weapon', 'Giant Wolf'],
    specialRules: ['Animosity', 'Fear Elves'],
    options: [
      { id: 'spear', name: 'Spears', points: 1, group: 'weapon', category:'weapon', },
      { id: 'short_bow', name: 'Short Bows', points: 1, group: 'ranged_weapon', category:'ranged_weapon', },
      { id: 'light_armour', name: 'Light armour', points: 1, category:'armour', },
      { id: 'shield', name: 'Shields', points: 1, category:'armour', },
      {
        id: 'champion',
        name: 'Goblin Champion',
        points: 10,
        stats: OG_STATS.goblinChampion,
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
      }
    ]
  },
  {
    id: 'forest_goblin',
    name: 'Forest Goblins',
    modelName: 'Forest Goblin',
    role: 'regiments',
    type: 'Infantry',
    tags:['forest_goblin'],
    minSize: 5,
    maxSize: null,
    pointsPerModel: 2.5,
    stats: OG_STATS.forestGoblin,
    equipment: ['Hand Weapon'],
    specialRules: ['Animosity', 'Fear Elves', 'Traverse woods without penalty'],
    options: [
      { id: 'spear', name: 'Spears', points: 0.5, group: 'weapon', category:'weapon', },
      { id: 'great_wpn', name: 'Double handed weapons', points: 2, group: 'weapon', category:'weapon', },
      { id: 'short_bow', name: 'Short Bows', points: 1, group: 'weapon', conflicts: ['shield'], category:'ranged_weapon', },
      { id: 'shield', name: 'Shields', points: 0.5, conflicts: ['short_bow'], category:'armour', },
      {
        id: 'champion',
        name: 'Goblin Champion',
        points: 10,
        stats: OG_STATS.forestGoblinChampion,
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
    id: 'forest_goblin_spider_riders',
    name: 'Forest Goblin Spider Riders',
    modelName: 'Forest Goblin',
    role: 'regiments',
    type: 'Cavalry',
    tags:['forest_goblin'],
    minSize: 5,
    maxSize: null,
    pointsPerModel: 8,
    stats: OG_STATS.forestGoblin,
    additionalProfiles: [
      {
        name: 'Giant Spider',
        stats: OG_STATS.giantSpider
      }
    ],
    equipment: ['Hand Weapon', 'Giant Spider'],
    specialRules: ['Animosity', 'Fear Elves', 'Traverse woods without penalty', 'Traverse obstacles, rocky terrain, buildings, and cliffs without penalties', 'Giant Spiders poisonous (+1S)'],
    options: [
      { id: 'spear', name: 'Spears', points: 1, group: 'weapon', category:'weapon', },
      { id: 'short_bow', name: 'Short Bows', points: 1, group: 'ranged_weapon', category:'ranged_weapon', },
      { id: 'shield', name: 'Shields', points: 1, category:'armour', },
      {
        id: 'champion',
        name: 'Goblin Champion',
        points: 10,
        stats: OG_STATS.goblinChampion,
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
      }
    ]
  },
  {
    id: 'night_goblin',
    name: 'Night Goblins',
    modelName: 'Night Goblin',
    role: 'regiments',
    type: 'Infantry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 2.5,
    stats: OG_STATS.nightGoblin,
    equipment: ['Hand Weapon'],
    specialRules: ['Animosity', 'Fear Elves', 'Hate Dwarfs'],
    options: [
      { id: 'spear', name: 'Spears', points: 0.5, group: 'weapon', category:'weapon' },
      { id: 'great_wpn', name: 'Double handed weapons', points: 2, group: 'weapon', category:'weapon'  },
      { id: 'short_bow', name: 'Short Bows', points: 1, group: 'weapon', conflicts: ['shield'], category:'ranged_weapon' },
      { id: 'shield', name: 'Shields', points: 0.5, conflicts: ['short_bow'], category:'armour' },
      {
        id: 'fanatic',
        name: 'Fanatic',
        points: 30,
        maxPerUnit: 3,
        isFixedCost: true,
        isExternalPoints: true,
        optionProfile: [{ name: 'Fanatic', stats: OG_STATS.nightGoblinFanatic }]
      },
      {
        id: 'mad_cap_mushroom',
        name: 'Mad Cap Mushroom',
        points: 20,
        isFixedCost: true,
        requires: ['fanatic'],
      },
      {
        id: 'champion',
        name: 'Goblin Champion',
        points: 10,
        stats: OG_STATS.goblinChampion,
        category: 'command',
        isFixedCost: true,
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
    id: 'night_goblin_squig_hoppers',
    name: 'Squig-Hoppers',
    modelName: 'Cave Squig',
    role: 'regiments',
    type: 'Infantry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 25,
    stats: OG_STATS.caveSquig,
    equipment: ['Hand Weapon'],
    specialRules: ['immune to psychology', 'Fear Elves', 'Hate Dwarfs'],
    options: []
  },
  {
    id: 'night_goblin_squig_hunters',
    name: 'Squig-Hunters',
    modelName: 'Night Goblin',
    role: 'regiments',
    type: 'Infantry',
    minSize: 1,
    maxSize: null,
    pointsPerModel: 6,
    stats: OG_STATS.nightGoblin,
    equipment: ['Hand Weapon', 'Spear'],
    specialRules: ['Animosity', 'Fear Elves', 'Hate Dwarfs'],
    options: [
      {
        id: 'cave_squig',
        name: 'Cave Squig',
        points: 12,
        maxPerModel: 3,
        ratioError: 'Only 3 Cave Squig per goblin is allowed.',
        isFixedCost: true,
        optionProfile: [{
          name: 'Cave Squig',
          stats: OG_STATS.caveSquig
        }]
      }
    ]
  },
  {
    id: 'night_goblin_netters_clubbers',
    name: 'Netters and Clubbers',
    modelName: 'Night Goblin',
    role: 'regiments',
    type: 'Infantry',
    minSize: 5,
    maxSize: null,
    pointsPerModel: 6,
    stats: OG_STATS.nightGoblin,
    equipment: ['Nets and Clubs'],
    specialRules: ['Animosity', 'Fear Elves', 'Hate Dwarfs', 'Always strike first', 'Always strike first'],
    options: [
      {
        id: 'champion',
        name: 'Goblin Champion',
        points: 10,
        stats: OG_STATS.goblinChampion,
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
    id: 'snotlings',
    name: 'Snotlings',
    modelName: 'Snotling',
    role: 'regiments',
    type: 'Infantry',
    minSize: 5,
    maxSize: null,
    restrictions:{
      maxPerArmy: 1
    },
    pointsPerModel: 15,
    stats: OG_STATS.snotling,
    equipment: ['Hand Weapon'],
    specialRules: [],
    options: []
  },
  {
    id: 'trolls',
    name: 'Trolls',
    modelName: 'Troll',
    role: 'regiments',
    type: 'Monstrous Infantry',
    minSize: 3,
    maxSize: null,
    pointsPerModel: 40,
    stats: OG_STATS.troll,
    equipment: ['Hand Weapon'],
    specialRules: ['Stupid', 'Immune to psychology', 'Causes fear', 'Regenerate 4+', 'Vomit'],
    options: [
      {
        id: 'rover_troll',
        name: 'Rover Troll',
        points: 0,
        group: 'special_troll',
      },
      {
        id: 'stone_troll',
        name: 'Stone Troll',
        points: 0,
        group: 'special_troll',
      },
      {
        id: 'chaos_troll',
        name: 'Chaos Troll',
        points: 5,
        group: 'special_troll',
      }
    ]
  },
  {
    id: 'ogre_mercs',
    name: 'Ogre Mercenaries',
    modelName: 'Ogre',
    role: 'regiments',
    type: 'Monstrous Infantry',
    minSize: 3,
    maxSize: null,
    pointsPerModel: 24,
    stats: OG_STATS.ogre,
    equipment: ['Hand Weapon', 'Light armour'],
    specialRules: ['Causes fear'],
    options: [
      { id: 'add_hw', name: 'Additional hand weapons', points: 6, group: 'weapon',category:'weapon' },
      { id: 'great_wpn', name: 'Double handed weapons', points: 8, group: 'weapon',category:'weapon' },
      { id: 'flail', name: 'Flails', points: 8, group: 'weapon',category:'weapon' },
      { id: 'heavy_armour', name: 'Heavy armour', points: 4, replaces: ['Light armour'],category:'armour'},
      {
        id: 'champion',
        name: 'Ogre Champion',
        points: 50,
        stats: OG_STATS.ogreChampion,
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
      }
    ]
  },
]