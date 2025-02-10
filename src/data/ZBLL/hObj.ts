import { IDisplayConfig, createConfig } from "../../types/displayConfig";
import { puzzle3x3x3 } from "../../scripts/config/puzzle/3x3";
import type { IAlgset, ICaseList } from "../../types/dataFormat"

import yml from './h.yml'

const config: IDisplayConfig = createConfig(puzzle3x3x3, {
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