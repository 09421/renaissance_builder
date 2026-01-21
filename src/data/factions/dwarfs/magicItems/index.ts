import { MagicItem } from '@/types/magicItems';
import { DWARF_MAGIC_WEAPONS } from './magicWeapons';
import { DWARF_MAGIC_ARMOUR } from './magicArmour';
import { DWARF_ENCHANTED_ITEMS } from './enchantedItems';

export const DWARF_MAGIC_ITEMS: MagicItem[] = [
  ...DWARF_MAGIC_WEAPONS,
  ...DWARF_MAGIC_ARMOUR,
  ...DWARF_ENCHANTED_ITEMS,
];