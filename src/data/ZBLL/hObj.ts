import type { IAlgSet, IOptions, ICaseList } from "../../scripts/types"
import { createOptions } from "../../scripts/utilities";
//@ts-expect-error
import yml from './h.yml'

const Options: IOptions = createOptions({
    name: "ZBLL",
    puzzle: '3x3x3',
    imgSource: "vc",
    vcparams: {
        view: 'plan',
    },
})

let _: ICaseList = yml

// TODO: check for errors, though not high priority since these if these calls fail, the site wont build
const HNoGrouping: IAlgSet = {
    options: Options,
    sets: [
        {
            name: "WIP Format AND Algs",
            children: Object.assign(_)
        },
    ]
}

export { HNoGrouping }