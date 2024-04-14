import type { IAlgset, ICaseList } from "../../scripts/config/setDefinitions/dataFormat"
import { useGrouping } from "../../scripts/config/setDefinitions/setConstructors/eg1"

import yml from '../userSets/eg1.yml'
const data: ICaseList = yml

const EG1NoGrouping: IAlgset = useGrouping('none', data)
const EG1GroupByOLL: IAlgset = useGrouping('oll', data)

export { EG1NoGrouping, EG1GroupByOLL }