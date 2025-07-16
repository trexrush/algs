import { IPuzzleDisplayConfig } from "../../../scripts/config/puzzle"
import { puzzle3x3x3 } from "../../../scripts/config/puzzle/3x3"
import { ISetDisplayConfig } from "../../../types/setDefinition"
import { createConfig } from "../../../types/displayConfig"
import { SetAndGroupingDefinition } from "../../../types/setAndGroupingDefinition"

// CONFIG
const puzzleOptions: IPuzzleDisplayConfig = puzzle3x3x3
const setOptions: ISetDisplayConfig = {
  name: "ZBLS",
  twistyPlayerConfig: {
    rot: 'x2'
  },
} as ISetDisplayConfig
const displayConfig = createConfig(puzzleOptions, setOptions)

// CASENAMES
const caseNames = [
'A+1', 'A+2', 'A+3', 'A+4', 'A+5', 'A+6', 'A+7', 'A+8',       
'A-1', 'A-2', 'A-3', 'A-4', 'A-5', 'A-6', 'A-7', 'A-8',       
'B-1', 'B-2', 'B-3', 'B-4', 'B-5', 'B-6', 'B-7', 'B-8',       
'B+1', 'B+2', 'B+3', 'B+4', 'B+5', 'B+6', 'B+7', 'B+8',       
'W+1', 'W+2', 'W+3', 'W+4', 'W+5', 'W+6', 'W+7', 'W+8',       
'W-1', 'W-2', 'W-3', 'W-4', 'W-5', 'W-6', 'W-7', 'W-8',       
'M+1', 'M+2', 'M+3', 'M+4', 'M+5', 'M+6', 'M+7', 'M+8',       
'M-1', 'M-2', 'M-3', 'M-4', 'M-5', 'M-6', 'M-7', 'M-8',       
'R-1', 'R-2', 'R-3', 'R-4', 'R-5', 'R-6', 'R-7', 'R-8',       
'R+1', 'R+2', 'R+3', 'R+4', 'R+5', 'R+6', 'R+7', 'R+8',       
'X-1', 'X-2', 'X-3', 'X-4', 'X-5', 'X-6', 'X-7', 'X-8',       
'X+1', 'X+2', 'X+3', 'X+4', 'X+5', 'X+6', 'X+7', 'X+8',       
'K-1', 'K-2', 'K-3', 'K-4', 'K-5', 'K-6', 'K-7', 'K-8',       
'K+1', 'K+2', 'K+3', 'K+4', 'K+5', 'K+6', 'K+7', 'K+8',       
'I+1', 'I+2', 'I+3', 'I+4', 'I+5', 'I+6', 'I+7', 'I+8',       
'I-1', 'I-2', 'I-3', 'I-4', 'I-5', 'I-6', 'I-7', 'I-8',       
'H+1', 'H+2', 'H+3', 'H+4', 'H+5', 'H+6', 'H+7', 'H+8',       
'H-1', 'H-2', 'H-3', 'H-4', 'H-5', 'H-6', 'H-7', 'H-8',       
'Q+1', 'Q+2', 'Q+3', 'Q+4', 'Q+5', 'Q+6', 'Q+7', 'Q+8',       
'Q-1', 'Q-2', 'Q-3', 'Q-4', 'Q-5', 'Q-6', 'Q-7', 'Q-8',       
'P+1', 'P+2', 'P+3', 'P+4', 'P+5', 'P+6', 'P+7', 'P+8',       
'P-1', 'P-2', 'P-3', 'P-4', 'P-5', 'P-6', 'P-7', 'P-8',       
'G+1', 'G+2', 'G+3', 'G+4', 'G+5', 'G+6', 'G+7', 'G+8',       
'G-1', 'G-2', 'G-3', 'G-4', 'G-5', 'G-6', 'G-7', 'G-8',       
'E-1', 'E-2', 'E-3', 'E-4', 'E-5', 'E-6', 'E-7', 'E-8',       
'E+1', 'E+2', 'E+3', 'E+4', 'E+5', 'E+6', 'E+7', 'E+8',       
'J+1', 'J+2', 'J+3', 'J+4', 'J+5', 'J+6', 'J+7', 'J+8',       
'L-1', 'L-2', 'L-3', 'L-4', 'L-5', 'L-6', 'L-7', 'L-8',       
'L+1', 'L+2', 'L+3', 'L+4', 'L+5', 'L+6', 'L+7', 'L+8',       
'J-1', 'J-2', 'J-3', 'J-4', 'J-5', 'J-6', 'J-7', 'J-8',       
'T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8',       
'S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8',       
'U+1', 'U+2', 'U+3', 'U+4', 'U+5', 'U+6', 'U+7', 'U+8',       
'U-1', 'U-2', 'U-3', 'U-4', 'U-5', 'U-6', 'U-7', 'U-8',       
'V+1', 'V+2', 'V+3', 'V+4', 'V+5', 'V+6', 'V+7', 'V+8',       
'V-1', 'V-2', 'V-3', 'V-4', 'V-5', 'V-6', 'V-7', 'V-8',       
'F1', 'F2',       
'D+1', 'D+2', 'D+3', 'D+4',    
'D-1', 'D-2', 'D-3', 'D-4',   
'C+1', 'C+2', 
'C-1', 'C-2',       
] as const

// GROUPING
const groupingNames = [
  'none', 'f2l', 'eo', 'vhls'
] as const

// CASESLIST
import casesList from '../setCaseListDefaults/zbls.yml'

export const zbllGroupingConfig = {
  displayConfig: displayConfig,
  caseNames: caseNames,
  groupingNames: groupingNames,
  casesList: casesList
} satisfies SetAndGroupingDefinition