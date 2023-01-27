import type { IAlgSet } from "../scripts/types"

const algSet: IAlgSet = {
    data: {
        name: "ZBLS",
        imgSource: "vc",
        vcparams: {
            stage: 'vh',
            view: 'trans',
            rot: "y'",
        },
        twistyplayerparams: {
            stage: 'ZBLS',
        },
    },
    sets: [
        {
            name: `VHLS`,
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

            ],
        },
        {
            name: `F2L5`,
            cases: [
                { name: 'S', algs: [`[U'] R U R' U2 R U' R'`,] },
                { name: 'Dot', algs: [`[U2] R2 D r' U' r D' R' U' R'`,] },
                { name: 'L1', algs: [`R' D' R U R' D F R F' `,] },

            ],
        },
        {
            name: `F2L6`,
            cases: [
                { name: 'S', algs: [`[y'] U R' U' R U R' U2' R [y]`,] },
                { name: 'L2', algs: [`[U'] r U' R' U R U r'`,] },
                { name: 'i3', algs: [`R2 D r' U' r D' R' U R'`,] },

            ],
        },
        {
            name: `F2L7`,
            cases: [
                { name: 'S', algs: [`[U'] R U2 R' U2 R U' R' `,] },
                { name: 'L2', algs: [`R' D' R U2 R' D F R F'`,] },

            ],
        },
        {
            name: `F2L8`,
            cases: [
                { name: 'S', algs: [`[y'] U R' U2 R U2 R' U R [y]`,] },

            ],
        },
        {
            name: `F2L10`,
            cases: [
                { name: 'S', algs: [`[U2] R U' R' U' R U R'`,] },

            ],
        },
        {
            name: `F2L9`,
            cases: [
                { name: 'S', algs: [`R' D' R U' R' D R F' U' F`,] },

            ],
        },
        {
            name: `F2L12`,
            cases: [
                { name: 'S', algs: [`R' D' R U2 R' D R2 U R'`,] },

            ],
        },
        {
            name: `F2L11`,
            cases: [
                { name: 'S', algs: [`R U2' R' U R U R' F' U' F`,] },

            ],
        },
        {
            name: `F2L14`,
            cases: [
                { name: 'S', algs: [`[U'] R U' R' U R U R'`,] },

            ],
        },
        {
            name: `F2L13`,
            cases: [
                { name: 'S', algs: [`R' D' R U R' D R F' U' F`,] },
                { name: 'i2', algs: [`R' F R F' U' R' F R F' R U R'`,] },

            ],
        },
        {
            name: `F2L15`,
            cases: [
                { name: 'S', algs: [`R' D' R U' R' D R U R U' R'`,] },
                { name: 'L1', algs: [`[U] R' F R F' U R U R'`,] },
                { name: 'L2', algs: [`R' D' R U' R' D F R F'`,] },
                { name: 'i2', algs: [`R U R' U2 R U' R2 F R F'`,] },

            ],
        },
        {
            name: `F2L16`,
            cases: [
                { name: 'S', algs: [`[U] F R' F' R2 U' R' U R' F R F'`,] },
                { name: 'L1', algs: [`R U' R' U2 F' U' F`,] },
                { name: 'L2', algs: [`R' D' R U R' D R F R' F' R`,] },

            ],
        },
        {
            name: `F2L17`,
            cases: [
                { name: 'S', algs: [`R U2 R' U' R U R'`,] },

            ],
        },
        {
            name: `F2L18`,
            cases: [
                { name: 'S', algs: [`R' F R F' R U' R' U R U' R'`,] },

            ],
        },
        {
            name: `F2L19`,
            cases: [
                { name: 'S', algs: [`[U] R U2' R' U R U' R'`,] },
                { name: 'i3', algs: [`[U] R U2 R2 F R F' `,] },

            ],
        },
        {
            name: `F2L20`,
            cases: [
                { name: 'S', algs: [`[y'] U' R' U2 R U' R' U R [y]`,] },
                { name: 'i2', algs: [`r U' r' U2' M' U' M U r U r'`,] },

            ],
        },
        {
            name: `F2L21`,
            cases: [
                { name: 'S', algs: [`[U2] R U R' U R U' R'`,] },
                { name: 'i1', algs: [`r U' R' U2 R U r' `,] },

            ],
        },
        {
            name: `F2L22`,
            cases: [
                { name: 'S', algs: [`[U2] R' F R F' R U R' U R U' R' `,] },
                { name: 'i2', algs: [`[U'] F' L' U' L U' F`,] },

            ],
        },
        {
            name: `F2L23`,
            cases: [
                { name: 'S', algs: [`[U] R U' R' U' R U' R' U R U' R'`, `R U' R' U' R' D' R U' R' D R`,] },
                { name: 'Line', algs: [`[U2] r U' r' U r U r' R' F R F'`,] },
                { name: 'i1', algs: [`[U2] r U' r' U r U r' U R U' R'`,] },

            ],
        },
        {
            name: `F2L24`,
            cases: [
                { name: 'S', algs: [`U' R U R2' F R F' R U' R'`,] },
                { name: 'L1', algs: [`F U R U' R' F' R U' R'`,] },
                { name: 'Line', algs: [`R U' R' U r U' R' U R U r'  `,] },

            ],
        },
        {
            name: `F2L25`,
            cases: [
                { name: 'S', algs: [`[U'] F' R U R' U' R' F R`, `[U] R U' R' U R' D' R U' R' D R`,] },
                { name: 'Dot', algs: [`[U] R2 D r' U r D' R' U' R'`,] },
                { name: 'L1', algs: [`[U'] F' U F U R U' R'`,] },
                { name: 'L2', algs: [`[U'] F' U' F U R U R'`,] },
                { name: 'Line', algs: [`[U'] R' F R F' R U R'`,] },
                { name: 'i1', algs: [`r U r' U2 r U R' U2 R U' r'`,] },
                { name: 'i2', algs: [`B' R2 U' R' U R2 B`,] },
                { name: 'i3', algs: [`r' U' R' U' R' U R U r`,] },

            ],
        },
        {
            name: `F2L26`,
            cases: [
                { name: 'S', algs: [`L E' L' U L E L'`,] },
                { name: 'Line', algs: [`[U] R U' R' F R' F' R`,] },

            ],
        },
        {
            name: `F2L27`,
            cases: [
                { name: 'S', algs: [`R U' R' U R U' R'`,] },
                { name: 'i1', algs: [`R U' R2 F R F'`,] },

            ],
        },
        {
            name: `F2L28`,
            cases: [
                { name: 'S', algs: [`[y'] R' U R U' R' U R [y]`, `r U' r' U2 r U r' R' F R F'`,] },

            ],
        },
        {
            name: `F2L30`,
            cases: [
                { name: 'S', algs: [`R U R' U' R U R'`,] },

            ],
        },
        {
            name: `F2L29`,
            cases: [
                { name: 'S', algs: [`R' F R F' U R U' R'`,] },
                { name: 'i2', algs: [`U' R U R' U' r U' r' U2 r U r'`,] },

            ],
        },
        {
            name: `F2L32`,
            cases: [
                { name: 'S', algs: [`[U] R U' R' U R U' R' U R U' R'`,] },
                { name: 'Dot', algs: [`[U2] r U2' r' U2 r U' r' U2 r U2' r' `, `[U2] R' F R F' U2' r U' r' U2' r U r' `,] },
                { name: 'Lne', algs: [`[U'] F R' F' R U' R U R'`,] },
                { name: 'Lnw', algs: [`[U'] R U R' U' R U R2 F R F'`, `F R' F' R2 U R' U' R U R'`,] },
                { name: 'Lse', algs: [`[U] R' F R F' U F' U' F `, `[U2] F' U r' F' r U' F`,] },
                { name: 'Lsw', algs: [`[U2] F R' F' R2 U R' U R U' R'`,] },
                { name: 'V Line', algs: [`U' F' U L' U2 L U' F`,] },
                { name: 'H Line', algs: [`[U] R U' R' U R U' R2 F R F' `,] },

            ],
        },
        {
            name: `F2L31`,
            cases: [
                { name: '3eF', algs: [`R U' R' U F' U F`,] },
                { name: '3eL', algs: [`[U'] R' F R F' R U' R' `,] },

            ],
        },
        {
            name: `F2L33`,
            cases: [
                { name: 'S', algs: [`[U'] R U' R' U2 R U' R'`,] },

            ],
        },
        {
            name: `F2L35`,
            cases: [
                { name: '3eF', algs: [`[U2] R U R' U' F' U F`,] },
                { name: '3eB', algs: [`[U2] R U' R' U' F' U' F`,] },
                { name: '3eR', algs: [`[U'] R U R' U F' U' F`,] },
                { name: '3eL', algs: [`[U2] R U R' F R' F' R`,] },

            ],
        },
        {
            name: `F2L34`,
            cases: [
                { name: 'S', algs: [`[U] R' D' R U' R' D R`,] },

            ],
        },
        {
            name: `F2L36`,
            cases: [
                { name: '3eF', algs: [`[U] F' U' F U' R U R'`,] },

            ],
        },
        {
            name: `F2L38`,
            cases: [
                { name: 'S', algs: [`R' D' R U' R' D R2 U' R' U2 R U' R'`,] },

            ],
        },
        {
            name: `F2L37`,
            cases: [
                { name: '3e', algs: [`[U] R U R' U2' R U2' R' U F' U' F`, `F U R' F' R S R' F R S' U M' U2 M F'`,] },
                { name: '1e', algs: [`R' F R F' U F' U2' F U' R U R' `,] },

            ],
        },
        {
            name: `F2L39`,
            cases: [
                { name: 'S', algs: [`R U2' R' U R U' R' U R U R'`,] },

            ],
        },
        {
            name: `F2L40`,
            cases: [
                { name: '3e', algs: [`R F U R U' R' F' U' R'`,] },
                { name: '1e', algs: [`r U' r' U2' r U r' R U R' `,] },

            ],
        },
    ]
}

export { algSet }