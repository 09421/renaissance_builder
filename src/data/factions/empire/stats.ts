import { StatBlock } from '@/types/army';

export const EMP_STATS: Record<string, StatBlock> = {

  //Infantry
  trooper:              { M: 4, Ws: 3, Bs: 3, S: 3, T: 3, W: 1, I: 3, A: 1, Ld: 7 },
  swordsman:            { M: 4, Ws: 4, Bs: 3, S: 3, T: 3, W: 1, I: 4, A: 1, Ld: 7 },
  knight:               { M: 4, Ws: 4, Bs: 3, S: 4, T: 3, W: 1, I: 4, A: 1, Ld: 7 },
  engineer:             { M: 4, Ws: 3, Bs: 4, S: 3, T: 3, W: 1, I: 3, A: 1, Ld: 7 },
  
  //champions
  champion:             { M: 4, Ws: 4, Bs: 4, S: 4, T: 3, W: 1, I: 4, A: 2, Ld: 7 },
  captain:              { M: 4, Ws: 5, Bs: 4, S: 4, T: 3, W: 1, I: 5, A: 2, Ld: 8 },
  commander:            { M: 4, Ws: 6, Bs: 4, S: 4, T: 3, W: 2, I: 6, A: 2, Ld: 9 },

  //characters
  empireLord:           { M: 4, Ws: 6, Bs: 6, S: 4, T: 4, W: 3, I: 6, A: 4, Ld: 9 },
  empireHero:           { M: 4, Ws: 5, Bs: 5, S: 4, T: 4, W: 2, I: 5, A: 3, Ld: 8 },
  empireBSB:            { M: 4, Ws: 4, Bs: 4, S: 4, T: 3, W: 2, I: 4, A: 2, Ld: 7 },

  warriorPriest:        { M: 4, Ws: 4, Bs: 3, S: 4, T: 4, W: 2, I: 4, A: 2, Ld: 8 },

  wizardLord:           { M: 4, Ws: 3, Bs: 3, S: 4, T: 4, W: 4, I: 6, A: 3, Ld: 8 },
  masterWizard:         { M: 4, Ws: 3, Bs: 3, S: 4, T: 4, W: 3, I: 5, A: 2, Ld: 7 },
  wizardChampion:       { M: 4, Ws: 3, Bs: 3, S: 4, T: 4, W: 2, I: 4, A: 1, Ld: 7 },
  wizard:               { M: 4, Ws: 3, Bs: 3, S: 3, T: 4, W: 1, I: 4, A: 1, Ld: 7 },

  //Mounts  
  horse:                { M: 8, Ws: '-', Bs: '-', S: '-', T: '-', W: '-', I: '-', A: '-', Ld: '-' },
  Warhorse:             { M: 8, Ws: 3, Bs: 0, S: 3, T: 3, W: 1, I: 3, A: 1, Ld: 5 },
  Pegasus:              { M: 8, Ws: 3, Bs: 0, S: 4, T: 4, W: 1, I: 4, A: 2, Ld: 5 },
  Griffon:              { M: 6, Ws: 5, Bs: 0, S: 6, T: 5, W: 5, I: 7, A: 4, Ld: 8 },

  //warmachines  
  warmachine:           { M: '-', Ws: '-', Bs: '-', S: '-', T: 7, W: 3, I: '-', A: '-', Ld: '-' },
  warWagon:             { M: '-', Ws: '-', Bs: '-', S: 6, T: 6, W: 4, I: '-', A: '-', Ld: '-' },
  steamTank:            { M: '-', Ws: 2, Bs: 4, S: 7, T: 10, W: 5, I: '-', A: '-', Ld: '-' },

  //monsters

  //auxiliary
  fighter:              { M: 4, Ws: 3, Bs: 3, S: 3, T: 3, W: 1, I: 3, A: 1, Ld: 7 },
  kislevWingedLancer:   { M: 4, Ws: 4, Bs: 2, S: 4, T: 4, W: 1, I: 4, A: 1, Ld: 7 },
  flagellant:           { M: 4, Ws: 2, Bs: 2, S: 4, T: 4, W: 1, I: 3, A: 2, Ld: 10 },
  dwarf:                { M: 4, Ws: 4, Bs: 3, S: 3, T: 4, W: 1, I: 2, A: 1, Ld: 9 },
  halfling:             { M: 4, Ws: 2, Bs: 4, S: 2, T: 2, W: 1, I: 5, A: 1, Ld: 8 },
  ogre:                 { M: 6, Ws: 3, Bs: 2, S: 4, T: 5, W: 3, I: 3, A: 2, Ld: 7 },

  //auxiliary Champions
  fighterChampion:      { M: 4, Ws: 4, Bs: 4, S: 4, T: 3, W: 1, I: 4, A: 2, Ld: 7 },
  kislevCaptain:        { M: 4, Ws: 5, Bs: 4, S: 4, T: 3, W: 1, I: 5, A: 2, Ld: 8 },  
  prophetOfDoom:        { M: 4, Ws: 3, Bs: 3, S: 5, T: 4, W: 1, I: 4, A: 3, Ld: 10 },
  dwarfChampion:        { M: 4, Ws: 5, Bs: 4, S: 4, T: 4, W: 1, I: 3, A: 2, Ld: 9 },
  halflingChampion:     { M: 4, Ws: 3, Bs: 5, S: 3, T: 2, W: 1, I: 6, A: 2, Ld: 8 },
  ogreChampion:         { M: 6, Ws: 4, Bs: 3, S: 5, T: 5, W: 3, I: 4, A: 3, Ld: 7 },


} as const;