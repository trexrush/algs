import type { IAlgset, ICaseList } from "../../scripts/config/setDefinitions/dataFormat"
import { useGrouping as OLL } from "../../scripts/config/setDefinitions/setConstructors/megaOLL"
import { useGrouping as PLL } from "../../scripts/config/setDefinitions/setConstructors/megaPLL"


import yml from '../userSets/megaoll.yml'
import yml2 from '../userSets/megapll.yml'
let olldata: ICaseList = yml
let plldata: ICaseList = yml2

const MegaCO: IAlgset = OLL('4LLLjustCO', olldata)
const MegaCP: IAlgset = PLL('4LLLjustCP', plldata)

export { MegaCO, MegaCP }