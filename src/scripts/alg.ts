import { Alg, PuzzleSpecificSimplifyOptions } from "cubing/alg"
import { backMoveGroups, baseMoveGroups, mirrorMoveGroups, triggerSubstitutionGroups } from "./algConstants"
import { cube3x3x3 } from "cubing/puzzles";
import type { IAlg, IOptions, TModifiersList, TNotationTargets, modularPuzzleGroup, twistyPuzzleType, twistyPuzzleTypeWithChirality } from "./types";

// AlgImage, TwistyPlayer
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
}

// NO EXTERNAL but technically only called as the OverrideTriggers variant
// TODO: implement swapping modifiers to work with triggers
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

// AlgListing, CaseCard
export const mirrorAlgOverrideTriggers = (a: string, pzl: twistyPuzzleTypeWithChirality) => {
  return mirrorAlg(expandAlgWithTriggers(a, pzl), pzl)
}

// NO EXTERNAL
const backAlg = (a: string, pzl: keyof typeof baseMoveGroups ): string => {
  const baseMovesArray = baseMoveGroups[pzl]
  const backMovesArray = backMoveGroups[pzl]
  if (!baseMovesArray || !backMovesArray) { return '' }
  let aArr: string[] = a.replace(matchAllParenthesis, '').split(' ')
  aArr.forEach((move, i) => {
    aArr[i] = backMovesArray[baseMovesArray.indexOf(move)]
  })
  return aArr.join(" ")
}

// NO EXTERNAL
const invertAlg = (a: string): string => {
  return new Alg(a).invert().toString(); 
}

// NO EXTERNAL
const repeatAlg = (a: string, q: number, pzl: twistyPuzzleTypeWithChirality): string => {
  let res = (a + " ").repeat(q)
  return simplifyAlg(res, pzl)
}

// NO EXTERNAL
const simplifyAlg = (a: string, pzl: twistyPuzzleTypeWithChirality): string => {
  return new Alg(a).experimentalSimplify({cancel: { directional: 'any-direction', puzzleSpecificModWrap: 'gravity' },
  puzzleSpecificSimplifyOptions: puzzleDefinitionMapping[pzl]?.cancel }).toString()
}

// AlgListing
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

// NO EXTERNAL
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

// AlgListing
export const isTriggerRegex: RegExp = /\[(.*?)\]/g
// AlgListing
// https://stackoverflow.com/questions/19414193/regex-extract-string-not-between-two-brackets
export const algDelimiterWithTriggers: RegExp = /[\s\(\)]+(?![^\[]*\])/g
// in BackAlg, no External files
const matchAllParenthesis: RegExp =  /([\(\)])/g

// TODO: allow multiple layers of expanding algs (would allow definitions of triggers to use triggers)
// AlgImage, AlgListing, TwistyPlayer
export const expandAlgWithTriggers = (a: string, pzl: twistyPuzzleTypeWithChirality): string => {
  const getTriggerAlgWrapper = (b: string) => { return getTriggerAlg(b, pzl) } // curry away puzzle type to allow func call bind
  return simplifyAlg(a.replaceAll(isTriggerRegex, Function.prototype.call.bind(getTriggerAlgWrapper)), pzl)
}

// IMPLEMENTED, NOT NEEDED
export const checkIfHasTriggers = (a: string): boolean => {
  return a.match(isTriggerRegex) ? true : false
}

// AlgImage (vc), AlgListing (mirror), TwistyPuzzle (type), CaseCard (standard / mirror)
// IMPLEMENTED, LIKELY NOT NEEDED
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

