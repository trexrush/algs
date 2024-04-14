import type { IAlgset, ICaseList } from "../../scripts/config/setDefinitions/dataFormat"
import { useGrouping } from "../../scripts/config/setDefinitions/setConstructors/parityPLL"


import yml from '../userSets/paritypll.yml'
let data: ICaseList = yml

const ParityPLLNoGrouping: IAlgset = useGrouping('none', data)
const ParityPLLGroupByCP: IAlgset = useGrouping('cp', data)

export { ParityPLLNoGrouping, ParityPLLGroupByCP }