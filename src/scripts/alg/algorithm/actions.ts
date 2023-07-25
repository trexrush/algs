import type { IAlgorithmClass } from "."
import { AlgBuilder, TNotationTargets } from ".."
import { getConfig } from "../../config/puzzle"
import { mirrorAction, simplifyAlg } from "../actions"
import { algDelimiterWithTriggers, isTriggerRegex } from "../regex"
import type { ITriggerClass } from "../trigger"

export const returnAlgAsComponents = (obj: IAlgorithmClass) => {
  return obj.alg.split(algDelimiterWithTriggers).map(moveOrTrigger => {
    return moveOrTrigger.match(isTriggerRegex) != null 
    ? AlgBuilder().withPuzzle(obj.puzzle).withTrigger(moveOrTrigger.replace(isTriggerRegex, '$1')).build() as ITriggerClass
    : AlgBuilder().withPuzzle(obj.puzzle).withAlgData({ alg: moveOrTrigger, isLefty: obj.isLefty }).build() as IAlgorithmClass
  })
}

export const expandAlg = (obj: IAlgorithmClass): string => {
  if (!obj.isExpandable()) { return obj.alg } // pass through alg
  return simplifyAlg(
    obj.components().map(comp => {
      return comp.alg !== undefined ? comp.alg : comp.resultMoves
    }).join(' '), obj.puzzle)
}

// TODO: group moves together to reduce the amount of alg objects created
export const mirrorAlg = (obj: IAlgorithmClass): IAlgorithmClass => {
  return { ...obj, 
    isMirror: !obj.isMirror, 
    isLefty: !obj.isLefty, 
    setup: obj.setup ? mirrorAction(obj.setup, obj.puzzle) : undefined,
    alg: obj.components().map(comp => (
      comp.alg === undefined
        ? "[" + comp.mirror().collapsedString + "]" // trigger
        : mirrorAction(comp.alg, comp.puzzle) // move
    )).join(' '),
  }
}

export const notationAlg = (obj: IAlgorithmClass, to: TNotationTargets): string => {
  const puzzleDef = getConfig(obj.puzzle)
  return puzzleDef.notation ? puzzleDef.notation(obj.expand(), to) : obj.expand()
}

export const checkExpandible = (obj: IAlgorithmClass) => { return obj.alg.match(isTriggerRegex) ? true : false }