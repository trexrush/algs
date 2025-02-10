import { listFromData } from "../../../scripts/config/dataParsingUtilities"
import type { IAlgset, ICaseList } from "../../../types/dataFormat"
import merge from "ts-deepmerge"

import { pllGroupingConfig as c } from "../setAndGroupingDefinition/pll"
import caseDefinitions from '../setCaseListDefaults/pll.yml'

type GroupingNames = typeof c.groupingNames[number]
type CaseNames = typeof c.caseNames[number]

export const usePLLGrouping = (dataRaw: ICaseList): Record<GroupingNames, IAlgset> => {
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
  
  const cpGrouping = (): IAlgset => {
    return { 
      config: c.displayConfig,
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

  return {
    'none': noGrouping(),
    'cp': cpGrouping()
  }
}