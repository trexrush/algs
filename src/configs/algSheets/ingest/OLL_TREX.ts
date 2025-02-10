import { useOLLGrouping } from "../../setDefinition/setGroupings/oll";
import type { ICaseList } from "../../../types/dataFormat"

import yml from '../data/OLL_TREX.yml'
let data: ICaseList = yml

export const ollTrexSheetGroupings = useOLLGrouping(data)