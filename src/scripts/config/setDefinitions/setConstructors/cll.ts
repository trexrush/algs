import type { ISetConfig } from ".."
import { listFromData } from ".."
import { createConfig } from "../.."
import type { IPuzzleConfig } from "../../puzzle"
import { puzzle2x2x2 } from "../../puzzle/2x2"
import type { IAlgset, ICaseList } from "../dataFormat"

import caseDefinitions from '../caseDefaults/eg1.yml'
import merge from "ts-deepmerge"
// CONFIG
const puzzleOptions: IPuzzleConfig = puzzle2x2x2
const setOptions: ISetConfig = {
  name: "CLL",
  visualCubeConfig: {
    rot: "y",
  },
  twistyPlayerConfig: {
    rot: "x2 y'",
  }
}
const config = createConfig(puzzleOptions, setOptions)

// CASES
const caseNames = [
  "S1", "S2", "S3", "S4", "S5", "S6",
  "AS1", "AS2", "AS3", "AS4", "AS5", "AS6",
  "Pi1", "Pi2", "Pi3", "Pi4", "Pi5", "Pi6",
  "T1", "T2", "T3", "T4", "T5", "T6",
  "U1", "U2", "U3", "U4", "U5", "U6",
  "L1", "L2", "L3", "L4", "L5", "L6",
  "H1", "H2", "H3", "H4",
] as const
type ICaseName = typeof caseNames[number]

const useGrouping = (grouping: "none" | "oll", d: ICaseList): IAlgset => {
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
  
  const ollGrouping = (): IAlgset => {
    return { 
      config: config,
      sets: [
        { name: "Sune", altNames: ["S"],
          children: ch(["S1", "S2", "S3", "S4", "S5", "S6"])
        },
        { name: "Antisune", altNames: ["AS"],
          children: ch(["AS1", "AS2", "AS3", "AS4", "AS5", "AS6"])
        },
        { name: "H",
          children: ch(["H1", "H2", "H3", "H4"])
        },
        { name: "Pi", 
          children: ch(["Pi1", "Pi2", "Pi3", "Pi4", "Pi5", "Pi6"])
        },
        { name: "T", 
          children: ch(["T1", "T2", "T3", "T4", "T5", "T6"])
        },
        { name: "U",
          children: ch(["U1", "U2", "U3", "U4", "U5", "U6"])
        },
        { name: "L",
          children: ch(["L1", "L2", "L3", "L4", "L5", "L6"])
        },
      ]
    }
  }

  switch (grouping) {
    case 'none':
      return noGrouping()
    case 'oll':
      return ollGrouping()
  }
}

export { useGrouping }
