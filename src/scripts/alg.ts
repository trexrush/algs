import { Alg, PuzzleSpecificSimplifyOptions } from "cubing/alg"
import { backMoveGroups, baseMoveGroups, mirrorMoveGroups, triggerSubstitutionGroups } from "./algConstants"
import { cube3x3x3 } from "cubing/puzzles";
import type { IDataAlg, IOptions, TModifiersList, TNotationTargets, modularPuzzleGroup, twistyPuzzleType, twistyPuzzleTypeWithChirality } from "./types";
import type { XOR } from "ts-essentials";

// NO EXTERNAL
const convert4x4Notation = (a: string, to: 'vc' | 'cubingjs'): string => {
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

// NO EXTERNAL
const mirrorAlg = (a: string, pzl: twistyPuzzleTypeWithChirality ): string => {
  const baseMovesArray = baseMoveGroups[pzl]
  const mirrorMovesArray = mirrorMoveGroups[pzl]
  if (!baseMovesArray || !mirrorMovesArray) { return '' }
  let aArr: string[] = a.replace(matchAllParenthesis, '').split(' ')
  aArr.forEach((move, i) => {
    aArr[i] = mirrorMovesArray[baseMovesArray.indexOf(move)]
  })
  return aArr.join(" ")
}

// NO EXTERNAL
const mirrorAlgOverrideTriggers = (a: string, pzl: twistyPuzzleTypeWithChirality) => {
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
  puzzleSpecificSimplifyOptions: puzzleMapping[pzl]?.cancel }).toString()
}

