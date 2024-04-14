import { IConfig, createConfig } from "../../scripts/config";
import { puzzle3x3x3 } from "../../scripts/config/puzzle/3x3";
import type { IAlgset, ICaseList } from "../../scripts/config/setDefinitions/dataFormat"

import yml from './u.yml'

const config: IConfig = createConfig(puzzle3x3x3, {
    name: "ZBLL",
})

let _: ICaseList = yml

const UNoGrouping: IAlgset = {
    config: config,
    sets: [
        {
            name: "WIP Format",
            children: Object.assign(_)
        },
    ]
}

const UGroupByCP: IAlgset = {
    config: config,
    sets: [
        {
            name: "Pure",
            altNames: ["2GLL", "CO+EP", "BBFF"],
            children: Object.assign([_.Pure_S, _.Pure_H, _.Pure_Z, _.Pure_AntiZ, _.Pure_BarA, _.Pure_BarO,
                 _.Pure_HAnti, _.Pure_OBar, _.Pure_HArrow, _.Pure_ABar, _.Pure_VAnti, _.Pure_VArrow])
        },
        {
            name: "Diag",
            altNames: ["Vertical Bars", "FBFB"],
            children: Object.assign([_.Diag_S, _.Diag_H, _.Diag_Z, _.Diag_AntiZ, _.Diag_BarA, _.Diag_BarO,
                 _.Diag_HAnti, _.Diag_OBar, _.Diag_HArrow, _.Diag_ABar, _.Diag_VAnti, _.Diag_VArrow])
        },
        {
            name: "Bars",
            altNames: ["F Bar B Opp", "Front Bar", "RLFF"],
            children: Object.assign([_.Bars_S, _.Bars_H, _.Bars_Z, _.Bars_AntiZ, _.Bars_BarA, _.Bars_BarO,
                 _.Bars_HAnti, _.Bars_OBar, _.Bars_HArrow, _.Bars_ABar, _.Bars_VAnti, _.Bars_VArrow])
        },
        {
            name: "Checker",
            altNames: ["F Opp B Bar", "Back Bar", "FFLR"],
            children: Object.assign([_.Checker_S, _.Checker_H, _.Checker_Z, _.Checker_AntiZ, _.Checker_BarA, _.Checker_BarO,
                 _.Checker_HAnti, _.Checker_OBar, _.Checker_HArrow, _.Checker_ABar, _.Checker_VAnti, _.Checker_VArrow])
        },
        {
            name: "Backslash",
            altNames: ["Left Bar", "FLFR"],
            children: Object.assign([_.Backslash_S, _.Backslash_H, _.Backslash_Z, _.Backslash_AntiZ, _.Backslash_BarA, _.Backslash_BarO,
                 _.Backslash_HAnti, _.Backslash_OBar, _.Backslash_HArrow, _.Backslash_ABar, _.Backslash_VAnti, _.Backslash_VArrow])
        },
        {
            name: "Slash",
            altNames: ["Right Bar", "RFLF"],
            children: Object.assign([_.Slash_S, _.Slash_H, _.Slash_Z, _.Slash_AntiZ, _.Slash_BarA, _.Slash_BarO,
                 _.Slash_HAnti, _.Slash_OBar, _.Slash_HArrow, _.Slash_ABar, _.Slash_VAnti, _.Slash_VArrow])
        },
    ]
}

const UGroupByBH: IAlgset = {
    config: config,
    sets: [
        {
            name: "S",
            altNames: ["C/C", "Block", "Solved"],
            children: Object.assign([_.Pure_S, _.Diag_S, _.Checker_S, _.Bars_S, _.Slash_S, _.Backslash_S])
        },
        {
            name: "H",
            altNames: ["O/O"],
            children: Object.assign([_.Pure_H, _.Diag_H, _.Checker_H, _.Bars_H, _.Slash_H, _.Backslash_H])
        },
        {
            name: "Z",
            altNames: ["A/A", "Checker"],
            children: Object.assign([_.Pure_Z, _.Diag_Z, _.Checker_Z, _.Bars_Z, _.Slash_Z, _.Backslash_Z])
        },
        {
            name: "AntiZ",
            altNames: ["OxO", "4 Unique Colors"],
            children: Object.assign([_.Pure_AntiZ, _.Diag_AntiZ, _.Checker_AntiZ, _.Bars_AntiZ, _.Slash_AntiZ, _.Backslash_AntiZ])
        },
        {
            name: "BarA",
            altNames: ["C/A", "Sleeping Bar"],
            children: Object.assign([_.Pure_BarA, _.Diag_BarA, _.Checker_BarA, _.Bars_BarA, _.Slash_BarA, _.Backslash_BarA])
        },
        {
            name: "BarO",
            altNames: ["C/O", "Sleeping Burger"],
            children: Object.assign([_.Pure_BarO, _.Diag_BarO, _.Checker_BarO, _.Bars_BarO, _.Slash_BarO, _.Backslash_BarO])
        },
        {
            name: "HAnti",
            altNames: ["O/A", "Sleeping Antibar"],
            children: Object.assign([_.Pure_HAnti, _.Diag_HAnti, _.Checker_HAnti, _.Bars_HAnti, _.Slash_HAnti, _.Backslash_HAnti])
        },
        {
            name: "OBar",
            altNames: ["O/C", "Standing Burger"],
            children: Object.assign([_.Pure_OBar, _.Diag_OBar, _.Checker_OBar, _.Bars_OBar, _.Slash_OBar, _.Backslash_OBar])
        },
        {
            name: "HArrow",
            altNames: ["CxO", "Waterfall"],
            children: Object.assign([_.Pure_HArrow, _.Diag_HArrow, _.Checker_HArrow, _.Bars_HArrow, _.Slash_HArrow, _.Backslash_HArrow])
        },
        {
            name: "ABar",
            altNames: ["A/C", "Standing Bar"],
            children: Object.assign([_.Pure_ABar, _.Diag_ABar, _.Checker_ABar, _.Bars_ABar, _.Slash_ABar, _.Backslash_ABar])
        },
        {
            name: "VAnti",
            altNames: ["A/O", "Sleeping Antibar"],
            children: Object.assign([_.Pure_VAnti, _.Diag_VAnti, _.Checker_VAnti, _.Bars_VAnti, _.Slash_VAnti, _.Backslash_VAnti])
        },
        {
            name: "VArrow",
            altNames: ["OxC", "River"],
            children: Object.assign([_.Pure_VArrow, _.Diag_VArrow, _.Checker_VArrow, _.Bars_VArrow, _.Slash_VArrow, _.Backslash_VArrow])
        },  
    ]
}

export { UNoGrouping, UGroupByCP, UGroupByBH }