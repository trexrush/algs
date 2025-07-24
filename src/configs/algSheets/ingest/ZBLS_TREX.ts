import { useZBLSGrouping } from "../../setConstants/setGroupings/zbls";
import type { ICaseList } from "../../../types/dataFormat"

import yml from '../data/ZBLS_FR_TREX.yml'
let data: ICaseList = yml

export const zblsTrexSheetGroupings = useZBLSGrouping(data)