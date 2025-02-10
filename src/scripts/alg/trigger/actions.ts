import type { ITriggerClass } from "../../../types/triggerClass"
import type { TNotationTargets } from "../../../types/algCommon"
import { getConfig } from "../../config/puzzle"
import { triggerSubstitutionGroups } from "../../../configs/triggers"
import { getModActionsFromText, modifierActions, type TModifiers } from "./modifier"

export const expandTrigger = (obj: ITriggerClass) => {
  const initTrig = triggerSubstitutionGroups[obj.puzzle!]?.find(item => item.name === obj.baseTrigger)?.alg
  if (!initTrig) { return '' }
  return obj.modifiers.reduce(((acc, curr) => {
    return curr.action(acc, obj)
  }), initTrig)
}

export const toggleModifier = (a: TModifiers, obj: ITriggerClass): ITriggerClass => {
  const act = modifierActions[a]
  const remainingMods = obj.modifiers?.filter((el) => el.type !== act.type) ?? null
  let returnMods
  if (remainingMods && remainingMods?.length !== obj.modifiers?.length) {
    returnMods = remainingMods // take away existing mod
  } else {
    returnMods = [...obj.modifiers!, getModActionsFromText(act.text)] // add new mod
  }
  return { ...obj,  modifiers: returnMods, 
    get resultMoves() { return expandTrigger(this) },
    get resultModifiers() { return this.modifiers.map(m => ( m.text )) },
    get collapsedString() { return [...this.resultModifiers, this.baseTrigger].join(' ') }, 
  } as ITriggerClass
}

export const notationTrigger = (obj: ITriggerClass, to: TNotationTargets): string => {
  const puzzleDef = getConfig(obj.puzzle)
  return puzzleDef.notation ? puzzleDef.notation(obj.baseTrigger, to) : obj.resultMoves
}