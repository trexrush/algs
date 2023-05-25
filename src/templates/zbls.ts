import type { IAlgSet, IOptions } from "../scripts/types"
import { createOptions } from "../scripts/utilities"

//@ts-expect-error
import yml from './zblsData.yml'

let Options: IOptions = createOptions({
    name: "ZBLS",
    puzzle: '3x3x3',
    imgSource: "vc",
    vcparams: {
        stage: 'vh',
        view: 'trans',
        rot: "y'",
    },
    twistyplayerparams: {
        stage: 'ZBLS',
    },
})

let _:IAlgSet = yml

const ZBLSNoGrouping: IAlgSet = {
    options: Options,
    sets: [
        {
            name: "WIP Format",
            children: Object.assign(_)
        },
    ]
}

export { ZBLSNoGrouping }