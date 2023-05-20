import type { IAlgSetV2, IOptions, ISet, ICaseListV2 } from "../scripts/types"
import { createOptions } from "../scripts/utilities"
//@ts-ignore
import yml from './megaPLLData.yml'

const Options: IOptions = createOptions({
  name: "Megaminx PLL",
  puzzle: 'megaminx',
  imgSource: "cubingjs",
  twistyplayerparams: {
    rot: 'x2 y3',
    cameraX: -10,
    cameraY: 45,
    tempo: 3,
  },
})

const oldSetData: ISet[] = [
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
          { name: 'H1+', algs: ["F L' U' L U L F' L' U L' U2 L U' L' U' L U2 L' U2 L"] },
          { name: 'H1-', algs: ["L' U2' L U2' L' U L U L' U2' L U' L F L' U' L' U L F'"] },
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
          { name: 'P1+', algs: ["L U L F' L' U' L' U L y L2 U L' U L U2' L' BL'"] }, //, "x' R U L' U' R' U x L2 U L' U L U2' L' B' L'"
          { name: 'P1-', algs: ["L F' L2' U' L U' L' U2 L U' L F L' F' U F"] },
          { name: 'P2+', algs: ["L' U2 L2 F' L' F L' U2' L2 F U2 F' U2' L'"] }, //, "BL L U2 L' U' L U' L2' x' U' R U L U' R'"
          { name: 'P2-', algs: ["F' U' F L F' L' U L' U2' L U L' U L2 F L'"] },
          { name: 'P3+', algs: ["BL L U' L' U' L U L U2 L' U' L U' L2' BL'"] },
          { name: 'P3-', algs: ["F' L' U L U L' U' L' U2' L U L' U L2 F"] },
          { name: 'P4+', algs: ["F' L2' U' L U' L' U2 L U L U' L' U' L F"] },
          { name: 'P4-', algs: ["BL L2 U L' U L U2' L' U' L' U L U L' BL'"] },
        ],
      },
      {
        name: 'R (R block and 2x1)',
        cases: [
          { name: 'R1+', algs: ["L' U2 L U' L2' U2 L2 U L' U' L' U2' L U' L"] },
          { name: 'R1-', algs: ["L U2' L' U L2 U2' L2' U' L U L U2 L' U L'"] },
          { name: 'R2+', algs: ["L' U L' U2 L U L U' L2' U2' L2 U L' U2' L"] },
          { name: 'R2-', algs: ["L U' L U2' L' U' L' U L2 U2 L2' U' L U2 L'"] },
          { name: 'R3+', algs: ["L U L2' U L U L U' L' U' L U' L2' U' L U' L' U L"] },
          { name: 'R3-', algs: ["L' U' L2 U' L' U' L' U L U L' U L2 U L' U L U' L'"] },
          { name: 'R4+', algs: ["L' U' L U L' U L2 U L' U L U L' U' L' U' L2 U' L'"] },
          { name: 'R4-', algs: ["L U L' U' L U' L2' U' L U' L' U' L U L U L2' U L"] },
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
          { name: 'C1+', algs: ["L U2 L' U' L U2' L' U L U L2' U' L U' L U L2' U L", "L U L' U2' L' U2' L U' L U L2' U2 L U2' L U2' L'"] },
          { name: 'C1-', algs: ["L U L' U L' U2' L2 U L2' U L2 U2 L' U' L U2' L'", "L U2 L' U L U2' L2' U' L2 U' L2' U2 L U' L U' L'"] },
          { name: 'C2+', algs: ["L' U' L U' L U2 L2' U' L2 U' L2' U2' L U L' U2 L", "L' U2' L U' L' U2 L2 U L2' U L2 U2' L' U L' U L"] },
          { name: 'C2-', algs: ["L2 U2' L2' U' L2 U L2' U2 L2 U L2' U2' L2 U2 L2'", "L2 U2' L2' U2 L2 U' L2' U2' L2 U' L2' U L2 U2 L2'"] },
          { name: 'C3+', algs: ["L2' U2 L2 U L2' U' L2 U2' L2' U' L2 U2 L2' U2' L2", "L2 U2 L2' U2' L2 U L2' U2 L2 U L2' U' L2 U2' L2'"] },
          { name: 'C3-', algs: ["L2 U2 L2' U L2 U2 L2' U L2 U2' L2' U' L2 U2' L2'", "L2 U2' L2' BL2 U' L2 U L2' U BL2' U' L2 U2 L2'"] },
          { name: 'C4+', algs: ["L2 U2' L2' U' L2 U2' L2' U' L2 U2 L2' U L2 U2 L2'", "L2' U2 L2 F2' U L2' U' L2 U' F2 U L2' U2' L2"] },
          { name: 'C4-', algs: ["L U2 L' F' U L U L' U' F U' L U2' L'", "L U2 L' U' R' U2 L U L' U2' R L U2' L'"] },
          { name: 'C5+', algs: ["L' U2' L BL U' L' U' L U BL' U L' U2 L"] },
          { name: 'C5-', algs: ["L U2 L' F' U L U L' U' F U' L U2' L'", "L U2 L' U' R' U2 L U L' U2' R L U2' L'"] },
          { name: 'C6+', algs: ["L U' L' U2 L2 U L' U2 L U' L' U' L U' L' U' L'"] },
          { name: 'C6-', algs: ["L' U L U2' L2' U' L U2' L' U L U L' U L U L"] },
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
          { name: 'S1+', algs: ["L U L' U2 L U2 L' U' L' U' L U' L' U2 L"] },
          { name: 'S1-', algs: ["L U2 L' U' L U' L' U' L' U2 L U2 L' U L"] },
          { name: 'S2+', algs: ["L2 U2' L2' U2' L2 U' L' U2 L' U' L' U2' L2 U L2' U L"] },
          { name: 'S2-', algs: ["L2' U2 L2 U2 L2' U L U2' L U L U2 L2' U' L2 U' L'"] },
          { name: 'S3+', algs: ["L' U' L2 U' L2' U2 L U L U2' L U L2' U2 L2 U2 L2'"] },
          { name: 'S3-', algs: ["L2' U2 L2 U L' F L' U' L2 U L F' L3' U2 L2"] },
          { name: 'S4+', algs: ["L2 U2' L2' U' L2 U2' L2' U L2 U2 L2' U L2 U2 L2'", "L2' U2 L2 U' F2' U L2' U L2 U' F2 L2' U2' L2"] },
          { name: 'S4-', algs: ["L2 U2 L2' U L2 U2 L2' U' L2 U2' L2' U' L2 U2' L2'", "L2 U2' L2' U BL2 U' L2 U' L2' U BL2' L2 U2 L2'"] },
          { name: 'S5+', algs: ["L' U2' L U' BL U' L' U L U BL' L' U2 L"] },
          { name: 'S5-', algs: ["L U2 L' U F' U L U' L' U' F L U2' L'", "L U2 L' R' U2 L U' L' U2' R U L U2' L'"] },
          { name: 'S6+', algs: ["L U L U L' U L U L' U2' L U' L2' U2' L U L'", "L' U' L2 F L' U2 L' U2' L F' L' U L2 U L' U L U2' L'"] },
          { name: 'S6-', algs: ["L' U' L' U' L U' L' U' L U2 L' U L2 U2 L' U' L"] },
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
          { name: 'Y2+', algs: ["L2 U2' L2' U2 L2 U' L2' U2 L2 U2' L2'", "L U2 L2' U2' L2 U L2' U L U L U2' L'"] },
          { name: 'Y2-', algs: ["L2' U2 L2 U2' L2' U L2 U2' L2' U2 L2", "L U2 L' U' L' U' L2 U' L2' U2 L2 U2' L'", "L2 U2' L2' U2 L2 U2 L2' U2 L2 U2' L2'"] },
          { name: 'Y3+', algs: ["L2 U F2' U L2' U L2 U' F2 U2' L2'", "L2 U L2' U L2 U2' L2' U2 L2 U L2' U L2 U2' L2'", "L2 F2 L' U2 L' U2' L F' L' U' L U L F' L2'"] },
          { name: 'Y3-', algs: ["L2' U' L2 U' L2' U2 L2 U2' L2' U' L2 U' L2' U2 L2", "L2' U' BL2 U' L2 U' L2' U BL2' U2 L2"] },
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
          { name: 'G1+', algs: ["L' U2 L2 U2' L' U2 L' U L U2 L' U L2 U2 L2' U2' L"] },
          { name: 'G1-', algs: ["L U2' L2' U2 L U2' L U' L' U2' L U' L2' U2' L2 U2 L'"] },
          { name: 'G2+', algs: ["F' U2 L U L' F L U L' F' U L U2 L' U2' F"] },
          { name: 'G2-', algs: ["L' U L2 U F' U' F L2' U2 L U' L' U2' L F' U F", "L' U2 L U L' U2 L2 U2' R' U L' U' R L U2 L'", "L U2' L' R' U L U' R U2 L2' U2' L U' L' U2' L"] },
        ],
      },
      {
        name: 'I (2x1)',
        cases: [
          { name: 'I1+', algs: ["L2' U2 L2 U L2' BL2 U' L2 U L2' U BL2' U L2"] },
          { name: 'I1-', algs: ["L' U2' L U' L U L' U' F L' U' L U L F' U' L2' U' L", "L2 U2' L2' U' L2 F2' U L2' U' L2 U' F2 U' L2'"] },
          { name: 'I2+', algs: ["L2' U' BL2 U' L2 U' L2' U BL2' L2 U' L2' U2' L2"] },
          { name: 'I2-', algs: ["L' U L2 U F L' U' L' U L F' U L U' L' U L' U2 L", "L2 U F2' U L2' U L2 U' F2 L2' U L2 U2 L2'"] },
          { name: 'I3+', algs: ["L' U2 L2 U2 L' U2' L' U2' L U2 L U L' U2' L U' L'", "L2 U L2' U L2 U2' L2' U2 y' L2' U' L2 U2' L2' U2' L2"] },
          { name: 'I3-', algs: ["L U2' L2' U2' L U2 L U2 L' U2' L' U' L U2 L' U L", "L2' U' L2 U' L2' U2 L2 U2' y L2 U L2' U2 L2 U2 L2'"] },
          { name: 'I4+', algs: ["L U2' L' U' L U' L U2 L' U' L U' L2' U L U2' L'"] },
          { name: 'I4-', algs: ["L U L U2 F L' U' L' U L F' L U2' L' U' L'", "L' U2 L U L' U L' U2' L U L' U L2 U' L' U2 L"] },
          { name: 'I5+', algs: ["L U2 L' U' L2 U L' U L U2' L' U L' U L U2 L'"] },
          { name: 'I5-', algs: ["L U L U2 L' F L' U' L U L F' U2' L' U' L'", "L' U2' L U L2' U' L U' L' U2 L U' L U' L' U2' L"] },
          { name: 'I6+', algs: ["L2 F2' L2' U L2 F2 L2' U2' L2 F2' L2' U L2 F2 L2'", "L2 F2' L2' U' L2 F2 L2' U2 L2 F2' L2' U' L2 F2 L2'", "BL L U2 L' U' L U' L' BL' U L' U' L U2' L' U L U L' U L"] },
          { name: 'I6-', algs: ["F' L' U2' L U L' U L F U' L U L' U2 L U' L' U' L U' L'"] }, //, "x' L2' U2 L2 F L2' U2' L2 F2' L2' U2 L2 F L2' U2' L2"
        ],
      },
      {
        name: 'L (Double headlights, no blocks)',
        cases: [
          { name: 'L1', algs: ["L U2' L' U' L U' L' U L U2' L' U L' U' L U' L' U2 L"] },
          { name: 'L2', algs: ["L U2 L' U L U' L' U' L U' L2' U' L U' L' U' L U L' U2 L", "L' U2' L U' L' U L U L' U L2 U L' U L U L' U' L U2' L'"] },
          { name: 'L3+', algs: ["L' U' L U L U2' L' U' L' U' L2 U' L' U L' U' L U L' U2 L", "L U2' L' U2' F L y L' U' L b' L' U2' L' U' L U2' L'"] },
          { name: 'L3-', algs: ["F' U2 F U2 L' F' L U L' F U2 L U L' U2 L"] },
          { name: 'L4+', algs: ["L' U2 L U' L' U2' L' U2' L U' L U L' U L' U L U L"] },
          { name: 'L4-', algs: ["L' U' L' U' L U' L U' L' U L' U2 L U2 L U L' U2' L", "L U2' L' U L U2 L U2 L' U L' U' L U' L U' L' U' L'"] },
          { name: 'L5+', algs: ["L' U2' L U L' U L2 U2' L' U' L U L' U2' L U' L'"] },
          { name: 'L5-', algs: ["L U2 L' U' L U' L2' U2 L U L' U' L U2 L' U L"] },
          { name: 'L6+', algs: ["L U L' U2 L U' L' U L U2 L2' U' L U' L' U2 L"] },
          { name: 'L6-', algs: ["L' U' L U2' L' U L U' L' U2' L2 U L' U L U2' L'"] },
        ],
      },
      {
        name: 'X (No blocks or headlights)',
        cases: [
          { name: 'X1', algs: ["F' U2' L' U2 L U' L' U' L U2 F L U L' U2 L U2 L'"], comment: "all Z" },
          { name: 'X2', algs: ["F' L' U' L F' U' L U F U' L2' U2 L F"] },
          { name: 'X3', algs: ["L U L' U L U2' L2' U' L U2' L U2 L2' U L U2' L U' L'", "L2' U' L2 U' L' U2 L U' L U2 L' U' L U' L2' U' L' U L2", "L' U' L2 U2' L2' U2' L2 y L U L' U2' L U L' U' BL'"] },
          { name: 'X4', algs: ["L U L2' U L U' L' U L2 U L2' U' L U L' U' L2 U2' L'"] },
          { name: 'X5+', algs: ["L' U L U2 L' U2 L U L2' U' L U' L' U' L U2 L' U L2", "L2 U L' U2 L U' L' U' L U' L2' U L U2 L' U2 L U L'"], comment: "M but with Z instead of block, left arrow" },
          { name: 'X5-', algs: ["L U' L' U2' L U2' L' U' L2 U L' U L U L' U2' L U' L2'", "L2' U' L U2' L' U L U L' U L2 U' L' U2' L U2' L' U' L"], comment: "M but with Z instead of block, right arrow" },
          { name: 'X6+', algs: ["L' U2 L' U' L2 U' L' U' L U L' U L' U L2 U' L' U2' L", "BL L U L' U' L U' L2' U' BL' U' BL U2 L U' L U L' BL'"] },
          { name: 'X6-', algs: ["L U2' L U L2' U L U L' U' L U' L U' L2' U L U2 L'", "F' L' U' L U L' U L2 U F U F' U2' L' U L' U' L F"] },
          { name: 'X7+', algs: ["L' U' L2 F L' U2 L' U L U2 L F' L' U' L' U' L U2 L' U L"] },
          { name: 'X7-', algs: ["L2' U L2 U F' U' F L2' U2 L2 U' L2' U2' L2 F' U F", "L' U' L U F U F' U' L' U' L U' L' U2 F' L F L' U' L' U L2"] },
        ],
      },
    ],
  },
]

