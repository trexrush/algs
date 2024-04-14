import type { ISetConfig } from ".."
import { listFromData } from ".."
import { createConfig } from "../.."
import type { IPuzzleConfig } from "../../puzzle"
import { puzzle3x3x3 } from "../../puzzle/3x3"
import type { IAlgset, ICaseList } from "../dataFormat"

import caseDefinitions from '../caseDefaults/pll.yml'
import merge from "ts-deepmerge"

// CONFIG
const puzzleOptions: IPuzzleConfig = puzzle3x3x3
const setOptions: ISetConfig = {
  name: "PLL",
  twistyPlayerConfig: {
    rot: 'x2'
  },
}
const config = createConfig(puzzleOptions, setOptions)
// CASES
const caseNames = [
  "H", "Ua", "Ub", "Z", "Aa", "Ab", "Ga", "Gb", "Gc", "Gd", "Ja", "Jb", "Ra", "Rb", "F", "T", "E", "Na", "Nb", "V", "Y"
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
        { name: "EPLL",
          children: ch(["H", "Ua", "Ub", "Z"])
        },
        { name: "Adj",
          children: ch(["Aa", "Ab", "Ga", "Gb", "Gc", "Gd", "Ja", "Jb", "Ra", "Rb", "F", "T"]),
        },
        { name: "Diag",
          children: ch(["E", "Na", "Nb", "V", "Y"])
        }
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
