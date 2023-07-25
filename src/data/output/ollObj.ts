import type { IAlgset, ICaseList } from '../../scripts/config/set/dataFormat'
import { useGrouping } from '../../scripts/config/set/oll'

import yml from '../userSets/oll.yml'
let data: ICaseList = yml

const OLLNoGrouping: IAlgset = useGrouping('none', data)
const OLLGroupByEO: IAlgset = useGrouping('eo', data)

export { OLLGroupByEO, OLLNoGrouping }