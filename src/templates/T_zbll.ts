import type { IAlgSet, ISheetsResponse, IOptions, ICaseList } from "../scripts/types"
import { createOptions } from "../scripts/utilities";
//@ts-expect-error
import yml from '../data/tZbllData.yml'

const Options: IOptions = createOptions({
    name: "ZBLL",
    puzzle: '3x3x3',
    imgSource: "vc",
    vcparams: {
        view: 'plan',
    },
})


let _: ICaseList = yml

// TODO: check for errors, though not high priority since these if these calls fail, the site wont build
const TNoGrouping: IAlgSet = {
    options: Options,
    sets: [
        {
            name: "WIP Format",
            children: Object.assign(_)
        },
    ]
}

const TGroupByCP: IAlgSet = {
    options: Options,
    sets: [
        {
            name: "Pure",
            altNames: ["2GLL", "CO+EP", "BBFF"],
            children: Object.assign([_.Pure_S, _.Pure_H, _.Pure_Z, _.Pure_AntiZ, _.Pure_BarA, _.Pure_BarO,
                 _.Pure_HAnti, _.Pure_OBar, _.Pure_HArrow, _.Pure_ABar, _.Pure_VAnti, _.Pure_VArrow])
        },
        {
            name: "Diag",
            altNames: ["Vertical Bars", "The worst one", "FBFB"],
            children: Object.assign([_.Diag_S, _.Diag_H, _.Diag_Z, _.Diag_AntiZ, _.Diag_BarA, _.Diag_BarO,
                 _.Diag_HAnti, _.Diag_OBar, _.Diag_HArrow, _.Diag_ABar, _.Diag_VAnti, _.Diag_VArrow])
        },
        {
            name: "AdjB",
            altNames: ["F Bar B Opp", "Front Bar", "RLFF"],
            children: Object.assign([_.AdjB_S, _.AdjB_H, _.AdjB_Z, _.AdjB_AntiZ, _.AdjB_BarA, _.AdjB_BarO,
                 _.AdjB_HAnti, _.AdjB_OBar, _.AdjB_HArrow, _.AdjB_ABar, _.AdjB_VAnti, _.AdjB_VArrow])
        },
        {
            name: "AdjF",
            altNames: ["F Opp B Bar", "Back Bar", "FFLR"],
            children: Object.assign([_.AdjF_S, _.AdjF_H, _.AdjF_Z, _.AdjF_AntiZ, _.AdjF_BarA, _.AdjF_BarO,
                 _.AdjF_HAnti, _.AdjF_OBar, _.AdjF_HArrow, _.AdjF_ABar, _.AdjF_VAnti, _.AdjF_VArrow])
        },
        {
            name: "AdjL",
            altNames: ["Left Bar", "FLFR"],
            children: Object.assign([_.AdjL_S, _.AdjL_H, _.AdjL_Z, _.AdjL_AntiZ, _.AdjL_BarA, _.AdjL_BarO,
                 _.AdjL_HAnti, _.AdjL_OBar, _.AdjL_HArrow, _.AdjL_ABar, _.AdjL_VAnti, _.AdjL_VArrow])
        },
        {
            name: "AdjR",
            altNames: ["Right Bar", "RFLF"],
            children: Object.assign([_.AdjR_S, _.AdjR_H, _.AdjR_Z, _.AdjR_AntiZ, _.AdjR_BarA, _.AdjR_BarO,
                 _.AdjR_HAnti, _.AdjR_OBar, _.AdjR_HArrow, _.AdjR_ABar, _.AdjR_VAnti, _.AdjR_VArrow])
        },
    ]
}

const TGroupByBH: IAlgSet = {
    options: Options,
    sets: [
        {
            name: "S",
            altNames: ["C/C", "Block", "Solved"],
            children: Object.assign([_.Pure_S, _.Diag_S, _.AdjF_S, _.AdjB_S, _.AdjR_S, _.AdjL_S])
        },
        {
            name: "H",
            altNames: ["O/O"],
            children: Object.assign([_.Pure_H, _.Diag_H, _.AdjF_H, _.AdjB_H, _.AdjR_H, _.AdjL_H])
        },
        {
            name: "Z",
            altNames: ["A/A", "Checker"],
            children: Object.assign([_.Pure_Z, _.Diag_Z, _.AdjF_Z, _.AdjB_Z, _.AdjR_Z, _.AdjL_Z])
        },
        {
            name: "AntiZ",
            altNames: ["OxO", "4 Unique Colors"],
            children: Object.assign([_.Pure_AntiZ, _.Diag_AntiZ, _.AdjF_AntiZ, _.AdjB_AntiZ, _.AdjR_AntiZ, _.AdjL_AntiZ])
        },
        {
            name: "BarA",
            altNames: ["C/A", "Sleeping Bar"],
            children: Object.assign([_.Pure_BarA, _.Diag_BarA, _.AdjF_BarA, _.AdjB_BarA, _.AdjR_BarA, _.AdjL_BarA])
        },
        {
            name: "BarO",
            altNames: ["C/O", "Sleeping Burger"],
            children: Object.assign([_.Pure_BarO, _.Diag_BarO, _.AdjF_BarO, _.AdjB_BarO, _.AdjR_BarO, _.AdjL_BarO])
        },
        {
            name: "HAnti",
            altNames: ["O/A", "Sleeping Antibar"],
            children: Object.assign([_.Pure_HAnti, _.Diag_HAnti, _.AdjF_HAnti, _.AdjB_HAnti, _.AdjR_HAnti, _.AdjL_HAnti])
        },
        {
            name: "OBar",
            altNames: ["O/C", "Standing Burger"],
            children: Object.assign([_.Pure_OBar, _.Diag_OBar, _.AdjF_OBar, _.AdjB_OBar, _.AdjR_OBar, _.AdjL_OBar])
        },
        {
            name: "HArrow",
            altNames: ["CxO", "Waterfall"],
            children: Object.assign([_.Pure_HArrow, _.Diag_HArrow, _.AdjF_HArrow, _.AdjB_HArrow, _.AdjR_HArrow, _.AdjL_HArrow])
        },
        {
            name: "ABar",
            altNames: ["A/C", "Standing Bar"],
            children: Object.assign([_.Pure_ABar, _.Diag_ABar, _.AdjF_ABar, _.AdjB_ABar, _.AdjR_ABar, _.AdjL_ABar])
        },
        {
            name: "VAnti",
            altNames: ["A/O", "Sleeping Antibar"],
            children: Object.assign([_.Pure_VAnti, _.Diag_VAnti, _.AdjF_VAnti, _.AdjB_VAnti, _.AdjR_VAnti, _.AdjL_VAnti])
        },
        {
            name: "VArrow",
            altNames: ["OxC", "River"],
            children: Object.assign([_.Pure_VArrow, _.Diag_VArrow, _.AdjF_VArrow, _.AdjB_VArrow, _.AdjR_VArrow, _.AdjL_VArrow])
        },  
    ]
}


export { TNoGrouping, TGroupByCP, TGroupByBH }