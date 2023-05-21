import { Alg } from "cubing/alg"
import { backMoveGroups, baseMoveGroups, mirrorMoveGroups, puzzleDefinitionMapping, substitutionGroups } from "./algConstants"
import type { IAlgSetV2, IModifiersList, twistyPuzzleTypeWithChirality } from "./types"

export const removePrePostAUF = (a: string): string => {
  // remove brackets and replace with a pause after
  // functionality moved to expandAlgWithTriggers but keeping in incase I move triggers to using brackets or smth
  return a.replace(/\[(.*)\]/, '$1 . ')
}

export const convert4x4NotationToTwizzle = (a: string): string => {
  // there better not be algs with wide moves, ig i could rewrite them as 3Rw but its kinda...
  return a.replace("r", "2R")
}

export const mirrorAlg = (a: string, pzl: twistyPuzzleTypeWithChirality ): string => {
  const baseMovesArray = baseMoveGroups[pzl]
  const mirrorMovesArray = mirrorMoveGroups[pzl]
  if (!baseMovesArray || !mirrorMovesArray) { return '' }
  let aArr: string[] = a.split(' ')
  aArr.forEach((move, i) => {
    aArr[i] = mirrorMovesArray[baseMovesArray.indexOf(move)]
  })
  return aArr.join(" ")
}
//TODO: finish logic
// export const mirrorSet = (s: IAlgSetV2): IAlgSetV2 => {
//     s.options.puzzle = puzzleDefinitionMapping[s.options.puzzle]?.mirror
// }

export const backAlg = (a: string, pzl: keyof typeof baseMoveGroups ): string => {
  const baseMovesArray = baseMoveGroups[pzl]
  const backMovesArray = backMoveGroups[pzl]
  if (!baseMovesArray || !backMovesArray) { return '' }
  let aArr: string[] = a.split(' ')
  aArr.forEach((move, i) => {
    aArr[i] = backMovesArray[baseMovesArray.indexOf(move)]
  })
  return aArr.join(" ")
}

export const invertAlg = (a: string): string => {
  return new Alg(a).invert().toString(); 
}

//TODO: implement
export const invertTriggerAlg = (a: string) => {
}

export const repeatAlg = (a: string, q: number): string => {
  let res = new Alg(a)
  for (let i = 1; i < q; i++) { res = res.concat(a) }
  return res.toString()
}

export const simplifyAlg = (a: string): string => {
  return new Alg(a).experimentalSimplify({cancel: true}).toString()
}

let modifiersList: Record<IModifiersList, (a: string, pzl: twistyPuzzleTypeWithChirality) => string> = {
  "INVERSE": (a, pzl) => { return invertAlg(a) },
  "LEFTY": (a, pzl) => { return mirrorAlg(a, pzl) },
  "BACK": (a, pzl) => { return backAlg(a, pzl) },
  "DOUBLE": (a, pzl) => { return repeatAlg(a, 2) },
  "TRIPLE": (a, pzl) => { return repeatAlg(a, 3) },
}

export const getTriggerAlg = (t: string, pzl: keyof typeof substitutionGroups): string => {
  let triggerList: [...IModifiersList[], string] = t.split(' ') as [...IModifiersList[], string]
  let currTrigger = substitutionGroups[pzl]?.find(item => item.name === triggerList.at(-1))
  if (!currTrigger) { return '' }
  triggerList.pop() // remove base trigger and leave only modifiers
  while (triggerList.length) {
    let modifier = triggerList.pop()
    if (!modifier) { break }
    if (Object.keys(modifiersList).includes(modifier)) {
      currTrigger.alg = modifiersList[modifier as IModifiersList](currTrigger.alg, pzl) 
    }
  }
  return currTrigger.alg
}

export const isTriggerRegex: RegExp = /\[(.*?)\]/g

// TODO: allow multiple layers of expanding algs (would allow definitions of triggers to use triggers)
export const expandAlgWithTriggers = (a: string, pzl: keyof typeof substitutionGroups): string => {
  const getTriggerAlgWrapper = (b: string) => { return getTriggerAlg(b, pzl) } // curry away puzzle type to allow func call bind
  return simplifyAlg(a.replaceAll(isTriggerRegex, Function.prototype.call.bind(getTriggerAlgWrapper)))
}