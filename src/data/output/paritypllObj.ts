import type { IAlgset, ICaseList } from "../../scripts/config/set/dataFormat"
import { useGrouping } from "../../scripts/config/set/parityPLL"


import yml from '../paritypll.yml'
let data: ICaseList = yml

const ParityPLLNoGrouping: IAlgset = useGrouping('none', data)
const ParityPLLGroupByCP: IAlgset = useGrouping('cp', data)

export { ParityPLLNoGrouping, ParityPLLGroupByCP }