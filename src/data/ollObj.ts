
import { createConfig, type IConfig } from '../scripts/config'
import { puzzle3x3x3 } from '../scripts/config/puzzle/3x3'
import type { IAlgset, ICaseList } from '../scripts/config/set'
//@ts-expect-error
import yml from './oll.yml'

const config: IConfig = createConfig(puzzle3x3x3, {
    name: "OLL",
    visualCubeConfig: {
        stage: 'oll',
        view: 'plan',
    },
    twistyPlayerConfig: {
        cameraX: 30,
        stage: 'OLL'
    },
})

let _: ICaseList = yml

// TODO: check for errors, though not high priority since these if these calls fail, the site wont build
const OLLNoGrouping: IAlgset = {
    config: config,
    sets: [
        {
            name: "WIP Format",
            children: Object.assign(_)
        },
    ]
}

const OLLGroupByEO: IAlgset = {
    config: config,
    sets: [
        {
            name: "Dot",
            children: Object.assign([_[1], _[2], _[3], _[4], _[17], _[18], _[19], _[20], ])
        },
        {
            name: "Line",
            // 13 14 15 16 33 34 39 40 45 46 51 52 55 56 57
            children: Object.assign([_[13], _[14], _[15], _[16], _[33], _[34], _[39],
                _[40], _[45], _[46], _[51], _[52], _[55], _[56], _[57], ])
        },
        {
            name: "L",
            // 5 6 7 8 9 10 11 12 28 29 30 31 32 33 35 36 37 38 41 42 43 44 47 48 49 50 53 54
            children: Object.assign([_[5], _[6], _[7], _[8], _[9], _[10], _[11], _[12],
                _[28], _[29], _[30], _[31], _[32], _[33], _[35], _[36], _[37], _[38],
                _[41], _[42], _[43], _[44], _[47], _[48], _[49], _[50], _[53], _[54], ])
        },
        {
            name: "CPLL",
            altNames: ["4LLL", "Cross", "EO Skip", "ZBLL", "COLL",],
            children: Object.assign([_[21], _[22], _[23], _[24], _[25], _[26], _[27]])
        },
    ]
}


export { OLLGroupByEO, OLLNoGrouping }