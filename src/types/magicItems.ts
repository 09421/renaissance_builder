export type MagicItemCategory = 'weapon' | 'armour' | 'enchanted' | 'arcane' | 'familiar' | 'banner';

export interface MagicAllowance {
  maxItems?: number;
  allowedCategories?: MagicItemCategory[];
}

export interface MagicItem {
  id: string;
  name: string;
  type: MagicItemCategory;
  points: number;
  description?: string;
  faction?:String;
  onlyOnFoot?:boolean;
  incompatibleTags?: string[];
  requiresOptionCategory?: string[];
  requiresMundaneOption?: string[];
  requiresTags?: string[];
  requiresGeneral?: boolean;
}