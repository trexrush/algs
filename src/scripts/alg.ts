import { Alg, PuzzleSpecificSimplifyOptions } from "cubing/alg"
import { backMoveGroups, baseMoveGroups, mirrorMoveGroups, triggerSubstitutionGroups } from "./algConstants"
import type { IAlg, IOptions, ITrigger, TModifiersList, TNotationTargets, modularPuzzleGroup, twistyPuzzleType, twistyPuzzleTypeWithChirality } from "./types"
import { cube3x3x3 } from "cubing/puzzles";

export const convert4x4Notation = (a: string, to: 'vc' | 'cubingjs'): string => {
  const notation = {
    display: ["r", "r'", "r2", "r2'", "l", "l'", "l2", "l2'", "M", "M'", "M2", "M2'"],
    vc: ["Rw R'", "Rw' R", "Rw2 R2", "Rw2 R2", "Lw L'", "Lw' L", "Lw2 L2", "Lw2 L2", "M", "M'", "M2", "M2'"],
    cubingjs: ["2R", "2R'", "2R2", "2R2'", "2L", "2L'", "2L2", "2L2'", "m", "m'", "m2", "m2'"],
  }
  return a.split(' ').map(e => 
    notation.display.includes(e) 
      ? notation[to][notation.display.indexOf(e)]
      : e
    ).join(' ')

// Disp PuzzleGen Cubingjs
// r    Rw R'     2R      
// M    M         m       
}

// MOVABLE
//TODO: implement swapping triggers
export const mirrorAlg = (a: string, pzl: twistyPuzzleTypeWithChirality ): string => {
  const baseMovesArray = baseMoveGroups[pzl]
  const mirrorMovesArray = mirrorMoveGroups[pzl]
  if (!baseMovesArray || !mirrorMovesArray) { return '' }
  let aArr: string[] = a.replace(matchAllParenthesis, '').split(' ')
  aArr.forEach((move, i) => {
    aArr[i] = mirrorMovesArray[baseMovesArray.indexOf(move)]
  })
  return aArr.join(" ")
}

// MOVABLE
export const mirrorAlgOverrideTriggers = (a: string, pzl: twistyPuzzleTypeWithChirality) => {
  return mirrorAlg(expandAlgWithTriggers(a, pzl), pzl)
}

// MOVABLE
export const backAlg = (a: string, pzl: keyof typeof baseMoveGroups ): string => {
  const baseMovesArray = baseMoveGroups[pzl]
  const backMovesArray = backMoveGroups[pzl]
  if (!baseMovesArray || !backMovesArray) { return '' }
  let aArr: string[] = a.replace(matchAllParenthesis, '').split(' ')
  aArr.forEach((move, i) => {
    aArr[i] = backMovesArray[baseMovesArray.indexOf(move)]
  })
  return aArr.join(" ")
}

// MOVABLE
export const invertAlg = (a: string): string => {
  return new Alg(a).invert().toString(); 
}

export const repeatAlg = (a: string, q: number, pzl: twistyPuzzleTypeWithChirality): string => {
  let res = (a + " ").repeat(q)
  return simplifyAlg(res, pzl)
}

export const simplifyAlg = (a: string, pzl: twistyPuzzleTypeWithChirality): string => {
  return new Alg(a).experimentalSimplify({cancel: { directional: 'any-direction', puzzleSpecificModWrap: 'gravity' },
  puzzleSpecificSimplifyOptions: puzzleDefinitionMapping[pzl]?.cancel }).toString()
}

export const modifierActionsList: Record<TModifiersList, { action: (a: string, pzl: twistyPuzzleTypeWithChirality) => string, text: string }> = {
  "INVERSE": { action: (a, pzl) => { return invertAlg(a) }, text: 'INV'},
  "LEFTY": { action: (a, pzl) => { return mirrorAlgOverrideTriggers(a, pzl) }, text: 'LEFT'},
  "LEFT": { action: (a, pzl) => { return mirrorAlgOverrideTriggers(a, pzl) }, text: 'LEFT'},
  "L": { action: (a, pzl) => { return mirrorAlgOverrideTriggers(a, pzl) }, text: 'LEFT'},
  "BACK": { action: (a, pzl) => { return backAlg(a, pzl) }, text: 'BACK'},
  "B": { action: (a, pzl) => { return backAlg(a, pzl) }, text: 'BACK'},
  "DOUBLE": { action: (a, pzl) => { return repeatAlg(a, 2, pzl) }, text: '2x'},
  "X2": { action: (a, pzl) => { return repeatAlg(a, 2, pzl) }, text: '2x'},
  "TRIPLE": { action: (a, pzl) => { return repeatAlg(a, 3, pzl) }, text: '3x'},
  "X3": { action: (a, pzl) => { return repeatAlg(a, 3, pzl) }, text: '3x'},
}

