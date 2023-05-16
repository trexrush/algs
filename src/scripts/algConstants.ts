// TODO: algorithmically handle INVERSE and DOUBLE and LEFTY and BACK

import type { twistyPuzzleType } from "./types"

type modularPuzzleGroup<T> = Partial<Record<twistyPuzzleType | 'megaminx-lefty', T>>

const cubeRotations = [
    { name: "y", alg: "y . " },
    { name: "y'", alg: "y' . " },
    { name: "y2", alg: "y2 . " },
    { name: "y2'", alg: "y2' . " },
    { name: "z", alg: "y . " },
    { name: "z'", alg: "z' . " },
    { name: "z2", alg: "z2 . " },
    { name: "z2'", alg: "z2' . " },
    { name: "x", alg: "x . " },
    { name: "x'", alg: "x' . " },
    { name: "x2", alg: "x2 . " },
    { name: "x2'", alg: "x2' . " },
    { name: "U", alg: "U . " },
    { name: "U'", alg: "U' . " },
    { name: "U2", alg: "U2 . " },
    { name: "U2'", alg: "U2' . " },
]

// TODO: add all of the PLLs here apparently lol thanks PLL parity sheet
const pllSubstitutes = [
    // { name: "Aa Perm", alg: "" },
    // { name: "Ab Perm", alg: "" },
    // { name: "E Perm", alg: "" },
    // { name: "F Perm", alg: "" },
    // { name: "H Perm", alg: "" },
    // { name: "Ja Perm", alg: "" },
    // { name: "Jb Perm", alg: "" },
    // { name: "Ra Perm", alg: "" },
    // { name: "Rb Perm", alg: "" },
    { name: "T Perm", alg: ". . R U R' U' R' F R2 U' R' U' R U R' F'" },
    // { name: "Ua Perm", alg: "" },
    // { name: "Ub Perm", alg: "" },
    // { name: "V Perm", alg: "" },
    // { name: "Y Perm", alg: "" },
    // { name: "Z Perm", alg: "" },
]

const zbllSubstitutes = [
    { name: "T ZBLL", alg: ". . L' U' L' D' L U L' D L2" },
    { name: "U ZBLL", alg: ". . L2 D l' U2' l D' L' U2' L'" },
    { name: "L ZBLL", alg: ". . U L' U2' L' D' L U2 L' D L2" },
]

const bigCubeSubstitutes = [
    { name: "OPP", alg: ". . Uw2 r2 Uw2 r2 U2 r2" },
    { name: "DREW", alg: "" },
    { name: "LUCAS", alg: "" },
    { name: "FRONT", alg: "" }, // same as above for the purpose of triggers
]

const megaSubstitutes = [
    { name: "x", alg: "dL' R" },
    { name: "x'", alg: "dL R'" },
]
const megaLeftySubstitutes = [
    { name: "x", alg: "dR L'" },
    { name: "x'", alg: "dR' L" },
]

const triggers = [
    { name:"CANCEL", alg: "" },
    { name: "SEXY", alg: "R U R' U'" },
    { name: "XESY", alg: "U R U' R'" }, // name help? or just remove and use 'INVERSE' modifier
    { name: "SLEDGE", alg: "R' F R F'" },
    { name: "HEDGE", alg: "F R' F' R" },
    { name: "SU", alg: "R U R' U" },
    { name: "NE", alg: "R U2' R'" },
    { name: "YPERMSTART", alg: "F R U' R'" }, // name help?
    { name: "JPERMSTART", alg: "R U R' F'" }, // name help?
    { name: "NPERMSTART", alg: "R' U R U'" }, // name help?
    { name: "VPERMSTART", alg: "R' U R' U'" }, // name help?
    { name: "MEGASLEDGE", alg: "R' F' R F" },
    { name: "OHSWAG", alg: "L U' R U L'" },
    { name: "SUNE", alg: "R U R' U R U2' R'" },
    { name: "ANTISUNE", alg: "R U2' R' U' R U' R'" },
    { name: "FATSUNE", alg: "r U R' U R U2 r'" },
    { name: "NIKLAS", alg: "R U' L' U R' U' L" },
    { name: "ADJFLIP", alg: "r U R' U' M U R U' R'" },
    { name: "OPPFLIP", alg: "R U R' U' M' U R U' R'" },
    { name: "U COMM", alg: "R' D' R U R' D R" },
    { name: "U' COMM", alg: "R' D' R U' R' D R" },
    { name: "U2 COMM", alg: "R' D' R U2 R' D R" },
]

