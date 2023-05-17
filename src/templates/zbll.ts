import type { IAlgSet, IAlgSetV2, ISheetsResponse, IOptions } from "../scripts/types"
import { sheetURLV2 } from "./url";

const Options: IOptions = {
    name: "ZBLL",
    imgSource: "vc",
    vcparams: {
        stage: '',
        view: 'plan',
        rot: "",
    },
    twistyplayerparams: {
        stage: '',
    },
}

const algSet: IAlgSet = {
    options: Options,
    sets: []
}

const response = await fetch(sheetURLV2 + "?name=T_ZBLL")
const res: Awaited<ISheetsResponse> = await response.json()
console.log(res)
const TNoGrouping: IAlgSetV2 = {
    options: Options,
    sets: [
        {
            name: "WIP - migrating to new format, expect pains",
            children: res && Object.assign(res.caseList)
        },
    ]
}


export { algSet, TNoGrouping }