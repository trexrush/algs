import type { IAlgset, ICaseList } from '../../scripts/config/setDefinitions/dataFormat'
import { useGrouping } from '../../scripts/config/setDefinitions/setConstructors/oll'

import yml from '../userSets/oll.yml'
let data: ICaseList = yml

const OLLNoGrouping: IAlgset = useGrouping('none', data)
const OLLGroupByEO: IAlgset = useGrouping('eo', data)

export { OLLGroupByEO, OLLNoGrouping }