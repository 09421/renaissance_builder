import { useArmyStore } from '@/store/armyStore';
import { UnitDefinition } from '@/types/army';
import { SECTION_ORDER } from '@/utils/sections';
import { UnitList } from './UnitList';


export const UnitListContainer = ({ units }: { units: UnitDefinition[] }) => {
  const { addUnit, roster, faction } = useArmyStore();

  return (
    <div className="pb-10">
      {SECTION_ORDER.map((role) => (
        <UnitList 
          key={role} 
          role={role} 
          units={units.filter(u => u.role === role)} 
          addUnit={addUnit}
          roster={roster} 
          faction={faction}
        />
      ))}
    </div>
  );
};