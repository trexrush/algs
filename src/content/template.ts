import type { IAlgSet } from "../scripts/types"

const algSet: IAlgSet = {
    data: {
        name: "",
        imgSource: "vc",
        vcparams: {
            stage: '',
            view: 'plan',
            rot: "y",
            puzzle: 3,
        },
        twistyplayerparams: {
            stage: '',
            rot: '',
        },
    },
    sets: []
}

export { algSet }