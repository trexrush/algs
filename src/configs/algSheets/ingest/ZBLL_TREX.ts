import { useZBLLGrouping } from "../../setConstants/setGroupings/zbll";
import type { ICaseList } from "../../../types/dataFormat"

import t from '../data/T_ZBLL_TREX.yml'
import u from '../data/U_ZBLL_TREX.yml'

export const zbllTrexSheetGroupings = useZBLLGrouping({
  ...t as ICaseList, 
  ...u as ICaseList
})