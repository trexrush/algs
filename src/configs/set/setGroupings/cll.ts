import { listFromData } from "../../../scripts/config/dataParsingUtilities"
import type { IAlgset, ICaseList } from "../../../types/dataFormat"
import merge from "ts-deepmerge"

import { cllGroupingConfig as c } from "../setDefinition/cll"
import caseDefinitions from '../setCaseListDefaults/cll.yml'

type GroupingNames = typeof c.groupingNames[number]
type CaseNames = typeof c.caseNames[number]

export const useCLLGrouping = (dataRaw: ICaseList): Record<GroupingNames, IAlgset> => {
  const data = merge(caseDefinitions, dataRaw) as unknown as ICaseList
  const ch = (list: CaseNames[]) => { return Object.assign(listFromData<CaseNames>(list, data)) }

  const noGrouping = (): IAlgset => {
    return {
      config: c.displayConfig,
      sets: [
        { name: "CLL",
          children: Object.assign(data)
        },
      ]
    }
  }
  
  const ollGrouping = (): IAlgset => {
    return { 
      config: c.displayConfig,
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

  return {
    'none': noGrouping(),
    'oll': ollGrouping()
  }
}
