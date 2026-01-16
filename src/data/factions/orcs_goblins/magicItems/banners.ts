import {withFaction} from '@/data/utils';

export const OG_MAGIC_BANNERS = withFaction('orcs_goblins', [
  {
    id: 'banner_gobbo_awesomeness',
    name: 'Banner of Gobbo Awesomeness',
    type: 'banner',
    points: 20,
    description: 'All models in the regiment get +3 Weapon Skill in the first melee round of all combat engagements the regiment fights',
    requiresTags:['common','goblin']
  },
  {
    id: 'spider_banner',
    name: 'Spider Banner',
    type: 'banner',
    points: 20,
    description: 'Each model in the front rank gets +1 attack (riders only in the case of cavalry) in the first melee round of all combat engagements the regiment fights',
    requiresTags:['forest','goblin']
  },
  {
    id: 'Gork_war_banner',
    name: 'Gork’s War Banner',
    type: 'banner',
    points: 20,
    description: 'Each model in the front rank (rider only in case of cavalry) gets +1 to hit in the first melee round of all combat engagement the regiment fights',
    requiresTags:['common goblin']
  },
  {
    id: 'bad_moon_banner',
    name: 'Bad Moon Banner',
    type: 'banner',
    points: 20,
    description: 'Always strike first',
    requiresTags:['night goblin']
  },
  {
    id: 'evil_sun_banner',
    name: 'Evil Sun Banner',
    type: 'banner',
    points: 40,
    description: 'May re-roll a failed animosity roll',
    requiresTags:['night goblin']
  },
  {
    id: 'stalker_banner',
    name: 'Stalker Banner',
    type: 'banner',
    points: 40,
    description: 'Once per battle in the regiment’s movement phase, before charges are declared, the unit may pivot on the spot. The regiment counts as having moved for purposes of shooting, but is otherwise free to take a complete move, including charges',
    requiresTags:['forest goblin']
  },
  {
    id: 'mork_war_banner',
    name: 'Mork’s War Banner',
    type: 'banner',
    points: 100,
    description: 'All spells (even including those cast with Total Power!) directed against the unit are dispelled (this includes friendly spells). Any wizard (friend or foe) touching the unit carrying this banner is slain instantly (ka-pow, his head blows off). No spells can be cast from this unit (not even bound spells cast by non-wizards).',
    requiresTags:['common orc', 'savage orc', 'black orc'],
    onlyOnFoot:true
  },
]);