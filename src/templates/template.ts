import type { IOptions, IAlgSetV2 } from "../scripts/types"

const Options: IOptions = {
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
}

const TemplateView: IAlgSetV2 = {
    options: Options,
    sets: [
        {
            name: "Some Set",
            children: Object.assign([/* algs are manually placed here */])
        },
    ]
}

export { TemplateView }