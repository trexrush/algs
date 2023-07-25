import { IConfig, createConfig } from "../scripts/config";
import { puzzle3x3x3 } from "../scripts/config/puzzle/3x3";
import type { IAlgset, ICaseList } from "../scripts/config/set/dataFormat"
//@ts-expect-error
import yml from './pll.yml'

const _: ICaseList = yml

const config: IConfig = createConfig(puzzle3x3x3, {
    name: "PLL",
    twistyPlayerConfig: {
        rot: 'x2'
    },
})

const PLLNoGrouping: IAlgset = {
    config: config,
    sets: [
        {
            name: "",
            children: Object.assign([_.Aa, _.Ab, _.E, _.F,
                _.Ga, _.Gb, _.Gc, _.Gd,  
                _.H, _.Ja, _.Jb, _.Na, _.Nb, 
                _.Ra, _.Rb, _.T, _.Ua, _.Ub, _.V, _.Y])
        },
    ]
}

const PLLGroupedBySet: IAlgset = {
    config: config,
    sets: [
        {
            name: "EPLL",
            children: Object.assign([_.H, _.Ua, _.Ub, _.Z])
        },
        {
            name: "Adj",
            children: Object.assign([_.Aa, _.Ab, _.Ga, _.Gb, _.Gc, _.Gd, _.Ja, _.Jb, _.Ra, _.Rb, _.F, _.T]),
        },
        {
            name: "Diag",
            children: Object.assign([_.E, _.Na, _.Nb, _.V, _.Y])
        }
    ]
}

export { PLLNoGrouping, PLLGroupedBySet }