import type { ITriggerClass } from "."
import type { TNotationTargets } from ".."
import { puzzleMapping } from "../../config/puzzle"
import { triggerSubstitutionGroups } from "../../config/puzzle/triggers"
import { getModActionsFromText, modifierActions, type TModifiers } from "./modifier"

export const expandTrigger = (obj: ITriggerClass) => {
  const initTrig = triggerSubstitutionGroups[obj.puzzle!]?.find(item => item.name === obj.baseTrigger)?.alg
  if (!initTrig) { return '' }
  return obj.modifiers.reduce(((acc, curr) => {
    return curr.action(acc, obj.puzzle!)
  }), initTrig)
}

export const toggleModifier = (a: TModifiers, obj: ITriggerClass): ITriggerClass => {
  const act = modifierActions[a]
  const remainingMods = obj.modifiers?.filter((el) => el.type !== act.type) ?? null
  if (remainingMods && remainingMods?.length !== obj.modifiers?.length) {
    return { ...obj,  modifiers: remainingMods, 
      get resultMoves() { return expandTrigger(this) },
      get resultModifiers() { return this.modifiers.map(m => ( m.text )) },
      get collapsedString() { return [...this.resultModifiers, this.baseTrigger].join(' ') }, 
    } as ITriggerClass
  } else {
    const newMods = [...obj.modifiers!, getModActionsFromText(act.text)]
    return { ...obj,  modifiers: newMods, 
      get resultMoves() { return expandTrigger(this) },
      get resultModifiers() { return this.modifiers.map(m => ( m.text )) },
      get collapsedString() { return [...this.resultModifiers, this.baseTrigger].join(' ') },
    } as ITriggerClass
  }
}

export const notationTrigger = (obj: ITriggerClass, to: TNotationTargets): string => {
  if (puzzleMapping[obj.puzzle] && puzzleMapping[obj.puzzle]!.notation) {
    return puzzleMapping[obj.puzzle]!.notation!(obj.baseTrigger, to)
  }
  else return obj.resultMoves
}