import { UnitDefinition } from '@/types/army';

import { characters } from './characters';
import { regiments } from './regiments';
import { chariots } from './chariots';
import { warmachines } from './warmachines';
import { monsters } from './monsters';
import { auxiliary } from './auxiliary';

export const EMPIRE_ROSTER: UnitDefinition[] = [
  ...characters,
  ...regiments,
  ...chariots,
  ...warmachines,
  ...monsters,
  ...auxiliary
];