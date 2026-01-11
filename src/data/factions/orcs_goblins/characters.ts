import { UnitDefinition } from '@/types/army';
import { OG_STATS } from './stats';

export const characters: UnitDefinition[] = [
  {
    id: 'blackorc_warlord',
    name: 'Black Orc Warlord',
    modelName: 'Black Orc Warlord',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 148,
    stats: OG_STATS.blackOrcWarlord,
    equipment: ['Hand Weapon'],
    magicAllowance: {
      maxItems: 3
    },
    specialRules: ['Quells animosity', 'Ignore panic induced by Goblins and other orc types'],
    options: [
      { id: 'general', name: 'General', points: 0 },
      { id: 'war_boar', name: 'War Boar', points: 33, group: 'mount', optionProfile: { name: 'War Boar', stats: OG_STATS.warBoar } },
      { id: 'wyvern', name: 'Wyvern', points: 167, group: 'mount', optionProfile: { name: 'Wyvern', stats: OG_STATS.wyvern } },

      { id: 'shield', name: 'Shield', points: 0 },
      { id: 'light_armor', name: 'Light armor', points: 0, group: 'armor' },
      { id: 'heavy_armor', name: 'Heavy armor', points: 0, group: 'armor' },

      { id: 'add_hw', name: 'Additional hand weapon', points: 0, group: 'weapon'},
      { id: 'spear', name: 'Spear,', points: 0, group: 'weapon' },
      { id: 'halberd', name: 'Halberd,', points: 0, group: 'weapon' },
      { id: 'great_weapon', name: 'Double handed weapon', points: 0, group: 'weapon' },
    ]
  },
  {
    id: 'blackorc_hero',
    name: 'Black Orc Hero',
    modelName: 'Black Orc Hero',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 89,
    stats: OG_STATS.blackOrcHero,
    equipment: ['Hand Weapon'],
    magicAllowance: {
      maxItems: 2
    },
    specialRules: ['Quells animosity', 'Ignore panic induced by Goblins and other orc types'],
    options: [
      { id: 'general', name: 'General', points: 0 },
      { id: 'war_boar', name: 'War Boar', points: 24, group: 'mount', optionProfile: { name: 'War Boar', stats: OG_STATS.warBoar } },
      { id: 'wyvern', name: 'Wyvern', points: 158, group: 'mount', optionProfile: { name: 'Wyvern', stats: OG_STATS.wyvern } },

      { id: 'shield', name: 'Shield', points: 0 },
      { id: 'light_armor', name: 'Light armor', points: 0, group: 'armor' },
      { id: 'heavy_armor', name: 'Heavy armor', points: 0, group: 'armor' },

      { id: 'add_hw', name: 'Additional hand weapon', points: 0, group: 'weapon'},
      { id: 'spear', name: 'Spear,', points: 0, group: 'weapon' },
      { id: 'halberd', name: 'Halberd,', points: 0, group: 'weapon' },
      { id: 'great_weapon', name: 'Double handed weapon', points: 0, group: 'weapon' },
    ]
  },
  {
    id: 'blackorc_bsb',
    name: 'Black Orc Bsb',
    modelName: 'Black Orc Bsb',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 96,
    stats: OG_STATS.blackOrcBsb,
    equipment: ['Hand Weapon'],
    magicAllowance: {
      maxItems: 1
    },
    specialRules: ['Quells animosity', 'Ignore panic induced by Goblins and other orc types'],
    options: [
      { id: 'war_boar', name: 'War Boar', points: 15, group: 'mount', optionProfile: { name: 'War Boar', stats: OG_STATS.warBoar } },
      { id: 'wyvern', name: 'Wyvern', points: 158, group: 'mount', optionProfile: { name: 'Wyvern', stats: OG_STATS.wyvern } },

      { id: 'light_armor', name: 'Light armor', points: 0, group: 'armor' },
      { id: 'heavy_armor', name: 'Heavy armor', points: 0, group: 'armor' },
    ]
  },
  {
    id: 'orc_warlord',
    name: 'Orc Warlord',
    modelName: 'Orc Warlord',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 100,
    stats: OG_STATS.OrcWarlord,
    equipment: ['Hand Weapon'],
    magicAllowance: {
      maxItems: 3
    },
    specialRules: ['Animosity', 'Ignore panic induced by Goblins'],
    options: [
      { id: 'general', name: 'General', points: 0 },
      { id: 'war_boar', name: 'War Boar', points: 21, group: 'mount', optionProfile: { name: 'War Boar', stats: OG_STATS.warBoar } },
      { id: 'boar_chariot', name: 'Boar Chariot', points: 52, group: 'mount', optionProfile: { name: 'War Boar', stats: OG_STATS.warBoar } },
      { id: 'wyvern', name: 'Wyvern', points: 155, group: 'mount', optionProfile: { name: 'Wyvern', stats: OG_STATS.wyvern } },

      { id: 'shield', name: 'Shield', points: 0 },
      { id: 'light_armor', name: 'Light armor', points: 0 },

      { id: 'add_hw', name: 'Additional hand weapon', points: 0, group: 'weapon'},
      { id: 'spear', name: 'Spear,', points: 0, group: 'weapon' },
      { id: 'halberd', name: 'Halberd,', points: 0, group: 'weapon' },
      { id: 'great_weapon', name: 'Double handed weapon', points: 0, group: 'weapon' },
      { id: 'bow', name: 'Bow', points: 10, group: 'ranged_weapon' },
      { id: 'crossbow', name: 'Crossbow', points: 10, group: 'ranged_weapon' },
    ]
  },
  {
    id: 'orc_hero',
    name: 'Orc Hero',
    modelName: 'Orc Hero',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 60,
    stats: OG_STATS.OrcHero,
    equipment: ['Hand Weapon'],
    magicAllowance: {
      maxItems: 2
    },
    specialRules: ['Animosity', 'Ignore panic induced by Goblins'],
    options: [
      { id: 'general', name: 'General', points: 0 },
      { id: 'war_boar', name: 'War Boar', points: 16, group: 'mount', optionProfile: { name: 'War Boar', stats: OG_STATS.warBoar } },
      { id: 'boar_chariot', name: 'Boar Chariot', points: 52, group: 'mount', optionProfile: { name: 'War Boar', stats: OG_STATS.warBoar } },
      { id: 'wyvern', name: 'Wyvern', points: 150, group: 'mount', optionProfile: { name: 'Wyvern', stats: OG_STATS.wyvern } },

      { id: 'shield', name: 'Shield', points: 0 },
      { id: 'light_armor', name: 'Light armor', points: 0 },

      { id: 'add_hw', name: 'Additional hand weapon', points: 0, group: 'weapon'},
      { id: 'spear', name: 'Spear,', points: 0, group: 'weapon' },
      { id: 'halberd', name: 'Halberd,', points: 0, group: 'weapon' },
      { id: 'great_weapon', name: 'Double handed weapon', points: 0, group: 'weapon' },
      { id: 'bow', name: 'Bow', points: 10, group: 'ranged_weapon' },
      { id: 'crossbow', name: 'Crossbow', points: 10, group: 'ranged_weapon' },
    ]
  },
  {
    id: 'orc_bsb',
    name: 'Orc Bsb',
    modelName: 'Orc Bsb',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 80,
    stats: OG_STATS.orcBsb,
    equipment: ['Hand Weapon'],
    magicAllowance: {
      maxItems: 1
    },
    specialRules: ['Animosity', 'Ignore panic induced by Goblins'],
    options: [
      { id: 'war_boar', name: 'War Boar', points: 11, group: 'mount', optionProfile: { name: 'War Boar', stats: OG_STATS.warBoar } },
      { id: 'boar_chariot', name: 'Boar Chariot', points: 52, group: 'mount', optionProfile: { name: 'War Boar', stats: OG_STATS.warBoar } },

      { id: 'light_armor', name: 'Light armor', points: 0 },
    ]
  },
  {
    id: 'orc_shaman_lord',
    name: 'Orc Shaman Lord (lvl4)',
    modelName: 'Orc Shaman Lord',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 220,
    stats: OG_STATS.orcShamanLord,
    equipment: ['Hand Weapon', 'Lore of Waaagh!'],
    magicAllowance: {
      maxItems: 4
    },
    specialRules: ['Animosity', 'Ignore panic induced by Goblins','Level 4 Shaman'],
    options: [
      { id: 'general', name: 'General', points: 0 },
      { id: 'war_boar', name: 'War Boar', points: 0, group: 'mount', optionProfile: { name: 'War Boar', stats: OG_STATS.warBoar } },
      { id: 'boar_chariot', name: 'Boar Chariot', points: 52, group: 'mount', optionProfile: { name: 'War Boar', stats: OG_STATS.warBoar } },
      { id: 'wyvern', name: 'Wyvern', points: 140, group: 'mount', optionProfile: { name: 'Wyvern', stats: OG_STATS.wyvern } },
    ]
  },
  {
    id: 'orc_shaman_master',
    name: 'Orc Shaman Master (lvl3)',
    modelName: 'Orc Shaman Master',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 155,
    stats: OG_STATS.orcMasterShaman,
    equipment: ['Hand Weapon', 'Lore of Waaagh!'],
    magicAllowance: {
      maxItems: 3
    },
    specialRules: ['Animosity', 'Ignore panic induced by Goblins','Level 3 Shaman'],
    options: [
      { id: 'general', name: 'General', points: 0 },
      { id: 'war_boar', name: 'War Boar', points: 0, group: 'mount', optionProfile: { name: 'War Boar', stats: OG_STATS.warBoar } },
      { id: 'boar_chariot', name: 'Boar Chariot', points: 52, group: 'mount', optionProfile: { name: 'War Boar', stats: OG_STATS.warBoar } },
    ]
  },
  {
    id: 'orc_shaman_champion',
    name: 'Orc Shaman Champion (lvl2)',
    modelName: 'Orc Shaman Champion',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 100,
    stats: OG_STATS.orcShamanChampion,
    equipment: ['Hand Weapon', 'Lore of Waaagh!'],
    magicAllowance: {
      maxItems: 2
    },
    specialRules: ['Animosity', 'Ignore panic induced by Goblins','Level 2 Shaman'],
    options: [
      { id: 'general', name: 'General', points: 0 },
      { id: 'war_boar', name: 'War Boar', points: 0, group: 'mount', optionProfile: { name: 'War Boar', stats: OG_STATS.warBoar } },
      { id: 'boar_chariot', name: 'Boar Chariot', points: 52, group: 'mount', optionProfile: { name: 'War Boar', stats: OG_STATS.warBoar } },
    ]
  },
  {
    id: 'orc_shaman',
    name: 'Orc Shaman (lvl1)',
    modelName: 'Orc Shaman',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 45,
    stats: OG_STATS.orcShaman,
    equipment: ['Hand Weapon', 'Lore of Waaagh!'],
    magicAllowance: {
      maxItems: 1
    },
    specialRules: ['Animosity', 'Ignore panic induced by Goblins','Level 1 Shaman'],
    options: [
      { id: 'general', name: 'General', points: 0 },
      { id: 'war_boar', name: 'War Boar', points: 0, group: 'mount', optionProfile: { name: 'War Boar', stats: OG_STATS.warBoar } },
      { id: 'boar_chariot', name: 'Boar Chariot', points: 52, group: 'mount', optionProfile: { name: 'War Boar', stats: OG_STATS.warBoar } },
    ]
  },
  {
    id: 'savage_warlord',
    name: 'Savage Orc Warlord',
    modelName: 'Savage Orc Warlord',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 130,
    stats: OG_STATS.OrcWarlord,
    equipment: ['Hand Weapon', 'Magical Tattoos'],
    magicAllowance: {
      maxItems: 3
    },
    specialRules: ['Animosity', 'Frenzy', 'Magical Tattoos', 'Ignore panic induced by Goblins'],
    options: [
      { id: 'general', name: 'General', points: 0 },
      { id: 'war_boar', name: 'War Boar', points: 27, group: 'mount', optionProfile: { name: 'War Boar', stats: OG_STATS.warBoar } },
      { id: 'wyvern', name: 'Wyvern', points: 161, group: 'mount', optionProfile: { name: 'Wyvern', stats: OG_STATS.wyvern } },

      { id: 'shield', name: 'Shield', points: 0 },

      { id: 'add_hw', name: 'Additional hand weapon', points: 0, group: 'weapon'},
      { id: 'spear', name: 'Spear,', points: 0, group: 'weapon' },
      { id: 'great_weapon', name: 'Double handed weapon', points: 0, group: 'weapon' },
      { id: 'bow', name: 'Bow', points: 10, group: 'ranged_weapon' },
    ]
  },
  {
    id: 'savage_hero',
    name: 'Savage Orc Hero',
    modelName: 'Savage Orc Hero',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 90,
    stats: OG_STATS.OrcHero,
    equipment: ['Hand Weapon', 'Magical Tattoos'],
    magicAllowance: {
      maxItems: 2
    },
    specialRules: ['Animosity', 'Frenzy', 'Magical Tattoos', 'Ignore panic induced by Goblins'],
    options: [
      { id: 'general', name: 'General', points: 0 },
      { id: 'war_boar', name: 'War Boar', points: 20, group: 'mount', optionProfile: { name: 'War Boar', stats: OG_STATS.warBoar } },
      { id: 'wyvern', name: 'Wyvern', points: 154, group: 'mount', optionProfile: { name: 'Wyvern', stats: OG_STATS.wyvern } },

      { id: 'shield', name: 'Shield', points: 0 },

      { id: 'add_hw', name: 'Additional hand weapon', points: 0, group: 'weapon'},
      { id: 'spear', name: 'Spear,', points: 0, group: 'weapon' },
      { id: 'great_weapon', name: 'Double handed weapon', points: 0, group: 'weapon' },
      { id: 'bow', name: 'Bow', points: 10, group: 'ranged_weapon' },
    ]
  },
  {
    id: 'savage_bsb',
    name: 'Savage Orc Bsb',
    modelName: 'Savage Orc Bsb',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 90,
    stats: OG_STATS.orcBsb,
    equipment: ['Hand Weapon', 'Magical Tattoos'],
    magicAllowance: {
      maxItems: 1
    },
    specialRules: ['Animosity', 'Frenzy', 'Magical Tattoos', 'Ignore panic induced by Goblins'],
    options: [
      { id: 'war_boar', name: 'War Boar', points: 13, group: 'mount', optionProfile: { name: 'War Boar', stats: OG_STATS.warBoar } },
    ]
  },
  {
    id: 'savage_shaman_lord',
    name: 'Savage Orc Shaman Lord (lvl4)',
    modelName: 'Savage Orc Shaman Lord',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 250,
    stats: OG_STATS.orcShamanLord,
    equipment: ['Hand Weapon', 'Lore of Waaagh!','Magical Tattoos'],
    magicAllowance: {
      maxItems: 4
    },
    specialRules: ['Animosity', 'Frenzy', 'Magical Tattoos', 'Ignore panic induced by Goblins','Level 4 Shaman'],
    options: [
      { id: 'general', name: 'General', points: 0 },
      { id: 'war_boar', name: 'War Boar', points: 0, group: 'mount', optionProfile: { name: 'War Boar', stats: OG_STATS.warBoar } },
      { id: 'wyvern', name: 'Wyvern', points: 140, group: 'mount', optionProfile: { name: 'Wyvern', stats: OG_STATS.wyvern } },
    ]
  },
  {
    id: 'savage_shaman_master',
    name: 'Savage Orc Shaman Master (lvl3)',
    modelName: 'Savage Orc Shaman Master',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 185,
    stats: OG_STATS.orcMasterShaman,
    equipment: ['Hand Weapon', 'Lore of Waaagh!','Magical Tattoos'],
    magicAllowance: {
      maxItems: 3
    },
    specialRules: ['Animosity', 'Frenzy', 'Magical Tattoos', 'Ignore panic induced by Goblins','Level 3 Shaman'],
    options: [
      { id: 'general', name: 'General', points: 0 },
      { id: 'war_boar', name: 'War Boar', points: 0, group: 'mount', optionProfile: { name: 'War Boar', stats: OG_STATS.warBoar } },
    ]
  },
  {
    id: 'savage_shaman_champion',
    name: 'Savage Orc Shaman Champion (lvl2)',
    modelName: 'Savage Orc Shaman Champion',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 130,
    stats: OG_STATS.orcShamanChampion,
    equipment: ['Hand Weapon', 'Lore of Waaagh!'],
    magicAllowance: {
      maxItems: 2
    },
    specialRules: ['Animosity', 'Frenzy', 'Magical Tattoos', 'Ignore panic induced by Goblins','Level 2 Shaman'],
    options: [
      { id: 'general', name: 'General', points: 0 },
      { id: 'war_boar', name: 'War Boar', points: 0, group: 'mount', optionProfile: { name: 'War Boar', stats: OG_STATS.warBoar } },
    ]
  },
  {
    id: 'savage_shaman',
    name: 'Savage Orc Shaman (lvl1)',
    modelName: 'Savage Orc Shaman',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 75,
    stats: OG_STATS.orcShaman,
    equipment: ['Hand Weapon', 'Lore of Waaagh!','Magical Tattoos'],
    magicAllowance: {
      maxItems: 1
    },
    specialRules: ['Animosity', 'Frenzy', 'Magical Tattoos', 'Ignore panic induced by Goblins','Level 1 Shaman'],
    options: [
      { id: 'general', name: 'General', points: 0 },
      { id: 'war_boar', name: 'War Boar', points: 0, group: 'mount', optionProfile: { name: 'War Boar', stats: OG_STATS.warBoar } },
    ]
  },
  {
    id: 'goblin_warlord',
    name: 'Goblin Warlord',
    modelName: 'Goblin Warlord',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 60,
    stats: OG_STATS.goblinWarlord,
    equipment: ['Hand Weapon'],
    magicAllowance: {
      maxItems: 3
    },
    specialRules: ['Animosity'],
    options: [
      { id: 'general', name: 'General', points: 0 },
      { id: 'giant_wolf', name: 'Giant Wolf', points: 14, group: 'mount', optionProfile: { name: 'Giant Wolf', stats: OG_STATS.giantWolf } },
      { id: 'wolf_chariot', name: 'Wolf Chariot', points: 44, group: 'mount', optionProfile: { name: 'Wolf Boar', stats: OG_STATS.giantWolf } },
      { id: 'monstrou_spider', name: 'Monstrous Spider', points: 40, group: 'mount', optionProfile: { name: 'Monstrous Spider', stats: OG_STATS.monstrousSpider } },

      { id: 'shield', name: 'Shield', points: 0 },
      { id: 'light_armor', name: 'Light armor', points: 0 },

      { id: 'add_hw', name: 'Additional hand weapon', points: 0, group: 'weapon'},
      { id: 'spear', name: 'Spear,', points: 0, group: 'weapon' },
      { id: 'great_weapon', name: 'Double handed weapon', points: 0, group: 'weapon' },
      { id: 'short_bow', name: 'Short Bow', points: 10, group: 'ranged_weapon' },
    ]
  },
  {
    id: 'goblin_hero',
    name: 'Goblin Hero',
    modelName: 'Goblin Hero',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 36,
    stats: OG_STATS.goblinHero,
    equipment: ['Hand Weapon'],
    magicAllowance: {
      maxItems: 2
    },
    specialRules: ['Animosity'],
    options: [
      { id: 'general', name: 'General', points: 0 },
      { id: 'giant_wolf', name: 'Giant Wolf', points: 11, group: 'mount', optionProfile: { name: 'Giant Wolf', stats: OG_STATS.giantWolf } },
      { id: 'wolf_chariot', name: 'Wolf Chariot', points: 44, group: 'mount', optionProfile: { name: 'Wolf Boar', stats: OG_STATS.giantWolf } },
      { id: 'monstrou_spider', name: 'Monstrous Spider', points: 37, group: 'mount', optionProfile: { name: 'Monstrous Spider', stats: OG_STATS.monstrousSpider } },

      { id: 'shield', name: 'Shield', points: 0 },
      { id: 'light_armor', name: 'Light armor', points: 0 },

      { id: 'add_hw', name: 'Additional hand weapon', points: 0, group: 'weapon'},
      { id: 'spear', name: 'Spear,', points: 0, group: 'weapon' },
      { id: 'bow', name: 'Bow', points: 10, group: 'ranged_weapon' },
    ]
  },
  {
    id: 'goblin_bsb',
    name: 'Goblin Bsb',
    modelName: 'Goblin Bsb',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 60,
    stats: OG_STATS.goblinHero,
    equipment: ['Hand Weapon'],
    magicAllowance: {
      maxItems: 1
    },
    specialRules: ['Animosity'],
    options: [
      { id: 'giant_wolf', name: 'Giant Wolf', points: 9, group: 'mount', optionProfile: { name: 'Giant Wolf', stats: OG_STATS.giantWolf } },
      { id: 'wolf_chariot', name: 'Wolf Chariot', points: 44, group: 'mount', optionProfile: { name: 'Wolf Boar', stats: OG_STATS.giantWolf } },

      { id: 'light_armor', name: 'Light armor', points: 0 },
    ]
  },
  {
    id: 'goblin_shaman_lord',
    name: 'Goblin Shaman Lord (lvl4)',
    modelName: 'Goblin Shaman Lord',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 170,
    stats: OG_STATS.goblinShamanLord,
    equipment: ['Hand Weapon', 'Lore of Waaagh!'],
    magicAllowance: {
      maxItems: 4
    },
    specialRules: ['Animosity','Level 4 Shaman'],
    options: [
      { id: 'general', name: 'General', points: 0 },
      { id: 'giant_wolf', name: 'Giant Wolf', points: 0, group: 'mount', optionProfile: { name: 'Giant Wolf', stats: OG_STATS.giantWolf } },
      { id: 'wolf_chariot', name: 'Wolf Chariot', points: 44, group: 'mount', optionProfile: { name: 'Wolf Boar', stats: OG_STATS.giantWolf } },
      { id: 'monstrous_spider', name: 'Monstrous Spider', points: 32, group: 'mount', optionProfile: { name: 'Monstrous Spider', stats: OG_STATS.monstrousSpider } },
    ]
  },
  {
    id: 'goblin_shaman_master',
    name: 'Goblin Shaman Master (lvl3)',
    modelName: 'Goblin Shaman Master',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 120,
    stats: OG_STATS.goblinShamanMaster,
    equipment: ['Hand Weapon', 'Lore of Waaagh!'],
    magicAllowance: {
      maxItems: 3
    },
    specialRules: ['Animosity','Level 3 Shaman'],
    options: [
      { id: 'general', name: 'General', points: 0 },
      { id: 'giant_wolf', name: 'Giant Wolf', points: 0, group: 'mount', optionProfile: { name: 'Giant Wolf', stats: OG_STATS.giantWolf } },
      { id: 'wolf_chariot', name: 'Wolf Chariot', points: 44, group: 'mount', optionProfile: { name: 'Wolf Boar', stats: OG_STATS.giantWolf } },
      { id: 'monstrous_spider', name: 'Monstrous Spider', points: 32, group: 'mount', optionProfile: { name: 'Monstrous Spider', stats: OG_STATS.monstrousSpider } },
    ]
  },
  {
    id: 'goblin_shaman_champion',
    name: 'Goblin Shaman Champion (lvl2)',
    modelName: 'Goblin Shaman Champion',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 75,
    stats: OG_STATS.goblinShamanChampion,
    equipment: ['Hand Weapon', 'Lore of Waaagh!'],
    magicAllowance: {
      maxItems: 2
    },
    specialRules: ['Animosity','Level 2 Shaman'],
    options: [
      { id: 'general', name: 'General', points: 0 },
      { id: 'giant_wolf', name: 'Giant Wolf', points: 0, group: 'mount', optionProfile: { name: 'Giant Wolf', stats: OG_STATS.giantWolf } },
      { id: 'wolf_chariot', name: 'Wolf Chariot', points: 44, group: 'mount', optionProfile: { name: 'Wolf Boar', stats: OG_STATS.giantWolf } },
      { id: 'monstrous_spider', name: 'Monstrous Spider', points: 32, group: 'mount', optionProfile: { name: 'Monstrous Spider', stats: OG_STATS.monstrousSpider } },
    ]
  },
  {
    id: 'goblin_shaman',
    name: 'Goblin Shaman (lvl1)',
    modelName: 'Goblin Shaman',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 30,
    stats: OG_STATS.goblinShaman,
    equipment: ['Hand Weapon', 'Lore of Waaagh!'],
    magicAllowance: {
      maxItems: 1
    },
    specialRules: ['Animosity','Level 1 Shaman'],
    options: [
      { id: 'general', name: 'General', points: 0 },
      { id: 'giant_wolf', name: 'Giant Wolf', points: 0, group: 'mount', optionProfile: { name: 'Giant Wolf', stats: OG_STATS.giantWolf } },
      { id: 'wolf_chariot', name: 'Wolf Chariot', points: 44, group: 'mount', optionProfile: { name: 'Wolf Boar', stats: OG_STATS.giantWolf } },
      { id: 'monstrous_spider', name: 'Monstrous Spider', points: 32, group: 'mount', optionProfile: { name: 'Monstrous Spider', stats: OG_STATS.monstrousSpider } },
    ]
  },
  {
    id: 'forest_goblin_warlord',
    name: 'Forest Goblin Warlord',
    modelName: 'Forest Goblin Warlord',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 60,
    stats: OG_STATS.goblinWarlord,
    equipment: ['Hand Weapon'],
    magicAllowance: {
      maxItems: 3
    },
    tags:['forest_goblin'],
    specialRules: ['Animosity'],
    options: [
      { id: 'general', name: 'General', points: 0 },
      { id: 'giant_spider', name: 'Giant Spider', points: 13, group: 'mount', optionProfile: { name: 'Giant Spider', stats: OG_STATS.giantSpider } },
      { id: 'monstrou_spider', name: 'Monstrous Spider', points: 40, group: 'mount', optionProfile: { name: 'Monstrous Spider', stats: OG_STATS.monstrousSpider } },

      { id: 'shield', name: 'Shield', points: 0 },

      { id: 'add_hw', name: 'Additional hand weapon', points: 0, group: 'weapon'},
      { id: 'spear', name: 'Spear,', points: 0, group: 'weapon' },
      { id: 'great_weapon', name: 'Double handed weapon', points: 0, group: 'weapon' },
      { id: 'short_bow', name: 'Short Bow', points: 10, group: 'ranged_weapon' },
    ]
  },
  {
    id: 'forest_goblin_hero',
    name: 'Forest Goblin Hero',
    modelName: 'Forest Goblin Hero',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 36,
    stats: OG_STATS.goblinHero,
    equipment: ['Hand Weapon'],
    magicAllowance: {
      maxItems: 2
    },
    tags:['forest_goblin'],
    specialRules: ['Animosity'],
    options: [
      { id: 'general', name: 'General', points: 0 },
      { id: 'giant_spider', name: 'Giant Spider', points: 10, group: 'mount', optionProfile: { name: 'Giant Spider', stats: OG_STATS.giantSpider } },
      { id: 'monstrou_spider', name: 'Monstrous Spider', points: 37, group: 'mount', optionProfile: { name: 'Monstrous Spider', stats: OG_STATS.monstrousSpider } },

      { id: 'shield', name: 'Shield', points: 0 },
      { id: 'light_armor', name: 'Light armor', points: 0 },

      { id: 'add_hw', name: 'Additional hand weapon', points: 0, group: 'weapon'},
      { id: 'spear', name: 'Spear,', points: 0, group: 'weapon' },
      { id: 'bow', name: 'Bow', points: 10, group: 'ranged_weapon' },
    ]
  },
  {
    id: 'forest_goblin_bsb',
    name: 'Forest Goblin Bsb',
    modelName: 'Forest Goblin Bsb',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 60,
    stats: OG_STATS.goblinHero,
    equipment: ['Hand Weapon'],
    magicAllowance: {
      maxItems: 1
    },
    tags:['forest_goblin'],
    specialRules: ['Animosity'],
    options: [
      { id: 'giant_spider', name: 'Giant Spider', points: 8, group: 'mount', optionProfile: { name: 'Giant Spider', stats: OG_STATS.giantSpider } },
     ]
  },
  {
    id: 'forest_goblin_shaman_lord',
    name: 'Forest Goblin Shaman Lord (lvl4)',
    modelName: 'Forest Goblin Shaman Lord',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 170,
    stats: OG_STATS.goblinShamanLord,
    equipment: ['Hand Weapon', 'Lore of Waaagh!'],
    magicAllowance: {
      maxItems: 4
    },
    tags:['forest_goblin'],
    specialRules: ['Animosity','Level 4 Shaman'],
    options: [
      { id: 'general', name: 'General', points: 0 },
      { id: 'giant_spider', name: 'Giant Spider', points: 0, group: 'mount', optionProfile: { name: 'Giant Spider', stats: OG_STATS.giantSpider } },
      { id: 'monstrous_spider', name: 'Monstrous Spider', points: 32, group: 'mount', optionProfile: { name: 'Monstrous Spider', stats: OG_STATS.monstrousSpider } },
    ]
  },
  {
    id: 'forest_goblin_shaman_master',
    name: 'Forest Goblin Shaman Master (lvl3)',
    modelName: 'Forest Goblin Shaman Master',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 120,
    stats: OG_STATS.goblinShamanMaster,
    equipment: ['Hand Weapon', 'Lore of Waaagh!'],
    magicAllowance: {
      maxItems: 3
    },
    tags:['forest_goblin'],
    specialRules: ['Animosity','Level 3 Shaman'],
    options: [
      { id: 'general', name: 'General', points: 0 },
      { id: 'giant_spider', name: 'Giant Spider', points: 0, group: 'mount', optionProfile: { name: 'Giant Spider', stats: OG_STATS.giantSpider } },
      { id: 'monstrous_spider', name: 'Monstrous Spider', points: 32, group: 'mount', optionProfile: { name: 'Monstrous Spider', stats: OG_STATS.monstrousSpider } },
    ]
  },
  {
    id: 'forest_goblin_shaman_champion',
    name: 'Forest Goblin Shaman Champion (lvl2)',
    modelName: 'Forest Goblin Shaman Champion',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 75,
    stats: OG_STATS.goblinShamanChampion,
    equipment: ['Hand Weapon', 'Lore of Waaagh!'],
    magicAllowance: {
      maxItems: 2
    },
    tags:['forest_goblin'],
    specialRules: ['Animosity','Level 2 Shaman'],
    options: [
      { id: 'general', name: 'General', points: 0 },
      { id: 'giant_spider', name: 'Giant Spider', points: 0, group: 'mount', optionProfile: { name: 'Giant Spider', stats: OG_STATS.giantSpider } },
      { id: 'monstrous_spider', name: 'Monstrous Spider', points: 32, group: 'mount', optionProfile: { name: 'Monstrous Spider', stats: OG_STATS.monstrousSpider } },
    ]
  },
  {
    id: 'forest_goblin_shaman',
    name: 'Forest Goblin Shaman (lvl1)',
    modelName: 'Forest Goblin Shaman',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 30,
    stats: OG_STATS.goblinShaman,
    equipment: ['Hand Weapon', 'Lore of Waaagh!'],
    magicAllowance: {
      maxItems: 1
    },
    tags:['forest_goblin'],
    specialRules: ['Animosity','Level 1 Shaman'],
    options: [
      { id: 'general', name: 'General', points: 0 },
      { id: 'giant_spider', name: 'Giant Spider', points: 0, group: 'mount', optionProfile: { name: 'Giant Spider', stats: OG_STATS.giantSpider } },
      { id: 'monstrous_spider', name: 'Monstrous Spider', points: 32, group: 'mount', optionProfile: { name: 'Monstrous Spider', stats: OG_STATS.monstrousSpider } },
    ]
  },
  {
    id: 'night_goblin_warlord',
    name: 'Night Goblin Warlord',
    modelName: 'Night Goblin Warlord',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 60,
    stats: OG_STATS.goblinWarlord,
    equipment: ['Hand Weapon'],
    magicAllowance: {
      maxItems: 3
    },
    specialRules: ['Animosity'],
    options: [
      { id: 'general', name: 'General', points: 0 },
      { id: 'monstrou_spider', name: 'Monstrous Spider', points: 40, group: 'mount', optionProfile: { name: 'Monstrous Spider', stats: OG_STATS.monstrousSpider } },

      { id: 'shield', name: 'Shield', points: 0 },

      { id: 'add_hw', name: 'Additional hand weapon', points: 0, group: 'weapon'},
      { id: 'spear', name: 'Spear,', points: 0, group: 'weapon' },
      { id: 'great_weapon', name: 'Double handed weapon', points: 0, group: 'weapon' },
      { id: 'short_bow', name: 'Short Bow', points: 10, group: 'ranged_weapon' },
    ]
  },
  {
    id: 'night_goblin_hero',
    name: 'Night Goblin Hero',
    modelName: 'Night Goblin Hero',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 36,
    stats: OG_STATS.goblinHero,
    equipment: ['Hand Weapon'],
    magicAllowance: {
      maxItems: 2
    },
    specialRules: ['Animosity'],
    options: [
      { id: 'general', name: 'General', points: 0 },
      { id: 'monstrou_spider', name: 'Monstrous Spider', points: 37, group: 'mount', optionProfile: { name: 'Monstrous Spider', stats: OG_STATS.monstrousSpider } },

      { id: 'shield', name: 'Shield', points: 0 },
      { id: 'light_armor', name: 'Light armor', points: 0 },

      { id: 'add_hw', name: 'Additional hand weapon', points: 0, group: 'weapon'},
      { id: 'spear', name: 'Spear,', points: 0, group: 'weapon' },
      { id: 'bow', name: 'Bow', points: 10, group: 'ranged_weapon' },
    ]
  },
  {
    id: 'night_goblin_bsb',
    name: 'Night Goblin Bsb',
    modelName: 'Night Goblin Bsb',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 60,
    stats: OG_STATS.goblinHero,
    equipment: ['Hand Weapon'],
    magicAllowance: {
      maxItems: 1
    },
    specialRules: ['Animosity'],
    options: []
  },
  {
    id: 'nightt_goblin_shaman_lord',
    name: 'Night Goblin Shaman Lord (lvl4)',
    modelName: 'Night Goblin Shaman Lord',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 180,
    stats: OG_STATS.goblinShamanLord,
    equipment: ['Hand Weapon', 'Lore of Waaagh!', 'Magic Mushroom'],
    magicAllowance: {
      maxItems: 4
    },
    specialRules: ['Animosity','Level 4 Shaman'],
    options: [      
      { id: 'general', name: 'General', points: 0 },
    ]
  },
  {
    id: 'night_goblin_shaman_master',
    name: 'Night Goblin Shaman Master (lvl3)',
    modelName: 'Night Goblin Shaman Master',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 130,
    stats: OG_STATS.goblinShamanMaster,
    equipment: ['Hand Weapon', 'Lore of Waaagh!', 'Magic Mushroom'],
    magicAllowance: {
      maxItems: 3
    },
    specialRules: ['Animosity','Level 3 Shaman'],
    options: [
      { id: 'general', name: 'General', points: 0 },
    ]
  },
  {
    id: 'night_goblin_shaman_champion',
    name: 'Night Goblin Shaman Champion (lvl2)',
    modelName: 'Night Goblin Shaman Champion',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 85,
    stats: OG_STATS.goblinShamanChampion,
    equipment: ['Hand Weapon', 'Lore of Waaagh!', 'Magic Mushroom'],
    magicAllowance: {
      maxItems: 2
    },
    specialRules: ['Animosity','Level 2 Shaman'],
    options: [
      { id: 'general', name: 'General', points: 0 },
    ]
  },
  {
    id: 'night_goblin_shaman',
    name: 'Night Goblin Shaman (lvl1)',
    modelName: 'Night Goblin Shaman',
    role: 'character',
    type: 'infantry',
    minSize: 1,
    maxSize: 1,
    pointsPerModel: 40,
    stats: OG_STATS.goblinShaman,
    equipment: ['Hand Weapon', 'Lore of Waaagh!', 'Magic Mushroom'],
    magicAllowance: {
      maxItems: 1
    },
    specialRules: ['Animosity','Level 1 Shaman'],
    options: [
      { id: 'general', name: 'General', points: 0 },
    ]
  },
]