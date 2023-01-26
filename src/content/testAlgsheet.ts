// TODO: make some flag to bypass algvis or us a different alg than display? 
// ex where I say fruruf [ZBLL] or the pll parity cases
// TODO: filter out [U] setup moves like I do in my spreadsheet
// atm this is just proof of concept

import type { IAlgSet } from "../scripts/types"

const testAlgSet: IAlgSet = {
    data: {
        name: "Anti-TEG2+",
        imgSource: "vc",
        vcparams: {
            stage: 'vh',
            view: 'trans',
            rot: "y'",
            puzzle: 3,
        },
        twistyplayerparams: {
            stage: 'ZBLS',
            rot: '',
        },
    },
    sets: [
        {
            name: `F2L1`,
            cases: [
                { name: 'S', algs: [`[U] R U' R'`,] },
                { name: 'Dot', algs: [`R' F R2 U' R' F' S r' F r S'`, `[U2] M' U' R U' r' U2 M' U' M`,] },
                { name: 'L1', algs: [`R' F R F'`, `M' U R U' r'`,] },
                { name: 'L2', algs: [`[U] R B U' B' R'`,] },
                { name: 'Line', algs: [`[U] F' L' U' L F`, `R' U' F U R U' F'`,] },
                { name: 'i1', algs: [`[U] R U R' U2 R' F R F'`,] },
                { name: 'i2', algs: [`[U2] R U' R' U' R' F R F' `, `R' F R2 U R' U' F' `,] },
                { name: 'i3', algs: [`U S' R U' R' S`,] },

            ],
            sets: [
                {
                    name: `TESTMESH`,
                    cases: [
                        { name: 'S', algs: [`[U] R U' R'`,] },
                    ],
                },
            ]
        },
        {
            name: `F2L2`,
            cases: [
                { name: 'S', algs: [`[U'] F' U F`,] },
                { name: 'Dot', algs: [`r U r' U2 M' U M`,] },
                { name: 'L1', algs: [`[U'] r U' r' U r U r'`,] },
                { name: 'L2', algs: [`F R' F' R`,] },
                { name: 'Line', algs: [`[U'] R B U B' R'`, `F U R' U' F' U R`,] },
                { name: 'i1', algs: [`[U] R' D' r U' r' D R`,] },
                { name: 'i2', algs: [`[U'] R U R2' D' r U r' D R`,] },
                { name: 'i3', algs: [`[U'] R' D' r U r' D R`,] },

            ],
        },
        {
            name: `F2L4`,
            cases: [
                { name: 'S', algs: [`R U R'`,] },
                { name: 'Dot', algs: [`R' D' r U r' D R2 U R'`,] },
                { name: 'L1', algs: [`[U'] F' U2 F U R U' R'`,] },
                { name: 'L2', algs: [`R U2' R' U' R' F R F'`,] },
                { name: 'Line', algs: [`U2 L F' L' U' L F L'`,] },
                { name: 'i1', algs: [`S' R U R' S`,] },
                { name: 'i2', algs: [`R U2 B U' B' R'`,] },
                { name: 'i3', algs: [`R U' R2' F R F' R U2' R'`,] },

            ],
        },
        {
            name: `F2L3`,
            cases: [
                { name: 'S', algs: [`F' U' F`,] },
                { name: 'Dot', algs: [`[U2] S' R U' R' S U' R' F R F'`,] },
                { name: 'L1', algs: [`[U2] S' R U' R' S R U' R'`, `[U] R U2 R' U' F' U F`,] },
                { name: 'L2', algs: [`S U R U' R' S'`,] },
                { name: 'Line', algs: [`[U'] R' F R U R U' R2' F' R`,] },
                { name: 'i1', algs: [`[y'] S' R' U' R S [y]`, `F' U' L' U' L U F`,] },
                { name: 'i2', algs: [`[U] R2 D r' U' r D' R2'`,] },
                { name: 'i3', algs: [`[U2] R' D' r U' r' D R2 U' R'`,] },

            ],
        },

    ]
}

export { testAlgSet }