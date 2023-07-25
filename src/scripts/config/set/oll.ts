import type { ISetConfig } from "."
import { listFromData } from "."
import { createConfig } from ".."
import type { IPuzzleConfig } from "../puzzle"
import { puzzle3x3x3 } from "../puzzle/3x3"
import type { IAlgset, ICaseList } from "./dataFormat"

import caseDefinitions from './cases/oll.yml'
import merge from "ts-deepmerge"
// CONFIG
const puzzleOptions: IPuzzleConfig = puzzle3x3x3
const setOptions: ISetConfig = {
  name: "OLL",
  visualCubeConfig: {
      stage: 'oll',
  },
  twistyPlayerConfig: {
      stage: 'OLL'
  },
}
const config = createConfig(puzzleOptions, setOptions)

// CASES
const caseNames = [
  "1", "2", "3", "4", "5", "6", "7", "8", "9",
  "10", "11", "12", "13", "14", "15", "16", "17", "18", "19",
  "20", "21", "22", "23", "24", "25", "26", "27", "28", "29",
  "30", "31", "32", "33", "34", "35", "36", "37", "38", "39",
  "40", "41", "42", "43", "44", "45", "46", "47", "48", "49",
  "50", "51", "52", "53", "54", "55", "56", "57",
] as const
type ICaseName = typeof caseNames[number]

const useGrouping = (grouping: "none" | "eo", d: ICaseList): IAlgset => {
  const data = merge(caseDefinitions, d) as unknown as ICaseList
  const ch = (list: ICaseName[]) => { return Object.assign(listFromData<ICaseName>(list, data)) }

  const noGrouping = (): IAlgset => {
    return {
      config: config,
      sets: [
        { name: "CLL",
          children: Object.assign(data)
        },
      ]
    }
  }
  
  const eoGrouping = (): IAlgset => {
    return { 
      config: config,
      sets: [
        { name: "Dot",
          children: ch(["1", "2", "3", "4", "17", "18", "19", "20", ])
        },
        { name: "Line",
          children: ch(["13", "14", "15", "16", "33", "34", "39", "40", "45", "46", "51", "52", "55", "56", "57"])
        },
        { name: "L",
          children: ch(["5", "6", "7", "8", "9", "10", "11", "12", "28", "29", "30", "31", "32", "33", "35", "36", "37", "38", "41", "42", "43", "44", "47", "48", "49", "50", "53", "54"])
        },
        { name: "CPLL", 
          children: ch(["21", "22", "23", "24", "25", "26", "27"])
        },
      ]
    }
  }

  switch (grouping) {
    case 'none':
      return noGrouping()
    case 'eo':
      return eoGrouping()
  }
}

export { useGrouping }