// move to types
const modifierAlias = {
  "INVERSE": 'invert',
  "INV": 'invert',

  "LEFTY": 'left',
  "LEFT": 'left',
  "L": 'left',

  "BACK": 'back',
  "B": 'back',

  "DOUBLE": 'double',
  "X2": 'double',
  "2x": 'double',

  "TRIPLE": 'triple',
  "X3": 'triple',
  "3x": 'triple',
} as const
type TModifierAliases = keyof typeof modifierAlias
type TModifiers = typeof modifierAlias[TModifierAliases]
type TModifierActions = { type: TModifiers, action: (a: string, pzl: twistyPuzzleTypeWithChirality) => string, text: TModifierAliases }
type TAlgCommon = Pick<IOptions, "puzzle" | "imgSource"> & {
  isMirror: boolean
  puzzleMap: IPuzzleDefinitionMapping
  mirror: () => TAlgCommon
  notation: (to: TNotationTargets) => TAlgCommon
  simplify: () => TAlgCommon
}
interface ITrigger {
  baseTrigger: string
  modifiers: TModifierActions[]
  resultMoves: string
}
interface IAlgorithmClass extends IAlg, TAlgCommon {
  isExpanded: boolean,
  isExpandable: () => boolean,
  expand: () => IAlgorithmClass,
}
interface ITriggerClass extends ITrigger, TAlgCommon {
  invert: () => ITriggerClass
  back: () => ITriggerClass
  double: () => ITriggerClass
  triple: () => ITriggerClass
}

type IPuzzleDefinitionMapping = { 
  type: twistyPuzzleType, 
  right: twistyPuzzleTypeWithChirality, 
  left: twistyPuzzleTypeWithChirality, 
  vc: string | number, 
  cancel?: PuzzleSpecificSimplifyOptions,
  notation?: (a: string, to: "vc" | "cubingjs") => string,
}

// ___ //

