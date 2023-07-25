import type { XOR } from "ts-essentials"
import type { ITriggerClass } from "../trigger"
import type { TAlgCommon } from ".."
import type { IAlg } from "../../config/set/dataFormat"

export interface IAlgorithmClass extends IAlg, TAlgCommon<IAlgorithmClass> {
  alg: string
  setup?: string
  isExpandable: () => boolean,
  expand: () => string,
  components: () => (XOR<IAlgorithmClass, ITriggerClass>)[]
  isLefty: boolean
}