import { StatBlock } from '@/types/army';

export const OG_STATS: Record<string, StatBlock> = {

  //Infantry
  commonOrc:            { M: 4, Ws: 3, Bs: 3, S: 3, T: 4, W: 1, I: 2, A: 1, Ld: 7 },
  bigun:                { M: 4, Ws: 4, Bs: 3, S: 4, T: 4, W: 1, I: 3, A: 1, Ld: 7 },
  savageOrc:            { M: 4, Ws: 3, Bs: 3, S: 3, T: 4, W: 1, I: 2, A: 1, Ld: 7 },
  blackOrc:             { M: 4, Ws: 4, Bs: 3, S: 4, T: 4, W: 1, I: 2, A: 1, Ld: 8 },
  goblin:               { M: 4, Ws: 2, Bs: 3, S: 3, T: 3, W: 1, I: 2, A: 1, Ld: 5 },
  nightGoblin:          { M: 4, Ws: 2, Bs: 3, S: 3, T: 3, W: 1, I: 2, A: 1, Ld: 5 },  
  nightGoblinFanatic:   { M: '2D6', Ws: 2, Bs: 3, S: 5, T: 3, W: 1, I: 1, A: '1D6', Ld: 5 },
  caveSquig:            { M: '2D6', Ws: 4, Bs: 0, S: 5, T: 3, W: 1, I: 5, A: 2, Ld: 2 },
  forestGoblin:         { M: 4, Ws: 2, Bs: 3, S: 3, T: 3, W: 1, I: 2, A: 1, Ld: 5 },  
  snotling:             { M: 4, Ws: 2, Bs: 2, S: 2, T: 2, W: 3, I: 3, A: 3, Ld: 4 },
  troll:                { M: 6, Ws: 3, Bs: 1, S: 5, T: 4, W: 3, I: 1, A: 3, Ld: 4 },
  ogre:                 { M: 6, Ws: 3, Bs: 2, S: 4, T: 5, W: 3, I: 3, A: 2, Ld: 7 },
  
  //champions
  commonOrcChampion:    { M: 4, Ws: 4, Bs: 4, S: 4, T: 4, W: 1, I: 3, A: 2, Ld: 7 },
  bigunChampion:        { M: 4, Ws: 5, Bs: 4, S: 4, T: 4, W: 1, I: 4, A: 2, Ld: 7 },
  savageChampion:       { M: 4, Ws: 4, Bs: 4, S: 4, T: 4, W: 1, I: 3, A: 2, Ld: 7 },
  blackOrcChampion:     { M: 4, Ws: 5, Bs: 4, S: 5, T: 4, W: 1, I: 3, A: 2, Ld: 8 },
  goblinChampion:       { M: 4, Ws: 3, Bs: 4, S: 4, T: 3, W: 1, I: 3, A: 2, Ld: 5 },
  nightGoblinChampion:  { M: 4, Ws: 3, Bs: 4, S: 4, T: 3, W: 1, I: 3, A: 2, Ld: 5 }, 
  forestGoblinChampion: { M: 4, Ws: 3, Bs: 4, S: 4, T: 3, W: 1, I: 3, A: 2, Ld: 5 },
  ogreChampion:         { M: 6, Ws: 4, Bs: 3, S: 5, T: 5, W: 3, I: 4, A: 3, Ld: 7 },

  //characters
  blackOrcWarlord:      { M: 4, Ws: 7, Bs: 6, S: 5, T: 5, W: 3, I: 5, A: 4, Ld: 10 },
  OrcWarlord:           { M: 4, Ws: 6, Bs: 6, S: 4, T: 5, W: 3, I: 5, A: 4, Ld: 9 },
  goblinWarlord:        { M: 4, Ws: 5, Bs: 6, S: 4, T: 4, W: 3, I: 5, A: 4, Ld: 7 },

  blackOrcHero:         { M: 4, Ws: 7, Bs: 6, S: 5, T: 5, W: 3, I: 5, A: 4, Ld: 9 },
  OrcHero:              { M: 4, Ws: 5, Bs: 5, S: 4, T: 5, W: 2, I: 4, A: 3, Ld: 8 },
  goblinHero:           { M: 4, Ws: 4, Bs: 5, S: 4, T: 4, W: 2, I: 4, A: 3, Ld: 6 },

  blackOrcBsb:          { M: 4, Ws: 5, Bs: 4, S: 5, T: 4, W: 2, I: 3, A: 2, Ld: 8 },
  orcBsb:               { M: 4, Ws: 4, Bs: 4, S: 4, T: 4, W: 2, I: 3, A: 2, Ld: 7 },
  goblinBsb:            { M: 4, Ws: 3, Bs: 4, S: 4, T: 3, W: 2, I: 3, A: 2, Ld: 5 },

  orcShamanLord:        { M: 4, Ws: 3, Bs: 3, S: 4, T: 5, W: 4, I: 5, A: 3, Ld: 8 },
  orcMasterShaman:      { M: 4, Ws: 3, Bs: 3, S: 4, T: 5, W: 3, I: 4, A: 2, Ld: 7 },
  orcShamanChampion:    { M: 4, Ws: 3, Bs: 3, S: 4, T: 5, W: 2, I: 3, A: 1, Ld: 7 },
  orcShaman:            { M: 4, Ws: 3, Bs: 3, S: 3, T: 5, W: 1, I: 3, A: 1, Ld: 7 },

  goblinShamanLord:     { M: 4, Ws: 2, Bs: 3, S: 4, T: 4, W: 4, I: 5, A: 3, Ld: 6 },
  goblinShamanMaster:   { M: 4, Ws: 2, Bs: 3, S: 4, T: 4, W: 3, I: 4, A: 2, Ld: 5 },
  goblinShamanChampion: { M: 4, Ws: 2, Bs: 3, S: 4, T: 4, W: 2, I: 3, A: 1, Ld: 5 },
  goblinShaman:         { M: 4, Ws: 2, Bs: 3, S: 3, T: 4, W: 1, I: 3, A: 1, Ld: 5 },

  //Mounts
  warBoar:              { M: 7, Ws: 4, Bs: 0, S: 3, T: 4, W: 1, I: 3, A: 1, Ld: 3 },
  giantWolf:            { M: 9, Ws: 4, Bs: 0, S: 3, T: 3, W: 1, I: 3, A: 1, Ld: 3 },
  giantSpider:          { M: 7, Ws: 3, Bs: 0, S: 3, T: 3, W: 1, I: 1, A: 1, Ld: 5 },
  monstrousSpider:      { M: 7, Ws: 3, Bs: 0, S: 4, T: 4, W: 4, I: 1, A: 2, Ld: 5 },
  wyvern:               { M: 6, Ws: 5, Bs: 0, S: 5, T: 6, W: 4, I: 4, A: 3, Ld: 5 },

  //monsters
  giant:                { M: 6, Ws: 3, Bs: 3, S: 7, T: 6, W: 6, I: 3, A: 'Special', Ld: 6 },
  gargantuanSpider:     { M: 7, Ws: 4, Bs: 0, S: 5, T: 5, W: 8, I: 4, A: 8, Ld: 6 },

} as const;