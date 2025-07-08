import type { modularPuzzleGroup } from "../scripts/config/puzzle"

export type TTrigger = { name: string, alg: string }

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
  { name: "NEW_OPP", alg: "Rw2 B2 U2' Rw2' R2 U2' B2 Rw2'" },
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
  { name: "MEGASUNE", alg: "R U2 R' U R U2 R'" },
  { name: "MEGAANTISUNE", alg: "R U2' R' U' R U2' R'" },


]

const baseTriggers = [
  { name: "CANCEL", alg: "" },
  { name: "SEXY", alg: "R U R' U'" },
  { name: "UNSEXY", alg: "U R U' R'" },
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
  { name: "PAIR_U2", alg: "R U2' R'" },
  { name: "GO", alg: "R U' R'" },
  { name: "INSERT", alg: "R U' R'" }, // same as ^
  { name: "JOIN", alg: "R U R'" },
  { name: "SPLIT", alg: "R U R'" }, // same as ^
  { name: "FATSU", alg: "r U R' U" },
  { name: "FATNE", alg: "R U2' r'" },
  { name: "LONGSEXY", alg: "R U2 R' U'" },
  
  { name: "ANTILONG", alg: "R U2' R'" },
  { name: "LONG", alg: "R U2 R'" },
  { name: "SIDEGO", alg: "F' U F" },
  { name: "SIDEJOIN", alg: "F' U' F" },

  { name: "ZJOIN", alg: "R' D' R U R' D R" },
  { name: "ZGO", alg: "R' D' R U' R' D R" },
  { name: "ZNE", alg: "R' D' R U2 R' D R" },  
  
  { name: "YPERMSTART", alg: "F R U' R'" }, // name help?
  { name: "JPERMSTART", alg: "R U R' F'" }, // name help?
]

const triggers = [...baseTriggers, ...rareTriggers]
const commonSubs = [...cubeRotations, ...triggers]
export const triggerSubstitutionGroups: modularPuzzleGroup<TTrigger[]> = {
  "3x3x3": [...pllSubstitutes, ...zbllSubstitutes, ...commonSubs],
  "2x2x2": [...cubeRotations, ...rareTriggers, ...baseTriggers],
  "4x4x4": [...bigCubeSubstitutes, ...pllSubstitutes, ...commonSubs],
  "megaminx": [...megaSubstitutes, ...pllSubstitutes, ...triggers],
}