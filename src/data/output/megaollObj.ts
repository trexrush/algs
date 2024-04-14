
import type { IAlgset, ICaseList } from "../../scripts/config/setDefinitions/dataFormat"
import { useGrouping } from "../../scripts/config/setDefinitions/setConstructors/megaOLL"


import yml from '../userSets/megaoll.yml'
let data: ICaseList = yml

const MegaOLLNoGrouping: IAlgset = useGrouping('none', data)
const MegaOLLGroupByOLL: IAlgset = useGrouping('oll', data)
const MegaOLLGroupByFeature: IAlgset = useGrouping('feature', data)

export { MegaOLLNoGrouping, MegaOLLGroupByOLL, MegaOLLGroupByFeature }