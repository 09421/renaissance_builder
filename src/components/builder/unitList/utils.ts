
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

// 3. Exclusive Groups
  if (restrictions?.uniqueGroup) {
    const groupName = restrictions.uniqueGroup;
    const myType = restrictions.uniqueType || id;

    // A. Get all units in this group from the roster
    const groupUnits = roster.filter(u => {
      const def = getUnitDef(faction, u.defId);
      return def?.restrictions?.uniqueGroup === groupName;
    });

    // --- NEW: GENERIC GROUP CAP (Steam Tank Logic) ---
    // This checks: "Do we have 8 tanks already?"
    if (restrictions.uniqueGroupMax) {
      if (groupUnits.length >= restrictions.uniqueGroupMax) {
        return { allowed: false, reason: `Max ${restrictions.uniqueGroupMax} per army` };
      }
    }

    // --- CONDITIONAL: KNIGHTLY ORDER LOGIC ---
    // Only run the complex "mixing penalty" logic if the unit asks for it
    if (restrictions.uniqueGroupLogic === 'knightly_order') {
      
      const typeCounts: Record<string, number> = {};
      
      groupUnits.forEach(u => {
        const def = getUnitDef(faction, u.defId);
        const uType = def?.restrictions?.uniqueType || def?.id || 'unknown';
        typeCounts[uType] = (typeCounts[uType] || 0) + 1;
      });

      // Check 1: Locked by others
      const isLockedByOthers = Object.entries(typeCounts).some(([type, count]) => {
        return type !== myType && count > 1;
      });

      if (isLockedByOthers) {
        return { allowed: false, reason: 'Order locked by duplicates' };
      }

      // Check 2: Mixing limit
      const hasMixedTypes = Object.keys(typeCounts).some(type => type !== myType);

      if (hasMixedTypes) {
        const myCurrentCount = typeCounts[myType] || 0;
        if (myCurrentCount >= 1) {
          return { allowed: false, reason: 'Limit 1 if mixing Orders' };
        }
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