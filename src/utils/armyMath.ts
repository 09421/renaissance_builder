// utils/armyMath.ts
import { ArmyUnit } from '@/store/armyStore';
import { UnitDefinition } from '@/types/army';

export const calculateUnitCost = (unit: ArmyUnit, definition: UnitDefinition): number => {
  // 1. Upgrades that cost points per model
  const perModelOptionCost = definition.options
    .filter(opt => unit.selectedOptions.includes(opt.id) && !opt.isFixedCost)
    .reduce((sum, opt) => sum + opt.points, 0);

  // 2. Fixed cost upgrades (Champions, Standards)
  const fixedOptionCost = definition.options
    .filter(opt => unit.selectedOptions.includes(opt.id) && opt.isFixedCost)
    .reduce((sum, opt) => sum + opt.points, 0);

  // 3. Total
  return ((definition.pointsPerModel + perModelOptionCost) * unit.modelCount) + fixedOptionCost;
};