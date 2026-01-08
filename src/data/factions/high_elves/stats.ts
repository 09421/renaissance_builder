import { StatBlock } from '@/types/army';

export const HE_STATS: Record<string, StatBlock> = {

    //Infantry
    elvenWarrior:   { M: 5, Ws: 4, Bs: 4, S: 3, T: 3, W: 1, I: 6, A: 1, Ld: 8 },
    whiteLions:     { M: 5, Ws: 5, Bs: 4, S: 4, T: 3, W: 1, I: 6, A: 1, Ld: 8 },
    swordMasters:   { M: 5, Ws: 6, Bs: 4, S: 3, T: 3, W: 1, I: 7, A: 1, Ld: 8 },
    handMaidens:    { M: 5, Ws: 5, Bs: 5, S: 3, T: 3, W: 1, I: 6, A: 1, Ld: 8 },
    elvenElite:     { M: 5, Ws: 5, Bs: 4, S: 3, T: 3, W: 1, I: 7, A: 1, Ld: 8 },

    elvenChampion:  { M: 5, Ws: 5, Bs: 5, S: 4, T: 3, W: 1, I: 7, A: 2, Ld: 8 },
    elvenCommander: { M: 5, Ws: 6, Bs: 5, S: 4, T: 3, W: 1, I: 7, A: 2, Ld: 9 },

    elvenSteed:     { M: 9, Ws: 3, Bs: 3, S: 3, T: 3, W: 1, I: 4, A: 1, Ld: 5 },

} as const;