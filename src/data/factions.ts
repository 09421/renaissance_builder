export type FactionKey = 
'empire' | 'high_elves' | 'orcs_goblins' | 'dwarfs' | 'skaven' | 'undead' | 
'chaos' | 'chaos_dwarfs' | 'dark_elves' | 'wood_elves' | 'bretonnia' | 'lizardmen' | 
'dogs_of_war' | 'halflings' | 'ogres' | 'kislev' | 'norse' | 'slann';

export interface FactionInfo {
  key: FactionKey;
  name: string;
  description: string;
}

export const FACTIONS: FactionInfo[] = [
  { 
    key: 'empire', 
    name: 'The Empire', 
    description: 'Men of the Empire, armed with faith, steel, and blackpowder.' 
  },
  { 
    key: 'high_elves', 
    name: 'High Elves', 
    description: 'Ancient masters of magic and discipline from Ulthuan.' 
  },
  { 
    key: 'orcs_goblins', 
    name: 'Orcs & Goblins', 
    description: 'A chaotic green tide fueled by the power of the Waaagh!' 
  },
  { 
    key: 'dwarfs', 
    name: 'Dwarfs', 
    description: 'Stoic warriors with rune-forged axes and ancient grudges.' 
  },
  { 
    key: 'skaven', 
    name: 'Skaven', 
    description: 'Insidious ratmen relying on numbers, treachery, and warpstone.' 
  },
  { 
    key: 'undead', 
    name: 'Undead', 
    description: 'Shambling legions raised by Necromancers and Vampire Counts.' 
  },
  { 
    key: 'chaos', 
    name: 'Chaos', 
    description: 'Heavily armored warriors and daemons sworn to the Dark Gods.' 
  },
  { 
    key: 'chaos_dwarfs', 
    name: 'Chaos Dwarfs', 
    description: 'Twisted kin of the dwarfs, masters of fire and daemon-engines.' 
  },
  { 
    key: 'dark_elves', 
    name: 'Dark Elves', 
    description: 'Cruel raiders from Naggaroth who revel in pain and slaughter.' 
  },
  { 
    key: 'wood_elves', 
    name: 'Wood Elves', 
    description: 'Elusive guardians of Athel Loren and their forest spirits.' 
  },
  { 
    key: 'bretonnia', 
    name: 'The Grand Army of Bretonnia', 
    description: 'Noble knights seeking the Grail, supported by peasant levies.' 
  },
  { 
    key: 'lizardmen', 
    name: 'Lizardmen', 
    description: 'Cold-blooded guardians executing the Great Plan of the Old Ones.' 
  },
  { 
    key: 'dogs_of_war', 
    name: 'Dogs of War', 
    description: 'Mercenary companies fighting for gold rather than glory.' 
  },
  { 
    key: 'halflings', 
    name: 'Halflings of the Moot', 
    description: 'Plucky cooks and archers, underestimated at the enemy’s peril.' 
  },
  { 
    key: 'ogres', 
    name: 'Ogre Mercenaries', 
    description: 'Brutish giants with insatiable appetites for war and food.' 
  },
  { 
    key: 'kislev', 
    name: 'Kislev', 
    description: 'Hardened warriors of the north, born to fight Chaos.' 
  },
  { 
    key: 'norse', 
    name: 'Norse', 
    description: 'Fierce barbarian raiders from the frozen wastes.' 
  },
  { 
    key: 'slann', 
    name: 'The Slann Empire', 
    description: 'Ancient amphibian mages commanding lobotomized human slaves.' 
  }
];