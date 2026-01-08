import { UnitDefinition, ArmyUnit } from '@/types/army';

export const calculateUnitCost = (unit: ArmyUnit, definition: UnitDefinition): number => {
  let optionCost = 0;

  Object.entries(unit.selectedOptions).forEach(([optId, count]) => {
    const optDef = definition.options.find(o => o.id === optId);
    if (!optDef) return;

    const costPerItem = optDef.isFixedCost 
      ? optDef.points
      : optDef.points * unit.modelCount;

    optionCost += (costPerItem * count);
  });

  return (definition.pointsPerModel * unit.modelCount) + optionCost;
};