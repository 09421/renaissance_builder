export type StatValue = number | string;

export type MagicItemCategory = 'weapon' | 'armour' | 'helmet' | 'talisman' | 'arcane' | 'enchanted' | 'banner';

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

export interface ArmyUnit {
  instanceId: string;
  defId: string;
  name: string;
  role: string;
  pointsPerModel: number;
  modelCount: number;
  selectedOptions: Record<string, number>;
}

export type StatBlock = {
  M: StatValue;  // Movement
  Ws: StatValue; // Weapon Skill
  Bs: StatValue; // Ballistic Skill
  S: StatValue;  // Strength
  T: StatValue;  // Toughness
  W: StatValue;  // Wounds
  I: StatValue;  // Initiative
  A: StatValue;  // Attacks
  Ld: StatValue; // Leadership
};

export type UnitRole = 'character' | 'regiments' | 'chariots' |'warmachines' | 'monsters';

export interface SubProfile {
  name: string;
  stats: StatBlock;
}

export type UnitOption = {
  id: string;
  name: string;
  points: number;
  description?: string;
  maxPerUnit?: number;
  maxPerModel?: number;
  ratioError?: string;
  stats?: Partial<StatBlock>;
  group?: string;
  conflicts?: string[];
  isFixedCost?: boolean;
  replaces?: string;
  optionProfile?: SubProfile;
  requires?: string[];
  isExternalPoints?: boolean;
  isExtraCrew?: boolean;
  perCrew?: boolean;
};

export interface UnitDefinition {
  id: string;
  name: string;
  modelName: string;
  role: string;
  type: string;
  minSize: number;
  maxSize: number | null;
  pointsPerModel: number;
  stats: StatBlock;
  equipment: string[]; 
  options: UnitOption[]; 
  specialRules: string[];
  additionalProfiles?: SubProfile[];
  baseCrew?: number;
  magicItemAllowance?: number;
}