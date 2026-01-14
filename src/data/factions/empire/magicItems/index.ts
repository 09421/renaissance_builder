import { MagicItem } from '@/types/magicItems';
import { EMP_MAGIC_WEAPONS } from './magicWeapons';
import { EMP_MAGIC_ARMOUR } from './magicArmour';
import { EMP_ENCHANTED_ITEMS } from './enchantedItems';
import { EMP_MAGIC_BANNERS } from './banners';
import { EMP_ARCANE_ITEMS } from './arcaneItems';

export const EMPIRE_MAGIC_ITEMS: MagicItem[] = [
  ...EMP_MAGIC_WEAPONS,
  ...EMP_MAGIC_ARMOUR,
  ...EMP_ENCHANTED_ITEMS,
  ...EMP_MAGIC_BANNERS,
  ...EMP_ARCANE_ITEMS,
];