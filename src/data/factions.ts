export type FactionKey = 
'empire' | 'high_elves' | 'orcs_goblins' | 'dwarfs' | 'skaven' | 'undead' | 
'chaos' | 'chaos_dwarfs' | 'dark_elves' | 'wood_elves' | 'bretonnia' | 'lizardmen' | 
'dogs_of_war' | 'halflings' | 'ogres' | 'kislev' | 'norse' | 'slann';

export interface FactionInfo {
  key: FactionKey;
  name: string;
  description?: string;
  disabled?: boolean;
}

export const FACTIONS: FactionInfo[] = [
  { 
    key: 'empire', 
    name: 'The Empire',
  },
  { 
    key: 'high_elves', 
    name: 'High Elves', 
  },
  { 
    key: 'orcs_goblins', 
    name: 'Orcs & Goblins',
  },
  { 
    key: 'dwarfs', 
    name: 'Dwarfs',
    description: 'Work in progress'
  },
  { 
    key: 'skaven', 
    name: 'Skaven', 
    disabled: true
  },
  { 
    key: 'undead', 
    name: 'Undead', 
    disabled: true
  },
  { 
    key: 'chaos', 
    name: 'Chaos', 
    disabled: true
  },
  { 
    key: 'chaos_dwarfs', 
    name: 'Chaos Dwarfs', 
    disabled: true
  },
  { 
    key: 'dark_elves', 
    name: 'Dark Elves', 
    disabled: true
  },
  { 
    key: 'wood_elves', 
    name: 'Wood Elves', 
    disabled: true
  },
  { 
    key: 'bretonnia', 
    name: 'The Grand Army of Bretonnia', 
    disabled: true
  },
  { 
    key: 'lizardmen', 
    name: 'Lizardmen', 
    disabled: true
  },
  { 
    key: 'dogs_of_war', 
    name: 'Dogs of War', 
    disabled: true
  },
  { 
    key: 'halflings', 
    name: 'Halflings of the Moot', 
    disabled: true
  },
  { 
    key: 'ogres', 
    name: 'Ogre Mercenaries', 
    disabled: true
  },
  { 
    key: 'kislev', 
    name: 'Kislev', 
    disabled: true
  },
  { 
    key: 'norse', 
    name: 'Norse', 
    disabled: true
  },
  { 
    key: 'slann', 
    name: 'The Slann Empire', 
    disabled: true
  }
];