import type { IDataAlgset, IOptions, IDataCaseList } from "../scripts/types"
import { createOptions } from "../scripts/utilities";
//@ts-expect-error
import yml from './paritypll.yml'

const Options: IOptions = createOptions({
    name: "ParityPLL (WARNING: EXPERIMENTAL AND PROBABLY BROKEN)",
    puzzle: '4x4x4',
    // imgSource: "cubingjs",
    imgSource: "vc",
    vcparams: {
        view: 'plan',
    },
})

let _: IDataCaseList = yml

// TODO: check for errors, though not high priority since these if these calls fail, the site wont build
const ParityPLLNoGrouping: IDataAlgset = {
    options: Options,
    sets: [
        {
            name: "WIP Format AND Algs",
            children: Object.assign(_)
        },
    ]
}

export { ParityPLLNoGrouping }