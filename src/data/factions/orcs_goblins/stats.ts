import { StatBlock } from '@/types/army';

export const OG_STATS: Record<string, StatBlock> = {
  commonOrc:            { M: 4, Ws: 3, Bs: 3, S: 3, T: 4, W: 1, I: 2, A: 1, Ld: 7 },
  commonOrcChampion:    { M: 4, Ws: 4, Bs: 4, S: 4, T: 4, W: 1, I: 3, A: 2, Ld: 7 },

  bigun:                { M: 4, Ws: 4, Bs: 3, S: 4, T: 4, W: 1, I: 3, A: 1, Ld: 7 },
  bigunChampion:        { M: 4, Ws: 5, Bs: 4, S: 4, T: 4, W: 1, I: 4, A: 2, Ld: 7 },

  savageOrc:            { M: 4, Ws: 3, Bs: 3, S: 3, T: 4, W: 1, I: 2, A: 1, Ld: 7 },
  savageChampion:       { M: 4, Ws: 4, Bs: 4, S: 4, T: 4, W: 1, I: 3, A: 2, Ld: 7 },

  blackOrc:             { M: 4, Ws: 4, Bs: 3, S: 4, T: 4, W: 1, I: 2, A: 1, Ld: 8 },
  blackOrcChampion:     { M: 4, Ws: 5, Bs: 4, S: 5, T: 4, W: 1, I: 3, A: 2, Ld: 8 },
  
  goblin:               { M: 4, Ws: 2, Bs: 3, S: 3, T: 3, W: 1, I: 2, A: 1, Ld: 5 },
  goblinChampion:       { M: 4, Ws: 3, Bs: 4, S: 4, T: 3, W: 1, I: 3, A: 2, Ld: 5 },

  nightGoblin:          { M: 4, Ws: 2, Bs: 3, S: 3, T: 3, W: 1, I: 2, A: 1, Ld: 5 },  
  nightGoblinChampion:  { M: 4, Ws: 3, Bs: 4, S: 4, T: 3, W: 1, I: 3, A: 2, Ld: 5 }, 
  nightGoblinFanatic:   { M: '2D6', Ws: 2, Bs: 3, S: 5, T: 3, W: 1, I: 1, A: '1D6', Ld: 5 },

  caveSquig:            { M: '2D6', Ws: 4, Bs: 0, S: 5, T: 3, W: 1, I: 5, A: 2, Ld: 2 },

  forestGoblin:         { M: 4, Ws: 2, Bs: 3, S: 3, T: 3, W: 1, I: 2, A: 1, Ld: 5 },
  forestGoblinChampion: { M: 4, Ws: 3, Bs: 4, S: 4, T: 3, W: 1, I: 3, A: 2, Ld: 5 },
  
  snotling:             { M: 4, Ws: 2, Bs: 2, S: 2, T: 2, W: 3, I: 3, A: 3, Ld: 4 },

  troll:                { M: 6, Ws: 3, Bs: 1, S: 5, T: 4, W: 3, I: 1, A: 3, Ld: 4 },

  ogre:                 { M: 6, Ws: 3, Bs: 2, S: 4, T: 5, W: 3, I: 3, A: 2, Ld: 7 },
  ogreChampion:         { M: 6, Ws: 4, Bs: 3, S: 5, T: 5, W: 3, I: 4, A: 3, Ld: 7 },
  
  warBoar:              { M: 7, Ws: 4, Bs: 0, S: 3, T: 4, W: 1, I: 3, A: 1, Ld: 3 },
  giantWolf:            { M: 9, Ws: 4, Bs: 0, S: 3, T: 3, W: 1, I: 3, A: 1, Ld: 3 },
  giantSpider:          { M: 7, Ws: 3, Bs: 0, S: 3, T: 3, W: 1, I: 1, A: 1, Ld: 5 },
} as const;