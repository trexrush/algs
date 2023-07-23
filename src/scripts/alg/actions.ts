import { Alg } from "cubing/alg"
import { backMoveGroups, baseMoveGroups, mirrorMoveGroups } from "../config/puzzle/moveTranslations"
import type { twistyPuzzleTypeWithChirality } from "../types"
import { matchAllParenthesis } from "./regex"
import { puzzleMapping } from "../config/puzzle"

// ALG.TS, MODIFIER
export const mirrorAction = (a: string, pzl: twistyPuzzleTypeWithChirality ): string => {
  const baseMovesArray = baseMoveGroups[pzl]
  const mirrorMovesArray = mirrorMoveGroups[pzl]
  if (!baseMovesArray || !mirrorMovesArray) { return '' }
  let aArr: string[] = a.replace(matchAllParenthesis, '').split(' ')
  aArr.forEach((move, i) => {
    aArr[i] = mirrorMovesArray[baseMovesArray.indexOf(move)]
  })
  return aArr.join(" ")
}

// MODIFIER ONLY
export const backAction = (a: string, pzl: keyof typeof baseMoveGroups ): string => {
  const baseMovesArray = baseMoveGroups[pzl]
  const backMovesArray = backMoveGroups[pzl]
  if (!baseMovesArray || !backMovesArray) { return '' }
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
export const repeatAction = (a: string, q: number, pzl: twistyPuzzleTypeWithChirality): string => {
  let res = (a + " ").repeat(q)
  return simplifyAlg(res, pzl)
}

export const simplifyAlg = (a: string, pzl: twistyPuzzleTypeWithChirality): string => {
  return new Alg(a).experimentalSimplify({cancel: { directional: 'any-direction', puzzleSpecificModWrap: 'gravity' },
  puzzleSpecificSimplifyOptions: puzzleMapping[pzl]?.cancel }).toString()
}