import type { IAlgSet } from "../scripts/types"

const algSet: IAlgSet = {
    data: {
        name: "Megaminx PLL",
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
            name: 'CPLL (4LLL)',
            sets: [
                {
                    name: 'A (3 Corner CP)',
                    cases: [
                        { name: 'A1+', algs: ["L F L' U' L' U L2 F' L' U' L F L' F'", "L U2 L F L' U' L' U L F' L' U' L U' L'"] }, // U2
                        { name: 'A1-', algs: ["F L F' L' U L F L2' U' L U L F' L'", "L U L' U L F L' U' L U L F' L' U2' L'"] }, // U2
                        { name: 'A2+', algs: ["L U2' L F L' U' L' U L F' L' U' L U2' L'"] },
                        { name: 'A2-', algs: ["L U2 L' U L F L' U' L U L F' L' U2 L'"] },
                    ],
                },
                {
                    name: 'E (4 Corner CP)',
                    cases: [
                        { name: 'E1', algs: ["L' U' L U' L U L' F L' U' L U L F' L2' U L2 U' L'"], comment: "also a good OH E perm" }, // U'
                        { name: 'E2', algs: ["dr' U L FL' L' U' L FL L' U' L FL' L' U dr F"], comment: "3x3 transfer (E perm)" }, // U2'
                        { name: 'E3', algs: ["R L' U2' L U L' U' L U L' U' L U L' U L R'"] }, // U2
                    ],
                },
                {
                    name: 'K (5 corner CP)',
                    cases: [
                        { name: 'K1+', algs: ["L2' U2 L2 U L2' U' L2 U L2' U' L2 U L2' U2 L2"], comment: "7 move EP x3" }, // U2
                        { name: 'K1-', algs: ["L2 U2' L2' U' L2 U L2' U' L2 U L2' U' L2 U2' L2' "], comment: "7 move EP x3" }, // U2
                        { name: 'K2+', algs: ["L2' U2 L2 U L2' U2 L U' L U L F' L2' U L U L' U' L F"] }, // U2'
                        { name: 'K2-', algs: ["L' U' L U2 L' U' L U2 L' U L U2 L' U2' L U L' U2' L"] }, // U2'
                    ],
                },
                {
                    name: 'H (5 piece EP/CP)',
                    cases: [
                        { name: 'H1+', algs: ["L' U' L U' L U L2' U L U' L U' L' U' L' U' L U' L U L2' U L U' L U' L'", "F L' U' L U L F' L' U L' U2 L U' L' U' L U2 L' U2 L"] },
                        { name: 'H1-', algs: ["L U L' U L' U' L2 U' L' U L' U L U L U L' U L' U' L2 U' L' U L' U L", "L' U2' L U2' L' U L U L' U2' L U' L F L' U' L' U L F'"] },
                        { name: 'H2+', algs: ["L2 U2 L2' U' L2 U' L2' y' L2' U' L2 U' L2' U2 L2", "L2' U L2 U L2' U L2 U L2' U L2 U2 L2' U L2 U L2' U L2 U L2' U L2"] },
                        { name: 'H2-', algs: ["L2' U2' L2 U L2' U L2 y L2 U L2' U L2 U2' L2'", "L2 U' L2' U' L2 U' L2' U' L2 U' L2' U2' L2 U' L2' U' L2 U' L2' U' L2 U' L2'"] },
                    ],
                },
            ]
        },
        {
            name: 'EPLL',
            sets: [
                {
                    name: 'U (3 edge EP)',
                    cases: [
                        { name: 'U1+', algs: ["L' U' L U' L U L2' U L U' L U' L'"] }, // U2
                        { name: 'U1-', algs: ["L U L' U L' U' L2 U' L' U L' U L"] }, // U2
                        { name: 'U2+', algs: ["L' U2' L U' L U L2' U L U' L U' L' U2 L' U L"], comment: "first move goes to the side of the edge where the L edge goes to" }, // U2
                        { name: 'U2-', algs: ["L U2 L' U L' U' L2 U' L' U L' U L U2' L U' L'"], comment: "first move goes to the side of the edge where the L edge goes to" }, // U2
                    ],
                },
                {
                    name: 'Z (4 edge EP)',
                    cases: [
                        { name: 'Z1', algs: ["L U F' L' U L U L' U2' L F L' F' U F L U2' L'"] },
                        { name: 'Z2', algs: ["L U2 L U L' F' L F U' L' F U F' U2 L'"] },
                        { name: 'Z3', algs: ["L R U2' R' U' L' BL' F' U2' F U' BL"] },
                    ],
                },
                {
                    name: 'Q (5 edge EP)',
                    cases: [
                        { name: 'Q1+', algs: ["(L2' U2 L2 U L2' U2 L2) U' (L2' U2 L2 U L2' U2 L2)"], comment: "cw cycles,  7 move EP x2 with an AUF in between" },
                        { name: 'Q1-', algs: ["(L2 U2' L2' U' L2 U2' L2') U (L2 U2' L2' U' L2 U2' L2')"], comment: "ccw cycles, 7 move EP x2 with an AUF in between" },
                        { name: 'Q2+', algs: ["L' U2' L U' L' U2' L2 U2' L' U' L U2' L'"], comment: "no auf: cw cycles, non adg-swapping edge goes in F | auf: 7 mover EP close edge, do U2' then alg" },
                        { name: 'Q2-', algs: ["L U2 L' U L U2 L2' U2 L U L' U2 L"], comment: "no auf: ccw cycles, non adg-swapping edge goes in BL | auf: 7 mover EP far edge, do U2' then alg" },
                    ],
                },
            ]
        },
        {
            name: 'Block larger than 2x1 (Sets D F J M V W)',
            sets: [
                {
                    name: 'D (3x1 and 2x2)',
                    cases: [
                        { name: 'D+', algs: ["L U2 L' U' L U L' U L U2' L' U2 L U2 L'"] }, // U2
                        { name: 'D-', algs: ["L' U2' L U L' U' L U' L' U2 L U2' L' U2' L"] }, // U2'
                    ],
                },
                {
                    name: 'F (3x1 and 2x1(s))',
                    cases: [
                        { name: 'F1+', algs: ["L2' U2 L2 U L2' U2 L2"], comment: "7 move EP" }, // U2
                        { name: 'F1-', algs: ["L2 U2' L2' U' L2 U2' L2'"], comment: "7 move EP" }, // U2
                        { name: 'F2+', algs: ["L U L' U2 L' U2' L2 U' L' U L' U2 L"] },
                        { name: 'F2-', algs: ["L' U' L U2' L U2 L2' U L U' L U2' L'"] },
                        { name: 'F3+', algs: ["L' U2' L U' L U L2' U2 L U2' L U' L'"] },
                        { name: 'F3-', algs: ["L U2 L' U L' U' L2 U2' L' U2 L' U L"] },
                        { name: 'F4+', algs: ["L U L' U L2 U2' L2' U2' L U2 L U2 L' U2' L'"] },
                        { name: 'F4-', algs: ["L' U' L U' L2' U2 L2 U2 L' U2' L' U2' L U2 L"] },
                        { name: 'F5+', algs: ["L U2 L U2' L' U2' L' U2 L2 U2 L2' U' L U' L'"] },
                        { name: 'F5-', algs: ["L' U2' L' U2 L U2 L U2' L2' U2' L2 U L' U L"] },
                    ],
                },
                {
                    name: 'J (J block)',
                    cases: [
                        { name: 'J1+', algs: ["L U L' BL' L U L' U' L' BL L2 U' L'", "F' U L F' L2' U L U L' U' L F L' U' L F"], comment: "3x3 transfer (J perm)" }, // U2'
                        { name: 'J1-', algs: ["L' U' L F L' U' L U L F' L2' U L"], comment: "3x3 transfer (J perm)" }, // U'
                        { name: 'J2+', algs: ["L' U2' L U2 L' U L U L U2 L' U' L U' L2' U' L"] },
                        { name: 'J2-', algs: ["L U2 L' U2' L U' L' U' L' U2' L U L' U L2 U L'"] },
                        { name: 'J3+', algs: ["L' U L2 U L' U L U2' L' U' L' U' L U2' L' U2 L"] },
                        { name: 'J3-', algs: ["L' U' L U L U2 L' U' L' U' L2 U' L2' U2' L2 U2 L'", "L U' L2' U' L U' L' U2 L U L U L' U2 L U2' L'"] },
                    ],
                },
                {
                    name: 'M (2 3x1s)',
                    cases: [
                        { name: 'M', algs: ["L U2' L' U2' L U F' L2' U' L2 U' L2' U2 L2 F L'", "L' U' L U2 L U2 L' U' L U' L2' U L U2' L' U L U' L' U L", "L' U' L U L' U' L U2 L' U' L2 U L' U L U2' L' U2' L' U L"] },
                    ],
                },
                {
                    name: 'V (2x2 and 2x1)',
                    cases: [
                        { name: 'V1+', algs: ["L' U L2 FL L' U' L FL' L' U L' U L U' L' U' L", "L' U2' L2 F' L' F L' U L F U' F' L' U L"], comment: "3x3 transfer (LUD R perm) for alg 1" }, // U2
                        { name: 'V1-', algs: ["L U2' L FL L' U L FL' L' U' L' U L U L'"], comment: "3x3 transfer (LUD R perm)" },
                        { name: 'V2+', algs: ["L' U L U L' U' L U' L FL L' U L FL' L2' U' L"], comment: "3x3 transfer (LUD R perm)" }, // U2
                        { name: 'V2-', algs: ["L U' L' U' L U L FL L' U' L FL' L' U2 L'"], comment: "3x3 transfer (LUD R perm)" },
                        { name: 'V3+', algs: ["L U2 L' U' L' U L F' L U2' L' U2 F L' U' L", "L U L2 U' L' U' L U L' U' L' U L2' U L U' L"] },
                        { name: 'V3-', algs: ["L' U' L2' U L U L' U' L U L U' L2 U' L' U L'"] },
                        { name: 'V4+', algs: ["L' U L F' U2' L U2 L' F L' U' L U L U2' L'", "L' U L' U' L2 U' L U L U' L' U L U L2' U' L'"] },
                        { name: 'V4-', algs: ["L' U' L U L U' F' L' U' L' U L F U' L U2 L'", "L U' L U L2' U L' U' L' U L U' L' U' L2 U L"] },
                    ],
                },
                {
                    name: 'W (2 2x2s)',
                    cases: [
                        { name: 'W1+', algs: ["L U2 L U2' L' U2' L' U L2 U2' L2' U2' L U' L'"] },
                    ],
                },
            ],
        },
        {
            name: 'R block (joined 2x1 bar and headlights) (Sets B P R)',
            sets: [
                {
                    name: 'B (Double R block)',
                    cases: [
                        { name: 'B1+', algs: ["L U L' U' L' U2' L U L U' L2' U2 L"] }, // U2
                        { name: 'B1-', algs: ["L' U' L U L U2 L' U' L' U L2 U2' L'"] }, // U2
                        { name: 'B2+', algs: ["L2 U L2' U2 L U2' L U L' U' L U' L2' U2 L U L'", "L U' L' U2' L2 U L' U L U' L' U2 L' U2' L2 U' L2'"] },
                        { name: 'B2-', algs: ["L2' U' L2 U2' L' U2 L' U' L U L' U L2 U2' L' U' L", "L' U L U2 L2' U' L U' L' U L U2' L U2 L2' U L2"] },
                    ],
                },
                {
                    name: 'P (R block)',
                    cases: [
                        // { name: 'P1+', algs: [""] },
                        // { name: 'P1-', algs: [""] },
                        // { name: 'P2+', algs: [""] },
                        // { name: 'P2-', algs: [""] },
                        // { name: 'P3+', algs: [""] },
                        // { name: 'P3-', algs: [""] },
                        // { name: 'P4+', algs: [""] },
                        // { name: 'P4-', algs: [""] },
                    ],
                },
                {
                    name: 'R (R block and 2x1)',
                    cases: [
                        // { name: 'R1+', algs: [""] },
                        // { name: 'R1-', algs: [""] },
                        // { name: 'R2+', algs: [""] },
                        // { name: 'R2-', algs: [""] },
                        // { name: 'R3+', algs: [""] },
                        // { name: 'R3-', algs: [""] },
                        // { name: 'R4+', algs: [""] },
                        // { name: 'R4-', algs: [""] },
                    ],
                },
            ],
        },
        {
            name: 'Multiple 2x1 bars (Sets C N S T Y)',
            sets: [
                {
                    name: 'C (2 2x1s touching)',
                    cases: [
                        // { name: 'C1+', algs: [""] },
                        // { name: 'C1-', algs: [""] },
                        // { name: 'C2+', algs: [""] },
                        // { name: 'C2-', algs: [""] },
                        // { name: 'C3+', algs: [""] },
                        // { name: 'C3-', algs: [""] },
                        // { name: 'C4+', algs: [""] },
                        // { name: 'C4-', algs: [""] },
                        // { name: 'C5+', algs: [""] },
                        // { name: 'C5-', algs: [""] },
                        // { name: 'C6+', algs: [""] },
                        // { name: 'C6-', algs: [""] },
                    ],
                },
                {
                    name: 'N (5 2x1s)',
                    cases: [
                        { name: 'N1+', algs: ["L U2' L U2 L' U L U2 L' U2' L'", "L U2 L' BL' L U L' U' L' BL L2 U2' L'"] }, // U2
                        { name: 'N1-', algs: ["L' U2' L F L' U' L U L F' L2' U2 L", "L' U2' L2 F L' U' L' U L F' L' U2 L"], comment: "3x3 transfer (J perm with U2 instead of U) (inverse for alt angle)" },
                        { name: 'N2+', algs: ["(R L) U2 L' U (R' L) U' R U2 L' U2 R'", "L U2' L' U2 L2 U L2' U L2 U' L2' U L2 U2' L' U2 L'"], comment: "I use alg 1 for EP" },
                        { name: 'N2-', algs: ["(L' R') U2' R U' (L R') U L' U2' R U2' L"], comment: "switch to this for EP" },
                    ],
                },
                {
                    name: 'S (2 2x1s, not touching)',
                    cases: [
                        // { name: 'S1+', algs: [""] },
                        // { name: 'S1-', algs: [""] },
                        // { name: 'S2+', algs: [""] },
                        // { name: 'S2-', algs: [""] },
                        // { name: 'S3+', algs: [""] },
                        // { name: 'S3-', algs: [""] },
                        // { name: 'S4+', algs: [""] },
                        // { name: 'S4-', algs: [""] },
                        // { name: 'S5+', algs: [""] },
                        // { name: 'S5-', algs: [""] },
                        // { name: 'S6+', algs: [""] },
                        // { name: 'S6-', algs: [""] },
                    ],
                },
                {
                    name: 'T (2,3 or 4 2x1s in these patterns:)',
                    cases: [
                        { name: 'T1', algs: ["L' U' L U L F' L2' U L U L' U' L F"], comment: "3x3 transfer (T perm)" }, // U
                        { name: 'T2+', algs: ["L2 F' L' U' L' U L F L' U2 L U2' L'"], comment: "3x3 transfer (LUF R perm)" }, // U2'
                        { name: 'T2-', algs: ["L U2 L' U2' L F' L' U' L U L F L2'"], comment: "3x3 transfer (LUF R perm)" }, // U2'
                        { name: 'T3+', algs: ["L2' U2 L2 U L2' U' L2 U L2' U2 L2"], comment: "7 move EP x2" },
                        { name: 'T3-', algs: ["L2 U2' L2' U' L2 U L2' U' L2 U2' L2'"], comment: "7 move EP x2" },
                        { name: 'T4+', algs: ["L U L' U2 L2 U2 L2' U L2 U2 L2' U' L U' L'"], comment: "setup to 7 move EP" },
                        { name: 'T4-', algs: ["L' U' L F L' U' L U L F' L' U L F' L2' U L U L' U' L F", "L' U' L U' L2' U2 L2 U L2' U2 L2 U2 L' U L"], comment: "3x3 transfer (J + T perm) for alg 1, or setup to 7 move EP for alg 2" }, // U2'
                    ],
                },

                {
                    name: 'Y (2 2x1s in Y pattern and other stuff)',
                    cases: [
                        { name: 'Y1+', algs: ["F' L F L' U' L' U L F' L' U L U' L' U' L F"], comment: "3x3 transfer (Inverse of Y perm)" }, // U
                        { name: 'Y1-', algs: ["F' L' U L U L' U' L F L' U' L U L F' L' F"], comment: "3x3 transfer (Y perm)" }, // U
                        // { name: 'Y2+', algs: [""] },
                        // { name: 'Y2-', algs: [""] },
                        // { name: 'Y3+', algs: [""] },
                        // { name: 'Y3-', algs: [""] },
                    ],
                },
            ],
        },
        {
            name: '1 2x1 bar or no Blocks (Sets G I L X)',
            sets: [
                {
                    name: 'G (2x1 and HeadLights)',
                    cases: [
                //         { name: 'G1+', algs: [""] },
                //         { name: 'G1-', algs: [""] },
                //         { name: 'G2+', algs: [""] },
                //         { name: 'G2-', algs: [""] },
                    ],
                },
                {
                    name: 'I (2x1)',
                    cases: [
                        // { name: 'I1+', algs: [""] },
                        // { name: 'I1-', algs: [""] },
                        // { name: 'I2+', algs: [""] },
                        // { name: 'I2-', algs: [""] },
                        // { name: 'I3+', algs: [""] },
                        // { name: 'I3-', algs: [""] },
                        // { name: 'I4+', algs: [""] },
                        // { name: 'I4-', algs: [""] },
                        // { name: 'I5+', algs: [""] },
                        // { name: 'I5-', algs: [""] },
                        // { name: 'I6+', algs: [""] },
                        // { name: 'I6-', algs: [""] },
                    ],
                },
                {
                    name: 'L (Double headlights, no blocks)',
                    cases: [
                        // { name: 'L1', algs: [""] },
                        // { name: 'L2', algs: [""] },
                        // { name: 'L3+', algs: [""] },
                        // { name: 'L3-', algs: [""] },
                        // { name: 'L4+', algs: [""] },
                        // { name: 'L4-', algs: [""] },
                        // { name: 'L5+', algs: [""] },
                        // { name: 'L5-', algs: [""] },
                        // { name: 'L6+', algs: [""] },
                        // { name: 'L6-', algs: [""] },
                    ],
                },
                {
                    name: 'X (No blocks or headlights)',
                    cases: [
                        // { name: 'X1', algs: [""] },
                        // { name: 'X2', algs: [""] },
                        // { name: 'X3', algs: [""] },
                        // { name: 'X4', algs: [""] },
                        // { name: 'X5+', algs: [""] },
                        // { name: 'X5-', algs: [""] },
                        // { name: 'X6+', algs: [""] },
                        // { name: 'X6-', algs: [""] },
                        // { name: 'X7+', algs: [""] },
                        // { name: 'X7-', algs: [""] },
                    ],
                },
            ],
        },
    ],
}

export { algSet }