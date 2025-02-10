import { IPuzzleDisplayConfig } from '../../../scripts/config/puzzle'
import { puzzleMegaminx } from '../../../scripts/config/puzzle/megaminx'
import { ISetDisplayConfig } from "../../../types/setDefinition"
import { IDisplayConfig, createConfig } from '../../../types/displayConfig'
import { SetAndGroupingDefinition } from '../../../types/setAndGroupingDefinition'

// CONFIG
const puzzleOptions: IPuzzleDisplayConfig = puzzleMegaminx
const setOptions: ISetDisplayConfig = {
  name: "Megaminx OLL",
  twistyPlayerConfig: {
    cameraY: 55,
    stage: 'OLL'
  },
  puzzleGenConfig: {
    options: {
      puzzle: {
        scheme: {
          U: { value: '#222', stroke: '#111'},
          F: { value: '#b7c7cc', stroke: '#b7c7cc' },
          R: { value: '#ccccb7', stroke: '#ccccb7' },
          BR: { value: '#ccb7c7', stroke: '#ccb7c7' },
          BL: { value: '#ccc5b7', stroke: '#ccc5b7' },
          L: { value: '#c2ccb7', stroke: '#c2ccb7' },
        }
      }
    }
  }
}
const displayConfig: IDisplayConfig = createConfig(puzzleOptions, setOptions)

// CASENAMES
const caseNames = [
  "1A", "1B",
  "2A", "2B", "2C", "2D",
  "3A+", "3A-", "3B+", "3B-",
  "4A", "4B", "4C", "4D", "4E+", "4E-",
  "5+", "5-",
  "6A", "6B",
  "7A", "7B",
  "8A+", "8A-", "8B+", "8B-",
  "9A+", "9A-", "9B+", "9B-",
  "10A+", "10A-", "10B+", "10B-",
  "11A+", "11A-", "11B+", "11B-",
  "12+", "12-",
  "13+", "13-",
  "14A+", "14A-", "14B+", "14B-",
  "15A+", "15A-", "15B+", "15B-",
  "16A+", "16A-", "16B+", "16B-",
  "17A+", "17A-", "17B+", "17B-",
  "18A", "18B", "18C", "18D", "18E+", "18E-",
  "19A+", "19A-", "19B+", "19B-", "19C+", "19C-", "19D+", "19D-", "19E+", "19E-", "19F+", "19F-",
  "20A+", "20A-", "20B+", "20B-", "20C+", "20C-", "20D+", "20D-", "20E+", "20E-", "20F+", "20F-",
  "21A+", "21A-", "21B+", "21B-", "21C+", "21C-", "21D+", "21D-", "21E+", "21E-",
  "22A", "22B",
  "23A", "23B",
  "24A+", "24A-", "24B+", "24B-",
  "25A+", "25A-", "25B+", "25B-",
  "26A+", "26A-", "26B+", "26B-",
  "27A+", "27A-", "27B+", "27B-",
  "28+", "28-",
  "29+", "29-",
  "30A+", "30A-", "30B+", "30B-",
  "31A+", "31A-", "31B+", "31B-",
  "32A+", "32A-", "32B+", "32B-",
  "33A+", "33A-", "33B+", "33B-",
  "34A", "34B", "34C", "34D", "34E+", "34E-",
  "35A+", "35A-", "35B+", "35B-", "35C+", "35C-", "35D+", "35D-", "35E+", "35E-", "35F+", "35F-",
  "36A+", "36A-", "36B+", "36B-", "36C+", "36C-", "36D+", "36D-", "36E+", "36E-", "36F+", "36F-",
  "37A+", "37A-", "37B+", "37B-", "37C+", "37C-", "37D+", "37D-", "37E+", "37E-",
  // dots
  "1C",
  "38A", "38B",
  "39A", "39B",
  "40A+", "40A-", "40B+", "40B-",
  "41A+", "41A-", "41B+", "41B-",
  "42A+", "42A-", "42B+", "42B-",
  "43A+", "43A-", "43B+", "43B-",
  "44+", "44-",
  "45+", "45-",
  "46A+", "46A-", "46B+", "46B-",
  "47A+", "47A-", "47B+", "47B-",
  "48A+", "48A-", "48B+", "48B-",
  "49A+", "49A-", "49B+", "49B-",
  "50A", "50B", "50C", "50D", "50E+", "50E-",
  "51A+", "51A-", "51B+", "51B-", "51C+", "51C-", "51D+", "51D-", "51E+", "51E-", "51F+", "51F-",
  "52A+", "52A-", "52B+", "52B-", "52C+", "52C-", "52D+", "52D-", "52E+", "52E-", "52F+", "52F-",
  "53A+", "53A-", "53B+", "53B-", "53C+", "53C-", "53D+", "53D-", "53E+", "53E-",
] as const

//GROUPING
const groupingNames = ["none", "oll", "feature", "justCO"] as const

// CASESLIST
import casesList from '../setCaseListDefaults/megaOLL.yml'

export const mollGroupingConfig = {
  displayConfig: displayConfig,
  caseNames: caseNames,
  groupingNames: groupingNames,
  casesList: casesList
} satisfies SetAndGroupingDefinition