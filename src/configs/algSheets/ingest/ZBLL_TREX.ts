import { useZBLLGrouping } from "../../setConstants/setGroupings/zbll";
import type { ICaseList } from "../../../types/dataFormat"

import t from '../data/ZBLL_T_TREX.yml'
import u from '../data/ZBLL_U_TREX.yml'
import h from '../data/ZBLL_H_TREX.yml'

export const zbllTrexSheetGroupings = useZBLLGrouping({
  ...t as ICaseList, 
  ...u as ICaseList,
  ...h as ICaseList,
})