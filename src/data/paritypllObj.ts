import type { IAlgset, ICaseList } from "../scripts/config/set"
import { IConfig, createConfig } from "../scripts/config";
import { puzzle4x4x4 } from "../scripts/config/puzzle/4x4";
//@ts-expect-error
import yml from './paritypll.yml'

const config: IConfig = createConfig(puzzle4x4x4, {
    name: "ParityPLL",
})

let _: ICaseList = yml

// TODO: check for errors, though not high priority since these if these calls fail, the site wont build
const ParityPLLNoGrouping: IAlgset = {
    config: config,
    sets: [
        {
            name: "WIP Format AND Algs",
            children: Object.assign(_)
        },
    ]
}

export { ParityPLLNoGrouping }