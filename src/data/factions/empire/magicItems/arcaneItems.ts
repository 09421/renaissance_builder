import { withFaction } from '@/data/utils';

export const EMP_ARCANE_ITEMS = withFaction('empire', [
  {
    id: 'antler_totem',
    name: 'Antler Totem',
    type: 'arcane',
    points: 15,
    description: 'If the wizard uses the lore of Amber or Jade, the wizard may choose his spells',
    requiresTags: ['mage']
  },
]);