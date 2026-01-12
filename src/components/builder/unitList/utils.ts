
import { getUnitDef } from '@/utils/getFactionData';
import { UnitDefinition } from '@/types/army';

const formatLabel = (tag: string) => {
  return tag
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

// --- VALIDATION HELPER ---
export const checkUnitRestrictions = (
  unit: UnitDefinition, 
  roster: any[], 
  faction: string
): { allowed: boolean; reason?: string } => {
  const { restrictions, id } = unit;

  // 1. Max Per Army
  if (restrictions?.maxPerArmy) {
    const count = roster.filter(u => u.defId === id).length;
    if (count >= restrictions.maxPerArmy) {
      return { allowed: false, reason: `Max ${restrictions.maxPerArmy} per army` };
    }
  }

  // 2. Tag Requirements
  if (restrictions?.requiresTag) {
    const requiredTag = restrictions.requiresTag;
    const hasRequirement = roster.some(u => {
      const def = getUnitDef(faction, u.defId);
      return def?.tags?.includes(requiredTag);
    });

    if (!hasRequirement) {
      const label = requiredTag.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      return { allowed: false, reason: `Requires ${label}` };
    }
  }

  // 3. Exclusive Groups (The Knightly Orders Logic)
  if (restrictions?.uniqueGroup) {
    const groupName = restrictions.uniqueGroup;
    const myType = restrictions.uniqueType || id;

    // A. Get all units in this group from the roster
    const groupUnits = roster.filter(u => {
      const def = getUnitDef(faction, u.defId);
      return def?.restrictions?.uniqueGroup === groupName;
    });

    // B. Calculate counts for every Type currently in the list
    // e.g. { 'reiksguard': 2, 'white_wolf': 1 }
    const typeCounts: Record<string, number> = {};
    
    groupUnits.forEach(u => {
      const def = getUnitDef(faction, u.defId);
      const uType = def?.restrictions?.uniqueType || def?.id || 'unknown';
      typeCounts[uType] = (typeCounts[uType] || 0) + 1;
    });

    // C. CHECK 1: Has another Order already "Locked" the list?
    // (If any OTHER type has > 1 unit, the list is dedicated to them)
    const isLockedByOthers = Object.entries(typeCounts).some(([type, count]) => {
      return type !== myType && count > 1;
    });

    if (isLockedByOthers) {
      return { allowed: false, reason: 'Order locked by duplicates' };
    }

    // D. CHECK 2: Am I mixing orders?
    // If there are ANY other types present (count > 0), I cannot duplicate myself.
    const hasMixedTypes = Object.keys(typeCounts).some(type => type !== myType);

    if (hasMixedTypes) {
      // If mixing, my limit is 1
      const myCurrentCount = typeCounts[myType] || 0;
      if (myCurrentCount >= 1) {
        return { allowed: false, reason: 'Limit 1 if mixing Orders' };
      }
    }
  }

  if (restrictions?.requiresGeneralTag) {
    const requiredTag = restrictions.requiresGeneralTag;

    const generalUnit = roster.find(u => u.selectedOptions['general']);
    const label = formatLabel(requiredTag);
    if (!generalUnit) {
      return { allowed: false, reason: `General must be ${label}` };
    }
    const generalDef = getUnitDef(faction, generalUnit.defId);
    
    if (!generalDef?.tags?.includes(requiredTag)) {      
      return { allowed: false, reason: `General must be ${label}` };
    }
  }
  return { allowed: true };
};