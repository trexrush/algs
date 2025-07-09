import { usePLLGrouping } from "../../setConstants/setGroupings/pll";
import type { ICaseList } from "../../../types/dataFormat"

import yml from '../data/PLL_TREX.yml'
let data: ICaseList = yml

export const pllTrexSheetGroupings = usePLLGrouping(data)