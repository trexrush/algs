import type { IDataAlgset, IOptions, IDataCaseList } from "../../scripts/types"
import { createOptions } from "../../scripts/utilities";
//@ts-expect-error
import yml from './l.yml'

const Options: IOptions = createOptions({
    name: "ZBLL",
    puzzle: '3x3x3',
    imgSource: "vc",
    vcparams: {
        view: 'plan',
    },
})

let _: IDataCaseList = yml

// TODO: check for errors, though not high priority since these if these calls fail, the site wont build
const LNoGrouping: IDataAlgset = {
    options: Options,
    sets: [
        {
            name: "WIP Format",
            children: Object.assign(_)
        },
    ]
}

export { LNoGrouping }