import { StatBlock } from '@/types/army';

export const EMP_STATS: Record<string, StatBlock> = {

  //Infantry
  // mpireLord:            { M: 4, Ws: 3, Bs: 3, S: 3, T: 4, W: 1, I: 2, A: 1, Ld: 7 },
  // bigun:                { M: 4, Ws: 4, Bs: 3, S: 4, T: 4, W: 1, I: 3, A: 1, Ld: 7 },
  // savageOrc:            { M: 4, Ws: 3, Bs: 3, S: 3, T: 4, W: 1, I: 2, A: 1, Ld: 7 },
  // blackOrc:             { M: 4, Ws: 4, Bs: 3, S: 4, T: 4, W: 1, I: 2, A: 1, Ld: 8 },
  // goblin:               { M: 4, Ws: 2, Bs: 3, S: 3, T: 3, W: 1, I: 2, A: 1, Ld: 5 },
  // nightGoblin:          { M: 4, Ws: 2, Bs: 3, S: 3, T: 3, W: 1, I: 2, A: 1, Ld: 5 },  
  // nightGoblinFanatic:   { M: '2D6', Ws: 2, Bs: 3, S: 5, T: 3, W: 1, I: 1, A: '1D6', Ld: 5 },
  // caveSquig:            { M: '2D6', Ws: 4, Bs: 0, S: 5, T: 3, W: 1, I: 5, A: 2, Ld: 2 },
  // forestGoblin:         { M: 4, Ws: 2, Bs: 3, S: 3, T: 3, W: 1, I: 2, A: 1, Ld: 5 },  
  // snotling:             { M: 4, Ws: 2, Bs: 2, S: 2, T: 2, W: 3, I: 3, A: 3, Ld: 4 },
  // troll:                { M: 6, Ws: 3, Bs: 1, S: 5, T: 4, W: 3, I: 1, A: 3, Ld: 4 },
  // ogre:                 { M: 6, Ws: 3, Bs: 2, S: 4, T: 5, W: 3, I: 3, A: 2, Ld: 7 },
  
  // //champions
  // commonOrcChampion:    { M: 4, Ws: 4, Bs: 4, S: 4, T: 4, W: 1, I: 3, A: 2, Ld: 7 },
  // bigunChampion:        { M: 4, Ws: 5, Bs: 4, S: 4, T: 4, W: 1, I: 4, A: 2, Ld: 7 },
  // savageChampion:       { M: 4, Ws: 4, Bs: 4, S: 4, T: 4, W: 1, I: 3, A: 2, Ld: 7 },
  // blackOrcChampion:     { M: 4, Ws: 5, Bs: 4, S: 5, T: 4, W: 1, I: 3, A: 2, Ld: 8 },
  // goblinChampion:       { M: 4, Ws: 3, Bs: 4, S: 4, T: 3, W: 1, I: 3, A: 2, Ld: 5 },
  // nightGoblinChampion:  { M: 4, Ws: 3, Bs: 4, S: 4, T: 3, W: 1, I: 3, A: 2, Ld: 5 }, 
  // forestGoblinChampion: { M: 4, Ws: 3, Bs: 4, S: 4, T: 3, W: 1, I: 3, A: 2, Ld: 5 },
  // ogreChampion:         { M: 6, Ws: 4, Bs: 3, S: 5, T: 5, W: 3, I: 4, A: 3, Ld: 7 },

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
  Warhorse:             { M: 8, Ws: 3, Bs: 0, S: 3, T: 3, W: 1, I: 3, A: 1, Ld: 5 },
  Pegasus:              { M: 8, Ws: 3, Bs: 0, S: 4, T: 4, W: 1, I: 4, A: 2, Ld: 5 },
  Griffon:              { M: 6, Ws: 5, Bs: 0, S: 6, T: 5, W: 5, I: 7, A: 4, Ld: 8 },

  //monsters

} as const;