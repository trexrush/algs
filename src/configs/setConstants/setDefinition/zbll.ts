import { IPuzzleDisplayConfig } from "../../../scripts/config/puzzle"
import { puzzle3x3x3 } from "../../../scripts/config/puzzle/3x3"
import { ISetDisplayConfig } from "../../../types/setDefinition"
import { createConfig } from "../../../types/displayConfig"
import { SetAndGroupingDefinition } from "../../../types/setAndGroupingDefinition"

// CONFIG
const puzzleOptions: IPuzzleDisplayConfig = puzzle3x3x3
const setOptions: ISetDisplayConfig = {
  name: "ZBLL",
  twistyPlayerConfig: {
    rot: 'x2'
  },
} as ISetDisplayConfig
const displayConfig = createConfig(puzzleOptions, setOptions)

// CASENAMES
const caseNames = [
  "TP1", "TP2", "TP3", "TP4", "TP5", "TP6", "TP7", "TP8", "TP9", "TP10", "TP11", "TP12", "TD1", "TD2", "TD3", "TD4", "TD5", "TD6", "TD7", "TD8", "TD9", "TD10", "TD11", "TD12", "TT1", "TT2", "TT3", "TT4", "TT5", "TT6", "TT7", "TT8", "TT9", "TT10", "TT11", "TT12", "TB1", "TB2", "TB3", "TB4", "TB5", "TB6", "TB7", "TB8", "TB9", "TB10", "TB11", "TB12", "TL1", "TL2", "TL3", "TL4", "TL5", "TL6", "TL7", "TL8", "TL9", "TL10", "TL11", "TL12", "TR1", "TR2", "TR3", "TR4", "TR5", "TR6", "TR7", "TR8", "TR9", "TR10", "TR11", "TR12", 
  "UP1", "UP2", "UP3", "UP4", "UP5", "UP6", "UP7", "UP8", "UP9", "UP10", "UP11", "UP12", "UD1", "UD2", "UD3", "UD4", "UD5", "UD6", "UD7", "UD8", "UD9", "UD10", "UD11", "UD12", "UT1", "UT2", "UT3", "UT4", "UT5", "UT6", "UT7", "UT8", "UT9", "UT10", "UT11", "UT12", "UB1", "UB2", "UB3", "UB4", "UB5", "UB6", "UB7", "UB8", "UB9", "UB10", "UB11", "UB12", "UL1", "UL2", "UL3", "UL4", "UL5", "UL6", "UL7", "UL8", "UL9", "UL10", "UL11", "UL12", "UR1", "UR2", "UR3", "UR4", "UR5", "UR6", "UR7", "UR8", "UR9", "UR10", "UR11", "UR12", 
  "LP1", "LP2", "LP3", "LP4", "LP5", "LP6", "LP7", "LP8", "LP9", "LP10", "LP11", "LP12", "LD1", "LD2", "LD3", "LD4", "LD5", "LD6", "LD7", "LD8", "LD9", "LD10", "LD11", "LD12", "LT1", "LT2", "LT3", "LT4", "LT5", "LT6", "LT7", "LT8", "LT9", "LT10", "LT11", "LT12", "LB1", "LB2", "LB3", "LB4", "LB5", "LB6", "LB7", "LB8", "LB9", "LB10", "LB11", "LB12", "LL1", "LL2", "LL3", "LL4", "LL5", "LL6", "LL7", "LL8", "LL9", "LL10", "LL11", "LL12", "LR1", "LR2", "LR3", "LR4", "LR5", "LR6", "LR7", "LR8", "LR9", "LR10", "LR11", "LR12", 
  "HP1", "HP2", "HP3", "HP4", "HP5", "HP6", "HP7", "HP8", "HD1", "HD2", "HD3", "HD4", "HD5", "HD6", "HD7", "HD8", "HT1", "HT2", "HT3", "HT4", "HT5", "HT6", "HT7", "HT8", "HT9", "HT10", "HT11", "HT12", "HL1", "HL2", "HL3", "HL4", "HL5", "HL6", "HL7", "HL8", "HL9", "HL10", "HL11", "HL12", 
  "PiP1", "PiP2", "PiP3", "PiP4", "PiP5", "PiP6", "PiP7", "PiP8", "PiP9", "PiP10", "PiP11", "PiP12", "PiD1", "PiD2", "PiD3", "PiD4", "PiD5", "PiD6", "PiD7", "PiD8", "PiD9", "PiD10", "PiD11", "PiD12", "PiT1", "PiT2", "PiT3", "PiT4", "PiT5", "PiT6", "PiT7", "PiT8", "PiT9", "PiT10", "PiT11", "PiT12", "PiB1", "PiB2", "PiB3", "PiB4", "PiB5", "PiB6", "PiB7", "PiB8", "PiB9", "PiB10", "PiB11", "PiB12", "PiL1", "PiL2", "PiL3", "PiL4", "PiL5", "PiL6", "PiL7", "PiL8", "PiL9", "PiL10", "PiL11", "PiL12", "PiR1", "PiR2", "PiR3", "PiR4", "PiR5", "PiR6", "PiR7", "PiR8", "PiR9", "PiR10", "PiR11", "PiR12", 
  "SP1", "SP2", "SP3", "SP4", "SP5", "SP6", "SP7", "SP8", "SP9", "SP10", "SP11", "SP12", "SD1", "SD2", "SD3", "SD4", "SD5", "SD6", "SD7", "SD8", "SD9", "SD10", "SD11", "SD12", "ST1", "ST2", "ST3", "ST4", "ST5", "ST6", "ST7", "ST8", "ST9", "ST10", "ST11", "ST12", "SB1", "SB2", "SB3", "SB4", "SB5", "SB6", "SB7", "SB8", "SB9", "SB10", "SB11", "SB12", "SL1", "SL2", "SL3", "SL4", "SL5", "SL6", "SL7", "SL8", "SL9", "SL10", "SL11", "SL12", "SR1", "SR2", "SR3", "SR4", "SR5", "SR6", "SR7", "SR8", "SR9", "SR10", "SR11", "SR12", 
  "ASP1", "ASP2", "ASP3", "ASP4", "ASP5", "ASP6", "ASP7", "ASP8", "ASP9", "ASP10", "ASP11", "ASP12", "ASD1", "ASD2", "ASD3", "ASD4", "ASD5", "ASD6", "ASD7", "ASD8", "ASD9", "ASD10", "ASD11", "ASD12", "AST1", "AST2", "AST3", "AST4", "AST5", "AST6", "AST7", "AST8", "AST9", "AST10", "AST11", "AST12", "ASB1", "ASB2", "ASB3", "ASB4", "ASB5", "ASB6", "ASB7", "ASB8", "ASB9", "ASB10", "ASB11", "ASB12", "ASL1", "ASL2", "ASL3", "ASL4", "ASL5", "ASL6", "ASL7", "ASL8", "ASL9", "ASL10", "ASL11", "ASL12", "ASR1", "ASR2", "ASR3", "ASR4", "ASR5", "ASR6", "ASR7", "ASR8", "ASR9", "ASR10", "ASR11", "ASR12", 
] as const

// GROUPING
const groupingNames = [
  "t_none", "t_cp", 
  // "t_bh",
  // "u_none", "u_cp", "u_bh",
  // "l_none", "l_cp", "l_bh",
  // "h_none", "h_cp", "h_bh",
  // "pi_none", "pi_cp", "pi_bh",
  // "s_none", "s_cp", "s_bh",
  // "as_none", "as_cp", "as_bh",
  // "s_as_blocks", "zzll"
] as const

// CASESLIST
import casesList from '../setCaseListDefaults/zbll.yml'

export const zbllGroupingConfig = {
  displayConfig: displayConfig,
  caseNames: caseNames,
  groupingNames: groupingNames,
  casesList: casesList
} satisfies SetAndGroupingDefinition