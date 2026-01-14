import {withFaction} from '@/data/utils';

export const EMP_ENCHANTED_ITEMS = withFaction('empire', [
  {
    id: 'icon_Magnu',
    name: 'Icon of Magnu',
    type: 'enchanted',
    points: 10,
    description: 'The bearer and the bearer’s regiment are immune to fear',
  },
  {
    id: 'talisman_ulric',
    name: 'Talisman of Ulric',
    type: 'enchanted',
    points: 15,
    description: 'The bearer recovers one wound at the start of each player turn',
  },
  {
    id: 'imperial_crown',
    name: 'Imperial Crown',
    type: 'enchanted',
    points: 15,
    description: 'all units within 18” may use his LD',
  },
  {
    id: 'laurels_victory',
    name: 'Laurels of Victory',
    type: 'enchanted',
    points: 25,
    description: 'Each wound scored by the bearer, or the bearer’s mount, in a challenge, counts double towardscombat resolution',
  },
  {
    id: 'silver_seal',
    name: 'The Silver Seal',
    type: 'enchanted',
    points: 50,
    description: 'Enemies suffer -1 to hit against the bearer and the bearer’s mount in both melee combat and shooting. Natural dispel 4+',
  },
]);