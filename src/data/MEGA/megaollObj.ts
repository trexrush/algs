import type { IAlgset, ICaseList } from "../../scripts/config/set"
import { useGrouping } from "../../scripts/config/set/megaOLL"

//@ts-expect-error
import yml from './megaoll.yml'
let data: ICaseList = yml // TODO: validation

const MegaOLLNoGrouping: IAlgset = useGrouping('none', data)
const MegaOLLGroupByOLL: IAlgset = useGrouping('oll', data)
const MegaOLLGroupByFeature: IAlgset = useGrouping('feature', data)

export { MegaOLLNoGrouping, MegaOLLGroupByOLL, MegaOLLGroupByFeature }