let _: ICaseListV2 = yml

const MegaNoGrouping: IAlgSetV2 = {
  options: Options,
  sets: [
    {
      name: "WIP Format",
      children: Object.assign(_)
    },
  ]
}

const MegaGroupByLetter: IAlgSetV2 = {
  options: Options,
  sets: [
    {
      name: "A",
      children: Object.assign([_['A1+'], _['A1-'], _['A2+'], _['A2-']])
    },
    {
      name: "B",
      children: Object.assign([_['B1+'], _['B1-'], _['B2+'], _['B2-']])
    },
    {
      name: "C",
      children: Object.assign([_['C1+'], _['C1-'], _['C2+'], _['C2-'], _['C3+'], _['C3-'], _['C4+'], _['C4-'], _['C5+'], _['C5-'], _['C6+'], _['C6-']])
    },
    {
      name: "D",
      children: Object.assign([_['D+'], _['D-']])
    },
    {
      name: "E",
      children: Object.assign([_['E1'], _['E2'], _['E3']])
    },
    {
      name: "F",
      children: Object.assign([_['F1+'], _['F1-'], _['F2+'], _['F2-'], _['F3+'], _['F3-'], _['F4+'], _['F4-'], _['F5+'], _['F5-']]),
    },
    {
      name: "G",
      children: Object.assign([_['G1+'], _['G1-'], _['G2+'], _['G2-']])
    },
    {
      name: "H",
      children: Object.assign([_['H1+'], _['H1-'], _['H2+'], _['H2-']])
    },
    {
      name: "I",
      children: Object.assign([_['I1+'], _['I1-'], _['I2+'], _['I2-'], _['I3+'], _['I3-'], _['I4+'], _['I4-'], _['I5+'], _['I5-'], _['I6+'], _['I6-']])
    },
    {
      name: "J",
      children: Object.assign([_['J1+'], _['J1-'], _['J2+'], _['J2-'], _['J3+'], _['J3-']])
    },
    {
      name: "K",
      children: Object.assign([_['K1+'], _['K1-'], _['K2+'], _['K2-']])
    },
    {
      name: "L",
      children: Object.assign([_['L1'], _['L2'], _['L3+'], _['L3-'], _['L4+'], _['L4-'], _['L5+'], _['L5-'], _['L6+'], _['L6-']])
    },
    {
      name: "M",
      children: Object.assign([_['M']])
    },
    {
      name: "N",
      children: Object.assign([_['N1+'], _['N1-'], _['N2+'], _['N2-']])
    },
    {
      name: "P",
      children: Object.assign([_['P1+'], _['P1-'], _['P2+'], _['P2-'], _['P3+'], _['P3-'], _['P4+'], _['P4-']])
    },
    {
      name: "Q",
      children: Object.assign([_['Q1+'], _['Q1-'], _['Q2+'], _['Q2-']])
    },
    {
      name: "R",
      children: Object.assign([_['R1+'], _['R1-'], _['R2+'], _['R2-'], _['R3+'], _['R3-'], _['R4+'], _['R4-']])
    },
    {
      name: "S",
      children: Object.assign([_['S1+'], _['S1-'], _['S2+'], _['S2-'], _['S3+'], _['S3-'], _['S4+'], _['S4-'], _['S5+'], _['S5-'], _['S6+'], _['S6-']])
    },
    {
      name: "T",
      children: Object.assign([_['T1'], _['T2+'], _['T2-'], _['T3+'], _['T3-'], _['T4+'], _['T4-']])
    },
    {
      name: "U",
      children: Object.assign([_['U1+'], _['U1-'], _['U2+'], _['U2-']])
    },
    {
      name: "V",
      children: Object.assign([_['V1+'], _['V1-'], _['V2+'], _['V2-'], _['V3+'], _['V3-'], _['V4+'], _['V4-']])
    },
    {
      name: "W",
      children: Object.assign([_['W']])
    },
    {
      name: "X",
      children: Object.assign([_['X1'], _['X2'], _['X3'], _['X4'], _['X5+'], _['X5-'], _['X6+'], _['X6-'], _['X7+'], _['X7-']])
    },
    {
      name: "Y",
      children: Object.assign([_['Y1+'], _['Y1-'], _['Y2+'], _['Y2-'], _['Y3+'], _['Y3-']])
    },
    {
      name: "Z",
      children: Object.assign([_['Z1'], _['Z2'], _['Z3']])
    },
  ]
}
console.log (MegaGroupByLetter.sets[0])

export { MegaNoGrouping, MegaGroupByLetter }