export const AlgBuilder = () => { // TODO: take into account chirality
  // CONSTANTS NEEDED TO BE DEFINED IN THE BUILDER FOR NOW

  const puzzleMapping: modularPuzzleGroup<IPuzzleDefinitionMapping> = {
    '3x3x3': { 
      type: '3x3x3', right: '3x3x3', left: '3x3x3', vc: 3, 
      cancel: cube3x3x3.puzzleSpecificSimplifyOptions 
    },
    '4x4x4': { 
      type: '4x4x4', right: '4x4x4', left: '4x4x4', vc: 4, 
      cancel: { quantumMoveOrder: () => 4 }, 
      notation: (a, to) => { return convert4x4Notation(a, to) }
    },
    '2x2x2': { 
      type: '2x2x2', right: '2x2x2', left: '2x2x2', vc: 2 
    },
    'megaminx': { 
      type: 'megaminx', right: 'megaminx', left: 'megaminx-lefty', vc: 'mega', 
      cancel: { quantumMoveOrder: () => 5 } 
    },
  }

  // TRIGGER HELPER FUNCS
  const modifierActions: Record<TModifiers, TModifierActions> = {
    "invert": { type: "invert", action: (a, pzl) => { return invertAlg(a) }, text: 'INV'},
    "left": { type: "left",  action: (a, pzl) => { return mirrorAlgOverrideTriggers(a, pzl) }, text: 'LEFT'},
    "back": { type: "back",  action: (a, pzl) => { return backAlg(a, pzl) }, text: 'BACK'},
    "double": { type: "double",  action: (a, pzl) => { return repeatAlg(a, 2, pzl) }, text: '2x'},
    "triple": { type: "triple",  action: (a, pzl) => { return repeatAlg(a, 3, pzl) }, text: '3x'},
  }
  const getModActionsFromText = (m: TModifierAliases) => { return modifierActions[modifierAlias[m]] }
  const expandedTrigger = (base: string, mods: TModifierActions[]) => { // TODO: rewrite to not have side effects?
    let initTrig = triggerSubstitutionGroups[resAlg.puzzle!]?.find(item => item.name === base)?.alg // add structuredClone if issues arise
    if (!initTrig) { return '' }
    return mods.reduce(((acc, curr) => {
      // console.log(curr, acc)
      return curr.action(acc, resAlg.puzzle!)
    }), initTrig)
  }
  const toggleModifier = (a: TModifiers): ITriggerClass => {
    console.log(resAlg)
    const act = modifierActions[a]
    const remainingMods = resAlg.modifiers?.filter((el) => el.type !== act.type) ?? null
    // need to recalculate the result alg
    if (remainingMods && remainingMods?.length !== resAlg.modifiers?.length) {
      return { ...resAlg,  modifiers: remainingMods, resultMoves: expandedTrigger(resAlg.baseTrigger!, remainingMods) } as ITriggerClass
    } else {
      const newMods = [...resAlg.modifiers!, getModActionsFromText(act.text)]
      return { ...resAlg,  modifiers: newMods, resultMoves: expandedTrigger(resAlg.baseTrigger!, newMods) } as ITriggerClass
    }
  }
  
  let initAlg: IAlg

  // ACTUAL BUILDER AND RESULT ALGORITHM OBJECT

  let resAlg: Partial<IAlgorithmClass & ITriggerClass> = {
    isMirror: false,
  }

  const builders = {
    stage1: {
      withPuzzle: (p: twistyPuzzleType) => {
        // FOLLOWUP: do we need puzzlemap? maybe a waste but not sure
        resAlg = {...resAlg, puzzle: p, puzzleMap: puzzleMapping[p] }
        return builders.stage2
      }
    },
    stage2: {
      withAlgData: (algo: IAlg) => {
        initAlg = algo
        resAlg = { ...resAlg, ...algo,
          isExpanded: false, // FOLLOWUP: need?
          isExpandable: () => { return resAlg.isMirror ? false : resAlg.alg!.match(isTriggerRegex) ? true : false }, // temp force false on mirrored
          expand: () => {
            if (!resAlg.isExpandable!()) { console.log('alg is not expandable, skipping'); return resAlg }
            resAlg.isExpanded = !resAlg.isExpanded
            resAlg.alg = resAlg.isExpanded ? expandAlgWithTriggers(resAlg.alg!, resAlg.puzzle!) : initAlg.alg
            return resAlg
          },
          mirror: () => { 
            resAlg.isMirror = !resAlg.isMirror
            resAlg.isLefty = !resAlg.isLefty
            resAlg.alg = resAlg.isMirror ? mirrorAlgOverrideTriggers(resAlg.alg!, resAlg.puzzle!) : initAlg.alg
            return resAlg
          },
          notation: (to) => { 
            if (resAlg.puzzleMap?.notation) resAlg.alg = resAlg.puzzleMap?.notation!(resAlg.alg!, to)
            return resAlg
          },
          simplify: () => { 
            resAlg.alg = simplifyAlg(resAlg.alg!, resAlg.puzzle!)
            return resAlg
          },
        } as IAlgorithmClass
        return builders.stage3
      },
      withTrigger: (t: string) => {
        const triggerAndModifiers: [...TModifierAliases[], string] = t.split(' ') as [...TModifierAliases[], string]
        const base = triggerAndModifiers.at(-1) ?? ''
        const mods = triggerAndModifiers.slice(0, -1).map(m => getModActionsFromText(m as TModifierAliases))
        resAlg = {...resAlg, ...{ baseTrigger: base, modifiers: mods, resultMoves: expandedTrigger(base, mods),
          mirror: () => { 
            return {...toggleModifier("left"), isMirror: !resAlg.isMirror }
          },
          back: () => { return { ...toggleModifier("back") } },
          invert: () => { return { ...toggleModifier("invert") } },
          double: () => { return { ...toggleModifier("double") } },
          triple: () => { return { ...toggleModifier("triple") } },
          notation: (to) => { return resAlg },
        },
      } as ITriggerClass
        return builders.stage3
      },
    },
    stage3: {
      build: () => {
        return resAlg
      }
    }
  }

  return (() => { return builders.stage1 })()
}

// MANUAL TESTING 
// TODO: unit tests

// let testData: IAlg = { alg: "R U R' U' R U2' R'" }
// let testTriggerData: string = "LEFT BACK SEXY"
// let testAlg: IAlgorithmClass = AlgBuilder().withPuzzle('3x3x3').withAlgData(testData).build() as IAlgorithmClass
// let testTrig: ITriggerClass = AlgBuilder().withPuzzle('3x3x3').withTrigger(testTriggerData).build() as ITriggerClass