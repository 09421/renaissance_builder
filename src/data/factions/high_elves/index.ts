import { UnitDefinition } from '@/types/army';

import { characters } from './characters';
import { regiments } from './regiments';
import { warmachines } from './warmachines';

export const HIGH_ELVES_ROSTER: UnitDefinition[] = [
  ...characters,
  ...regiments,
  ...warmachines,
];