import { IPuzzleDisplayConfig } from "../../../scripts/config/puzzle"
import { puzzle3x3x3 } from "../../../scripts/config/puzzle/3x3"
import { ISetDisplayConfig } from "../../../types/setDefinition"
import { createConfig } from "../../../types/displayConfig"
import { SetAndGroupingDefinition } from "../../../types/setAndGroupingDefinition"

// CONFIG
const puzzleOptions: IPuzzleDisplayConfig = puzzle3x3x3
const setOptions: ISetDisplayConfig = {
  name: "OLL",
  visualCubeConfig: {
      stage: 'oll',
  },
  twistyPlayerConfig: {
      stage: 'OLL'
  },
}
const displayConfig = createConfig(puzzleOptions, setOptions)

// CASENAMES
const caseNames = [
  "1", "2", "3", "4", "5", "6", "7", "8", "9",
  "10", "11", "12", "13", "14", "15", "16", "17", "18", "19",
  "20", "21", "22", "23", "24", "25", "26", "27", "28", "29",
  "30", "31", "32", "33", "34", "35", "36", "37", "38", "39",
  "40", "41", "42", "43", "44", "45", "46", "47", "48", "49",
  "50", "51", "52", "53", "54", "55", "56", "57",
] as const

// GROUPING
const groupingNames = ["none", "eo"] as const

// CASESLIST
import casesList from '../setCaseListDefaults/oll.yml'

export const ollGroupingConfig = {
  displayConfig: displayConfig,
  caseNames: caseNames,
  groupingNames: groupingNames,
  casesList: casesList
} satisfies SetAndGroupingDefinition