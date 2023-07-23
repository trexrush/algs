import { IConfig, createConfig } from "../../scripts/config";
import { puzzle3x3x3 } from "../../scripts/config/puzzle/3x3";
import type { IAlgset, ICaseList } from "../../scripts/config/set"
//@ts-expect-error
import yml from './h.yml'

const config: IConfig = createConfig(puzzle3x3x3, {
    name: "ZBLL",
    visualCubeConfig: {
        view: 'plan',
    },
})

let _: ICaseList = yml

// TODO: check for errors, though not high priority since these if these calls fail, the site wont build
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