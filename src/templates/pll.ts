import type { ICaseListV2, IAlgSetV2, IOptions } from "../scripts/types"
import { createOptions } from "../scripts/utilities"
//@ts-expect-error
import yml from './pllData.yml'

const _: ICaseListV2 = yml

const Options: IOptions = createOptions({
    name: "PLL",
    puzzle: '3x3x3',
    imgSource: "vc",
    twistyplayerparams: {
        cameraX: -30,
        rot: 'x2'
    },
})

const PLLNoGrouping: IAlgSetV2 = {
    options: Options,
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

const PLLGroupedBySet: IAlgSetV2 = {
    options: Options,
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