import { UnitDefinition, ArmyUnit } from '@/types/army';
import { getMagicItemDef } from '@/utils/getFactionData';

export const calculateUnitCost = (unit: ArmyUnit, definition: UnitDefinition, faction: string): number => {

  let totalCrew = definition.baseCrew || 0;

  definition.options.forEach(opt => {
    if (opt.isExtraCrew) {
      const count = unit.selectedOptions[opt.id] || 0;
      totalCrew += count;
    }
  });

  let optionCost = 0;
  
  Object.entries(unit.selectedOptions).forEach(([optId, count]) => {
    const optDef = definition.options.find(o => o.id === optId);
      if (optDef) {
      let costPerItem = optDef.points;

      if (optDef.perCrew) {
        costPerItem = optDef.points * totalCrew;
      } 
      else if (optDef.isFixedCost) {
        costPerItem = optDef.points;
      } 
      else {
        costPerItem = optDef.points * unit.modelCount;
      }

      optionCost += (costPerItem * count);
    }
    else {
      const magicItem = getMagicItemDef(optId, faction);
      if (magicItem) {
        optionCost += (magicItem.points * count);
      }
    }
  });

  return (definition.pointsPerModel * unit.modelCount) + optionCost;
};