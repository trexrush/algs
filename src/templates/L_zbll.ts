import type { IAlgSetV2, IOptions, ICaseListV2 } from "../scripts/types"
import { createOptions } from "../scripts/utilities";
//@ts-expect-error
import yml from './lZbllData.yml'

const Options: IOptions = createOptions({
    name: "ZBLL",
    puzzle: '3x3x3',
    imgSource: "vc",
    vcparams: {
        view: 'plan',
    },
})

let _: ICaseListV2 = yml

// TODO: check for errors, though not high priority since these if these calls fail, the site wont build
const LNoGrouping: IAlgSetV2 = {
    options: Options,
    sets: [
        {
            name: "WIP Format",
            children: Object.assign(_)
        },
    ]
}

export { LNoGrouping }