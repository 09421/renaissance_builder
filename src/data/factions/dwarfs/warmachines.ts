import { UnitDefinition } from '@/types/army';
import { DWARF_STATS } from './stats';

export const warmachines: UnitDefinition[] = [
  {
    id: 'bolt_thrower',
    name: 'Bolt Thrower',
    modelName: 'Bolt Thrower',
    role: 'warmachines',
    type: 'War Machine',
    minSize: 1,
    maxSize: 1,
    baseCrew: 3,
    pointsPerModel: 55,
    stats: DWARF_STATS.warmachine,
    additionalProfiles:[
      {
        name: 'Crew',
        stats: DWARF_STATS.dwarfSoldier
      }
    ],
    equipment: ['Hand Weapon', 'Bolt Thrower'],
    specialRules: [],
    options: [
      { id: 'light_armour', name: 'Light armour', points: 1, perCrew: true, category:'armour' },
      { id: 'heavy_armour', name: 'Heavy armour', points: 2, perCrew: true, category:'armour' },
      {
        id: 'crew',
        name: 'additional crew members',
        points: 5,
        maxPerUnit: 2,
        addsCrew: 1,
        category:'other'
      }
    ]
  },
  {
    id: 'small_stone_thrower',
    name: 'Small Stone Thrower',
    modelName: 'Stone Thrower',
    role: 'warmachines',
    type: 'War Machine',
    minSize: 1,
    maxSize: 1,
    baseCrew: 3,
    pointsPerModel: 85,
    stats: DWARF_STATS.warmachine,
    additionalProfiles:[
      {
        name: 'Crew',
        stats: DWARF_STATS.dwarfSoldier
      }
    ],
    equipment: ['Hand Weapon', 'Small stone thrower'],
    specialRules: [],
    options: [
      { id: 'light_armour', name: 'Light armour', points: 1, perCrew: true, category:'armour' },
      { id: 'heavy_armour', name: 'Heavy armour', points: 2, perCrew: true, category:'armour' },
      {
        id: 'crew',
        name: 'additional crew members',
        points: 5,
        maxPerUnit: 2,
        addsCrew: 1,
        category:'other'
      }
    ]
  },
  {
    id: 'large_stone_thrower',
    name: 'Large Stone Thrower',
    modelName: 'Stone Thrower',
    role: 'warmachines',
    type: 'War Machine',
    minSize: 1,
    maxSize: 1,
    baseCrew: 3,
    pointsPerModel: 100,
    stats: DWARF_STATS.warmachine,
    additionalProfiles:[
      {
        name: 'Crew',
        stats: DWARF_STATS.dwarfSoldier
      }
    ],
    equipment: ['Hand Weapon', 'Large stone thrower'],
    specialRules: [],
    options: [
      { id: 'light_armour', name: 'Light armour', points: 1, perCrew: true, category:'armour' },
      { id: 'heavy_armour', name: 'Heavy armour', points: 2, perCrew: true, category:'armour' },
      {
        id: 'crew',
        name: 'additional crew members',
        points: 5,
        maxPerUnit: 2,
        addsCrew: 1,
        category:'other'
      }
    ]
  },
  {
    id: 'dwarf_cannon',
    name: 'Cannon',
    modelName: 'Cannon',
    role: 'warmachines',
    type: 'War Machine',
    minSize: 1,
    maxSize: 1,
    baseCrew: 3,
    pointsPerModel: 100,
    stats: DWARF_STATS.warmachine,
    additionalProfiles:[
      {
        name: 'Crew',
        stats: DWARF_STATS.dwarfSoldier
      }
    ],
    equipment: ['Hand Weapon', 'Cannon'],
    specialRules: [],
    options: [
      { id: 'light_armour', name: 'Light armour', points: 1, perCrew: true, category:'armour' },
      { id: 'heavy_armour', name: 'Heavy armour', points: 2, perCrew: true, category:'armour' },
      {
        id: 'crew',
        name: 'additional crew members',
        points: 5,
        maxPerUnit: 2,
        addsCrew: 1,
        category:'other'
      }
    ]
  },
  {
    id: 'organ_gun',
    name: 'Organ Gun',
    modelName: 'Organ Gun',
    role: 'warmachines',
    type: 'War Machine',
    minSize: 1,
    maxSize: 1,
    restrictions:{
      maxPerArmy:1
    },
    baseCrew: 3,
    pointsPerModel: 155,
    stats: DWARF_STATS.warmachine,
    additionalProfiles:[
      {
        name: 'Crew',
        stats: DWARF_STATS.dwarfSoldier
      }
    ],
    equipment: ['Hand Weapon', 'Organ gun'],
    specialRules: [],
    options: [
      { id: 'light_armour', name: 'Light armour', points: 1, perCrew: true, category:'armour' },
      { id: 'heavy_armour', name: 'Heavy armour', points: 2, perCrew: true, category:'armour' },
      {
        id: 'crew',
        name: 'additional crew members',
        points: 5,
        maxPerUnit: 2,
        addsCrew: 1,
        category:'other'
      }
    ]
  },
  {
    id: 'flame_cannon',
    name: 'Flame Cannon',
    modelName: 'Flame Cannon',
    role: 'warmachines',
    type: 'War Machine',
    minSize: 1,
    maxSize: 1,
    baseCrew: 3,
    pointsPerModel: 90,
    stats: DWARF_STATS.warmachine,
    additionalProfiles:[
      {
        name: 'Crew',
        stats: DWARF_STATS.dwarfSoldier
      }
    ],
    equipment: ['Hand Weapon', 'Flame cannon'],
    specialRules: [],
    options: [
      { id: 'light_armour', name: 'Light armour', points: 1, perCrew: true, category:'armour' },
      { id: 'heavy_armour', name: 'Heavy armour', points: 2, perCrew: true, category:'armour' },
      {
        id: 'crew',
        name: 'additional crew members',
        points: 5,
        maxPerUnit: 2,
        addsCrew: 1,
        category:'other'
      }
    ]
  },
  {
    id: 'gyrocopter',
    name: 'Gyrocopter',
    modelName: 'Gyrocopter',
    role: 'warmachines',
    type: 'War Machine',
    minSize: 1,
    maxSize: 1,
    baseCrew: 3,
    pointsPerModel: 100,
    stats: DWARF_STATS.gyrocopter,
    additionalProfiles:[
      {
        name: 'Crew',
        stats: DWARF_STATS.dwarfSoldier
      }
    ],
    equipment: ['Hand Weapon', 'Steam cannon', 'Bombs'],
    specialRules: ['Fly'],
    options: []
  },
  {
    id: 'goblin_hewer',
    name: 'Goblin Hewer',
    modelName: 'Goblin Hewer',
    role: 'warmachines',
    type: 'War Machine',
    minSize: 1,
    maxSize: 1,
    baseCrew: 3,
    restrictions:{
      maxPerArmy:1
    },
    pointsPerModel: 90,
    stats: DWARF_STATS.warmachine,
    additionalProfiles:[
      {
        name: 'Slayer Crew',
        stats: DWARF_STATS.trollSlayer
      }
    ],
    equipment: ['Hand Weapon', 'Additional hand weapons', 'Goblin hewer'],
    specialRules: [],
    options: [
      {
        id: 'crew',
        name: 'additional crew members',
        points: 10,
        maxPerUnit: 2,
        addsCrew: 1,
        category:'other'
      }
    ]
  },
]