import type { IAlgSet } from "../scripts/types"

const CLLalgSet: IAlgSet = {
    options: {
        name: "CLL",
        imgSource: "vc",
        vcparams: {
            view: 'plan',
            rot: "y",
            puzzle: 2,
        },
        twistyplayerparams: {
            rot: "x2 y'",
            puzzle: '2x2x2'
        },
    },
    sets: []
}

const EG1algSet: IAlgSet = {
    options: {
        name: "EG-1",
        imgSource: "vc",
        vcparams: {
            stage: '',
            view: 'plan',
            rot: "y",
            puzzle: 2,
        },
        twistyplayerparams: {
            rot: "x2 y'",
            puzzle: '2x2x2'

        },
    },
    sets: []
}

export { EG1algSet, CLLalgSet }