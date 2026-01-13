import { MagicItem } from '@/types/magicItems';
import { HE_MAGIC_ARMOUR } from './magicArmour';
import { HE_MAGIC_WEAPONS } from './magicWeapons';
import { HE_ENCHANTED_ITEMS } from './enchantedItems';
import { HE_ARCANE_ITEMS } from './arcaneItems';
import { HE_MAGIC_BANNERS } from './banners';

export const HIGH_ELVES_MAGIC_ITEMS: MagicItem[] = [
  ...HE_MAGIC_ARMOUR,
  ...HE_MAGIC_WEAPONS,
  ...HE_ENCHANTED_ITEMS,
  ...HE_ARCANE_ITEMS,
  ...HE_MAGIC_BANNERS
];