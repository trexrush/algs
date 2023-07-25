
import type { IAlgset, ICaseList } from "../../scripts/config/set/dataFormat"
import { useGrouping } from "../../scripts/config/set/megaOLL"


import yml from './megaoll.yml'
let data: ICaseList = yml

const MegaOLLNoGrouping: IAlgset = useGrouping('none', data)
const MegaOLLGroupByOLL: IAlgset = useGrouping('oll', data)
const MegaOLLGroupByFeature: IAlgset = useGrouping('feature', data)

export { MegaOLLNoGrouping, MegaOLLGroupByOLL, MegaOLLGroupByFeature }