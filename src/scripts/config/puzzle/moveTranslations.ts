import type { modularPuzzleGroup } from "."

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

export const baseMoveGroups: modularPuzzleGroup<string[]> = {
  "3x3x3": [...tripleMoves, ...baseSlices, ...baseRotations, ...baseMoves],
  "2x2x2": [...baseRotations, ...baseMoves],
  "4x4x4": [...wideMoves, ...tripleMoves, ...baseRotations, ...baseMoves],
  "megaminx": [...baseMegaF, ...baseMega, ...baseRotations, ...baseMoves],
}
export const mirrorMoveGroups: modularPuzzleGroup<string[]> = {
  "3x3x3": [...tripleMirrorMoves, ...mirrorSlices, ...mirrorRotations, ...mirrorMoves],
  "2x2x2": [...mirrorRotations, ...mirrorMoves],
  "4x4x4": [...mirrorWideMoves, ...tripleMirrorMoves, ...mirrorRotations, ...mirrorMoves],
  "megaminx": [...mirrorMegaF, ...mirrorMega, ...mirrorRotations,...mirrorMoves],
}
// megaminx F would be mapped to B', (which is not intentional, should be BL' or BR'), 
// so earlier moves are set to take precedence and megaminx modules need to go first
export const backMoveGroups: modularPuzzleGroup<string[]> = {
  "3x3x3": [ ...tripleBackMoves, ...backSlices, ...backRotations, ...backMoves],
  "2x2x2": [...backMoves, ...backRotations],
  "4x4x4": [...backWideMoves, ...tripleBackMoves, ...backRotations, ...backMoves],
  "megaminx": [...backRightMegaF, ...backMega, ...backRotations, ...backMoves],
  "megaminx-l": [...backLeftMegaF, ...backMega, ...backRotations, ...backMoves]
}