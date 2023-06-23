import type { PuzzleSpecificSimplifyOptions } from "cubing/dist/types/alg";
import type { modularPuzzleGroup, twistyPuzzleType, twistyPuzzleTypeWithChirality } from "./types"
import { cube3x3x3 } from "cubing/puzzles";

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

const pllSubstitutes = [
    { name: "Aa_PERM", alg: "x R' U R' D2' R U' R' D2' R2 x'" },
    { name: "Ab_PERM", alg: "x R2' D2' R U R' D2' R U' R x'" },
    { name: "E_PERM", alg: "x' R U' R' D R U R' D' R U R' D R U' R' D' x" },
    { name: "F_PERM", alg: "R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R" },
    { name: "H_PERM", alg: "M2 U M2 U2 M2 U M2" },
    { name: "Ja_PERM", alg: "x R2 F R F' R U2' r' U r U2 x'" },
    { name: "J_PERM", alg: "R U R' F' R U R' U' R' F R2 U' R'" },
    { name: "Jb_PERM", alg: "R U R' F' R U R' U' R' F R2 U' R'" },
    { name: "Ra_PERM", alg: "R U' R' U' R U R D R' U' R D' R' U2 R'" },
    { name: "Rb_PERM", alg: "R' U2 R' D' R U' R' D R U R U' R' U' R" },
    { name: "T_PERM", alg: "R U R' U' R' F R2 U' R' U' R U R' F'" },
    { name: "Ua_PERM", alg: "R U R' U R' U' R2 U' R' U R' U R" },
    { name: "Ub_PERM", alg: "R' U R' U' R3 U' R' U R U R2'" },
    { name: "V_PERM", alg: "R' U R' U' R D' R' D R' U D' R2 U' R2' D R2" },
    { name: "Y_PERM", alg: "F R U' R' U' R U R' F' R U R' U' R' F R F'" },
    { name: "Z_PERM", alg: "M' U M2' U M2' U M' U2 M2'" },
]

const zbllSubstitutes = [
    { name: "T_ZBLL", alg: ". . L' U' L' D' L U L' D L2" },
    { name: "U_ZBLL", alg: ". . L2 D l' U2' l D' L' U2' L'" },
    { name: "L_ZBLL", alg: ". . U L' U2' L' D' L U2 L' D L2" },
]

const bigCubeSubstitutes = [
    { name: "OPP", alg: "Uw2' r2 Uw2' r2 U2' r2" },
    { name: "DREW", alg: "Rw2 B2' Rw' U2 Rw' U2 x' U2' Rw' U2 Rw U2' Rw' U2 Rw2 U2 x" },
    { name: "LUKE", alg: "Rw' U2' Rw U2 Rw' F2 Rw2 U2' Rw U2 Rw' U2' F2 Rw2 F2'" },
    { name: "LUCAS", alg: "Rw U2 Rw x U2 Rw U2 Rw' U2 Lw U2 Rw' U2 Rw U2 Rw' U2 Rw'" },
    { name: "Ja_PERM", alg: "x R2 F R F' R U2' 3Rw' U 3Rw U2 x'" },
]

const megaSubstitutes = [
    { name: "SUPERSUNE", alg: "R2 U R2' U R2 U2' R2'" },
    { name: "SUPERANTISUNE", alg: "R2 U2 R2' U' R2 U' R2'" },
    { name: "ANTISUNE", alg: "R U2 R' U' R U' R'" },
    { name: "MEGALOOP", alg: "R2 U2' R2' U' R2 U2' R2'" },
    { name: "ANTILOOP", alg: "R2' U2 R2 U R2' U2 R2" },
]

const megaRightySubstitutes = [
    { name: "x", alg: "dL' R" },
    { name: "x'", alg: "dL R'" },
    ...megaSubstitutes
]
const megaLeftySubstitutes = [
    { name: "x", alg: "dR L'" },
    { name: "x'", alg: "dR' L" },
    ...megaSubstitutes
]

const baseTriggers = [
    { name:"CANCEL", alg: "" },
    { name: "SEXY", alg: "R U R' U'" },
    { name: "INVSEXY", alg: "U R U' R'" }, // same as below
    { name: "UNSEXY", alg: "U R U' R'" }, // same as above
    { name: "SLEDGE", alg: "R' F R F'" },
    { name: "HEDGE", alg: "F R' F' R" },
    { name: "FATSLEDGE", alg: "r' F R F'" },
    { name: "FATSEXY", alg: "r U R' U'" },
    
    { name: "SUNE", alg: "R U R' U R U2' R'" },
    { name: "ANTISUNE", alg: "R U2' R' U' R U' R'" },
    { name: "FATSUNE", alg: "r U R' U R U2' r'" },
    { name: "FATANTISUNE", alg: "r U2' R' U' R U' r'" },
    { name: "NIKLAS", alg: "R U' L' U R' U' L" },
    { name: "ADJFLIP", alg: "r U R' U' M U R U' R'" },
    { name: "OPPFLIP", alg: "R U R' U' M' U R U' R'" },
    { name: "FRURUF", alg: "F R U R' U' F'" },
]

