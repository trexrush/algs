import type { IAlgset, ICaseList } from "../../scripts/config/setDefinitions/dataFormat"
import { useGrouping } from "../../scripts/config/setDefinitions/setConstructors/pll";

import yml from '../userSets/pll.yml'
const data: ICaseList = yml

const PLLNoGrouping: IAlgset = useGrouping('none', data)
const PLLGroupedBySet: IAlgset = useGrouping('eo', data)

export { PLLNoGrouping, PLLGroupedBySet }