import { IConfig, createConfig } from "../scripts/config";
import { puzzle3x3x3 } from "../scripts/config/puzzle/3x3";
import type { IAlgset, ICaseList } from "../scripts/config/set/dataFormat";

//@ts-expect-error
import yml from './oll.yml' // REPLACE WITH THE SET YAML

// note that by default everything will be assumed to be righty. you MUST indicate that an alg is lefty if it is.
// assume starting rotation or algvis to be a righty view, the code will flip it for any algs marked lefty.
const config: IConfig = createConfig(puzzle3x3x3, {
        name: "",
})

let _: ICaseList = yml

const VIEWNAMEHERE: IAlgset = {
    config: config,
    sets: [
        {
            name: "TEMPLATE SET",
            children: Object.assign([/* algs are manually placed here */])
        },
    ]
}

// export { VIEWNAMEHERE }