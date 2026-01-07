export type StatValue = number | string;

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
  stats?: Partial<StatBlock>;
  group?: string;
  isFixedCost?: boolean;
  replaces?: string;
  mountProfile?: SubProfile;
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
}