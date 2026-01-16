import { MagicItem } from '@/types/magicItems';
import { OG_MAGIC_ARMOUR } from './magicArmour';
import { OG_MAGIC_WEAPONS } from './magicWeapons';
import { OG_ENCHANTED_ITEMS } from './enchantedItems';
import { OG_ARCANE_ITEMS } from './arcaneItems';
import { OG_MAGIC_BANNERS } from './banners';

export const OG_MAGIC_ITEMS: MagicItem[] = [
  ...OG_MAGIC_ARMOUR,
  ...OG_MAGIC_WEAPONS,
  ...OG_ENCHANTED_ITEMS,
  ...OG_ARCANE_ITEMS,
  ...OG_MAGIC_BANNERS
];