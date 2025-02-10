import { useEG1Grouping } from "../../setDefinition/setGroupings/eg1";
import type { ICaseList } from "../../../types/dataFormat"

import yml from '../data/EG1_TREX.yml'
const data:ICaseList = yml

export const eg1TrexSheetGroupings = useEG1Grouping(data)