// NO EXTERNAL
const modifierActionsList: Record<TModifiersList, { action: (a: string, pzl: twistyPuzzleTypeWithChirality) => string, text: string }> = {
  "INVERSE": { action: (a, pzl) => { return invertAlg(a) }, text: 'INV'},
  "LEFTY": { action: (a, pzl) => { return mirrorAlg(a, pzl) }, text: 'LEFT'},
  "LEFT": { action: (a, pzl) => { return mirrorAlg(a, pzl) }, text: 'LEFT'},
  "L": { action: (a, pzl) => { return mirrorAlg(a, pzl) }, text: 'LEFT'},
  "BACK": { action: (a, pzl) => { return backAlg(a, pzl) }, text: 'BACK'},
  "B": { action: (a, pzl) => { return backAlg(a, pzl) }, text: 'BACK'},
  "DOUBLE": { action: (a, pzl) => { return repeatAlg(a, 2, pzl) }, text: '2x'},
  "X2": { action: (a, pzl) => { return repeatAlg(a, 2, pzl) }, text: '2x'},
  "TRIPLE": { action: (a, pzl) => { return repeatAlg(a, 3, pzl) }, text: '3x'},
  "X3": { action: (a, pzl) => { return repeatAlg(a, 3, pzl) }, text: '3x'},
}
const getTriggerAlg = (t: string, pzl: twistyPuzzleTypeWithChirality): string => {
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


const isTriggerRegex: RegExp = /\[(.*?)\]/g
// https://stackoverflow.com/questions/19414193/regex-extract-string-not-between-two-brackets
const algDelimiterWithTriggers: RegExp = /[\s\(\)]+(?![^\[]*\])/g
// in backAlg, no External files
const matchAllParenthesis: RegExp =  /([\(\)])/g
 
// NO EXTERNAL
const expandAlgWithTriggers = (a: string, pzl: twistyPuzzleTypeWithChirality): string => {
  const getTriggerAlgWrapper = (b: string) => { return getTriggerAlg(b, pzl) } // curry away puzzle type to allow func call bind
  return simplifyAlg(a.replaceAll(isTriggerRegex, Function.prototype.call.bind(getTriggerAlgWrapper)), pzl)
}

// NEW ALG LOGIC
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

type TAlgCommon<T extends TAlgCommon<T>> = Pick<IOptions, "puzzle" | "imgSource"> & {
  isMirror: boolean
  mirror(): T
  notation(to: TNotationTargets): string
  simplify(): T
  // getPuzzle: () => twistyPuzzleTypeWithChirality
} 
interface ITrigger {
  baseTrigger: string
  modifiers: TModifierActions[]
}
export interface IAlgorithmClass extends IDataAlg, TAlgCommon<IAlgorithmClass> {
  isExpandable: () => boolean,
  expand: () => string,
  components: () => (XOR<IAlgorithmClass, ITriggerClass>)[]
}
interface ITriggerClass extends ITrigger, TAlgCommon<ITriggerClass> {
  resultMoves: string
  resultModifiers: string[]
  collapsedString: string
  invert(): ITriggerClass
  back(): ITriggerClass
  double(): ITriggerClass
  triple(): ITriggerClass
}

type IPuzzleDefinitionMapping = { 
  type: twistyPuzzleType, 
  right: twistyPuzzleTypeWithChirality, 
  left: twistyPuzzleTypeWithChirality, 
  vc: string | number, 
  cancel?: PuzzleSpecificSimplifyOptions,
  notation?: (a: string, to: "vc" | "cubingjs") => string,
}


// AlgImage (vc), TwistyPuzzle (type), backAlg/moveGroups
export const puzzleMapping: modularPuzzleGroup<IPuzzleDefinitionMapping> = {
  '3x3x3': { type: '3x3x3', right: '3x3x3', left: '3x3x3', vc: 3, 
    cancel: cube3x3x3.puzzleSpecificSimplifyOptions 
  },
  '4x4x4': { type: '4x4x4', right: '4x4x4', left: '4x4x4', vc: 4, 
    cancel: { quantumMoveOrder: () => 4 }, 
    notation: (a, to) => { return convert4x4Notation(a, to) }
  },
  '2x2x2': { type: '2x2x2', right: '2x2x2', left: '2x2x2', vc: 2 
  },
  'megaminx': { type: 'megaminx', right: 'megaminx', left: 'megaminx-lefty', vc: 'mega', 
    cancel: { quantumMoveOrder: () => 5 } 
  },
}
// ___ //

//https://stackoverflow.com/questions/73072541/call-chain-order-dependent-builder-pattern-in-typescript-compiler-limitation
  
// TRIGGER HELPER FUNCS
const modifierActions: Record<TModifiers, TModifierActions> = {
  "invert": { type: "invert", action: (a, pzl) => { return invertAlg(a) }, text: 'INV'},
  "left": { type: "left",  action: (a, pzl) => { return mirrorAlgOverrideTriggers(a, pzl) }, text: 'LEFT'},
  "back": { type: "back",  action: (a, pzl) => { return backAlg(a, pzl) }, text: 'BACK'},
  "double": { type: "double",  action: (a, pzl) => { return repeatAlg(a, 2, pzl) }, text: '2x'},
  "triple": { type: "triple",  action: (a, pzl) => { return repeatAlg(a, 3, pzl) }, text: '3x'},
}
const getModActionsFromText = (m: TModifierAliases): TModifierActions => { return modifierActions[modifierAlias[m]] }
const expandedTrigger = (obj: ITriggerClass) => {
  const initTrig = triggerSubstitutionGroups[obj.puzzle!]?.find(item => item.name === obj.baseTrigger)?.alg // add structuredClone if issues arise
  if (!initTrig) { return '' }
  return obj.modifiers.reduce(((acc, curr) => {
    return curr.action(acc, obj.puzzle!)
  }), initTrig)
}
const returnAlgAsComponents = (obj: IAlgorithmClass) => {
  return obj.alg.split(algDelimiterWithTriggers).map(moveOrTrigger => {
    return moveOrTrigger.match(isTriggerRegex) != null 
    ? AlgBuilder().withPuzzle(obj.puzzle).withTrigger(moveOrTrigger.replace(isTriggerRegex, '$1')).build() as ITriggerClass
    : AlgBuilder().withPuzzle(obj.puzzle).withAlgData({ alg: moveOrTrigger, isLefty: obj.isLefty }).build() as IAlgorithmClass
  })
}
const toggleModifier = (a: TModifiers, obj: ITriggerClass): ITriggerClass => {
  const act = modifierActions[a]
  const remainingMods = obj.modifiers?.filter((el) => el.type !== act.type) ?? null
  if (remainingMods && remainingMods?.length !== obj.modifiers?.length) {
    return { ...obj,  modifiers: remainingMods, 
      get resultMoves() { return expandedTrigger(this) },
      get resultModifiers() { return this.modifiers.map(m => ( m.text )) },
      get collapsedString() { return [...this.resultModifiers, this.baseTrigger].join(' ') }, 
    } as ITriggerClass
  } else {
    const newMods = [...obj.modifiers!, getModActionsFromText(act.text)]
    return { ...obj,  modifiers: newMods, 
      get resultMoves() { return expandedTrigger(this) },
      get resultModifiers() { return this.modifiers.map(m => ( m.text )) },
      get collapsedString() { return [...this.resultModifiers, this.baseTrigger].join(' ') },
    } as ITriggerClass
  }
}
const notationTrigger = (obj: ITriggerClass, to: TNotationTargets): string => {
  if (puzzleMapping[obj.puzzle] && puzzleMapping[obj.puzzle]!.notation) {
    return puzzleMapping[obj.puzzle]!.notation!(obj.baseTrigger, to)
  }
  else return obj.resultMoves
}

export const AlgBuilder = function () { 
  // TODO: take into account chirality
  // FOLLOWUP: do we need puzzleMap?

  const builders = {
    stage1: (algObj: Partial<IAlgorithmClass & ITriggerClass>) => { return {
      withPuzzle: (p: twistyPuzzleType) => {
        const newAlgObj = { ...algObj, puzzle: p }
        return builders.stage2(newAlgObj)
      }
    }},
    stage2: (algObj: Partial<IAlgorithmClass & ITriggerClass>) => { return {
      // _______________ ALG _______________ //
      withAlgData: (algo: IDataAlg) => {
        const newAlgObj = { ...algObj, ...algo,
          isLefty: algo.isLefty ?? false,
          isExpanded: false,
          isExpandable: function () { return this.alg.match(isTriggerRegex) ? true : false },
          expand: function () { // currently same as alg, but once I implement trigger functionality into mirror
            if (!this.isExpandable()) { return this.alg } // pass through alg
            return expandAlgWithTriggers(this.alg, this.puzzle)
          },
          components: function () { return returnAlgAsComponents(this) },
          mirror() { // TODO: group moves together to reduce the amount of alg objects created
            return { ...this, 
              isMirror: !this.isMirror, 
              isLefty: !this.isLefty, 
              setup: this.setup ? mirrorAlg(this.setup, this.puzzle) : undefined,
              alg: this.components().map(comp => (
                comp.alg == undefined
                ? "[" + comp.mirror().collapsedString + "]" // trigger
                : mirrorAlg(comp.alg, comp.puzzle) // move
              )).join(' '),
            }
          },
          notation(to) { 
            if (puzzleMapping[this.puzzle]?.notation) {
              return puzzleMapping[this.puzzle]!.notation!(this.expand(), to)
            }
            else return this.expand()
          },
          simplify() { 
            return {...this, alg: simplifyAlg(this.alg, this.puzzle) }
          },
        } as IAlgorithmClass
        return builders.stage3(newAlgObj)
      },
      // _____________ TRIGGER _____________ //
      withTrigger: (t: string) => {
        const triggerAndModifiers: [...TModifierAliases[], string] = t.split(' ') as [...TModifierAliases[], string]
        const base = triggerAndModifiers.at(-1) ?? ''
        const mods = triggerAndModifiers.slice(0, -1).map(m => getModActionsFromText(m as TModifierAliases))
        const newAlgObj = {...algObj,
          // isMirror
          baseTrigger: base, 
          modifiers: mods, 
          get resultMoves() { return expandedTrigger(this) }, 

          get resultModifiers() { return this.modifiers.map(m => ( m.text )) }, 
          get collapsedString() { return [...this.resultModifiers, this.baseTrigger].join(' ') },
          mirror() { 
            return {...toggleModifier("left", this), isMirror: !this.isMirror } as ITriggerClass
          },
          back() { return { ...toggleModifier("back", this) } },
          invert() { return { ...toggleModifier("invert", this) } },
          double() { return { ...toggleModifier("double", this) } },
          triple() { return { ...toggleModifier("triple", this) } },
          notation(to) { return notationTrigger(this, to) }, // TODO: implement
        } as ITriggerClass
        return builders.stage3(newAlgObj)
      }
    }},
    stage3: (algObj: Partial<IAlgorithmClass | ITriggerClass>) => { return {
      build: () => {
        return algObj as XOR<IAlgorithmClass, ITriggerClass>
      }
    }},
  }

  return (() => { return builders.stage1({ isMirror: false }) })()
}

// POOR MANS UNIT TESTING TODO: use jest
// let testData: IDataAlg = { alg: "R U R' U' R U2' R'" }
// let testData2: IDataAlg = { alg: "[LEFT SUNE] U2 [LEFT BACK SUNE]", isLefty: true, setup: "U" }
// let test4x4Data: IDataAlg = { setup: "U", alg: "[OPP] [Ua_PERM]"}
// let testTriggerData: string = "LEFT BACK SUNE"
// let testAlg = AlgBuilder().withPuzzle('3x3x3').withAlgData(testData).build() as IAlgorithmClass
// let testAlg2 = AlgBuilder().withPuzzle('3x3x3').withAlgData(testData2).build() as IAlgorithmClass
// let test4x4Alg = AlgBuilder().withPuzzle('4x4x4').withAlgData(test4x4Data).build() as IAlgorithmClass
// let testTrig = AlgBuilder().withPuzzle('3x3x3').withTrigger(testTriggerData).build() as ITriggerClass
// let testCounter = 0

// let test = (s: unknown, e: unknown) => { 
//   ++testCounter
//   if (e != s) console.log(testCounter, "TEST:\n\tEXPECTED ||", e, "ACTUAL ||",  s)
//   return e == s 
// }
// let testSuite = (args: boolean[]): boolean => { return args.every(t => t == true) }


// testSuite([
//   // alg
//   test(testAlg.mirror().alg, "L' U' L U L' U2 L"),
//   test(testAlg2.mirror().alg, "[SUNE] U2' [BACK SUNE]"),
//   // isMirror
//   test(testAlg.mirror().isMirror, true),
//   test(testAlg2.mirror().isMirror, true),
//   // islefty
//   test(testAlg.isLefty, false),
//   test(testAlg2.isLefty, true),
//   test(testAlg.mirror().isLefty, true),
//   test(testAlg2.mirror().isLefty, false),
//   // mirroring multiple times returns correct data
//   test(testAlg.mirror().mirror().isLefty, false),
//   test(testAlg.mirror().mirror().alg, "R U R' U' R U2' R'"),
//   test(testAlg.mirror().mirror().mirror().alg, "L' U' L U L' U2 L"),
//   // isExpandable
//   test(testAlg.isExpandable(), false),
//   test(testAlg2.isExpandable(), true), 
//   // expand
//   test(testAlg.expand(), testAlg.alg),
//   test(testAlg2.expand(), "L' U' L U' L' U2 L U2 L U L' U L U2' L'"),
//   // setup
//   test(testAlg2.mirror().setup, "U'"),
//   // chaining state changes
//   test(testTrig.mirror().invert().back().resultMoves, "R U2 R' U' R U' R'"),
//   test(testTrig.mirror().invert().back().resultModifiers.join(' '), "INV"),
//   test(testTrig.mirror().invert().back().mirror().resultModifiers.join(' '), "INV LEFT" || "LEFT INV"),
//   // 4x4 puzzle + notation
//   test(test4x4Alg.expand(), "Uw2' r2 Uw2' r2 U2' r2 R U R' U R' U' R2 U' R' U R' U R"),
//   test(test4x4Alg.notation('cubingjs'), "Uw2' 2R2 Uw2' 2R2 U2' 2R2 R U R' U R' U' R2 U' R' U R' U R"),
//   test(test4x4Alg.notation('vc'), "Uw2' Rw2 R2 Uw2' Rw2 R2 U2' Rw2 R2 R U R' U R' U' R2 U' R' U R' U R")
// ])

