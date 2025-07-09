import { useCLLGrouping } from "../../setConstants/setGroupings/cll";
import type { ICaseList } from "../../../types/dataFormat"

import yml from '../data/CLL_TREX.yml'
const data:ICaseList = yml

export const cllTrexSheetGroupings = useCLLGrouping(data)