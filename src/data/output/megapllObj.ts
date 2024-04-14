import type { IAlgset, ICaseList } from "../../scripts/config/setDefinitions/dataFormat"
import { useGrouping } from "../../scripts/config/setDefinitions/setConstructors/megaPLL"


import yml from '../userSets/megapll.yml'
let data: ICaseList = yml

const MegaPLLNoGrouping: IAlgset = useGrouping('none', data)
const MegaPLLGroupByLetter: IAlgset = useGrouping('letter', data)
const MegaPLLGroupByFeatures: IAlgset = useGrouping('feature', data)

export { MegaPLLNoGrouping, MegaPLLGroupByLetter, MegaPLLGroupByFeatures }











