import { IPuzzleDisplayConfig } from "../../../scripts/config/puzzle"
import { puzzle4x4x4 } from "../../../scripts/config/puzzle/4x4"
import { ISetDisplayConfig } from "../../../types/setDefinition"
import { createConfig } from "../../../types/displayConfig"
import { SetAndGroupingDefinition } from "../../../types/setAndGroupingDefinition"

// CONFIG
const puzzleOptions: IPuzzleDisplayConfig = puzzle4x4x4
const setOptions: ISetDisplayConfig = {
  name: "Full PLL Parity",
}
const displayConfig = createConfig(puzzleOptions, setOptions)

// CASENAMES
const caseNames = [
  "opp", "adj", "Oa", "Ob", "W", "pJ", "pN", "M", "Ka", "Kb", "Ba", "Bb", "Ca", "Cb", "Da", "Db", "Pa", "Pb", "Q", "X", "Sa", "Sb"
] as const

// GROUPING
const groupingNames = ["none", "cp"] as const

// CASESLIST
import casesList from '../setCaseListDefaults/parityPLL.yml'

export const parityPLLGroupingConfig = {
  displayConfig: displayConfig,
  caseNames: caseNames,
  groupingNames: groupingNames,
  casesList: casesList
} satisfies SetAndGroupingDefinition