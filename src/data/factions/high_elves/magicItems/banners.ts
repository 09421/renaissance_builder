import {withFaction} from '@/data/utils';

export const HE_MAGIC_BANNERS = withFaction('high_elves', [
  {
    id: 'regal_standard',
    name: 'Regal Standard',
    type: 'banner',
    points: 0,
    description: 'Troops armed with bows or longbows may move and shoot without the -1 to hit penalty for moving'
  },
  {
    id: 'imperial_resolve',
    name: 'Standard of Imperial Resolve',
    type: 'banner',
    points: 10,
    description: 'Unengaged troops with spears get +1 strength when receiving a charge to the front'
  },
  {
    id: 'banner_ellyrion',
    name: 'Banner of Ellyrion',
    type: 'banner',
    points: 30,
    description: 'Can move over difficult ground without movement reduction. Can march even if there are enemies within 8”',
    requiresTags:['Elven Warriors', 'Elven Archers', 'Elven Spearmen', 'Reaver Knights', 'Silver Helm Knights', 'bsb' ]
  },
  {
    id: 'white_lion_standard',
    name: 'White Lion Standard',
    type: 'banner',
    points: 40,
    description: 'If the general of the army joins the White Lions, they will automatically pass any LD tests, including break tests, they have to take',
    requiresTags:['White Lions' ]
  },
  {
    id: 'banner_world_dragon',
    name: 'Banner of the World Dragon',
    type: 'banner',
    points: 80,
    description: 'May take armour saves vs. shooting as if it were a ward save',
    requiresTags:['Dragon Princes' ]
  },
  {
    id: 'banner_sorcery',
    name: 'Banner of Sorcery',
    type: 'banner',
    points: 100,
    description: 'Generates one extra magic card in the magic phase that can be used by all wizards in the army'
  },
]);