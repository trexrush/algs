import type { TAlgCommon } from "../types/algCommon"
import type { TModifierActions } from "../scripts/alg/trigger/modifier"

interface ITrigger {
  baseTrigger: string
  modifiers: TModifierActions[]
}
export interface ITriggerClass extends ITrigger, TAlgCommon<ITriggerClass> {
  resultMoves: string
  resultModifiers: string[]
  collapsedString: string
  invert(): ITriggerClass
  back(): ITriggerClass
  double(): ITriggerClass
  triple(): ITriggerClass
}