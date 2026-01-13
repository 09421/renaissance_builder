import { withFaction } from '@/data/utils';

export const HE_ARCANE_ITEMS = withFaction('high_elves', [
  {
    id: 'cloak_stars',
    name: 'Cloak of Stars',
    type: 'arcane',
    points: 25,
    description: 'All hits against the bearer have their S reduced by 2. The first spell cast directly against the bearer or his regiment is automatically dispelled unless cast with Total Power',
    requiresTags: ['mage']
  },
  {
    id: 'crown_saphery',
    name: 'War Crown of Saphery',
    type: 'arcane',
    points: 50,
    description: '+1 magic level',
    requiresTags: ['mage']
  },
  {
    id: 'book_phoenix',
    name: 'Book of the Phoenix',
    type: 'arcane',
    points: 250,
    description: 'Once per magic phase the bearer may cast a spell without using power cards',
    requiresTags: ['mage']
  },
]);