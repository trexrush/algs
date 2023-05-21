import type { IOptions, IAlgSetV2 } from "../scripts/types"

// note that by default everything will be assumed to be righty. you MUST indicate that an alg is lefty if it is.
// assume starting rotation or algvis to be a righty view, the code will flip it for any algs marked lefty.
const Options: IOptions = {
        name: "",
        imgSource: "vc",
        puzzle: '3x3x3',
        vcparams: {
            stage: '',
            view: 'plan',
            rot: "y",
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