import { useParityPLLGrouping } from "../../setDefinition/setGroupings/parityPLL";
import type { ICaseList } from "../../../types/dataFormat"

import yml from '../data/PLLPARITY_TREX.yml'
let data: ICaseList = yml

export const pllParityTrexSheetGroupings = useParityPLLGrouping(data)