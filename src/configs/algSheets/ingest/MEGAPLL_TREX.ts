import { useMegaPLLGrouping } from "../../setDefinition/setGroupings/megaPLL";
import type { ICaseList } from "../../../types/dataFormat"

import yml from '../data/MEGAPLL_TREX.yml'
const data:ICaseList = yml

export const megaPLLTrexSheetGroupings = useMegaPLLGrouping(data)