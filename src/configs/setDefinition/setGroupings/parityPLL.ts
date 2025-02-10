import { listFromData } from "../../../scripts/config/dataParsingUtilities"
import type { IAlgset, ICaseList } from "../../../types/dataFormat"
import merge from "ts-deepmerge"

import { parityPLLGroupingConfig as c } from "../setAndGroupingDefinition/parityPLL"
import caseDefinitions from '../setCaseListDefaults/parityPLL.yml'

type GroupingNames = typeof c.groupingNames[number]
type CaseNames = typeof c.caseNames[number]

export const useParityPLLGrouping = (dataRaw: ICaseList): Record<GroupingNames, IAlgset> => {
  const data = merge(caseDefinitions, dataRaw) as unknown as ICaseList
  const ch = (list: CaseNames[]) => { return Object.assign(listFromData<CaseNames>(list, data)) }

  const noGrouping = (): IAlgset => {
    return {
      config: c.displayConfig,
      sets: [
        { name: "Algs",
          children: Object.assign(data)
        },
      ]
    }
  }
  
  const cpGrouping = (): IAlgset => {
    return { 
      config: c.displayConfig,
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

  return {
    'none': noGrouping(),
    'cp': cpGrouping()
  }
}