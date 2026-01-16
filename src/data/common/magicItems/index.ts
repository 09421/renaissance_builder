import { MagicItem } from '@/types/magicItems';
import { COMMON_MAGIC_WEAPONS } from './magicWeapons';
import { COMMON_MAGIC_ARMOUR } from './magicArmour';
import { COMMON_ENCHANTED_ITEMS } from './enchantedItems';
import {COMMON_ARCANE_ITEMS} from './arcaneItems';
import {COMMON_MAGIC_BANNERS} from './banners';

export const COMMON_MAGIC_ITEMS: MagicItem[] = [
  ...COMMON_MAGIC_WEAPONS,
  ...COMMON_MAGIC_ARMOUR,
  ...COMMON_ENCHANTED_ITEMS,
  ...COMMON_ARCANE_ITEMS,
  ...COMMON_MAGIC_BANNERS,
];