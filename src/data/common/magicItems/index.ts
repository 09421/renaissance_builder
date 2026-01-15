import { MagicItem } from '@/types/magicItems';
import { COMMON_MAGIC_WEAPONS } from './magicWeapons';
import { COMMON_MAGIC_ARMOUR } from './magicArmour';

export const COMMON_MAGIC_ITEMS: MagicItem[] = [
  ...COMMON_MAGIC_WEAPONS,
  ...COMMON_MAGIC_ARMOUR
];