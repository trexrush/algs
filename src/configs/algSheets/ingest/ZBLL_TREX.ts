import { useZBLLGrouping } from "../../setConstants/setGroupings/zbll";
import type { ICaseList } from "../../../types/dataFormat"

import t from '../data/T_ZBLL_TREX.yml'
let data_t: ICaseList = t

export const zbllTrexSheetGroupings = useZBLLGrouping(data_t)