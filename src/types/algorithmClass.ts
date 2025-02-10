import type { XOR } from "ts-essentials"
import type { ITriggerClass } from "./triggerClass"
import type { TAlgCommon } from "../types/algCommon"
import type { IAlg } from "./dataFormat"

export interface IAlgorithmClass extends IAlg, TAlgCommon<IAlgorithmClass> {
  alg: string
  setup?: string
  isExpandable: () => boolean,
  expand: () => string,
  components: () => (XOR<IAlgorithmClass, ITriggerClass>)[]
  isLefty: boolean
}