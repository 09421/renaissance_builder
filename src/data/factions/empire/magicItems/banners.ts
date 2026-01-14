import {withFaction} from '@/data/utils';

export const EMP_MAGIC_BANNERS = withFaction('empire', [
  {
    id: 'knights_panther_standard',
    name: 'Knights Panther Standard',
    type: 'banner',
    points: 0,
    description: 'The regiment automatically dispels the first spell cast against it even if cast with Total Power',
    requiresTags:['knights_panther']
  },
  {
    id: 'white_wolf_standard',
    name: 'White Wolf Standard',
    type: 'banner',
    points: 0,
    description: 'The first time you receive a charge, the regiment(s) charging you must take a terror test',
    requiresTags:['teutogen_wolves']
  },
  {
    id: 'reiksguard_standard',
    name: 'Reiksguard Standard',
    type: 'banner',
    points: 20,
    description: 'The regiment automatically passes the first LD test it fails except break tests',
    requiresTags:['reiksguard']
  },
  {
    id: 'carroburg_standard',
    name: 'Carroburg Standard',
    type: 'banner',
    points: 20,
    description: 'The regiment automatically passes the first break test it fails. One use only',
    requiresTags:['greatswords']
  },
  {
    id: 'standard_imperial_devotion',
    name: 'Standard of Imperial Devotion',
    type: 'banner',
    points: 20,
    description: 'The regiment is immune to panic'
  },
  {
    id: 'banner_efiance',
    name: 'Banner of Defiance',
    type: 'banner',
    points: 80,
    description: 'Double rank bonus (to a maximum of +6). Will never pursue, overrun, or flee voluntarily. The banner nullifies hatred and frenzy applying to any models in the regiment carrying the banner'
  },
]);