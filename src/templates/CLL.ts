import type { IAlgSetV2, ISheetsResponse, IOptions, ICaseListV2 } from "../scripts/types"
import { createOptions } from "../scripts/utilities";
import { sheetURLV2 } from "./url";

const response = await fetch(sheetURLV2 + "?name=CLL")
const res: Awaited<ISheetsResponse> = await response.json()
let _: ICaseListV2 = res.caseList


const CLLOptions: IOptions = createOptions({
  name: "CLL",
  puzzle: '2x2x2',
  imgSource: "vc",
  vcparams: {
    view: 'plan',
    rot: "y",
  },
  twistyplayerparams: {
    rot: "x2 y'",
  },
})

const CLLNoGrouping: IAlgSetV2 = {
    options: CLLOptions,
    sets: [
        {
            name: "WIP Format",
            children: res && Object.assign(_)
        },
    ]
}

export { CLLNoGrouping }