
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


  if (restrictions?.sharedSelection) {
    const { group, max, type, mode } = restrictions.sharedSelection;
    const myType = type || id; 


    const groupUnits = roster.filter(u => {
      const def = getUnitDef(faction, u.defId);
      return def?.restrictions?.sharedSelection?.group === group;
    });


    if (max && groupUnits.length >= max) {
      return { allowed: false, reason: `Max ${max} per army` };
    }

    if (mode === 'exclusive_subtypes') {      
      const typeCounts: Record<string, number> = {};
      groupUnits.forEach(u => {
        const def = getUnitDef(faction, u.defId);
        const sel = def?.restrictions?.sharedSelection;
        const uType = sel?.type || def?.id || 'unknown';
        typeCounts[uType] = (typeCounts[uType] || 0) + 1;
      });

      const isLockedByOthers = Object.entries(typeCounts).some(([t, count]) => {
        return t !== myType && count > 1;
      });

      if (isLockedByOthers) {
        return { allowed: false, reason: 'Locked by another Order' };
      }

      const hasOtherTypes = Object.keys(typeCounts).some(t => t !== myType);
      
      if (hasOtherTypes) {
        const myCount = typeCounts[myType] || 0;
        if (myCount >= 1) {
          return { allowed: false, reason: 'Limit 1 if mixing types' };
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