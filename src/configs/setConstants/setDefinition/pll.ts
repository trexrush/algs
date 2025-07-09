import { IPuzzleDisplayConfig } from "../../../scripts/config/puzzle"
import { puzzle3x3x3 } from "../../../scripts/config/puzzle/3x3"
import { ISetDisplayConfig } from "../../../types/setDefinition"
import { createConfig } from "../../../types/displayConfig"
import { SetAndGroupingDefinition } from "../../../types/setAndGroupingDefinition"

// CONFIG
const puzzleOptions: IPuzzleDisplayConfig = puzzle3x3x3
const setOptions: ISetDisplayConfig = {
  name: "PLL",
  twistyPlayerConfig: {
    rot: 'x2'
  },
} as ISetDisplayConfig
const displayConfig = createConfig(puzzleOptions, setOptions)

// CASENAMES
const caseNames = [
  "H", "Ua", "Ub", "Z", "Aa", "Ab", "Ga", "Gb", "Gc", "Gd", "Ja", "Jb", "Ra", "Rb", "F", "T", "E", "Na", "Nb", "V", "Y"
] as const

// GROUPING
const groupingNames = ["none", "cp"] as const

// CASESLIST
import casesList from '../setCaseListDefaults/pll.yml'

export const pllGroupingConfig = {
  displayConfig: displayConfig,
  caseNames: caseNames,
  groupingNames: groupingNames,
  casesList: casesList
} satisfies SetAndGroupingDefinition