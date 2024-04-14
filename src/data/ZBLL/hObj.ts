import { IConfig, createConfig } from "../../scripts/config";
import { puzzle3x3x3 } from "../../scripts/config/puzzle/3x3";
import type { IAlgset, ICaseList } from "../../scripts/config/setDefinitions/dataFormat"

import yml from './h.yml'

const config: IConfig = createConfig(puzzle3x3x3, {
    name: "ZBLL",
})

let _: ICaseList = yml

const HNoGrouping: IAlgset = {
    config: config,
    sets: [
        {
            name: "WIP Format AND Algs",
            children: Object.assign(_)
        },
    ]
}

export { HNoGrouping }