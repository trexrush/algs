import { IPuzzleDisplayConfig } from '../../../scripts/config/puzzle'
import { puzzleMegaminx } from '../../../scripts/config/puzzle/megaminx'
import { ISetDisplayConfig } from "../../../types/setDefinition"
import { IDisplayConfig, createConfig } from '../../../types/displayConfig'
import { SetAndGroupingDefinition } from '../../../types/setAndGroupingDefinition'

// CONFIG
const puzzleOptions: IPuzzleDisplayConfig = puzzleMegaminx
const setOptions: ISetDisplayConfig = {
  name: "Megaminx PLL",
  twistyPlayerConfig: {
    rot: 'x2 y3',
    cameraY: 45,
  },
  puzzleGenConfig: {
    options: {
      puzzle: {
        scheme: {
          U: { value: '#222', stroke: '#111' },
          F: { value: '#5dc9ea', stroke: '#1a8bad' },
          L: { value: '#ffffa5', stroke: '#939360' },
          BL: { value: '#ff66d8', stroke: '#bc52a2' },
          R: { value: '#ffae0c', stroke: '#8e6616' },
          BR: { value: '#93ff0f', stroke: '#538e0b' },
        }
      }
    }
  }
}
const displayConfig: IDisplayConfig = createConfig(puzzleOptions, setOptions)

// CASENAMES
const caseNames = [
  "A1+", "A1-", "A2+", "A2-",
  "B1+", "B1-", "B2+", "B2-",
  "C1+", "C1-", "C2+", "C2-", "C3+", "C3-", "C4+", "C4-", "C5+", "C5-", "C6+", "C6-",
  "D+", "D-",
  "E1", "E2", "E3",
  "F1+", "F1-", "F2+", "F2-", "F3+", "F3-", "F4+", "F4-", "F5+", "F5-",
  "G1+", "G1-", "G2+", "G2-",
  "H1+", "H1-", "H2+", "H2-",
  "I1+", "I1-", "I2+", "I2-", "I3+", "I3-", "I4+", "I4-", "I5+", "I5-", "I6+", "I6-",
  "J1+", "J1-", "J2+", "J2-", "J3+", "J3-",
  "H1+", "H1-", "H2+", "H2-",
  "K+", "K1-", "K2+", "K2-",
  "L1", "L2", "L3+", "L3-", "L4+", "L4-", "L5+", "L5-", "L6+", "L6-",
  "M",
  "N1+", "N1-", "N2+", "N2-",
  "P1+", "P1-", "P2+", "P2-", "P3+", "P3-", "P4+", "P4-",
  "Q1+", "Q1-", "Q2+", "Q2-",
  "R1+", "R1-", "R2+", "R2-", "R3+", "R3-", "R4+", "R4-",
  "S1+", "S1-", "S2+", "S2-", "S3+", "S3-", "S4+", "S4-", "S5+", "S5-", "S6+", "S6-",
  "T1", "T2+", "T2-", "T3+", "T3-", "T4+", "T4-",
  "U1+", "U1-", "U2+", "U2-",
  "V1+", "V1-", "V2+", "V2-", "V3+", "V3-", "V4+", "V4-",
  "W",
  "X1", "X2", "X3", "X4", "X5+", "X5-", "X6+", "X6-", "X7+", "X7-",
  "Y1+", "Y1-", "Y2+", "Y2-", "Y3+", "Y3-",
  "Z1", "Z2", "Z3",
] as const

// GROUPING
const groupingNames = ["none", "letter", "feature", "justCP"] as const

// CASESLIST
import casesList from '../setCaseListDefaults/megaPLL.yml'

export const mpllGroupingConfig = {
  displayConfig: displayConfig,
  caseNames: caseNames,
  groupingNames: groupingNames,
  casesList: casesList
} satisfies SetAndGroupingDefinition