import { IConfig, createConfig } from "../../scripts/config";
import { puzzle3x3x3 } from "../../scripts/config/puzzle/3x3";
import type { IAlgset, ICaseList } from "../../scripts/config/setDefinitions/dataFormat"


import yml from './zbls.yml'

let config: IConfig = createConfig(puzzle3x3x3, {
    name: "ZBLS",
    visualCubeConfig: {
        stage: 'vh',
        view: 'trans',
        rot: "y'",
    },
    twistyPlayerConfig: {
        stage: 'ZBLS',
    },
})

let _:ICaseList = yml

const ZBLSNoGrouping: IAlgset = {
    config: config,
    sets: [
        {
            name: "WIP Format",
            children: Object.assign(_)
        },
    ]
}

export { ZBLSNoGrouping }