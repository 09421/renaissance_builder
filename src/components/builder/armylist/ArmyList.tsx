import { useArmyStore } from '@/store/armyStore';
import { SECTION_ORDER } from '@/utils/sections';
import { ArmySection } from './ArmySection';

export const ArmyList = () => {
  const { roster, selectUnit, selectedUnitId, removeUnit, faction } = useArmyStore();

  if (roster.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-slate-600">
        <p>No units recruited.</p>
        <p className="text-sm">Select units from the left sidebar.</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto pb-20">
      {SECTION_ORDER.map((role) => (
        <ArmySection 
          key={role}
          role={role}
          units={roster.filter(u => u.role === role)}
          faction={faction}
          selectedUnitId={selectedUnitId}
          selectUnit={selectUnit}
          removeUnit={removeUnit}
        />
      ))}
    </div>
  );
};