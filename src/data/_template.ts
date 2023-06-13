import type { IOptions, IAlgSet, ICaseList } from "../scripts/types"
import { createOptions } from "../scripts/utilities"
//@ts-expect-error
import yml from './oll.yml' // REPLACE WITH THE SET YAML

// note that by default everything will be assumed to be righty. you MUST indicate that an alg is lefty if it is.
// assume starting rotation or algvis to be a righty view, the code will flip it for any algs marked lefty.
const Options: IOptions = createOptions({
        name: "",
        imgSource: "vc",
        puzzle: '3x3x3',
})

let _: ICaseList = yml

const VIEWNAMEHERE: IAlgSet = {
    options: Options,
    sets: [
        {
            name: "TEMPLATE SET",
            children: Object.assign([/* algs are manually placed here */])
        },
    ]
}

// export { VIEWNAMEHERE }