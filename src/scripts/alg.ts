import { Alg } from "cubing/alg"

// TODO: algorithmically handle INVERSE and DOUBLE and LEFTY and BACK
// TODO: add all of the PLLs here apparently lol thanks PLL parity sheet
export const triggers = [
  { name: "SEXY", alg: "R U R' U'" },
  { name: "SLEDGE", alg: "R' F R F'" },
  { name: "SUNE", alg: "R U R' U R U2' R'" },
  { name: "ANTISUNE", alg: "R U2 R' U' R U' R'" },
  { name: "T ZBLL", alg: ". . L' U' L' D' L U L' D L2" },
  { name: "U ZBLL", alg: ". . L2 D l' U2' l D' L' U2' L'" },
  { name: "L ZBLL", alg: ". . U L' U2' L' D' L U2 L' D L2" },
  // rotations
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
  // 4x4
  { name: "OPP", alg: ". . Uw2 r2 Uw2 r2 U2 r2" },
  { name: "DREW", alg: "" },
  { name: "LUCAS", alg: "" },
  { name: "FRONT", alg: "" }, // same as above for the purpose of triggers
]

// im sorry to the gods of hardcoding but cubingJS doesnt have a mirror function somehow? discrimination against left handed ppl smh
const baseMoves = [
  "U", "R", "L", "D", "B", "F", "M", "E", "S", "u", "r", "l", "d", "b", "f", "x", "y", "z",
  "U'", "R'", "L'", "D'", "B'", "F'", "M'", "E'", "S'", "u'", "r'", "l'", "d'", "b'", "f'", "x'", "y'", "z'",
  "U2", "R2", "L2", "D2", "B2", "F2", "M2", "E2", "S2", "u2", "r2", "l2", "d2", "b2", "f2", "x2", "y2", "z2",
  "U2'", "R2'", "L2'", "D2'", "B2'", "F2'", "M2'", "E2'", "S2'", "u2'", "r2'", "l2'", "d2'", "b2'", "f2'", "x2'", "y2'", "z2'",
  // mega moves
  "BL", "BR", "FL", "FR", "DL", "DR", "bl", "br", "fl", "fr", "dl", "dr", 
  "BL'", "BR'", "FL'", "FR'", "DL'", "DR'", "bl'", "br'", "fl'", "fr'", "dl'", "dr'", 
  "BL2", "BR2", "FL2", "FR2", "DL2", "DR2", "bl2", "br2", "fl2", "fr2", "dl2", "dr2", 
  "BL2'", "BR2'", "FL2'", "FR2'", "DL2'", "DR2'", "bl2'", "br2'", "fl2'", "fr2'", "dl2'", "dr2'", 
]

const mirrorMoves = [
  "U'", "L'", "R'", "D'", "B'", "F'", "M", "E'", "S'", "u'", "l'", "r'", "d'", "b'", "f'", "x'", "y'", "z'",
  "U", "L", "R", "D", "B", "F", "M'", "E", "S", "u", "l", "r", "d", "b", "f", "x", "y", "z",
  "U2'", "L2'", "R2'", "D2'", "B2'", "F2'", "M2", "E2'", "S2'", "u2'", "l2'", "r2'", "d2'", "b2'", "f2'", "x2'", "y2'", "z2'",
  "U2", "L2", "R2", "D2", "B2", "F2", "M2'", "E2", "S2", "u2", "l2", "r2", "d2", "b2", "f2", "x2", "y2", "z2",
  // mega moves
  "BR'", "BL'", "FR'", "FL'", "DR'", "DL'", "br'", "bl'", "fr'", "fl'", "dr'", "dl'", 
  "BR", "BL", "FR", "FL", "DR", "DL", "br", "bl", "fr", "fl", "dr", "dl", 
  "BR2'", "BL2'", "FR2'", "FL2'", "DR2'", "DL2'", "br2'", "bl2'", "fr2'", "fl2'", "dr2'", "dl2'", 
  "BR2", "BL2", "FR2", "FL2", "DR2", "DL2", "br2", "bl2", "fr2", "fl2", "dr2", "dl2", 
]

export const removePrePostAUF = (a: string): string => {
  // remove brackets and replace with a pause after
  // functionality moved to expandAlgWithTriggers but keeping in incase I move triggers to using brackets or smth
  return a.replace(/\[(.*)\]/, '$1 . ')
}

export const convert4x4NotationToTwizzle = (a: string): string => {
  // there better not be algs with wide moves, ig i could rewrite them as 3Rw but its kinda...
  return a.replace("r", "2R")
}

export const mirrorAlg = (a: string): string => {
  let aArr: string[] = a.split(' ')
  aArr.forEach((move, i) => {
    aArr[i] = mirrorMoves[baseMoves.indexOf(move)]
  })
  return aArr.join(" ")
}

export const invertAlg = (a: string): string => {
  return new Alg(a).invert.toString()
}

export const simplifyAlg = (a: string): string => {
  return new Alg(a).experimentalSimplify({cancel: true}).toString()
}


export const getTriggerAlg = (t: string): string => {
  console.log(t)
  let currTrigger = triggers.find(item => item.name === t)
  return currTrigger ? currTrigger.alg : ''
}

export const expandAlgWithTriggers = (a: string): string => {
  return simplifyAlg(a.replaceAll(/\[(.*?)\]/g, Function.prototype.call.bind(getTriggerAlg)))
}