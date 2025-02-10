
import type { twistyPuzzleType } from "../../types/localOptions";
import type { XOR } from "ts-essentials";
import type { ITriggerClass } from "../../types/triggerClass";
import { expandTrigger, notationTrigger, toggleModifier } from "./trigger/actions";
import { getModActionsFromText, type TModifierAliases } from "./trigger/modifier";
import type { IAlgorithmClass } from "../../types/algorithmClass";
import { checkExpandible, expandAlg, mirrorAlg, notationAlg, returnAlgAsComponents } from "./algorithm/actions";
import type { IAlg } from "../../types/dataFormat";

// why tf was I trying to force OOP principles in here, ill fix that layer maybe idk

export const AlgBuilder = function () { 
  const builders = {
    stage1: (algObj: Partial<IAlgorithmClass & ITriggerClass>) => { return {
      withPuzzle: (p: twistyPuzzleType) => {
        const newAlgObj = { ...algObj, puzzle: p }
        return builders.stage2(newAlgObj)
      }
    }},
    stage2: (algObj: Partial<IAlgorithmClass & ITriggerClass>) => { return {
      withAlgData: (algo: IAlg) => {
        const newAlgObj = { ...algObj, ...algo,
          isLefty: algo.isLefty ?? false,
          isExpanded: false,
          isExpandable: function () { return checkExpandible(this) },
          expand: function () { return expandAlg(this) },
          components: function () { return returnAlgAsComponents(this) },
          mirror: function () { return mirrorAlg(this) },
          notation: function (to) { return notationAlg(this, to) },
        } as IAlgorithmClass
        return builders.stage3(newAlgObj)
      },
      withTrigger: (t: string) => {
        const triggerAndModifiers: [...TModifierAliases[], string] = t.split(' ') as [...TModifierAliases[], string]
        const base = triggerAndModifiers.at(-1) ?? ''
        const mods = triggerAndModifiers.slice(0, -1).map(m => getModActionsFromText(m as TModifierAliases))
        const newAlgObj = {...algObj,
          baseTrigger: base, 
          modifiers: mods, 
          get resultMoves() { return expandTrigger(this) }, 
          get resultModifiers() { return this.modifiers.map(m => ( m.text )) }, 
          get collapsedString() { return [...this.resultModifiers, this.baseTrigger].join(' ') },
          mirror() { return {...toggleModifier("left", this), isMirror: !this.isMirror } as ITriggerClass },
          back() { return { ...toggleModifier("back", this) } },
          invert() { return { ...toggleModifier("invert", this) } },
          double() { return { ...toggleModifier("double", this) } },
          triple() { return { ...toggleModifier("triple", this) } },
          notation(to) { return notationTrigger(this, to) },
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
/* comment this line out to enable / disable
const testData: IAlg = { alg: "R U R' U' R U2' R'" }
const testData2: IAlg = { alg: "[LEFT SUNE] U2 [LEFT BACK SUNE]", isLefty: true, setup: "U" }
const test4x4Data: IAlg = { setup: "U", alg: "[OPP] [Ua_PERM]"}
const testTriggerData: string = "LEFT BACK SUNE"
const testAlg = AlgBuilder().withPuzzle('3x3x3').withAlgData(testData).build() as IAlgorithmClass
const testAlg2 = AlgBuilder().withPuzzle('3x3x3').withAlgData(testData2).build() as IAlgorithmClass
const test4x4Alg = AlgBuilder().withPuzzle('4x4x4').withAlgData(test4x4Data).build() as IAlgorithmClass
const testTrig = AlgBuilder().withPuzzle('3x3x3').withTrigger(testTriggerData).build() as ITriggerClass
let testCounter = 0
const test = (s: unknown, e: unknown) => { 
  ++testCounter
  if (e != s) console.log(testCounter, "EXPECTED", e, "ACTUAL",  s)
  return e == s 
}
const testSuite = (args: boolean[]): boolean => { return args.every(t => t == true) }
testSuite([
  // alg
  test(testAlg.mirror().alg, "L' U' L U L' U2 L"),
  test(testAlg2.mirror().alg, "[SUNE] U2' [BACK SUNE]"),
  // isMirror
  test(testAlg.mirror().isMirror, true),
  test(testAlg2.mirror().isMirror, true),
  // islefty
  test(testAlg.isLefty, false),
  test(testAlg2.isLefty, true),
  test(testAlg.mirror().isLefty, true),
  test(testAlg2.mirror().isLefty, false),
  // mirroring multiple times returns correct data
  test(testAlg.mirror().mirror().isLefty, false),
  test(testAlg.mirror().mirror().alg, "R U R' U' R U2' R'"),
  test(testAlg.mirror().mirror().mirror().alg, "L' U' L U L' U2 L"),
  // isExpandable
  test(testAlg.isExpandable(), false),
  test(testAlg2.isExpandable(), true), 
  // expand
  test(testAlg.expand(), testAlg.alg),
  test(testAlg2.expand(), "L' U' L U' L' U2 L U2 L U L' U L U2' L'"),
  // setup
  test(testAlg2.mirror().setup, "U'"),
  // chaining state changes
  test(testTrig.mirror().invert().back().resultMoves, "R U2 R' U' R U' R'"),
  test(testTrig.mirror().invert().back().resultModifiers.join(' '), "INV"),
  test(testTrig.mirror().invert().back().mirror().resultModifiers.join(' '), "INV LEFT" || "LEFT INV"),
  // 4x4 puzzle + notation
  test(test4x4Alg.expand(), "Uw2' r2 Uw2' r2 U2' r2 R U R' U R' U' R2 U' R' U R' U R"),
  test(test4x4Alg.notation('cubingjs'), "Uw2' 2R2 Uw2' 2R2 U2' 2R2 R U R' U R' U' R2 U' R' U R' U R"),
  test(test4x4Alg.notation('vc'), "Uw2' Rw2 R2 Uw2' Rw2 R2 U2' Rw2 R2 R U R' U R' U' R2 U' R' U R' U R")
])
/* */