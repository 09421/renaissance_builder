export type MagicItemCategory = 'weapon' | 'armour' | 'helmet' | 'talisman' | 'arcane' | 'enchanted' | 'banner';

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
  
  onlyWizards?: boolean;
  onlyBattleStandard?: boolean;
  requiresMundaneOption?: string;
}