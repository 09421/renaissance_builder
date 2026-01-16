import {withFaction} from '@/data/utils';

export const OG_ENCHANTED_ITEMS = withFaction('orcs_goblins', [
  {
    id: 'tricksy_trinket',
    name: 'Tricksy Trinket',
    type: 'enchanted',
    points: 10,
    description: 'Enemies in base contact with the bearer must re-roll successful armour, ward and regeneration saves',
    requiresTags:['common goblin']
  },
  {
    id: 'the_collar_zorga',
    name: 'The Collar of Zorga',
    type: 'enchanted',
    points: 10,
    description: 'The bearer cannot be hit by monsters',
    requiresTags:['common orc'],
    onlyOnFoot:true
  },
  {
    id: 'magic_war_paint',
    name: 'Magic War Paint',
    type: 'enchanted',
    points: 20,
    description: '5+ ward save vs. melee attacks and a 3+ ward save vs. missile attacks of any kind. This ward save will also benefit the rider’s mount',
    requiresTags:['forest goblin'],
  },
]);