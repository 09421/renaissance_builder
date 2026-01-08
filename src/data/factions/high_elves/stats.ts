import { StatBlock } from '@/types/army';

export const HE_STATS: Record<string, StatBlock> = {

    //Infantry
    elvenWarrior:   { M: 5, Ws: 4, Bs: 4, S: 3, T: 3, W: 1, I: 6, A: 1, Ld: 8 },
    whiteLions:     { M: 5, Ws: 5, Bs: 4, S: 4, T: 3, W: 1, I: 6, A: 1, Ld: 8 },
    swordMasters:   { M: 5, Ws: 6, Bs: 4, S: 3, T: 3, W: 1, I: 7, A: 1, Ld: 8 },
    handMaidens:    { M: 5, Ws: 5, Bs: 5, S: 3, T: 3, W: 1, I: 6, A: 1, Ld: 8 },
    elvenElite:     { M: 5, Ws: 5, Bs: 4, S: 3, T: 3, W: 1, I: 7, A: 1, Ld: 8 },

    //champions
    elvenChampion:  { M: 5, Ws: 5, Bs: 5, S: 4, T: 3, W: 1, I: 7, A: 2, Ld: 8 },
    elvenCommander: { M: 5, Ws: 6, Bs: 5, S: 4, T: 3, W: 1, I: 7, A: 2, Ld: 9 },

    //characters
    elvenPrince:    { M: 5, Ws: 7, Bs: 7, S: 4, T: 4, W: 3, I: 9, A: 4, Ld: 10 },
    elvenHero:      { M: 5, Ws: 6, Bs: 6, S: 4, T: 4, W: 2, I: 8, A: 3, Ld: 9 },
    elvenBsb:       { M: 5, Ws: 5, Bs: 5, S: 4, T: 3, W: 2, I: 7, A: 2, Ld: 8 },
    mageLord:       { M: 5, Ws: 4, Bs: 4, S: 4, T: 4, W: 4, I: 9, A: 3, Ld: 9 },
    masterMage:     { M: 5, Ws: 4, Bs: 4, S: 4, T: 4, W: 3, I: 8, A: 2, Ld: 8 },
    mageChampion:   { M: 5, Ws: 4, Bs: 4, S: 4, T: 4, W: 2, I: 7, A: 1, Ld: 8 },
    mage:           { M: 5, Ws: 4, Bs: 4, S: 3, T: 4, W: 1, I: 7, A: 1, Ld: 8 },

    //mounts
    elvenSteed:     { M: 9, Ws: 3, Bs: 0, S: 3, T: 3, W: 1, I: 4, A: 1, Ld: 5 },
    unicorn:        { M: 9, Ws: 5, Bs: 0, S: 4, T: 4, W: 1, I: 4, A: 2, Ld: 9 },
    pegasus:        { M: 8, Ws: 3, Bs: 0, S: 4, T: 4, W: 1, I: 4, A: 2, Ld: 5 },
    greatEagle:     { M: 2, Ws: 7, Bs: 0, S: 5, T: 4, W: 3, I: 5, A: 2, Ld: 8 },
    griffon:        { M: 6, Ws: 5, Bs: 0, S: 6, T: 5, W: 5, I: 7, A: 4, Ld: 8 },
    dragon:         { M: 6, Ws: 6, Bs: 0, S: 6, T: 6, W: 7, I: 8, A: 7, Ld: 7 },
    greatDragon:    { M: 6, Ws: 7, Bs: 0, S: 7, T: 7, W: 8, I: 7, A: 8, Ld: 8 },
    emperorDragon:  { M: 6, Ws: 8, Bs: 0, S: 8, T: 8, W: 9, I: 6, A: 9, Ld: 9 }

} as const;