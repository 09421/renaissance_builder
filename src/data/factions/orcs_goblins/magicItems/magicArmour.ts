import {withFaction} from '@/data/utils';

export const OG_MAGIC_ARMOUR = withFaction('orcs_goblins', [
  {
    id: 'horned_helmet',
    name: 'Horned Helmet',
    type: 'armour',
    points: 10,
    description: 'When the bearer suffers his first wound in melee combat, roll a 1D6. On a 4+, the wound is rebounded on the model that caused the wound. On a roll of three or less, the Horned Helmet is just an ordinary helmet sold under false pretences by a clever goblin',
    requiresTags:['common orc'],
    requiresOptionCategory: ['armour']
  },
  {
    id: 'shiny_helm_nob',
    name: 'Shiny Helm of Nob',
    type: 'armour',
    points: 20,
    description: '+1 armour save and 5+ ward save',
    requiresTags:['common goblin'],
    requiresOptionCategory: ['armour']
  },
]);