import { IPuzzleDisplayConfig } from '../../../scripts/config/puzzle'
import { puzzle2x2x2 } from '../../../scripts/config/puzzle/2x2'
import { ISetDisplayConfig } from "../../../types/setDefinition"
import { IDisplayConfig, createConfig } from '../../../types/displayConfig'
import { SetAndGroupingDefinition } from '../../../types/setAndGroupingDefinition'

// CONFIG
const puzzleOptions: IPuzzleDisplayConfig = puzzle2x2x2
const setOptions: ISetDisplayConfig = {
  name: "EG1",
  visualCubeConfig: {
    rot: "y",
  },
  twistyPlayerConfig: {
    rot: "x2 y'",
  }
}
const displayConfig: IDisplayConfig = createConfig(puzzleOptions, setOptions)

// CASENAMES
const caseNames = [
  "S1", "S2", "S3", "S4", "S5", "S6",
  "AS1", "AS2", "AS3", "AS4", "AS5", "AS6",
  "Pi1", "Pi2", "Pi3", "Pi4", "Pi5", "Pi6",
  "T1", "T2", "T3", "T4", "T5", "T6",
  "U1", "U2", "U3", "U4", "U5", "U6",
  "L1", "L2", "L3", "L4", "L5", "L6",
  "H1", "H2", "H3", "H4",
] as const

// GROUPING
const groupingNames = ["none", "oll"] as const

// CASESLIST
import casesList from '../setCaseListDefaults/eg1.yml'

export const eg1GroupingConfig = {
  displayConfig: displayConfig,
  caseNames: caseNames,
  groupingNames: groupingNames,
  casesList: casesList
} satisfies SetAndGroupingDefinition