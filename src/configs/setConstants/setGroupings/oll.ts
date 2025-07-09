import { listFromData } from "../../../scripts/config/dataParsingUtilities"
import type { IAlgset, ICaseList } from "../../../types/dataFormat"
import merge from "ts-deepmerge"

import { ollGroupingConfig as c } from "../setDefinition/oll"
import caseDefinitions from '../setCaseListDefaults/oll.yml'

type GroupingNames = typeof c.groupingNames[number]
type CaseNames = typeof c.caseNames[number]

export const useOLLGrouping = (dataRaw: ICaseList): Record<GroupingNames, IAlgset> => {
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
  
  const eoGrouping = (): IAlgset => {
    return { 
      config: c.displayConfig,
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

  return {
    'none': noGrouping(),
    'eo': eoGrouping()
  }
}