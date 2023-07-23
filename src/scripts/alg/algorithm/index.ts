import type { XOR } from "ts-essentials"
import type { ITriggerClass } from "../trigger"
import type { IDataAlg } from "../../types"
import type { TAlgCommon } from ".."

export interface IAlgorithmClass extends IDataAlg, TAlgCommon<IAlgorithmClass> {
  isExpandable: () => boolean,
  expand: () => string,
  components: () => (XOR<IAlgorithmClass, ITriggerClass>)[]
  isLefty: boolean
}