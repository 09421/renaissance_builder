import { UnitDefinition } from '@/types/army';

import { regiments } from './regiments';
import { warmachines } from './warmachines';
import { characters } from './characters';

export const DWARF_ROSTER: UnitDefinition[] = [
  ...regiments,
  ...warmachines,
  ...characters
];