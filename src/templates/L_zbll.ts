import type { IAlgSetV2, ISheetsResponse, IOptions, ICaseListV2 } from "../scripts/types"
import { createOptions } from "../scripts/utilities";
import { sheetURLV2 } from "./url";

const Options: IOptions = createOptions({
    name: "ZBLL",
    puzzle: '3x3x3',
    imgSource: "vc",
    vcparams: {
        view: 'plan',
    },
})

const response = await fetch(sheetURLV2 + "?name=L_ZBLL")
const res: Awaited<ISheetsResponse> = await response.json()
console.log(res)

let _: ICaseListV2 = res.caseList

// TODO: check for errors, though not high priority since these if these calls fail, the site wont build
const LNoGrouping: IAlgSetV2 = {
    options: Options,
    sets: [
        {
            name: "WIP Format",
            children: res && Object.assign(_)
        },
    ]
}

export { LNoGrouping }