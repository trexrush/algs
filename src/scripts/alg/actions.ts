import { Alg } from "cubing/alg"
import type { twistyPuzzleType } from "../types"
import { matchAllParenthesis } from "./regex"
import { getConfig } from "../config/puzzle"

// ALG.TS, MODIFIER
export const mirrorAction = (a: string, pzl: twistyPuzzleType ): string => {
  const baseMovesArray = getConfig(pzl).baseMoves
  const mirrorMovesArray = getConfig(pzl).mirrorTranslation
  let aArr: string[] = a.replace(matchAllParenthesis, '').split(' ')
  aArr.forEach((move, i) => {
    aArr[i] = mirrorMovesArray[baseMovesArray.indexOf(move)]
  })
  return aArr.join(" ")
}

// MODIFIER ONLY
export const backAction = (a: string, pzl: twistyPuzzleType, isLefty: boolean): string => {
  const baseMovesArray: string[] = getConfig(pzl).baseMoves
  const backMovesArray: string[] = isLefty ? getConfig(pzl).backTranslation.left : getConfig(pzl).backTranslation.right
  if (baseMovesArray.length != backMovesArray.length) return '' // idiot proofing just in case
  let aArr: string[] = a.replace(matchAllParenthesis, '').split(' ')
  aArr.forEach((move, i) => {
    aArr[i] = backMovesArray[baseMovesArray.indexOf(move)]
  })
  return aArr.join(" ")
}

// MODIFIER ONLY
export const invertAction = (a: string): string => {
  return new Alg(a).invert().toString(); 
}

// MODIFIER ONLY
export const repeatAction = (a: string, q: number, pzl: twistyPuzzleType): string => {
  let res = (a + " ").repeat(q)
  return simplifyAlg(res, pzl)
}

export const simplifyAlg = (a: string, pzl: twistyPuzzleType): string => {
  return new Alg(a).experimentalSimplify({cancel: { directional: 'any-direction', puzzleSpecificModWrap: 'gravity' },
  puzzleSpecificSimplifyOptions: getConfig(pzl).cancel }).toString()
}