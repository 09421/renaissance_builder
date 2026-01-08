import { UnitDefinition } from '@/types/army';

import { characters } from './characters';
import { regiments } from './regiments';

export const HIGH_ELVES_ROSTER: UnitDefinition[] = [
  ...characters,
  ...regiments,
];