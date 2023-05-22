import type { IAlgSet } from "../scripts/types"
import { createOptions } from "../scripts/utilities"

//@ts-expect-error
import yml from './zblsData.yml'

const algSet: IAlgSet = {
    options: createOptions({
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
    }),
    sets: yml
}

export { algSet }