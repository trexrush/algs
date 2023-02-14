import type { IAlgSet } from "../scripts/types"

const algSet: IAlgSet = {
    data: {
        name: "Megaminx PLL",
        imgSource: "cubingjs",
        twistyplayerparams: {
            // rot: 'x2 y3',
            puzzle: "megaminx",
            cameraX: -10,
            cameraY: 55,
            tempo: 3,
            stage: 'OLL'
        },
    },
    sets: [
        {
            name: 'CO',
            sets: [
                {
                    name: '2 (2 corner CO)',
                    cases: [
                        { name: '2A', algs: ["L' U' L U' L' U' L U2 L' U L"], },
                        { name: '2B', algs: ["L' BL' L F' L' BL L F"], comment: "3x3 transfer (t)" },
                        { name: '2C', algs: ["L' U2 L U L' U2 L", "L U2' L' U' L U2' L'"], },
                        { name: '2D', algs: ["L' BL L F' L' BL' L F"], comment: "3x3 transfer (l)" },
                    ],
                },
                {
                    name: '3 (3 corner CO)',
                    cases: [
                        { name: '3A+', algs: ["L U L' U L U2' L'"], comment: "3x3 transfer (sune)" },
                        { name: '3A-', algs: ["L' U' L U' L' U2 L"], comment: "3x3 transfer (sune)" },
                        { name: '3B+', algs: ["L U2 L' U' L U' L'"], comment: "3x3 transfer (antisune)" },
                        { name: '3B-', algs: ["L' U2' L U L' U L"], comment: "3x3 transfer (antisune)" },
                    ],
                },
                {
                    name: '4 (4 corner CO)',
                    cases: [
                        { name: '4A', algs: ["L' U' L U' L' U L U' L' U2 L"], comment: "3x3 transfer (h)" },
                        { name: '4B', algs: ["L' U2' L U L' U' L U L' U L "], comment: "3x3 transfer (h)" },
                        // { name: '4C', algs: [""], },
                        // { name: '4D', algs: [""], },
                        { name: '4E+', algs: ["L U2 L2' U' L2 U' L2' U2 L"], comment: "3x3 transfer (pi) theres a better alt alg tho maybe learn it" },
                        { name: '4E-', algs: ["L' U2' L2 U L2' U L2 U2' L'"], comment: "3x3 transfer (pi) theres a better alt alg tho maybe learn it" },

                    ],
                },
                {
                    name: '5 (5 corner CO)',
                    cases: [
                        { name: '5+', algs: ["L U L' U2 L U2' L' U L U2' L'"], comment: "U + sune, alg starts on the middle sune corner" },
                        { name: '5-', algs: ["L' U' L U2' L' U2 L U' L' U2 L"], comment: "U + sune, alg starts on the middle sune corner" },

                    ],
                },
            ]
        },
        // {
        //     name: 'Line Shapes',
        //     sets: [
        //         {
        //             name: '',
        //             cases: [
        //             ],
        //         },
        //     ]
        // },
        // {
        //     name: 'L Shapes',
        //     sets: [
        //         {
        //             name: '',
        //             cases: [
        //             ],
        //         },
        //     ]
        // },
        {
            name: 'EO',
            cases: [
                { name: '1A', algs: ["L' U' L U (R' L) F' L' F R"], comment: "maybe try from LB to make the (B)R less awkward?" },
                { name: '1B', algs: ["R' F' L F (L' R) U' L' U L"] }
            ],
        },
    ],
}

export { algSet }