import { withFaction } from '@/data/utils';

export const OG_ARCANE_ITEMS = withFaction('orcs_goblins', [
  {
    id: 'staff_lightning',
    name: 'Staff of Lightning',
    type: 'arcane',
    points: 50,
    description: 'Bound spell. A blast from this staff is resolved as if Gaze of Mork had been cast, After use, roll a 1D6, on a roll of 1, the staff is exhausted and cannot be used again',
    requiresTags: ['common orc', 'shaman']
  },
  {
    id: 'totem_talisman',
    name: 'Totem Talisman',
    type: 'arcane',
    points: 100,
    description: 'The shaman is given an extra magic card in each magic phase for personal use only',
    requiresTags: ['savage orc', 'shaman']
  },
  {
    id: 'skarsnik_rodder',
    name: 'Skarsnik’s Prodder',
    type: 'arcane',
    points: 100,
    description: '+1S, the prodder may cast a bound spell each magic phase. May target a unit within 18” and line of sight for 1D6 strength 3 hits with no armour save',
    requiresTags: ['night goblin', 'shaman']
  },
]);