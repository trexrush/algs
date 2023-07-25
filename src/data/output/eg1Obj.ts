import type { IAlgset, ICaseList } from "../../scripts/config/set/dataFormat"
import { useGrouping } from "../../scripts/config/set/eg1"

import yml from '../userSets/eg1.yml'
const data: ICaseList = yml

const EG1NoGrouping: IAlgset = useGrouping('none', data)
const EG1GroupByOLL: IAlgset = useGrouping('oll', data)

export { EG1NoGrouping, EG1GroupByOLL }