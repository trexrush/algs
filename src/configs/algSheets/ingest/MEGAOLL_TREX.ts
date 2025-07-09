import { useMegaOLLGrouping } from "../../setConstants/setGroupings/megaOLL";
import type { ICaseList } from "../../../types/dataFormat"

import yml from '../data/MEGAOLL_TREX.yml'
const data:ICaseList = yml

export const megaOLLTrexSheetGroupings = useMegaOLLGrouping(data)