const rareTriggers = [
    { name: "SU", alg: "R U R' U" },
    { name: "NE", alg: "R U2' R'" },
    { name: "PAIR_U2", alg: "R U2' R'" }, // TODO - find what patrick / rami use
    { name: "PAIR_U'", alg: "R U' R'" }, // ^
    { name: "PAIR_U", alg: "R U R'" }, // ^
    { name: "YPERMSTART", alg: "F R U' R'" }, // name help?
    { name: "JPERMSTART", alg: "R U R' F'" }, // name help?
    { name: "NPERMSTART", alg: "R' U R U'" }, // name help?
    { name: "VPERMSTART", alg: "R' U R' U'" }, // name help?
    { name: "OHSLEDGE", alg: "r' F R F' M'" },
    { name: "FATSU", alg: "r U R' U" },
    { name: "FATNE", alg: "R U2' r'" },
    { name: "MEGASLEDGE", alg: "R' F' R F" },
    { name: "OHSWAG", alg: "L U' R U L'" },
    
    { name: "U_ZERO", alg: "R' D' R U R' D R" },
    { name: "U'_ZERO", alg: "R' D' R U' R' D R" },
    { name: "U2_ZERO", alg: "R' D' R U2 R' D R" },  
]

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
const tripleMoves = [
    "U3", "R3", "L3", "D3", "B3", "F3", "u3", "r3", "l3", "d3", "b3", "f3",
    "U3'", "R3'", "L3'", "D3'", "B3'", "F3'", "u3'", "r3'", "l3'", "d3'", "b3'", "f3'",
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
const wideMoves = [
    "Uw", "Rw", "Lw", "Dw", "Bw", "Fw", "2U", "2R", "2L", "2D", "2B", "2F",
    "Uw'", "Rw'", "Lw'", "Dw'", "Bw'", "Fw'", "2U'", "2R'", "2L'", "2D'", "2B'", "2F'",
    "Uw2", "Rw2", "Lw2", "Dw2", "Bw2", "Fw2", "2U2", "2R2", "2L2", "2D2", "2B2", "2F2",
    "Uw2'", "Rw2'", "Lw2'", "Dw2'", "Bw2'", "Fw2'", "2U2'", "2R2'", "2L2'", "2D2'", "2B2'", "2F2'",
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
const tripleMirrorMoves = [
    "U3'", "L3'", "R3'", "D3'", "B3'", "F3'", "u3'", "l3'", "r3'", "d3'", "b3'", "f3'",
    "U3", "L3", "R3", "D3", "B3", "F3", "u3", "l3", "r3", "d3", "b3", "f3",
]
const mirrorMega = [
    "BR'", "BL'", "FR'", "FL'", "DR'", "DL'", "br'", "bl'", "fr'", "fl'", "dr'", "dl'",
    "BR", "BL", "FR", "FL", "DR", "DL", "br", "bl", "fr", "fl", "dr", "dl",
    "BR2'", "BL2'", "FR2'", "FL2'", "DR2'", "DL2'", "br2'", "bl2'", "fr2'", "fl2'", "dr2'", "dl2'",
    "BR2", "BL2", "FR2", "FL2", "DR2", "DL2", "br2", "bl2", "fr2", "fl2", "dr2", "dl2",
]
const mirrorMegaF = [
    "F'", "f'",
    "F", "f",
    "F2'", "f2'",
    "F2", "f2",
]
const mirrorWideMoves = [
    "Uw'", "Lw'", "Rw'", "Dw'", "Bw'", "Fw'", "2U'", "2L'", "2R'", "2D'", "2B'", "2F'",
    "Uw", "Lw", "Rw", "Dw", "Bw", "Fw", "2U", "2L", "2L", "2D", "2B", "2F",
    "Uw2'", "Lw2'", "Rw2'", "Dw2'", "Bw2'", "Fw2'", "2U2'", "2L2'", "2R2'", "2D2'", "2B2'", "2F2'",
    "Uw2", "Lw2", "Rw2", "Dw2", "Bw2", "Fw2", "2U2", "2L2", "2R2", "2D2", "2B2", "2F2",
]

// TODO: dont reverse U2 and U2' (same with d2s) but do reverse for mega
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
const tripleBackMoves = [
    "U3'", "R3'", "L3'", "D3'", "F3'", "B3'", "u3'", "r3'", "l3'", "d3'", "f3'", "b3'",
    "U3", "R3", "L3", "D3", "F3", "B3", "u3", "r3", "l3", "d3", "f3", "b3",
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
const backWideMoves = [
    "Uw'", "Rw'", "Lw'", "Dw'", "Fw'", "Bw'", "2U'", "2R'", "2L'", "2D'", "2F'", "2B'",
    "Uw", "Rw", "Lw", "Dw", "Fw", "Bw", "2U", "2R", "2L", "2D", "2F", "2B",
    "Uw2'", "Rw2'", "Lw2'", "Dw2'", "Fw2'", "Bw2'", "2U2'", "2R2'", "2L2'", "2D2'", "2F2'", "2B2'",
    "Uw2", "Rw2", "Lw2", "Dw2", "Fw2", "Bw2", "2U2", "2R2", "2L2", "2D2", "2F2", "2B2",
]

export const puzzleDefinitionMapping: modularPuzzleGroup<{ 
    type: twistyPuzzleType, 
    standard: twistyPuzzleTypeWithChirality, 
    mirror: twistyPuzzleTypeWithChirality, 
    vc: string | number, 
    cancel?: PuzzleSpecificSimplifyOptions 
}> = {
    '3x3x3': { type: '3x3x3', standard: '3x3x3', mirror: '3x3x3', vc: 3, cancel: cube3x3x3.puzzleSpecificSimplifyOptions },
    '4x4x4': { type: '4x4x4', standard: '4x4x4', mirror: '4x4x4', vc: 4, cancel: { quantumMoveOrder: () => 4 } },
    '2x2x2': { type: '2x2x2', standard: '2x2x2', mirror: '2x2x2', vc: 2 },
    'megaminx': { type: 'megaminx', standard: 'megaminx', mirror: 'megaminx-lefty', vc: 'mega', cancel: { quantumMoveOrder: () => 5 } },
    'megaminx-lefty': { type: 'megaminx', standard: 'megaminx-lefty', mirror: 'megaminx', vc: 'mega', cancel: { quantumMoveOrder: () => 5 } },
}

const triggers = [...baseTriggers, ...rareTriggers]
const commonSubs = [...cubeRotations, ...triggers]
export const triggerSubstitutionGroups: modularPuzzleGroup<Array<{ name: string, alg: string }>> = {
    "3x3x3": [...pllSubstitutes, ...zbllSubstitutes, ...commonSubs],
    "2x2x2": [...cubeRotations, ...rareTriggers, ...baseTriggers],
    "4x4x4": [...bigCubeSubstitutes, ...pllSubstitutes, ...commonSubs],
    "megaminx": [...megaRightySubstitutes, ...pllSubstitutes, ...triggers],
    "megaminx-lefty": [...megaLeftySubstitutes, ...pllSubstitutes, ...triggers]
}

// TODO: slices arent working on bigs, talk to lucas garron about that and like the billion other things cubingjs
// hasnt implemented for my usecaser
export const baseMoveGroups: modularPuzzleGroup<string[]> = {
    "3x3x3": [...tripleMoves, ...baseSlices, ...baseRotations, ...baseMoves],
    "2x2x2": [...baseRotations, ...baseMoves],
    "4x4x4": [...wideMoves, ...tripleMoves, ...baseRotations, ...baseMoves],
    "megaminx": [...baseMegaF, ...baseMega, ...baseRotations, ...baseMoves],
    "megaminx-lefty": [...baseMegaF, ...baseMega, ...baseRotations, ...baseMoves]
}
export const mirrorMoveGroups: modularPuzzleGroup<string[]> = {
    "3x3x3": [...tripleMirrorMoves, ...mirrorSlices, ...mirrorRotations, ...mirrorMoves],
    "2x2x2": [...mirrorRotations, ...mirrorMoves],
    "4x4x4": [...mirrorWideMoves, ...tripleMirrorMoves, ...mirrorRotations, ...mirrorMoves],
    "megaminx": [...mirrorMegaF, ...mirrorMega, ...mirrorRotations,...mirrorMoves],
    "megaminx-lefty": [...mirrorMegaF, ...mirrorMega, ...mirrorRotations, ...mirrorMoves]
}
// megaminx F would be mapped to B', (which is not intentional, should be BL' or BR'), 
// so earlier moves are set to take precedence and megaminx modules need to go first
export const backMoveGroups: modularPuzzleGroup<string[]> = {
    "3x3x3": [ ...tripleBackMoves, ...backSlices, ...backRotations, ...backMoves],
    "2x2x2": [...backMoves, ...backRotations],
    "4x4x4": [...backWideMoves, ...tripleBackMoves, ...backRotations, ...backMoves],
    "megaminx": [...backRightMegaF, ...backMega, ...backRotations, ...backMoves],
    "megaminx-lefty": [...backLeftMegaF, ...backMega, ...backRotations, ...backMoves]
}