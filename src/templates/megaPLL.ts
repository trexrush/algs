import type { IAlgSet } from "../scripts/types"

const algSet: IAlgSet = {
    data: {
        name: "Megaminx PLL (WIP)",
        imgSource: "cubingjs",
        vcparams: {
            colorScheme: '222222-5dc9ea-ffffa5-ff66d8-ffae0c-93ff0f',
            puzzle: "mega",
        },
        twistyplayerparams: {
            rot: 'x2 y3',
            puzzle: "megaminx",
            cameraX: -10,
            cameraY: 45,
            tempo: 3,
        },
    },
    sets: [
        {
            name: 'CP (4LLL)',
            sets: [
                {
                    name: 'A (3 Corner CP)',
                    cases: [
                        { name: 'A1+', algs: ["[U2] L F L' U' L' U L2 F' L' U' L F L' F'", "L U2 L F L' U' L' U L F' L' U' L U' L'"] },
                        { name: 'A1-', algs: ["[U2] F L F' L' U L F L2' U' L U L F' L'", "[U] L U L' U L F L' U' L U L F' L' U2' L'"] },
                        { name: 'A2+', algs: ["L U2' L F L' U' L' U L F' L' U' L U2' L'"] },
                        { name: 'A2-', algs: ["L U2 L' U L F L' U' L U L F' L' U2 L'"] },
                    ],
                },
                {
                    name: 'E (4 Corner CP)',
                    cases: [
                        { name: 'E1', algs: ["[U'] L' U' L U' L U L' F L' U' L U L F' L2' U L2 U' L'"], comment: "also a good OH E perm" },
                        { name: 'E2', algs: ["[U2'] dr' U L FL' L' U' L FL L' U' L FL' L' U dr F"], comment: "3x3 transfer (E perm)" },
                        { name: 'E3', algs: ["[U2] R L' U2' L U L' U' L U L' U' L U L' U L R'"] },
                    ],
                },
                {
                    name: 'K (5 corner CP)',
                    cases: [
                        { name: 'K1+', algs: ["[U2] L2' U2 L2 U L2' U' L2 U L2' U' L2 U L2' U2 L2"] },
                        { name: 'K1-', algs: ["[U2] L2 U2' L2' U' L2 U L2' U' L2 U L2' U' L2 U2' L2' "] },
                        { name: 'K2+', algs: ["[U2'] L2' U2 L2 U L2' U2 L U' L U L F' L2' U L U L' U' L F"] },
                        { name: 'K2-', algs: ["[U2'] L' U' L U2 L' U' L U2 L' U L U2 L' U2' L U L' U2' L"] },
                    ],
                },
                {
                    name: 'H (5 piece EP/CP)',
                    cases: [
                        { name: 'H1+', algs: ["L' U' L U' L U L2' U L U' L U' L' U' L' U' L U' L U L2' U L U' L U' L'"] },
                        { name: 'H1-', algs: ["L U L' U L' U' L2 U' L' U L' U L U L U L' U L' U' L2 U' L' U L' U L", "L' U2' L U2' L' U L U L' U2' L U' L F L' U' L' U L F'"] },
                        { name: 'H2+', algs: ["L2 U2 L2' U' L2 U' L2' y' L2' U' L2 U' L2' U2 L2"] },
                        { name: 'H2-', algs: ["L2' U2' L2 U L2' U L2 y L2 U L2' U L2 U2' L2'"] },
                    ],
                },
            ]
        },
        // {
        //     name: 'U (3 edge EP)',
        //     cases: [
        //         { name: 'U1+', algs: [""] },
        //         { name: 'U1-', algs: [""] },
        //         { name: 'U2+', algs: [""] },
        //         { name: 'U2-', algs: [""] },
        //     ],
        // },
        // {
        //     name: 'Z (4 edge EP)',
        //     cases: [
        //         { name: 'Z1+', algs: [""] },
        //         { name: 'Z1-', algs: [""] },
        //         { name: 'Z2+', algs: [""] },
        //     ],
        // },
        // {
        //     name: 'Q (5 edge EP)',
        //     cases: [
        //         { name: 'Q1+', algs: [""] },
        //         { name: 'Q1-', algs: [""] },
        //         { name: 'Q2+', algs: [""] },
        //         { name: 'Q2-', algs: [""] },
        //     ],
        // },
        // {
        //     name: 'B (Double R block)',
        //     cases: [
        //         { name: 'B1+', algs: [""] },
        //         { name: 'B1-', algs: [""] },
        //         { name: 'B2+', algs: [""] },
        //         { name: 'B2-', algs: [""] },
        //     ],
        // },
        // {
        //     name: 'C (2 2x1s touching)',
        //     cases: [
        //         { name: 'C1+', algs: [""] },
        //         { name: 'C1-', algs: [""] },
        //         { name: 'C2+', algs: [""] },
        //         { name: 'C2-', algs: [""] },
        //         { name: 'C3+', algs: [""] },
        //         { name: 'C3-', algs: [""] },
        //         { name: 'C4+', algs: [""] },
        //         { name: 'C4-', algs: [""] },
        //         { name: 'C5+', algs: [""] },
        //         { name: 'C5-', algs: [""] },
        //         { name: 'C6+', algs: [""] },
        //         { name: 'C6-', algs: [""] },
        //     ],
        // },
        // {
        //         name: 'D (3x1 and 2x2)',
        //         cases: [
        //                 { name: 'D+', algs: [""] },
        //                 { name: 'D-', algs: [""] },
        //     ],
        // },
        {
            name: 'F (3x1 and 2x1(s))',
            cases: [
                { name: 'F1+', algs: ["[U2] L2' U2 L2 U L2' U2 L2"] },
                { name: 'F1-', algs: ["[U2] L2 U2' L2' U' L2 U2' L2'"] },
                //         { name: 'F2+', algs: [""] },
                //         { name: 'F2-', algs: [""] },
                //         { name: 'F3+', algs: [""] },
                //         { name: 'F3-', algs: [""] },
                //         { name: 'F4+', algs: [""] },
                //         { name: 'F4-', algs: [""] },
                //         { name: 'F5+', algs: [""] },
                //         { name: 'F5-', algs: [""] },
            ],
        },
        // {
        //         name: 'G (2x1 and HeadLights)',
        //         cases: [
        //                 { name: 'G1+', algs: [""] },
        //                 { name: 'G1-', algs: [""] },
        //                 { name: 'G2+', algs: [""] },
        //                 { name: 'G2-', algs: [""] },

        //             ],
        //         },

        //         {
        //                 name: 'I (2x1)',
        //                 cases: [
        //                         { name: 'I1+', algs: [""] },
        //         { name: 'I1-', algs: [""] },
        //         { name: 'I2+', algs: [""] },
        //         { name: 'I2-', algs: [""] },
        //         { name: 'I3+', algs: [""] },
        //         { name: 'I3-', algs: [""] },
        //         { name: 'I4+', algs: [""] },
        //         { name: 'I4-', algs: [""] },
        //         { name: 'I5+', algs: [""] },
        //         { name: 'I5-', algs: [""] },
        //         { name: 'I6+', algs: [""] },
        //         { name: 'I6-', algs: [""] },
        //     ],
        // },
        {
            name: 'J (J block)',
            cases: [
                { name: 'J1+', algs: ["[U'] F' U L F' L2' U L U L' U' L F L' U' L F"] },
                { name: 'J1-', algs: ["[U'] L' U' L F L' U' L U L F' L2' U L"], comment: "3x3 transfer (J perm)" },
                // { name: 'J2+', algs: [""] },
                // { name: 'J2-', algs: [""] },
                // { name: 'J3+', algs: [""] },
                // { name: 'J3-', algs: [""] },
            ],
        },

        // {
        //     name: 'L (Double headlights, no blocks)',
        //     cases: [
        //         { name: 'L1', algs: [""] },
        //         { name: 'L2', algs: [""] },
        //         { name: 'L3+', algs: [""] },
        //         { name: 'L3-', algs: [""] },
        //         { name: 'L4+', algs: [""] },
        //         { name: 'L4-', algs: [""] },
        //         { name: 'L5+', algs: [""] },
        //         { name: 'L5-', algs: [""] },
        //         { name: 'L6+', algs: [""] },
        //         { name: 'L6-', algs: [""] },
        //     ],
        // },
        // {
        //     name: 'M (2 3x1s)',
        //     cases: [
        //         { name: 'M', algs: [""] },
        //     ],
        // },
        {
            name: 'N (5 2x1s)',
            cases: [
                { name: 'N1+', algs: ["[U2'] L U2' L U2 L' U L U2 L' U2' L'"] },
                { name: 'N1-', algs: ["L' U2' L F L' U' L U L F' L2' U2 L"], comment: "3x3 transfer (J perm with U2 instead of U)" },
        //         { name: 'N2+', algs: [""] },
        //         { name: 'N2-', algs: [""] },
            ],
        },
        // {
        //     name: 'P (R block)',
        //     cases: [
        //         { name: 'P1+', algs: [""] },
        //         { name: 'P1-', algs: [""] },
        //         { name: 'P2+', algs: [""] },
        //         { name: 'P2-', algs: [""] },
        //         { name: 'P3+', algs: [""] },
        //         { name: 'P3-', algs: [""] },
        //         { name: 'P4+', algs: [""] },
        //         { name: 'P4-', algs: [""] },
        //     ],
        // },
        // {
        //     name: 'R (R block and 2x1)',
        //     cases: [
        //         { name: 'R1+', algs: [""] },
        //         { name: 'R1-', algs: [""] },
        //         { name: 'R2+', algs: [""] },
        //         { name: 'R2-', algs: [""] },
        //         { name: 'R3+', algs: [""] },
        //         { name: 'R3-', algs: [""] },
        //         { name: 'R4+', algs: [""] },
        //         { name: 'R4-', algs: [""] },
        //     ],
        // },
        // {
        //     name: 'S (2 2x1s, not touching)',
        //     cases: [
        //         { name: 'S1+', algs: [""] },
        //         { name: 'S1-', algs: [""] },
        //         { name: 'S2+', algs: [""] },
        //         { name: 'S2-', algs: [""] },
        //         { name: 'S3+', algs: [""] },
        //         { name: 'S3-', algs: [""] },
        //         { name: 'S4+', algs: [""] },
        //         { name: 'S4-', algs: [""] },
        //         { name: 'S5+', algs: [""] },
        //         { name: 'S5-', algs: [""] },
        //         { name: 'S6+', algs: [""] },
        //         { name: 'S6-', algs: [""] },
        //     ],
        // },
        {
            name: 'T (2,3 or 4 2x1s in these patterns:)',
            cases: [
                { name: 'T1', algs: ["[U] L' U' L U L F' L2' U L U L' U' L F"], comment: "3x3 transfer (T perm)" },
                { name: 'T2+', algs: ["[U2'] L2 F' L' U' L' U L F L' U2 L U2' L'"], comment: "3x3 transfer (LUF R perm)" },
                { name: 'T2-', algs: ["[U2'] L U2 L' U2' L F' L' U' L U L F L2'"], comment: "3x3 transfer (LUF R perm)" },
        //         { name: 'T3+', algs: [""] },
        //         { name: 'T3-', algs: [""] },
        //         { name: 'T4+', algs: [""] },
                { name: 'T4-', algs: ["[U2'] L' U' L F L' U' L U L F' L' U L F' L2' U L U L' U' L F"], comment: "3x3 transfer (J + T perm)" },
            ],
        },
        {
            name: 'V (2x2 and 2x1)',
            cases: [
                { name: 'V1+', algs: ["[U2] L' U L2 FL L' U' L FL' L' U L' U L U' L' U' L"], comment: "3x3 transfer (LUD R perm)" },
                // { name: 'V1-', algs: [""] },
                { name: 'V2+', algs: ["[U2] L' U L U L' U' L U' L FL L' U L FL' L2' U' L"], comment: "3x3 transfer (LUD R perm)" },
                // { name: 'V2-', algs: [""] },
                // { name: 'V3+', algs: [""] },
                // { name: 'V3-', algs: [""] },r
                // { name: 'V4+', algs: [""] },
                // { name: 'V4-', algs: [""] },
            ],
        },
        // {
        //     name: 'W (2 2x2s)',
        //     cases: [
        //         { name: 'W1+', algs: [""] },
        //     ],
        // },
        // {
        //     name: 'X (No blocks or headlights)',
        //     cases: [
        //         { name: 'X1', algs: [""] },
        //         { name: 'X2', algs: [""] },
        //         { name: 'X3', algs: [""] },
        //         { name: 'X4', algs: [""] },
        //         { name: 'X5+', algs: [""] },
        //         { name: 'X5-', algs: [""] },
        //         { name: 'X6+', algs: [""] },
        //         { name: 'X6-', algs: [""] },
        //         { name: 'X7+', algs: [""] },
        //         { name: 'X7-', algs: [""] },
        //     ],
        // },
        {
            name: 'Y (2 2x1s in Y pattern and other stuff)',
            cases: [
                { name: 'Y1+', algs: ["[U] F' L F L' U' L' U L F' L' U L U' L' U' L F"], comment: "3x3 transfer (Inverse of Y perm)" },
                { name: 'Y1-', algs: ["[U] F' L' U L U L' U' L F L' U' L U L F' L' F"], comment: "3x3 transfer (Y perm)" },
        //         { name: 'Y2+', algs: [""] },
        //         { name: 'Y2-', algs: [""] },
        //         { name: 'Y3+', algs: [""] },
        //         { name: 'Y3-', algs: [""] },
            ],
        },

    ],
}

export { algSet }