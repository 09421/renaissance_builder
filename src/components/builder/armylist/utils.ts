import { ArmyUnit, UnitDefinition } from "@/types/army";

export const getModelDisplayString = (unit: ArmyUnit, def: UnitDefinition) => {
  // 1. CALCULATE MODIFIERS FROM OPTIONS
  let addedCrew = 0;
  let addedMounts = 0;
  let addedModels = 0; // For things like Fanatics or Netters

  Object.entries(unit.selectedOptions).forEach(([optId, count]) => {
    if (count <= 0) return;
    const opt = def.options.find(o => o.id === optId);
    if (!opt) return;

    // A. Composition Modifiers (Chariots, Extra Crew)
    if (opt.addsCrew) addedCrew += (opt.addsCrew * count);
    if (opt.addsMounts) addedMounts += (opt.addsMounts * count);

    // B. Independent Models (Old logic: maxPerModel usually implies extra models like Fanatics)
    // You might want a specific flag for this like `isExtraModel: true` in the future
    if ((opt.maxPerModel || opt.maxPerUnit) && !opt.addsCrew && !opt.addsMounts) {
       addedModels += count;
    }
  });

  // 2. CALCULATE TOTALS
  const totalCrew = (def.baseCrew || 0) + addedCrew;
  const totalMounts = (def.baseMounts || 0) + addedMounts;
  
  // 3. DETERMINE PRIMARY LABEL
  let primaryLabel = 'Models';
  if (def.role === 'character') primaryLabel = 'Character';
  if (def.role === 'war_machine') primaryLabel = 'Machine';
  if (def.baseCrew && def.role !== 'character') primaryLabel = 'Machine'; // Catch-all for chariots defined as units

  // 4. CONSTRUCT THE STRING
  const parts: string[] = [];

  // Part A: The Main Body
  // If it's a regiment with extra models (Fanatics), we sum them up here
  // If it's a Machine/Character, we usually ignore 'addedModels' for the main count 
  // (unless you want "1 Character + 2 Wolves", but usually that's separate)
  const baseCount = unit.modelCount;
  
  if (def.role === 'character' || def.role === 'war_machine' || def.baseCrew) {
     parts.push(`${baseCount} ${primaryLabel}`);
  } else {
     // Standard Regiment (e.g. 20 Goblins + 3 Fanatics = 23 Models)
     parts.push(`${baseCount + addedModels} Models`);
  }

  // Part B: The Composition (Crew/Mounts)
  if (totalCrew > 0) {
    parts.push(`${totalCrew} Crew`);
  }

  if (totalMounts > 0) {
    parts.push(`${totalMounts} Mounts`);
  }

  return parts.join(', ');
};