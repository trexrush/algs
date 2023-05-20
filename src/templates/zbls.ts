import type { IAlgSet } from "../scripts/types"
import { createOptions } from "../scripts/utilities"

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
    sets: [
    ]
}

export { algSet }