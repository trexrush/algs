import type { ICaseListV2, IAlgSetV2, IOptions } from "../scripts/types"

const _: ICaseListV2 = {
    Ua: {
        name: 'Ua',
        algs: [
            { setup: "U2", alg: `R U R' U R' U' R2 U' R' U R' U R`, },
            { setup: "U'", alg: `R2 U' S' U2' S U' R2'`, tags: ["Swag"] },
            { alg: `R U' R U R U R U' R' U' R2`, },
        ]
    },
    Ub: {
        name: 'Ub',
        algs: [
            { setup: "U2", alg: `R' U R' U' R3 U' R' U R U R2'`, },
            { setup: "U'", alg: `R2 U' S R2' S' R2 U R2'`, tags: ["Swag"] },
            { alg: `R2 U R U R' U' R' U' R' U R'`, },
        ]
    },
    H: {
        name: 'H',
        algs: [
            { alg: `M2' U' M2' U2' M2' U' M2'`, },
            { alg: `R2 S2' R2 U R2 S2' R2`, tags: ["Swag"], },
            { alg: `R2 U2' R' U2' R2 U2' R2 U2' R' U2' R2`, tags: ["Swag", "New"], },
            { alg: `x' R r U2' R' r' u' U' R2 U D`, tags: ["Swag", "New"], },
            // (R2 L2) U' (R2 L2) u2' (R2 L2) U' (R2 L2)
        ]
    },
    Z: {
        name: 'Z',
        algs: [
            { setup: "U", alg: `M' U' (M2' U') (M2' U') M' U2' M2'`, },
            { alg: `(M2' U') (M2' U') M' U2' M2' U2' M'`, },
            { setup: "U", alg: `L U L' U L' U' L' U L U' L' U' L2' U L`, tags: ["OH"], },
            { setup: "U", alg: `S M2' S' u' M2' u M2'`, tags: ["Swag"], },
        ]
    },
    Aa: {
        name: 'Aa',
        algs: [
            { alg: `r' U L' D2 L U' L' D2 L2 x`, tags: ["Lefty"], },
            { setup: "U", alg: `(L r) D2 L' U' L D2 L' U (L' x')`, tags: ["Lefty"], },
        ]
    },
    Ab: {
        name: 'Ab',
        algs: [
            { alg: `r U' L D2 L' U L D2 L2 x' `, tags: ["Lefty"], },
            { setup: "U'", alg: `(L' r') D2 L U L' D2 L U' (L x)`, tags: ["Lefty"], },
        ]
    },
    Ga: {
        name: 'Ga',
        algs: [
            { alg: `L2 U L' U L' U' L U' L2' (U' D) L' U L D'`, tags: ["Lefty"], },
            { setup: "U2", alg: `L2 F2' L' U2' L' U2 L F' (L' U' L U) L F' L2'`, tags: ["Lefty"], },
        ]
    },
    Gb: {
        name: 'Gb',
        algs: [
            { alg: `L' U' L (U D') L2' U L' U L U' L U' L2' D`, tags: ["Lefty"], },
        ]
    },
    Gc: {
        name: 'Gc',
        algs: [
            { alg: `L2' U' L U' L U L' U L2 (U D') L U' L' D`, tags: ["Lefty"], },
        ]
    },
    Gd: {
        name: 'Gd',
        algs: [
            { alg: `L U L' (U' D) L2' U' L U' L' U L' U L2 D'`, tags: ["Lefty"], },
            { setup: "U2", alg: `R U R' (U' D) R2 U' R U' R' U R' U R2 D'`, },
        ]
    },
    Ja: {
        name: 'Ja',
        algs: [
            { alg: `L' U' L F L' U' L U L F' L2' U L`, tags: ["Lefty"], },
            { setup: "U'", alg: `L' U' L2 F L' U' L' U L F' L' U L`, tags: ["Lefty"], },
            { setup: "U2", alg: `(x R2') F R F' R U2' r' U r U2' x'`, },
            { setup: "U2", alg: `R2 U' R2 D R2 U' R2 U R2 (U D') R2`, tags: ["Swag"], },
        ]
    },
    Jb: {
        name: 'Jb',
        altNames: ["L"],
        algs: [
            { alg: `R U R' F' R U R' U' R' F R2 U' R'`, },
            { setup: "U", alg: `R U R2' F' R U R U' R' F R U' R'`, },
            { setup: "U'", alg: `z' D L' U L2 D' L D L2' (U' D') z`, tags: ["Lefty"], },
            { setup: "U2", alg: `L U2 L' U' L U2 R' U L' U' R`, tags: ["OH", "Lefty"], },
        ]
    },
    Ra: {
        name: 'Ra',
        algs: [
            { alg: `L U2' L D L' U L D' L' U' L' U L U L'`, tags: ["Lefty"], },
            { alg: `L U2 L' U2 L F' L' U' L U L F L2'`, tags: ["OH", "Lefty"] },
            { setup: "U'", alg: `L2 F' L' U' L' U L F L' U2 L U2' L'`, tags: ["Lefty"], },
            { setup: "U'", alg: `L U' L' U' L U L D L' U' L D' L' U2 L'`, tags: ["Lefty"], },
        ]
    },
    Rb: {
        name: 'Rb',
        algs: [
            { alg: `L' U L U L' U' L U' L D L' U L D' L2' U' L`, tags: ["Lefty"], },
            { alg: `L' U L U L' U' L' D' L U L' D L U2' L`, tags: ["OH", "Lefty"], },
        ]
    },
    F: {
        name: 'F',
        algs: [
            { setup: "U2", alg: `L U F (L' U' L U L F' L2' U L U L' U') L U' L'`, tags: ["Lefty"], },
            { alg: `R' F R f' R' F R2 U R' U' R' F' R2 U R' S` },
            { setup: "U'", alg: `(L' U' L U) L U' L' U2 (R L U' L' U R') U L' U L`, tags: ["OH", "Lefty"], },
            { setup: "U'", alg: `R' U R  U' R2' F' U' F U R F R' F' R2`, tags: ["Swag"] },
        ]
    },
    T: {
        name: 'T',
        algs: [
            { alg: `L' U' L U L F' L2' U L U L' U' L F`, tags: ["Lefty"], },
            { alg: `R2 U R2 U' R2 U' D R2 U' R2 U R2 D'`, tags: ["Swag"], },
        ]
    },
    Na: {
        name: 'Na',
        algs: [
            { alg: `F' R U R' U' R' F R2 F U' R' U' R U F' R'`, },
            { alg: "L U' L' U L F U F' L' U' L  F' L F L' U L'", tags: ["OH", "Lefty"] },
            { alg: `(L U' R U2 L' U R') (L U' R U2 L' U R')`, tags: ["OH"], },
        ]
    },
    Nb: {
        name: 'Nb',
        algs: [
            { alg: `l D l' U2 l D' l' U l D l' U' l D' l' U' l D l' U' l D' l'`, tags: ["Lefty"], },
            { alg: `R' U R U' R' F' U' F R U R'  F R' F' R U' R`, },
            { alg: `L' F' U L U' L' U' F L2 F L' U' L' U L F'`, tags: ["Lefty"], },
            { alg: `F L' U' L U L F' L2 F' U L U L' U' F L`, tags: ["OH", "Lefty"], },
            { alg: `(L' U R' U2' L U' R) (L' U R' U2' L U' R)`, tags: ["OH", "Lefty"], },
        ]
    },
    E: {
        name: 'E',
        algs: [
            { alg: `(r' U L D') (L' U' L D) (L' U' L D') (L' U L D) x`, tags: ["Lefty"], },
            { alg: `L' U' L U' L U L' F L' U' L U L F' L2' U L2 U' L'`, tags: ["OH", "Lefty"], note: "megaminx CP transfer" },
    
            { alg: `L2 D (L U L' D') (L U L' D) (L U' L' D') (L' U' L')`, tags: ["Lefty"], },
        ]
    },
    V: {
        name: 'V',
        algs: [
            { alg: `L U' L U L' D L D' L (U' D) L2' U L2 D' L2'`, tags: ["Lefty"], },
            { setup: "U2", alg: `z' D' L U L' D L D' L U' L' D L2' U L2' U' z`, tags: ["OH", "Lefty"], },
            { alg: `L U' L' U L f U L' U2 L U L' U L f' L'`, tags: ["Lefty"], },
            { alg: `L U' L U y' L F L2' U L U' L F' L' F'`, tags: ["Lefty"], },
            { alg: `R' U R U' x' U [ANTISUNE] U2' [SEXY] x`, }, // use triggers
    
        ]
    },
    Y: {
        name: 'Y',
        algs: [
            { alg: `F' L' U L U L' U' L F L' U' L U L F' L' F`, tags: ["Lefty"], },
            { setup: "U'", alg: `F R U' R' U' R U R' F' R U R' U' R' F R F'`, },
        ]
    }
}

