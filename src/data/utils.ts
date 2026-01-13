import { MagicItem } from "@/types/magicItems";

export function withFaction<T extends Omit<MagicItem, 'faction'>>(
  faction: MagicItem['faction'],
  items: T[]
): MagicItem[] {
  return items.map(item => ({ ...item, faction }));
}