export const getTriggerAlg = (t: string, pzl: twistyPuzzleTypeWithChirality): string => {
  let triggerList: [...TModifiersList[], string] = t.split(' ') as [...TModifiersList[], string]
  // https://stackoverflow.com/questions/7574054/javascript-how-to-pass-object-by-value (how did I miss this)
  let currTrigger = structuredClone(triggerSubstitutionGroups[pzl]?.find(item => item.name === triggerList.at(-1)))
  if (!currTrigger) { return '' }
  triggerList.pop() // remove base trigger and leave only modifiers
  while (triggerList.length) {
    let modifier = triggerList.pop()
    if (!modifier) { break }
    if (Object.keys(modifierActionsList).includes(modifier)) {
      currTrigger.alg = modifierActionsList[modifier as TModifiersList].action(currTrigger.alg, pzl) 
    }
  }
  return currTrigger.alg
}

export const isTriggerRegex: RegExp = /\[(.*?)\]/g
// https://stackoverflow.com/questions/19414193/regex-extract-string-not-between-two-brackets
export const algDelimiterWithTriggers: RegExp = /[\s\(\)]+(?![^\[]*\])/g
export const matchAllParenthesis: RegExp =  /([\(\)])/g

// TODO: allow multiple layers of expanding algs (would allow definitions of triggers to use triggers)
export const expandAlgWithTriggers = (a: string, pzl: twistyPuzzleTypeWithChirality): string => {
  const getTriggerAlgWrapper = (b: string) => { return getTriggerAlg(b, pzl) } // curry away puzzle type to allow func call bind
  return simplifyAlg(a.replaceAll(isTriggerRegex, Function.prototype.call.bind(getTriggerAlgWrapper)), pzl)
}

export const checkIfHasTriggers = (a: string): boolean => {
  return a.match(isTriggerRegex) != null ? true : false
}

export const puzzleDefinitionMapping: modularPuzzleGroup<{ 
  type: twistyPuzzleType, 
  standard: twistyPuzzleTypeWithChirality, 
  mirror: twistyPuzzleTypeWithChirality, 
  vc: string | number, 
  cancel?: PuzzleSpecificSimplifyOptions,
  notation?: (a: string, to: "vc" | "cubingjs") => string,
}> = {
  '3x3x3': { 
    type: '3x3x3', standard: '3x3x3', mirror: '3x3x3', vc: 3, 
    cancel: cube3x3x3.puzzleSpecificSimplifyOptions 
  },
  '4x4x4': { 
    type: '4x4x4', standard: '4x4x4', mirror: '4x4x4', vc: 4, 
    cancel: { quantumMoveOrder: () => 4 }, 
    notation: (a, to) => { return convert4x4Notation(a, to) }
  },
  '2x2x2': { 
    type: '2x2x2', standard: '2x2x2', mirror: '2x2x2', vc: 2 
  },
  'megaminx': { 
    type: 'megaminx', standard: 'megaminx', mirror: 'megaminx-lefty', vc: 'mega', 
    cancel: { quantumMoveOrder: () => 5 } 
  },
  'megaminx-lefty': { 
    type: 'megaminx', standard: 'megaminx-lefty', mirror: 'megaminx', vc: 'mega', 
    cancel: { quantumMoveOrder: () => 5 } 
  },
}

// WIP REWRITE OF ALG LOGIC
// TODO: implement Collection class that uses the generic data type thing and Symbol.iterator
// https://dev.to/qgabe/functional-programming-design-patterns-part-1-strategy-pattern-4f92
// https://leantechniques.com/2020/08/21/a-functional-approach-to-the-builder-pattern/

// https://stackoverflow.com/questions/57828972/creating-a-fluent-stateful-builder-using-the-typescript-type-system
// https://dev.to/padcom/type-safe-object-builder-in-ts-295e

// move to types

type TAlgCommon = Pick<IOptions, "puzzle" | "imgSource"> & {
  isMirror: boolean
  mirror: () => string
  invert: () => string
  backMirror: () => string
  notation: (to: TNotationTargets) => string
  simplify: () => string
}
interface IAlgorithmClass extends IAlg, TAlgCommon {
  isExpanded: boolean,
  isExpandable: () => boolean,
  expand: () => string,
}
interface ITriggerClass extends ITrigger, TAlgCommon {}

type IPuzzleDefinitionMapping = modularPuzzleGroup<{ 
  type: twistyPuzzleType, 
  standard: twistyPuzzleTypeWithChirality, 
  mirror: twistyPuzzleTypeWithChirality, 
  vc: string | number, 
  cancel?: PuzzleSpecificSimplifyOptions,
  notation?: (a: string, to: "vc" | "cubingjs") => string,
}>

// ___ //