export const substitutionGroups: modularPuzzleGroup<Array<{ name: string, alg: string }>> = {
    "3x3x3": [...triggers, ...cubeRotations, ...zbllSubstitutes, ...pllSubstitutes],
    "2x2x2": [...triggers, ...cubeRotations],
    "4x4x4": [...triggers, ...cubeRotations, ...pllSubstitutes],
    "megaminx": [...triggers, ...megaSubstitutes],
    "megaminx-lefty": [...triggers, ...megaLeftySubstitutes]
}

// im sorry to the gods of hardcoding but cubingJS doesnt have a mirror function somehow? discrimination against left handed ppl smh
// TODO - big cube move module
const baseMoves = [
    "U", "R", "L", "D", "B", "F", "u", "r", "l", "d", "b", "f",
    "U'", "R'", "L'", "D'", "B'", "F'", "u'", "r'", "l'", "d'", "b'", "f'",
    "U2", "R2", "L2", "D2", "B2", "F2", "u2", "r2", "l2", "d2", "b2", "f2",
    "U2'", "R2'", "L2'", "D2'", "B2'", "F2'", "u2'", "r2'", "l2'", "d2'", "b2'", "f2'",
]
const baseRotations = [
    "x", "y", "z",
    "x'", "y'", "z'",
    "x2", "y2", "z2",
    "x2'", "y2'", "z2'",
]
const baseSlices = [
    "M", "E", "S",
    "M'", "E'", "S'",
    "M2", "E2", "S2",
    "M2'", "E2'", "S2'",
]
const baseMega = [
    "BL", "BR", "FL", "FR", "DL", "DR", "bl", "br", "fl", "fr", "dl", "dr",
    "BL'", "BR'", "FL'", "FR'", "DL'", "DR'", "bl'", "br'", "fl'", "fr'", "dl'", "dr'",
    "BL2", "BR2", "FL2", "FR2", "DL2", "DR2", "bl2", "br2", "fl2", "fr2", "dl2", "dr2",
    "BL2'", "BR2'", "FL2'", "FR2'", "DL2'", "DR2'", "bl2'", "br2'", "fl2'", "fr2'", "dl2'", "dr2'",
]
const baseMegaF = [
    "F", "f",
    "F'", "f'",
    "F2", "f2",
    "F2'", "f2'",
]

const mirrorMoves = [
    "U'", "L'", "R'", "D'", "B'", "F'", "u'", "l'", "r'", "d'", "b'", "f'",
    "U", "L", "R", "D", "B", "F", "u", "l", "r", "d", "b", "f",
    "U2'", "L2'", "R2'", "D2'", "B2'", "F2'", "u2'", "l2'", "r2'", "d2'", "b2'", "f2'",
    "U2", "L2", "R2", "D2", "B2", "F2", "u2", "l2", "r2", "d2", "b2", "f2",
]
const mirrorRotations = [
    "x", "y'", "z'",
    "x'", "y", "z",
    "x2", "y2'", "z2'",
    "x2'", "y2", "z2",
]
const mirrorSlices = [
    "M", "E'", "S'",
    "M'", "E", "S",
    "M2", "E2'", "S2'",
    "M2'", "E2", "S2",
]
const mirrorMega = [
    "BR'", "BL'", "FR'", "FL'", "DR'", "DL'", "br'", "bl'", "fr'", "fl'", "dr'", "dl'",
    "BR", "BL", "FR", "FL", "DR", "DL", "br", "bl", "fr", "fl", "dr", "dl",
    "BR2'", "BL2'", "FR2'", "FL2'", "DR2'", "DL2'", "br2'", "bl2'", "fr2'", "fl2'", "dr2'", "dl2'",
    "BR2", "BL2", "FR2", "FL2", "DR2", "DL2", "br2", "bl2", "fr2", "fl2", "dr2", "dl2",
]
const mirrorMegaF = [
    "F", "f",
    "F'", "f'",
    "F2", "f2",
    "F2'", "f2'",
]

