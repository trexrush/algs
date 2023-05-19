import type { IAlgSet } from "../scripts/types"

const CLLalgSet: IAlgSet = {
    options: {
        name: "CLL",
        puzzle: '2x2x2',
        imgSource: "vc",
        vcparams: {
            view: 'plan',
            rot: "y",
        },
        twistyplayerparams: {
            rot: "x2 y'",
        },
    },
    sets: []
}

const EG1algSet: IAlgSet = {
    options: {
        name: "EG-1",
        puzzle: '2x2x2',
        imgSource: "vc",
        vcparams: {
            stage: '',
            view: 'plan',
            rot: "y",
        },
        twistyplayerparams: {
            rot: "x2 y'",

        },
    },
    sets: []
}

export { EG1algSet, CLLalgSet }