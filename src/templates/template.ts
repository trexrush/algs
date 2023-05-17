import type { IAlgSet } from "../scripts/types"

const algSet: IAlgSet = {
    options: {
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
    sets: [
        {
            name: '',
            sets: [
            ],
            cases: [
                { name: '', algs: [""] },
            ],
        },
    ],
}

export { algSet }