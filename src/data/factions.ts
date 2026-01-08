export type FactionKey = 
'empire' | 'high_elves' | 'orcs_goblins' | 'dwarfs' | 'skaven' | 'undead' | 
'chaos' | 'chaos_dwarfs' | 'dark_elves' | 'wood_elves' | 'bretonnia' | 'lizardmen' | 
'dogs_of_war' | 'halflings' | 'ogres' | 'kislev' | 'norse' | 'slann';

export interface FactionInfo {
  key: FactionKey;
  name: string;
  description?: string;
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
  },
  { 
    key: 'skaven', 
    name: 'Skaven', 
  },
  { 
    key: 'undead', 
    name: 'Undead', 
  },
  { 
    key: 'chaos', 
    name: 'Chaos', 
  },
  { 
    key: 'chaos_dwarfs', 
    name: 'Chaos Dwarfs', 
  },
  { 
    key: 'dark_elves', 
    name: 'Dark Elves', 
  },
  { 
    key: 'wood_elves', 
    name: 'Wood Elves', 
  },
  { 
    key: 'bretonnia', 
    name: 'The Grand Army of Bretonnia', 
  },
  { 
    key: 'lizardmen', 
    name: 'Lizardmen', 
  },
  { 
    key: 'dogs_of_war', 
    name: 'Dogs of War', 
  },
  { 
    key: 'halflings', 
    name: 'Halflings of the Moot', 
  },
  { 
    key: 'ogres', 
    name: 'Ogre Mercenaries', 
  },
  { 
    key: 'kislev', 
    name: 'Kislev', 
  },
  { 
    key: 'norse', 
    name: 'Norse', 
  },
  { 
    key: 'slann', 
    name: 'The Slann Empire', 
  }
];