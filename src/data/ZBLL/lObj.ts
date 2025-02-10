import { IDisplayConfig, createConfig } from "../../types/displayConfig";
import { puzzle3x3x3 } from "../../scripts/config/puzzle/3x3";
import type { IAlgset, ICaseList } from "../../types/dataFormat"

import yml from './l.yml'

const config: IDisplayConfig = createConfig(puzzle3x3x3, {
    name: "ZBLL",
})

let _: ICaseList = yml

const LNoGrouping: IAlgset = {
    config: config,
    sets: [
        {
            name: "WIP Format",
            children: Object.assign(_)
        },
    ]
}

export { LNoGrouping }