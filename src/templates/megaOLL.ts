import type { IAlgSet } from "../scripts/types"

const algSet: IAlgSet = {
    options: {
        name: "Megaminx OLL",
        puzzle: "megaminx",
        imgSource: "cubingjs",
        twistyplayerparams: {
            rot: 'y',
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
                        { name: '2B', algs: ["F' L' U2' L U L' U L F", "L' BL' L F' L' BL L F"], comment: "3x3 transfer (t)" },
                        { name: '2C', algs: ["L' U2 L U L' U2 L", "L U2' L' U' L U2' L'"], },
                        { name: '2D', algs: ["L' BL L F' L' BL' L F", "F' L' U' L U' L' U2 L F"], comment: "3x3 transfer (l)" },
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
                        { name: '4C', algs: ["L' U' L U' L' U' L U L' U2 L", "L U L' U L U2' L2' U' L U' L' U2 L", "(L' U' L U' L' U2 L) U' (L' U' L U' L' U2 L)"], comment: "tbh for this I just the last alg (sune x2) cuz I cant learn this alg lol" },
                        { name: '4D', algs: ["L U2' L' U2' L U2 L' U2' L U' L'", "L' U2' L U L' U L2 U L' U L U2' L'"], comment: "never learned this case, I just do sune into I think T"  },
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
        {
            name: 'Line Shapes',
            cases: [
                { name: '1A', algs: ["L' U' L U (R' L) F' L' F R"], comment: "maybe try from LB to make the (B)R less awkward?" },
            ],
            sets: [
                {
                    name: 'Line 3 CO',
                    sets: [
                        {
                            name: '6 (Anchor Shapes)',
                            cases: [
                                { name: '6A', algs: ["BL U L2 F' L' F L' U' BL'", "L' U2 L F' L F L' U L' U2 L"] },
                                { name: '6B', algs: ["F' L' U L U2' L' U' L F"] },
                            ],
                        },
                        {
                            name: '7 (T Shapes)',
                            cases: [
                                { name: '7A', algs: ["L' U' L U L F' L' F"], comment: "3x3 transfer" },
                                { name: '7B', algs: ["F' L' U' L U F"], comment: "3x3 transfer" },
                            ],
                        },
                        {
                            name: '8 (C Shapes)',
                            cases: [
                                { name: '8A+', algs: ["L' U' L' BL L BL' U L", "L U2 F U' F' U' L'"], comment: "3x3 transfer" },
                                { name: '8A-', algs: ["L U L F' L' F U' L'"], comment: "3x3 transfer" },
                                { name: '8B+', algs: ["L U L' U' F' L' BL L (BL' F)", "F' L' U' L U L' U' L U' L' U2 L F"], comment: "3x3 transfer?" },
                                { name: '8B-', algs: ["L' U' L U BL L F' L' (F BL')", "L' U' L2 U L F' L' U' L' U F"], comment: "3x3 transfer" },
                            ],
                        },
                        {
                            name: '9 (S Shapes)',
                            cases: [
                                { name: '9A+', algs: ["L' BL L U L' U' BL' U L", "L' U' L F U F' U' L' U2 L"], comment: "3x3 transfer" },
                                { name: '9A-', algs: ["L F' L' U' L U F U' L'"], comment: "3x3 transfer" },
                                { name: '9B+', algs: ["F' U' L' U' L U2 F"] },
                                { name: '9B-', algs: ["L U F U F' U2' L'", "BR L' U' L U L F' L' F BR'"] },
                            ],
                        },
                        {
                            name: '10 (Pi Shapes)',
                            cases: [
                                { name: '10A+', algs: ["L F U F' U2 L' U' L U2' L'"] },
                                { name: '10A-', algs: ["L' U' L U2' L' U L U2 L F' L' F"] },
                                { name: '10B+', algs: ["L' U2' L U' L F' L' F L' U2' L"] },
                                { name: '10B-', algs: ["L' U L U2 L F' L' F U2' L' U' L"] },
                            ],
                        },
                        {
                            name: '11 (Y Shapes)',
                            cases: [
                                { name: '11A+', algs: ["L' U2' L U' L F U F' U' L2' U2' L", "R' L F' L' U' L U F R U' L'"] },
                                { name: '11A-', algs: ["L U F U F' L2' U' L2 U' L2' U2 L", "L U2 L F' L2' U' L U' L' U2 L F L'"] },
                                { name: '11B+', algs: ["L U L R' F' L' F R U' L'", "L' U2 L U L F' L' F U' L' U2' L"] },
                                { name: '11B-', algs: ["L U2 L F' L' F L' U' L U' L'"] },
                            ],
                        },
                    ],
                },
                {
                    name: 'Line 2 CO',
                    sets: [
                        {
                            name: '12 (Hammerhead Shapes)',
                            cases: [
                                { name: '12+', algs: ["L U2 L' U L U' F U' F' U' L'"] },
                                { name: '12-', algs: ["F' L' U L U2' L' U' L U' L' U L F"], comment: "3x3 transfer but I think its a zbll" },
                            ],
                        },
                        {
                            name: '13 (W Shapes)',
                            cases: [
                                { name: '13+', algs: ["F' L F U2 F' L' F L U2' L'", "L F' L' U2' L F L' U F' U F"] },
                                { name: '13-', algs: ["L F' L' U2' L F L' F' U2 F"] },
                            ],
                        },
                        {
                            name: '14 (Duck Head Shapes)',
                            cases: [
                                { name: '14A+', algs: ["F' U' L' U L2 F L' U' L' U L"], comment: "maybe replace with the 6 mover lol" },
                                { name: '14A-', algs: ["F' L' U2' L U2 F"] },
                                { name: '14B+', algs: ["L F U F' L' U2 L U2 L'"] },
                                { name: '14B-', algs: ["L U2' L' U2' L F U' F' L'"] },
                            ],
                        },
                        {
                            name: '15 (Megaphone Shapes)',
                            cases: [
                                { name: '15A+', algs: ["F' L F U F' L' F L U' L'"] },
                                { name: '15A-', algs: ["L F' L' U' L F L' F' U F"] },
                                { name: '15B+', algs: ["L2 F' L' F L' U' L F U F' U L'", "L' U2' L U L' U L F' L F L' U' L' U L"] },
                                { name: '15B-', algs: ["L U2' L' U' L F' L F L' U2' L'"] },
                            ],
                        },
                        {
                            name: '16 (Claw Shapes)',
                            cases: [
                                { name: '16A+', algs: ["L U2 L F' L' F L' U L U2 L'", "L' BL L2 U L' U L U2' L2' BL' L"] },
                                { name: '16A-', algs: ["L F' L2' U' L U' L' U2 L2 F L'"] },
                                { name: '16B+', algs: ["L U L' U L F' U' L' U L F U2' L'", "L F U2 F' U L' U' L U2' L'"] },
                                { name: '16B-', algs: ["F' L' U2' L U F' L F L' U F"] },
                            ],
                        },
                        {
                            name: '17 (Rabbit Shapes)',
                            cases: [
                                { name: '17A+', algs: ["F' U' L' U2 L U2' L' U' L F", "L' U2' L' BL L BL' U2 L", "L' U2' L U' F' L F L2' U2' L"] },
                                { name: '17A-', algs: ["L U2 L F' L' F U2' L'"] },
                                { name: '17B+', algs: ["R' BL L U L' U' BL' R", "R' F' L' U' L U F R"] },
                                { name: '17B-', algs: ["BR F' L' U' L U F BR'", "BL L F U F' U' L' BL'", "L U2 L' U' L F U F' U2' L'"] },
                            ],
                        },
                    ],
                },
                {
                    name: 'Line 0/1 CO',
                    sets: [
                        {
                            name: '18 (Long Block)',
                            cases: [
                                { name: '18A', algs: ["L' U2' L2 U L' U L U2' F' L' F", "L F' U' L' U L2 F L2' U' L U L'"], comment: "3x3 transfer" },
                                { name: '18B', algs: ["L U2 L' F' L F U2' L' U2 L' U2' L", "F' L F R' F' L2' U' L U F R"] },
                                { name: '18C', algs: ["F' U' L' U L U' L' U L F"], comment: "3x3 transfer" },
                                { name: '18D', algs: ["L U2 L' U' L F' L F L' U' L'"] },
                                { name: '18E+', algs: ["L' U' L U' L' U BL' U BL L"], comment: "3x3 transfer?" },
                                { name: '18E-', algs: ["L U L' U L U' F U' F' L'"], comment: "3x3 transfer?" },
                            ],
                        },
                        {
                            name: '19 (Fox Head Shapes)',
                            cases: [
                                { name: '19A+', algs: ["F' U2' L' U L U L' U' L U F", "BL U L U' L' U L U L' U2' BL'"] },
                                { name: '19A-', algs: ["F' U' L' U L U' L' U' L U2 F", "BL U2 L U' L' U' L U L' U' BL'"] },
                                { name: '19B+', algs: ["L U2 L' U' L F U F' L' U' L U' L'"] },
                                { name: '19B-', algs: ["L' U2 L F U F' U L' U L"] },
                                { name: '19C+', algs: ["L' U2 L F' L F L' U2 L' U L"] },
                                { name: '19C-', algs: ["L U2' L' BL L' BL' L U2' L U' L'", "F' L' U L U' L' U2 L U2 L' U' L U F", "L' U' L U2' L' U L2 F' L' F U' L' U2' L"] },
                                { name: '19D+', algs: ["BL U L U L' U' L U L' U2' BL'", "L' U' L U' L' U L U L F' L2' U' L U F"] },
                                { name: '19D-', algs: ["F' U' L' U' L U L' U' L U2 F"] },
                                { name: '19E+', algs: ["L U L F' L2' U L U2' L' U' L F L'", "L F' L' U L U2 L' U' L2 F L' U' L'"] },
                                { name: '19E-', algs: ["F' U' L' U L' U' L U' L' U2 L2 F", "L' U' L U' L' U L U' L' U L U L F' L' F"] },
                                { name: '19F+', algs: ["L U2 L2' U' L2 U' L' U2 L F' L' F"] },
                                { name: '19F-', algs: ["L' U2 L U2 L' U' L U2 L F' L' F", "L' U2' L2 U L2' U L U2' L' BL L BL'"] },
                            ],
                        },
                        {
                            name: '20 (Scorpion Shapes)',
                            cases: [
                                { name: '20A+', algs: ["F' L' U2' L U2 L' U' L U F"] },
                                { name: '20A-', algs: ["BL L U2 L' U2' L U L' U' BL'", "L F U F' L2' U2 L2 U2 L2' U L", "L U2 F' L F L' F' L F L' U2' L'"] },
                                { name: '20B+', algs: ["L F U F' U' L2' U2' L U L' U L"] },
                                { name: '20B-', algs: ["L F U F' U' L' U2 L U2 L' U' L U' L'", "F' L' U' L U F L' U' L U2' L' U2' L", "F' L' U' L U' L' U L F' L F L' U F"] },
                                { name: '20C+', algs: ["F' U2' L' U L U' L' U L U F"] },
                                { name: '20C-', algs: ["BL U2 L U' L' U L U' L' U' BL'", "L U2 L' F' L F L' U' L U' L2' U2 L"] },
                                { name: '20D+', algs: ["F' L' U L U' L' U2 L U L' U L F", "L U2 L' F' U' L U' L' U L' U L F"] },
                                { name: '20D-', algs: ["L F' L F L2' U L F U F' L'", "L' U2 L F' L F L2' U L U L' U L"] },
                                { name: '20E+', algs: ["F' L' U' L U L' U2' L U L' U L F"] },
                                { name: '20E-', algs: ["L U2 L' F' U' L U' L2' U2 L F"] },
                                { name: '20F+', algs: ["L U L' F' U L U2' L' U2' L' U L F"] },
                                { name: '20F-', algs: ["L' U2 L U L' U L U L F' L' F", "L' U' L U' L' U2 L2 U F U' F' L'"] },
                            ],
                        },
                        {
                            name: '21 (Line Shapes)',
                            cases: [
                                { name: '21A+', algs: ["BL U2 L U2' L' U L U' L' BL'"] },
                                { name: '21A-', algs: ["F' U2' L' U2 L U' L' U L F"] },
                                { name: '21B+', algs: ["L F U F' L' U2 L U2' L' U L U2' L'"] },
                                { name: '21B-', algs: ["L U2 F U' F' U L' U' L U' L'"] },
                                { name: '21C+', algs: ["BL U L U' L' U2 L U2' L' U L U' L' BL'", "F' L' U2' L2 F U F' U' L' U2 F"] },
                                { name: '21C-', algs: ["L F U2 F2' L' U' L U F U2' L'", "F' U' L' U L U2' L' U2 L U' L' U L F", "L' U2 L F' L F U2 L2' U L2 U2 L'"] },
                                { name: '21D+', algs: ["BL U2 L U2' L' U2 L U2' L' BL'"] },
                                { name: '21D-', algs: ["L F U F' U2 L' U2' L U' L'", "F' U2' L' U2 L U2' L' U2 L F"] },
                                { name: '21E+', algs: ["F' L' U' L U L' U2' L U2 F"] },
                                { name: '21E-', algs: ["BL L U L' U' L U2 L' U2' BL'"] },
                            ],
                        },
                    ],
                },
            ]
        },
        {
            name: 'L Shapes',
            cases: [
                { name: '1B', algs: ["R' F' L F (L' R) U' L' U L"], comment: "maybe try from LB to make the (B)R less awkward?" }
            ],
            sets: [
                {
                    name: 'L 3 CO',
                    sets: [
                        {
                            name: '22 (Flower Shapes)',
                            cases: [
                                { name: '22A', algs: ["L' U2' L2 F' L' F L' U2 L"], comment: "3x3 transfer" },
                                { name: '22B', algs: ["F' L F L' U' L' U L"], comment: "3x3 transfer" },
                            ],
                        },
                        {
                            name: '23 (Chandelier Shapes)',
                            cases: [
                                { name: '23A', algs: ["L' U2' L U' L' U L U2 L F' L' F"] },
                                { name: '23B', algs: ["L' U2 L U F' L F L' U L' U L"] },
                            ],
                        },
                        {
                            name: '24 (P Shapes)',
                            cases: [
                                { name: '24A+', algs: ["L U F U' F' L'"], comment: "3x3 transfer" },
                                { name: '24A-', algs: ["F' U' L' U L F"], comment: "3x3 transfer" },
                                { name: '24B+', algs: ["L U F' U' L' U L F L'"], comment: "3x3 transfer" },
                                { name: '24B-', algs: ["L' U' BL U L U' L' BL' L"], comment: "3x3 transfer" },
                            ],
                        },
                        {
                            name: '25 (E Shapes)',
                            cases: [
                                { name: '25A+', algs: ["L' U' L2 F U F' U' L2' U2 L", "L U R' F' L F L' R U' L'", "L F U F2' U' L' U L F L'"] },
                                { name: '25A-', algs: ["F' L' U' L2 U F U' F' L' F"] },
                                { name: '25B+', algs: ["F' L F L' U2' L' U' L U L' U2 L", "F' L' U2' L F U F' L' U L F"] },
                                { name: '25B-', algs: ["L U2' L' U2' L F' L F L' U' L'"] },
                            ],
                        },
                        {
                            name: '26 (Sprinter Shapes)',
                            cases: [
                                { name: '26A+', algs: ["F' L U2 L' F' L F U2' L' F"] },
                                { name: '26A-', algs: ["L' U' L U' L F' L' F U' L' U2' L"] },
                                { name: '26B+', algs: ["F' U' L' U2 L U L' U2' L U F"], comment: "technically another valid 3x3 OLL for one of the awkward cases" },
                                { name: '26B-', algs: ["L U2 L2' U' L U L U2' F' L' F"], comment: "technically yet another valid 3x3 OLL for one of the awkward cases" },
                            ],
                        },
                        {
                            name: '27 (Eagle Shapes)',
                            cases: [
                                { name: '27A+', algs: ["(R' BL)  L' BL' L U L U' (L' R)", "L' F' L U' L' F L2 F' L' U L F L'"], comment: "setup to sexy sledge inverse" },
                                { name: '27A-', algs: ["(BR F') L F L' U' L' U (L BR')"], comment: "setup to sexy sledge inverse" },
                                { name: '27B+', algs: ["L F' L' F L F' L' F L' U' L U L' U' L"] },
                                { name: '27B-', algs: ["F' L F L' U2 L' U L U' L' U2' L"] },
                            ],
                        },
                    ]
                },
                {
                    name: 'L 2 CO',
                    sets: [
                        {
                            name: '28 (Big Block)',
                            cases: [
                                { name: '28+', algs: ["BL L2 F' L' F L' BL'", "L F2 R' F' R F' L'"], comment: "3x3 transfer but angle is different for better fingertricks" },
                                { name: '28-', algs: ["F' L2' BL L BL' L F"], comment: "3x3 transfer but angle is different for better fingertricks" },
                            ],
                        },
                        {
                            name: '29 (Lobster Shapes)',
                            cases: [
                                { name: '29+', algs: ["BL U2 L U' L' U L U2' L' BL'", "L' U2 L U L' U' L F U F' L' U2 L"] },
                                { name: '29-', algs: ["F' U2' L' U L U' L' U2 L F"] },
                            ],
                        },
                        {
                            name: '30 (Lightning Shapes)',
                            cases: [
                                { name: '30A+', algs: ["BL U2 L U2' L' BL'"] },
                                { name: '30A-', algs: ["F' U2' L' U2 L F"] },
                                { name: '30B+', algs: ["L' U L U' L' U L U F' L F L2' U' L"] },
                                { name: '30B-', algs: ["(BL R') L F' L F L2' (BL' R)"] },
                            ],
                        },
                        {
                            name: '31 (Cobra Shapes)',
                            cases: [
                                { name: '31A+', algs: ["BL L F' L F L2' BL'"], comment: "3x3 transfer from a diff angle" },
                                { name: '31A-', algs: ["F' L F L' U2 L' U2' L", "F' L' BL L' BL' L2 F"], comment: "3x3 transfer from a diff angle" },
                                { name: '31B+', algs: ["BL U L U L' U' L U' L' BL'"] },
                                { name: '31B-', algs: ["F' U' L' U' L U L' U L F"] },
                            ],
                        },
                        {
                            name: '32 (Hand Shapes)',
                            cases: [
                                { name: '32A+', algs: ["L U L' U' L' BL L2 U L' U' BL'"] },
                                { name: '32A-', algs: ["L' U' L U L F' L2' U' L U F"] },
                                { name: '32B+', algs: ["L' U2 L2 F' L' F L' U2' L"] },
                                { name: '32B-', algs: ["F' U' F L F' L' U L F L'", "L' U' L U' L F' L' F L' U2 L"] },
                            ],
                        },
                        {
                            name: '33 (Magic Lamp Shapes)',
                            cases: [
                                { name: '33A+', algs: ["L U L' U L U' F U F' L' U' L U' L'"] },
                                { name: '33A-', algs: ["F' U' L' U L F L U2 L' U' L U' L'"] },
                                { name: '33B+', algs: ["BL U L U L' U' L U L' U' L U' L' BL'"] },
                                { name: '33B-', algs: ["F' U' L' U' L U L' U' L U L' U L F"] },
                            ],
                        },
                    ]
                },
                {
                    name: 'L 0/1 CO',
                    sets: [
                        {
                            name: '34 (Human Shapes)',
                            cases: [
                                { name: '34A', algs: ["F' L F L' U' L' U' L U' L' U L U' L' U2' L", "F' L2' U' L U' L U L' U' L U L2' U L2 F'", "R U2' L' U2 L2 R' F' L' F L' U2' L"] },
                                { name: '34B', algs: ["F' L F L' U2 L' U L U L' U L", "L' U2' L F U2' F' U L' U2' L", "L U' F U F' L' U' L U' L' U' L U' L'"] },
                                { name: '34C', algs: ["L' U' L U' L F' L' F U' L' U2 L U' L' U2 L", "L U2 L' U' F' L U' L2' U' L U2 F"] },
                                { name: '34D', algs: ["F' L F L' U' L' U' L U' L' U2' L"] },
                                { name: '34E+', algs: ["F' L F L' U' L' U L2 U2 L' U' L U' L'", "BL L' BL' L U2 L' U' L2 U' L2' U2 L"] },
                                { name: '34E-', algs: ["F' L F L' U2' L U L2' U L2 U2' L'"] },
                            ],
                        },
                        {
                            name: '35 (Axe Shapes)',
                            cases: [
                                { name: '35A+', algs: ["BL L F' L F L' F' L F L2' BL'", "F' L F L' U' L' U' L U L' U L"], comment: "3x3 transfer (double sune) from a better angle for mega, alg 2 is also 3x3 transfer" },
                                { name: '35A-', algs: ["F' dr' U L' U' L  U L' U' (L dr) F"], comment: "3x3 transfer (double sune) from a better angle for mega" },
                                { name: '35B+', algs: ["F' (L' dr') U L U' L' U L U' dr F"], comment: "3x3 transfer (double antisune) from a better angle for mega" },
                                { name: '35B-', algs: ["BL L2 F' L' F L F' L' F L' BL'", "L F' L' F U F' L F L2' U L"], comment: "alg 1 is 3x3 transfer (double antisune) from a better angle for mega" },
                                { name: '35C+', algs: ["L' BL L2 F' L2' BL' L2 F L'"], comment: "3x3 transfer" },
                                { name: '35C-', algs: ["L F' L2' BL L2 F L2' BL' L"], comment: "3x3 transfer" },
                                { name: '35D+', algs: ["BL L U L' U' L U L' U' BL'"], comment: "3x3 transfer" },
                                { name: '35D-', algs: ["F' L' U' L U L' U' L U F"], comment: "3x3 transfer" },
                                { name: '35E+', algs: ["BR F' L' U' L U L' U' L U F BR'"], comment: "setup to 35D-" },
                                { name: '35E-', algs: ["L U L F' L' F L F' L' F U' L'"], comment: "the good C shape but you sledge twice" },
                                { name: '35F+', algs: ["L' U' L2 F' L' F U' F' L F L'"], comment: "this and alg 2 for 35B- are inverses" },
                                { name: '35F-', algs: ["F U F2' L F L' U L F' L' F", "L U2 F' U' L' U2 L U2 L' U' L F L'"] },
                            ],
                        },
                        {
                            name: '36 (Parrot Shapes)',
                            cases: [
                                { name: '36A-', algs: ["F' U2 F U L F' L' U2 L F L'"] },
                                { name: '36A+', algs: ["L' U' L U2' L F' L' F L' U2' L"] },
                                { name: '36B+', algs: ["BL U2 L U2 L' U' L U2 L' U' BL'", "L' U' L U' L' U2 L2 F U F' U' L'"] },
                                { name: '36B-', algs: ["F' L F U F' U' L2' U' L U L' U L F", "F' U2' L' U2' L U L' U2' L U F"] },
                                { name: '36C+', algs: ["L' U' L U2' L' U BL' U BL U L", "L' U' L U2' L' U y' L' U L U F"] },
                                { name: '36C-', algs: ["L U L' U2 L U' F U' F' U' L'"] },
                                { name: '36D+', algs: ["L' U2 L U F' L F L2' U2 L"] },
                                { name: '36D-', algs: ["L U2' L' U2' L2 F' L' F U' L'"] },
                                { name: '36E+', algs: ["BR BL L U L' U' L U L' U' BL' BR'", "L' U2 L U' F U F' U2' L F' L' F"] },
                                { name: '36E-', algs: ["R' F' L' U' L U L' U' L U F R", "L' U2' L U' L' U L2 F' L' F L' U2 L"] },
                                { name: '36F+', algs: ["F L' U2 L2 F' L' F L' U2' L F'"] },
                                { name: '36F-', algs: ["L' U2 L2 U2 L' U L U2 F' L' F", "F' L' U' L U' L' U2' L U2 L' U' L F", "F' U' L' U L F L' U2' L U' L' U2' L", "F' L2' U' L U' L U L' U' L' U2 L2 F"] },
                            ],
                        },
                        {
                            name: '37 (L Shapes)',
                            cases: [
                                { name: '37A+', algs: ["L' U2 L2 F' L' F U2 L' U L", "L' U2' BL L' BL' L2 U L' U L", "L' U2 L2 F U F' U' L' U2 L' U L"] },
                                { name: '37A-', algs: ["L U2 F' L F L2' U' L U' L'"] },
                                { name: '37B+', algs: ["L' U2' L U L' U' L U2 L F' L' F", "L' U2 L F U F' U2 L F' L' F"] },
                                { name: '37B-', algs: ["F' L F L' U2' L' U L U' L' U2 L"] },
                                { name: '37C+', algs: ["L U L' U L2 F' L' F U2' L'"] },
                                { name: '37C-', algs: ["L' U' L U2' F' L F L2' U2' L", "L' U' L U' L2' BL L BL' U2 L", "BL L U2 L' U2' L U2 L' U2' BL'"] },
                                { name: '37D+', algs: ["L' U2' L U L' U2' L F U F' L' U2 L"] },
                                { name: '37D-', algs: ["F' L F U L' U2 L' U2' L2 U' L'"] },
                                { name: '37E+', algs: ["L U L' U L U' F U F' U2' L'", "L' U2 L U' F U F' U2 L' U L"] },
                                { name: '37E-', algs: ["F' L F L' U2 L' U2 L U' L' U2 L"] },
                            ],
                        },
                    ]
                },
            ]
        },
        {
            name: 'Dot Cases',
            cases: [
                { name: 'O', algs: ["L' U' L U L F' L' F U2' F' L' U' L U F"] }
            ],
            sets: [
                // {
                //     name: 'U',
                //     cases: [
                //     ],
                // },
                // {
                //     name: 'Far L',
                //     cases: [
                //     ],
                // },
                // {
                //     name: 'L',
                //     cases: [
                //     ],
                // },
                // {
                //     name: 'L',
                //     cases: [
                //     ],
                // },
                // {
                //     name: 'Sune',
                //     cases: [
                //     ],
                // },
                // {
                //     name: 'Antisune',
                //     cases: [
                //     ],
                // },
                // {
                //     name: 'H Sitting',
                //     cases: [
                //     ],
                // },
                // {
                //     name: 'H Standing',
                //     cases: [
                //     ],
                // },
                // {
                //     name: 'Fat Pi (Jet)',
                //     cases: [
                //     ],
                // },
                // {
                //     name: 'Empress (Turtle)',
                //     cases: [
                //     ],
                // },
                // {
                //     name: 'Pi',
                //     cases: [
                //     ],
                // },
                // {
                //     name: '5C',
                //     cases: [
                //     ],
                // },
            ]
        },
    ],
}

export { algSet }