import { StatBlock } from '@/types/army';

export const DWARF_STATS: Record<string, StatBlock> = {

    //Infantry
    dwarfSoldier:    { M: 4, Ws: 4, Bs: 3, S: 3, T: 4, W: 1, I: 2, A: 1, Ld: 9 },
    trollSlayer:     { M: 4, Ws: 4, Bs: 3, S: 3, T: 4, W: 1, I: 2, A: 1, Ld: 9 },
    dwarfElite:      { M: 4, Ws: 5, Bs: 3, S: 4, T: 4, W: 1, I: 3, A: 1, Ld: 9 },

    //champions
    dwarfChampion:   { M: 4, Ws: 5, Bs: 4, S: 4, T: 4, W: 1, I: 3, A: 2, Ld: 9 },
    giantSlayer:     { M: 4, Ws: 5, Bs: 4, S: 4, T: 4, W: 1, I: 3, A: 2, Ld: 9 },
    dwarfCommander:  { M: 4, Ws: 6, Bs: 4, S: 4, T: 4, W: 1, I: 4, A: 2, Ld: 9 },

    //characters
    dwarfLord:       { M: 4, Ws: 7, Bs: 6, S: 4, T: 5, W: 3, I: 5, A: 4, Ld: 11 },
    dwarfHero:       { M: 4, Ws: 6, Bs: 5, S: 4, T: 5, W: 2, I: 4, A: 3, Ld: 10 },
    dwarfBsb:        { M: 4, Ws: 5, Bs: 4, S: 4, T: 4, W: 2, I: 3, A: 2, Ld: 9 },
    daemonSlayer:    { M: 4, Ws: 7, Bs: 6, S: 4, T: 5, W: 3, I: 5, A: 4, Ld: 11 },
    dragonSlayer:    { M: 4, Ws: 6, Bs: 5, S: 4, T: 5, W: 2, I: 4, A: 3, Ld: 10 },
    runelord:        { M: 4, Ws: 8, Bs: 6, S: 5, T: 6, W: 4, I: 5, A: 2, Ld: 11 },
    masterRunesmith: { M: 4, Ws: 7, Bs: 5, S: 4, T: 6, W: 3, I: 4, A: 2, Ld: 10 },
    runesmith:       { M: 4, Ws: 6, Bs: 4, S: 4, T: 5, W: 2, I: 3, A: 2, Ld: 9 },

    //warmachine
    warmachine:    { M: '-', Ws: '-', Bs: '-', S: '-', T: 7, W: 3, I: '-', A: '-', Ld: '-' },
    gyrocopter:    { M: 20, Ws: '-', Bs: '-', S: '-', T: 4, W: 4, I: '-', A: '-', Ld: '-' },

} as const;