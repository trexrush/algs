import type { ISetConfig } from ".."
import { listFromData } from ".."
import { createConfig } from "../.."
import type { IPuzzleConfig } from "../../puzzle"
import { puzzle4x4x4 } from "../../puzzle/4x4"
import type { IAlgset, ICaseList } from "../dataFormat"

import caseDefinitions from '../caseDefaults/parityPLL.yml'
import merge from "ts-deepmerge"

// CONFIG
const puzzleOptions: IPuzzleConfig = puzzle4x4x4
const setOptions: ISetConfig = {
  name: "Full PLL Parity",
}
const config = createConfig(puzzleOptions, setOptions)

// CASES
const caseNames = [
  "opp", "adj", "Oa", "Ob", "W", "pJ", "pN", "M", "Ka", "Kb", "Ba", "Bb", "Ca", "Cb", "Da", "Db", "Pa", "Pb", "Q", "X", "Sa", "Sb"
] as const
type ICaseName = typeof caseNames[number]

const useGrouping = (grouping: "none" | "cp", d: ICaseList) => {
  const data = merge(caseDefinitions, d) as unknown as ICaseList
  const ch = (list:ICaseName[]) => { return Object.assign(listFromData<ICaseName>(list, data)) }

  const noGrouping = (): IAlgset => {
    return {
      config: config,
      sets: [
        { name: "Algs",
          children: Object.assign(data)
        },
      ]
    }
  }
  
  const cpGrouping = (): IAlgset => {
    return { 
      config: config,
      sets: [
        { name: "Solved CP",
          children: ch(["opp", "adj", "Oa", "Ob", "W"])
        },
        { name: "Adj CP",
          children: ch(["pJ", "M", "Ka", "Kb", "Ba", "Bb", "Ca", "Cb", "Da", "Db", "Pa", "Pb"])
        },
        { name: "Opp CP",
          children: ch(["pN", "Q", "X", "Sa", "Sb"])
        },
      ]
    }
  }

  switch (grouping) {
    case 'none':
      return noGrouping()
    case 'cp':
      return cpGrouping()
  }
}

export { useGrouping }