import type { IAlgset, ICaseList } from "../../scripts/config/set/dataFormat";
import { useGrouping } from "../../scripts/config/set/cll";


import yml from '../2x2/cll.yml' // REPLACE WITH THE SET YAML
const data: ICaseList = yml // just to typecheck

// note that by default everything will be assumed to be righty. you MUST indicate in your data that an alg is lefty if it is.
// assume starting rotation or algvis to be a righty view, the code will flip it for any algs marked lefty.


const VIEWNAMEHERE: IAlgset = useGrouping('none', data) // add any views to export here

// export { VIEWNAMEHERE }