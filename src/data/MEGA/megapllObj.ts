import type { IAlgset, ICaseList } from "../../scripts/config/set/dataFormat"
import { useGrouping } from "../../scripts/config/set/megaPLL"


import yml from './megapll.yml'
let data: ICaseList = yml

const MegaPLLNoGrouping: IAlgset = useGrouping('none', data)
const MegaPLLGroupByLetter: IAlgset = useGrouping('letter', data)
const MegaPLLGroupByFeatures: IAlgset = useGrouping('feature', data)

export { MegaPLLNoGrouping, MegaPLLGroupByLetter, MegaPLLGroupByFeatures }











