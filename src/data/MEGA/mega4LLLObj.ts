import type { IAlgset, ICaseList } from "../../scripts/config/set/dataFormat"
import { useGrouping as OLL } from "../../scripts/config/set/megaOLL"
import { useGrouping as PLL } from "../../scripts/config/set/megaPLL"


import yml from './megaoll.yml'

import yml2 from './megapll.yml'
let olldata: ICaseList = yml
let plldata: ICaseList = yml2

const MegaCO: IAlgset = OLL('4LLLjustCO', olldata)
const MegaCP: IAlgset = PLL('4LLLjustCP', plldata)

export { MegaCO, MegaCP }