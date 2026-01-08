import { StatBlock } from '@/types/army';

interface StatRowProps {
  label: string;
  stats: StatBlock;
  isHighlight?: boolean;
}

export const StatRow = ({ label, stats, isHighlight = false }: StatRowProps) => (
  <>
    <div className={`col-span-2 py-1 px-2 text-left font-bold text-xs flex items-center ${isHighlight ? 'text-amber-500' : 'text-slate-300'}`}>
      {label}
    </div>
    {['M', 'Ws', 'Bs', 'S', 'T', 'W', 'I', 'A', 'Ld'].map((key) => (
      <div key={key} className={`py-1 text-xs font-mono text-center ${isHighlight ? 'text-amber-500 font-bold' : 'text-slate-400'}`}>
        {/* @ts-ignore */}
        {stats[key as keyof StatBlock]}
      </div>
    ))}
  </>
);