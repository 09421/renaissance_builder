import {MagicAllowance} from '@/types/magicItems';

export type StatValue = number | string;
export type UnitRole = 'character' | 'regiments' | 'chariots' |'warmachines' | 'monsters' | 'auxiliary';
export type OptionCategory = 'mount' | 'weapon' | 'ranged_weapon' | 'experimantal' | 'armour' | 'command' | 'magic' | 'other' | 'general';
export type SelectionMode = 'default' | 'exclusive_subtypes';

export interface Restrictions{
  maxPerArmy?: number;
  requiresTag?: string;
  cantHaveTag?: string;
  requiresGeneralTag?:string;
  sharedSelection?: {
    group: string;
    max?: number;
    type?: string;
    mode?: SelectionMode;
  };
}

export interface ArmyUnit {
  instanceId: string;
  defId: string;
  name: string;
  role: string;
  unitBaseCost: number;
  pointsPerModel: number;
  modelCount: number;
  tags?: string[];
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

export interface SubProfile {
  name: string;
  stats: StatBlock;
}

export type UnitOption = {
  id: string;
  name: string;
  points: number;
  description?: string;
  category?: OptionCategory;
  maxPerUnit?: number;
  maxPerModel?: number;
  ratioError?: string;
  stats?: Partial<StatBlock>;
  group?: string;
  conflicts?: string[];
  isFixedCost?: boolean;
  replaces?: string[];
  optionProfile?: SubProfile[];
  requires?: string[];
  isExternalPoints?: boolean;
  perCrew?: boolean;
  magicAllowance?: MagicAllowance;
  isMount?:boolean;
  addsCrew?:number,
  addsMounts?:number,
};

export interface UnitDefinition {
  id: string;
  name: string;
  modelName: string;
  role: string;
  type: string;
  minSize: number;
  maxSize: number | null;
  unitBaseCost?: number;
  pointsPerModel: number;
  stats: StatBlock;
  equipment: string[]; 
  options: UnitOption[]; 
  specialRules: string[];
  additionalProfiles?: SubProfile[];
  baseCrew?: number;
  baseMounts?: number;
  magicAllowance?: MagicAllowance;
  tags?: string[];
  restrictions?: Restrictions;
}