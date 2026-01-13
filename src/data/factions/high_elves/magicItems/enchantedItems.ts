import {withFaction} from '@/data/utils';

export const HE_ENCHANTED_ITEMS = withFaction('high_elves', [
  {
    id: 'horn_valour',
    name: 'Horn of Valour',
    type: 'enchanted',
    points: 25,
    description: 'Used at the beginning of a High Elf turn, lasts until the beginning of the next High Elf turn. During that period the High Elf army may re-roll any LD-based test. If the bearer of the horn is killed, the effect stops immediately. One use only',
    requiresGeneral:true
  },
  {
    id: 'stone_midnight',
    name: 'Stone of Midnight',
    type: 'enchanted',
    points: 100,
    description: 'Melee attacks against the bearer must re-roll successful to hit and to wound rolls.',
    onlyOnFoot:true,
  },
  {
    id: 'talisman_hoeth',
    name: 'Talisman of Hoeth',
    type: 'enchanted',
    points: 100,
    description: 'The bearer becomes able to cast spells as a level 2 mage and may use any college magic lore. The bearer can wear armour and use weapons that require two hands and still cast spells',
    incompatibleTags:['mage'],
  },
]);