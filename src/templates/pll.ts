import type { IAlgSet } from "../scripts/types"

const algSet: IAlgSet = {
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
            name: '',
            sets: [
                {
                    name: 'EPLL',
                    sets: [
                        {
                            name: 'U',
                            cases: [
                                { name: 'Ua', algs: [`[U'] R2 U' S' U2' S U' R2'`, `[U2] R U R' U R' U' R2 U' R' U R' U R`, `R U' R U R U R U' R' U' R2`,] },
                                { name: 'Ub', algs: [`[U2] R' U R' U' R3 U' R' U R U R2'`, `[U'] R2 U' S R2' S' R2 U R2'`, `R2 U R U R' U' R' U' R' U R'`,] },
                            ],
                        },
                    ],
                    cases: [
                        { name: 'H', algs: [`M2' U' M2' U2' M2' U' M2'`,] },
                        { name: 'Z', algs: [`[U] M' U' (M2' U') (M2' U') M' U2' M2'`, `(M2' U') (M2' U') M' U2' M2' U2' M'`,] },
                    ]
                },
                {
                    name: 'Adj',
                    sets: [
                        {
                            name: 'A',
                            cases: [
                                { name: 'Aa', algs: [`r' U L' D2 L U' L' D2 L2 x`, `[U] L r D2 L' U' L D2 L' U L' x'`,] },
                                { name: 'Ab', algs: [`r U' L D2 L' U L D2 L2 x' `, `[U'] L' r' D2 L U L' D2 L U' L x`,] },
                            ],
                        },
                        {
                            name: 'G',
                            cases: [
                                { name: 'Ga', algs: [`L2 U L' U L' U' L U' L2' (U' D) L' U L D'`, `[U2] L2 F2' L' U2' L' U2 L F' (L' U' L U) L F' L2'`,] },
                                { name: 'Gb', algs: [`L' U' L U D' L2' U L' U L U' L U' L2' D`,] },
                                { name: 'Gc', algs: [`L2' U' L U' L U L' U L2 U D' L U' L' D`,] },
                                { name: 'Gd', algs: [`L U L' U' D L2' U' L U' L' U L' U L2 D'`, `[U2] R U R' U' D R2 U' R U' R' U R' U R2 D'`,] },
                            ],
                        },
                        {
                            name: 'J',
                            cases: [
                                { name: 'Ja', algs: [`L' U' L F L' U' L U L F' L2' U L`, `[U'] L' U' L2 F L' U' L' U L F' L' U L`, `[U2] x R2' F R F' R U2' r' U r U2' x'`,] },
                                { name: 'Jb', algs: [`R U R' F' R U R' U' R' F R2 U' R'`, `[U] R U R2' F' R U R U' R' F R U' R'`, `[U'] z' D L' U L2 D' L D L2' (U' D') z`,] },
                            ],
                        },
                        {
                            name: 'N',
                            cases: [
                                { name: 'Na', algs: [`F' R U R' U' R' F R2 F U' R' U' R U F' R'`,] },
                                { name: 'Nb', algs: [`L' F' U L U' L' U' F L2 F L' U' L' U L F'`, `(l D' l' U2') (l D' l' U2') (l D' l' U2') (l D' l' U2') (l D' l') `, `R' U R U' R' F' U' F R U R'  F R' F' R U' R`,] },
                            ],
                        },
                        {
                            name: 'R',
                            cases: [
                                { name: 'Ra', algs: [`L U2' L D L' U L D' L' U' L' U L U L'`, `L U' L' U' L U L D L' U' L D' L' U2 L'`, `[U'] L2 F' L' U' L' U L F L' U2 L U2' L'`,] },
                                { name: 'Rb', algs: [`L' U L U L' U' L U' L D L' U L D' L2' U' L`, `L' U L U L' U' L' D' L U L' D L U2' L`,] },
                            ],
                        },
                    ],
                    cases: [
                        { name: 'F', algs: [`[U2] L U F (L' U' L U L F' L2' U L U L' U') L U' L'`, `R' F R f' R' F R2 U R' U' R' F' R2 U R' S`, `[U'] R' U R  U' R2' F' U' F U R F R' F' R2`,] },
                        { name: 'T', algs: [`L' U' L U L F' L2' U L U L' U' L F`,] },
                    ],
                },
                {
                    name: 'Diag',
                    cases: [
                        { name: 'E', algs: [`(r' U L D') (L' U' L D) (L' U' L D') (L' U L D) x`, `L2 D (L U L' D') (L U L' D) (L U' L' D') (L' U' L')`,] },
                        { name: 'V', algs: [`L U' L U L' D L D' L (U' D) L2' U L2 D' L2'`,] },
                        { name: 'Y', algs: [`F' L' U L U L' U' L F L' U' L U L F' L' F`, `[U'] F R U' R' U' R U R' F' R U R' U' R' F R F'`,] },
                    ]
                },
            ],
        },
    ],
}

export { algSet }