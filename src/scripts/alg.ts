import { Alg } from "cubing/alg"
import { baseMoveGroups, mirrorMoveGroups, substitutionGroups } from "./algConstants"

export const removePrePostAUF = (a: string): string => {
  // remove brackets and replace with a pause after
  // functionality moved to expandAlgWithTriggers but keeping in incase I move triggers to using brackets or smth
  return a.replace(/\[(.*)\]/, '$1 . ')
}

export const convert4x4NotationToTwizzle = (a: string): string => {
  // there better not be algs with wide moves, ig i could rewrite them as 3Rw but its kinda...
  return a.replace("r", "2R")
}

export const mirrorAlg = (a: string, pzl: keyof typeof baseMoveGroups ): string => {
  const baseMovesArray = baseMoveGroups[pzl]
  const mirrorMovesArray = mirrorMoveGroups[pzl]
  if (!baseMovesArray || !mirrorMovesArray) { return '' }
  let aArr: string[] = a.split(' ')
  aArr.forEach((move, i) => {
    aArr[i] = mirrorMovesArray[baseMovesArray.indexOf(move)]
  })
  return aArr.join(" ")
}

export const invertAlg = (a: string): string => {
  return new Alg(a).invert.toString()
}

export const simplifyAlg = (a: string): string => {
  return new Alg(a).experimentalSimplify({cancel: true}).toString()
}

export const getTriggerAlg = (t: string, pzl: keyof typeof substitutionGroups): string => {
  console.log(t)
  let currTrigger = substitutionGroups[pzl]?.find(item => item.name === t)
  return currTrigger ? currTrigger.alg : ''
}

// TODO: allow multiple layers of expanding algs (would allow definitions of triggers to use triggers)
export const expandAlgWithTriggers = (a: string): string => {
  return simplifyAlg(a.replaceAll(/\[(.*?)\]/g, Function.prototype.call.bind(getTriggerAlg)))
}