const backMoves = [
    "U'", "R'", "L'", "D'", "F'", "B'", "u'", "r'", "l'", "d'", "f'", "b'",
    "U", "R", "L", "D", "F", "B", "u", "r", "l", "d", "f", "b",
    "U2'", "R2'", "L2'", "D2'", "F2'", "B2'", "u2'", "r2'", "l2'", "d2'", "f2'", "b2'",
    "U2", "R2", "L2", "D2", "F2", "B2", "u2", "r2", "l2", "d2", "f2", "b2",
]
const backRotations = [
    "x'", "y'", "z",
    "x", "y", "z'",
    "x2'", "y2'", "z2",
    "x2", "y2", "z2'",
]
const backSlices = [
    "M'", "E'", "S",
    "M", "E", "S'",
    "M2'", "E2'", "S2",
    "M2", "E2", "S2'",
]
const backMega = [
    "F'", "F'", "DL'", "DR'", "BL'", "BR'", "f'", "f'", "dl'", "dr'", "fl'", "fr'",
    "F", "F", "DL", "DR", "BL", "BR", "f", "f", "dl", "dr", "fl", "fr",
    "F2'", "F2'", "DL2'", "DR2'", "BL2'", "BR2'", "f2'", "f2'", "dl2'", "dr2'", "fl2'", "fr2'",
    "F2", "F2", "DL2", "DR2", "BL2", "BR2", "f2", "f2", "dl2'", "dr2", "fl2", "fr2",
]
const backLeftMegaF = [
    "BL'", "bl'",
    "BL", "bl",
    "BL2'", "bl2'",
    "BL2", "bl2",
]
const backRightMegaF = [
    "BR'", "br'",
    "BR", "br",
    "BR2'", "br2'",
    "BR2", "br2",
]


export const baseMoveGroups: modularPuzzleGroup<string[]> = {
    "3x3x3": [...baseMoves, ...baseRotations, ...baseSlices],
    "2x2x2": [...baseMoves, ...baseRotations],
    "megaminx": [...baseMegaF, ...baseMega, ...baseMoves],
    "megaminx-lefty": [...baseMegaF, ...baseMega, ...baseMoves]
}
export const mirrorMoveGroups: modularPuzzleGroup<string[]> = {
    "3x3x3": [...mirrorMoves, ...mirrorRotations, ...mirrorSlices],
    "2x2x2": [...mirrorMoves, ...mirrorRotations],
    "megaminx": [...mirrorMegaF, ...mirrorMega, ...mirrorMoves],
    "megaminx-lefty": [...mirrorMegaF, ...mirrorMega, ...mirrorMoves]
}
// megaminx F would be mapped to B', (which is not intentional, should be BL' or BR'), 
// so earlier moves are set to take precedence and megaminx modules need to go first
export const backMoveGroups: modularPuzzleGroup<string[]> = {
    "3x3x3": [...backMoves, ...backRotations, ...backSlices],
    "2x2x2": [...backMoves, ...backRotations],
    "megaminx": [...backRightMegaF, ...backMega, ...backMoves],
    "megaminx-lefty": [...backLeftMegaF, ...backMega, ...backMoves]
}

export type IModifiersList = "INVERSE" | "BACK" | "LEFTY" | "DOUBLE" | "TRIPLE"