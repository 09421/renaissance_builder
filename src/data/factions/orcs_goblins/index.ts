import { UnitDefinition } from '@/types/army';

import { characters } from './characters';
import { regiments } from './regiments';

export const ORCS_AND_GOBLINS_ROSTER: UnitDefinition[] = [
  ...characters,
  ...regiments,
];