const AlgBuilder = () => { // TODO: take into account chirality
  let algorithm: Partial<IAlgorithmClass & ITriggerClass> = {
    isMirror: false,
  }

  const puzzleMapping: IPuzzleDefinitionMapping = {
    '3x3x3': { 
      type: '3x3x3', standard: '3x3x3', mirror: '3x3x3', vc: 3, 
      cancel: cube3x3x3.puzzleSpecificSimplifyOptions 
    },
    '4x4x4': { 
      type: '4x4x4', standard: '4x4x4', mirror: '4x4x4', vc: 4, 
      cancel: { quantumMoveOrder: () => 4 }, 
      notation: (a, to) => { return convert4x4Notation(a, to) }
    },
    '2x2x2': { 
      type: '2x2x2', standard: '2x2x2', mirror: '2x2x2', vc: 2 
    },
    'megaminx': { 
      type: 'megaminx', standard: 'megaminx', mirror: 'megaminx-lefty', vc: 'mega', 
      cancel: { quantumMoveOrder: () => 5 } 
    },
    'megaminx-lefty': { 
      type: 'megaminx', standard: 'megaminx-lefty', mirror: 'megaminx', vc: 'mega', 
      cancel: { quantumMoveOrder: () => 5 } 
    },
  }

  // TODO: localize
  const modifierActions: Record<TModifiersList, { action: (a: string, pzl: twistyPuzzleTypeWithChirality) => string, text: string }> = {
    "INVERSE": { action: (a, pzl) => { return invertAlg(a) }, text: 'INV'},
    "LEFTY": { action: (a, pzl) => { return mirrorAlgOverrideTriggers(a, pzl) }, text: 'LEFT'},
    "LEFT": { action: (a, pzl) => { return mirrorAlgOverrideTriggers(a, pzl) }, text: 'LEFT'},
    "L": { action: (a, pzl) => { return mirrorAlgOverrideTriggers(a, pzl) }, text: 'LEFT'},
    "BACK": { action: (a, pzl) => { return backAlg(a, pzl) }, text: 'BACK'},
    "B": { action: (a, pzl) => { return backAlg(a, pzl) }, text: 'BACK'},
    "DOUBLE": { action: (a, pzl) => { return repeatAlg(a, 2, pzl) }, text: '2x'},
    "X2": { action: (a, pzl) => { return repeatAlg(a, 2, pzl) }, text: '2x'},
    "TRIPLE": { action: (a, pzl) => { return repeatAlg(a, 3, pzl) }, text: '3x'},
    "X3": { action: (a, pzl) => { return repeatAlg(a, 3, pzl) }, text: '3x'},
  }

  const builders = {
    stage1: {
      withPuzzle: (p: twistyPuzzleType) => {
        algorithm = {...algorithm, puzzle: p }
        return builders.stage2
      }
    },
    stage2: {
      withAlgData: (algo: IAlg) => {
        const puzzleTraits = puzzleMapping[algorithm.puzzle!]
        algorithm = { ...algorithm, ...algo,
          isExpanded: false,
          isExpandable: () => { algorithm.alg!.match(isTriggerRegex) != null ? true : false },
          expand: () => {
            if (!algorithm.isExpandable!()) {
              throw new Error('alg is not expandable')
            }
            algorithm.isExpanded = !algorithm.isExpanded
            return expandAlgWithTriggers(algorithm.alg!, algorithm.puzzle!)
          },
          notation: (to) => { return puzzleTraits?.notation ? puzzleTraits?.notation(algorithm.alg!, to) : algorithm.alg! },
          mirror: () => { return mirrorAlg(algorithm.alg!, algorithm.puzzle!) },
          backMirror: () => { return backAlg(algorithm.alg!, algorithm.puzzle!) },
          invert: () => { return invertAlg(algorithm.alg!) },
          simplify: () => { return simplifyAlg(algorithm.alg!, algorithm.puzzle!) },
        } as IAlgorithmClass
        return builders.stage3
      },
      withTrigger: (t: string) => {
        const triggerAndModifiers: [...TModifiersList[], string] = t.split(' ') as [...TModifiersList[], string]

        const base = triggerAndModifiers.at(-1) ?? ''
        const mods = triggerAndModifiers.slice(0, -1) as TModifiersList[]
        const fields: ITrigger = {
          baseTrigger: base,
          modifiers: mods,
          resultMoves: (() => {
            let curr = structuredClone(triggerSubstitutionGroups[algorithm.puzzle!]?.find(item => item.name === base)?.alg)
            if (!curr) { return '' }
            for (let mod of mods) {
              if (Object.keys(modifierActionsList).includes(mod)) {
                curr = modifierActions[mod].action(curr, algorithm.puzzle!) 
              }
            }
            return curr
          })()
        }
        algorithm = {...algorithm, ...fields } as ITriggerClass
        return builders.stage3
      },
    },
    stage3: {
      build: () => {
        return algorithm
      }
    }
  }

  return (() => { return builders.stage1 })()
}

// MANUAL TESTING

let testData: IAlg = { alg: "R U R' U' R U2' R'" }
let testTriggerData: string = "LEFT BACK SEXY"
let testAlg: IAlgorithmClass = AlgBuilder().withPuzzle('3x3x3').withAlgData(testData).build() as IAlgorithmClass
let testTrig: ITriggerClass = AlgBuilder().withPuzzle('3x3x3').withTrigger(testTriggerData).build() as ITriggerClass