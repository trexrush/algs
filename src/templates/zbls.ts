import type { IAlgSet } from "../scripts/types"

const algSet: IAlgSet = {
    options: {
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
    },
    sets: [
    ]
}

export { algSet }