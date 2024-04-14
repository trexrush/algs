import { useGrouping } from "../../scripts/config/setDefinitions/setConstructors/cll";
import type { IAlgset, ICaseList } from "../../scripts/config/setDefinitions/dataFormat"


import yml from '../userSets/cll.yml'
const data:ICaseList = yml

const CLLNoGrouping: IAlgset = useGrouping('none', data)
const CLLGroupByOLL: IAlgset = useGrouping('oll', data)

export { CLLNoGrouping, CLLGroupByOLL }