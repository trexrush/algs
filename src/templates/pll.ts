import type { IAlgSetV2 } from "../scripts/types"

const algSet: IAlgSetV2 = {
    data: {
        name: "PLL",
        imgSource: "vc",
        vcparams: {
            puzzle: 3,
        },
        twistyplayerparams: {
            stage: 'PLL',
            cameraX: -30
        },
    },
    sets: [
        {
            type: 'set',
            name: 'EPLL',
            children: [
                {
                    type: 'set',
                    sort: 2,
                    name: 'U',
                    children: [
                        {
                            type: 'case',
                            name: 'Ua',
                            algs: [
                                { setup: "U2", alg: `R U R' U R' U' R2 U' R' U R' U R`, },
                                { setup: "U'", alg: `R2 U' S' U2' S U' R2'` },
                                { alg: `R U' R U R U R U' R' U' R2`, },
                            ]
                        },
                        {
                            type: 'case',
                            name: 'Ub',
                            algs: [
                                { setup: "U2", alg: `R' U R' U' R3 U' R' U R U R2'`, },
                                { setup: "U'", alg: `R2 U' S R2' S' R2 U R2'`, },
                                { alg: `R2 U R U R' U' R' U' R' U R'`, },
                            ]
                        },
                    ],
                },
                {
                    type: 'case',
                    sort: 1,
                    name: 'H',
                    algs: [
                        { alg: `M2' U' M2' U2' M2' U' M2'`, },
                        { alg: `R2 S2' R2 U R2 S2' R2`, tags: ["Swag"], },
                    ]
                },
                {
                    type: 'case',
                    sort: 3,
                    name: 'Z',
                    algs: [
                        { setup: "U", alg: `M' U' (M2' U') (M2' U') M' U2' M2'`, },
                        { alg: `(M2' U') (M2' U') M' U2' M2' U2' M'`, },
                        { setup: "U", alg: `L U L' U L' U' L' U L U' L' U' L2' U L`, tags: ["OH"], },
                        { setup: "U", alg: `S M2' S' u' M2' u M2'`, tags: ["Swag"], },
                    ]
                },
            ]
        },
        {
            type: 'set',
            name: 'Adj',
            children: [
                {
                    type: 'set',
                    sort: 1,
                    name: 'A',
                    children: [
                        {
                            type: 'case',
                            name: 'Aa',
                            algs: [
                                { alg: `r' U L' D2 L U' L' D2 L2 x`, },
                                { setup: "U", alg: `(L r) D2 L' U' L D2 L' U (L' x')`, },
                            ]
                        },
                        {
                            type: 'case',
                            name: 'Ab',
                            algs: [
                                { alg: `r U' L D2 L' U L D2 L2 x' `, },
                                { setup: "U'", alg: `(L' r') D2 L U L' D2 L U' (L x)`, },
                            ]
                        },
                    ],
                },
                {
                    type: 'set',
                    sort: 3,
                    name: 'G',
                    children: [
                        {
                            type: 'case',
                            name: 'Ga',
                            algs: [
                                { alg: `L2 U L' U L' U' L U' L2' (U' D) L' U L D'`, },
                                { setup: "U2", alg: `L2 F2' L' U2' L' U2 L F' (L' U' L U) L F' L2'`, },
                            ]
                        },
                        {
                            type: 'case',
                            name: 'Gb',
                            algs: [
                                { alg: `L' U' L (U D') L2' U L' U L U' L U' L2' D`, },
                            ]
                        },
                        {
                            type: 'case',
                            name: 'Gc',
                            algs: [
                                { alg: `L2' U' L U' L U L' U L2 (U D') L U' L' D`, },
                            ]
                        },
                        {
                            type: 'case',
                            name: 'Gd',
                            algs: [
                                { alg: `L U L' (U' D) L2' U' L U' L' U L' U L2 D'`, },
                                { setup: "U2", alg: `R U R' (U' D) R2 U' R U' R' U R' U R2 D'`, },
                            ]
                        },
                    ],
                },
                {
                    type: 'set',
                    sort: 4,
                    name: 'J',
                    children: [
                        {
                            type: 'case',
                            name: 'Ja',
                            algs: [
                                { alg: `L' U' L F L' U' L U L F' L2' U L`, },
                                { setup: "U'", alg: `L' U' L2 F L' U' L' U L F' L' U L`, },
                                { setup: "U2", alg: `(x R2') F R F' R U2' r' U r U2' x'`, },
                                { setup: "U2", alg: `R2 U' R2 D R2 U' R2 U R2 (U D') R2`, tags: ["Swag"], },
                            ]
                        },
                        {
                            type: 'case',
                            name: 'Jb',
                            altNames: ["L"],
                            algs: [
                                { alg: `R U R' F' R U R' U' R' F R2 U' R'`, },
                                { setup: "U", alg: `R U R2' F' R U R U' R' F R U' R'`, },
                                { setup: "U'", alg: `z' D L' U L2 D' L D L2' (U' D') z`, },
                                { setup: "U2", alg: `L U2 L' U' L U2 R' U L' U' R`, tags: ["OH"], },
                            ]
                        },
                    ],
                },
                {
                    type: 'set',
                    sort: 5,
                    name: 'R',
                    children: [
                        {
                            type: 'case',
                            name: 'Ra',
                            algs: [
                                { alg: `L U2' L D L' U L D' L' U' L' U L U L'`, },
                                { alg: `L U2 L' U2 L F' L' U' L U L F L2'`, tags: ["OH"] },
                                { setup: "U'", alg: `L2 F' L' U' L' U L F L' U2 L U2' L'`, },
                                { setup: "U'", alg: `L U' L' U' L U L D L' U' L D' L' U2 L'`, },
                            ]
                        },
                        {
                            type: 'case',
                            name: 'Rb',
                            algs: [
                                { alg: `L' U L U L' U' L U' L D L' U L D' L2' U' L`, },
                                { alg: `L' U L U L' U' L' D' L U L' D L U2' L`, tags: ["OH"], },
                            ]
                        },
                    ],
                },
                {
                    type: 'case',
                    sort: 2,
                    name: 'F',
                    algs: [
                        { setup: "U2", alg: `L U F (L' U' L U L F' L2' U L U L' U') L U' L'`, },
                        { alg: `R' F R f' R' F R2 U R' U' R' F' R2 U R' S` },
                        { setup: "U'", alg: `(L' U' L U) L U' L' U2 (R L U' L' U R') U L' U L`, tags: ["OH"], },
                        { setup: "U'", alg: `R' U R  U' R2' F' U' F U R F R' F' R2`, tags: ["Swag"] },

                    ]
                },
                {
                    type: 'case',
                    sort: 6,
                    name: 'T',
                    algs: [
                        { alg: `L' U' L U L F' L2' U L U L' U' L F`, },
                    ]
                },
            ],
        },
        {
            type: 'set',
            name: 'Diag',
            children: [
                {
                    type: 'set',
                    sort: 2,
                    name: 'N',
                    children: [
                        {
                            type: 'case',
                            name: 'Na',
                            algs: [
                                { alg: `F' R U R' U' R' F R2 F U' R' U' R U F' R'`, },
                                { alg: "L U' L' U L F U F' L' U' L  F' L F L' U L'", tags: ["OH"] },
                                { alg: `(L U' R U2 L' U R') (L U' R U2 L' U R')`, tags: ["OH"], },
                            ]
                        },
                        {
                            type: 'case',
                            name: 'Nb',
                            algs: [
                                { alg: `l D l' U2 l D' l' U l D l' U' l D' l' U' l D l' U' l D' l'`, },
                                { alg: `R' U R U' R' F' U' F R U R'  F R' F' R U' R`, },
                                { alg: `L' F' U L U' L' U' F L2 F L' U' L' U L F'`, },
                                { alg: `F L' U' L U L F' L2 F' U L U L' U' F L`, tags: ["OH"], },
                                { alg: `(L' U R' U2' L U' R) (L' U R' U2' L U' R)`, tags: ["OH"], },
                            ]
                        },
                    ],
                },
                {
                    type: 'case',
                    sort: 1,
                    name: 'E',
                    algs: [
                        { alg: `(r' U L D') (L' U' L D) (L' U' L D') (L' U L D) x`, },
                        { alg: `L' U' L U' L U L' F L' U' L U L F' L2' U L2 U' L'`, tags: ["OH"], note: "megaminx CP transfer" },

                        { alg: `L2 D (L U L' D') (L U L' D) (L U' L' D') (L' U' L')`, },
                    ]
                },
                {
                    type: 'case',
                    sort: 3,
                    name: 'V',
                    algs: [
                        { alg: `L U' L U L' D L D' L (U' D) L2' U L2 D' L2'`, },
                        { setup: "U2", alg: `z' D' L U L' D L D' L U' L' D L2' U L2' U' z`, tags: ["OH"], },
                        { alg: `L U' L' U L f U L' U2 L U L' U L f' L'`, tags: ["Lefty"], },
                        { alg: `L U' L U y' L F L2' U L U' L F' L' F'`, tags: ["Lefty"], },
                        { alg: `R' U R U' x' U R U2 R' U' R U' R' U2 R U R' U' x`, }, // use triggers

                    ]
                },
                {
                    type: 'case',
                    sort: 4,
                    name: 'Y',
                    algs: [
                        { alg: `F' L' U L U L' U' L F L' U' L U L F' L' F`, tags: ["Lefty"], },
                        { setup: "U'", alg: `F R U' R' U' R U R' F' R U R' U' R' F R F'`, },
                    ]
                },
            ]
        },
    ],
}

export { algSet }