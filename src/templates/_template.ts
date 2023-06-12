import type { IOptions, IAlgSet } from "../scripts/types"
import { createOptions } from "../scripts/utilities"

// note that by default everything will be assumed to be righty. you MUST indicate that an alg is lefty if it is.
// assume starting rotation or algvis to be a righty view, the code will flip it for any algs marked lefty.
const Options: IOptions = createOptions({
        name: "",
        imgSource: "vc",
        puzzle: '3x3x3',
})

const VIEWNAMEHERE: IAlgSet = {
    options: Options,
    sets: [
        {
            name: "Some Set",
            children: Object.assign([/* algs are manually placed here */])
        },
    ]
}

// export { VIEWNAMEHERE }