const Options: IOptions = {
    name: "PLL",
    puzzle: '3x3x3',
    imgSource: "vc",
    twistyplayerparams: {
        stage: 'PLL',
        cameraX: -30
    },
}

const PLLGroupedByLetter: IAlgSetV2 = {
    options: Options,
    sets: [
        {
            name: "",
            children: Object.assign([_.Aa, _.Ab, _.E, _.F,
                _.Ga, _.Gb, _.Gc, _.Gd,  
                _.H, _.Ja, _.Jb, _.Na, _.Nb, 
                _.Ra, _.Rb, _.T, _.Ua, _.Ub, _.V, _.Y])
        },
    ]
}

const PLLGroupedBySet: IAlgSetV2 = {
    options: Options,
    sets: [
        {
            name: "EPLL",
            children: Object.assign([_.H, _.Ua, _.Ub, _.Z])
        },
        {
            name: "Adj",
            children: Object.assign([_.Aa, _.Ab, _.Ga, _.Gb, _.Gc, _.Gd, _.Ja, _.Jb, _.Ra, _.Rb, _.F, _.T]),
        },
        {
            name: "Diag",
            children: Object.assign([_.E, _.Na, _.Nb, _.V, _.Y])
        }
    ]
}

export { PLLGroupedByLetter, PLLGroupedBySet }