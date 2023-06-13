import type { IAlgSet, ICaseList, IOptions } from "../../scripts/types"
import { createOptions } from "../../scripts/utilities";
//@ts-expect-error
import yml from './cll.yml'

const Options: IOptions = createOptions({
  name: "CLL",
  puzzle: '2x2x2',
  imgSource: "vc",
  vcparams: {
    view: 'plan',
    rot: "y",
  },
  twistyplayerparams: {
    rot: "x2 y'",
  }
})

const _:ICaseList = yml

const CLLNoGrouping: IAlgSet = {
    options: Options,
    sets: [
        {
            name: "WIP Format",
            children: Object.assign(_)
        },
    ]
}

const CLLGroupByOLL: IAlgSet = {
  options: Options,
  sets: [
    {
        name: "Sune",
        altNames: ["S"],
        children: Object.assign([_.S1, _.S2, _.S3, _.S4, _.S5, _.S6])
    },
    {
        name: "Antisune",
        altNames: ["AS"],
        children: Object.assign([_.AS1, _.AS2, _.AS3, _.AS4, _.AS5, _.AS6])
    },
    {
        name: "H",
        children: Object.assign([_.H1, _.H2, _.H3, _.H4])
    },
    {
        name: "Pi",
        children: Object.assign([_.Pi1, _.Pi2, _.Pi3, _.Pi4, _.Pi5, _.Pi6])
    },
    {
        name: "T",
        children: Object.assign([_.T1, _.T2, _.T3, _.T4, _.T5, _.T6])
    },
    {
        name: "U",
        children: Object.assign([_.U1, _.U2, _.U3, _.U4, _.U5, _.U6])
    },
    {
        name: "L",
        children: Object.assign([_.L1, _.L2, _.L3, _.L4, _.L5, _.L6])
    },
  ]
} 

export { CLLNoGrouping, CLLGroupByOLL }