import { listFromData } from "../../../scripts/config/dataParsingUtilities"
import type { IAlgset, ICaseList } from "../../../types/dataFormat"
import merge from "ts-deepmerge"

import { zbllGroupingConfig as c } from "../setDefinition/zbll"
import caseDefinitions from '../setCaseListDefaults/zbll.yml'

type GroupingNames = typeof c.groupingNames[number]
type CaseNames = typeof c.caseNames[number]

export const useZBLLGrouping = (dataRaw: ICaseList): Record<GroupingNames, IAlgset> => {
  const data = merge(caseDefinitions, dataRaw) as ICaseList
  const ch = (list: CaseNames[]) => { return Object.assign(listFromData<CaseNames>(list, data)) }

  const tNoGrouping = (): IAlgset => {
    return {
      config: c.displayConfig,
      sets: [
        { name: "T ZBLL",
          children: Object.assign(data)
        },
      ]
    }
  }
  
  const tCPGrouping = (): IAlgset => {
    return { 
      config: c.displayConfig,
      sets: [
        { name: "Pure",
          altNames: ["2GLL", "CO+EP", "BBFF"],
          children: ch(["TP1", "TP2", "TP3", "TP4", "TP5", "TP6", "TP7", "TP8", "TP9", "TP10", "TP11", "TP12"])
        },
        { name: "Diag",
          altNames: ["Vertical Bars", "The worst one", "FBFB"],
          children: ch(["TD1", "TD2", "TD3", "TD4", "TD5", "TD6", "TD7", "TD8", "TD9", "TD10", "TD11", "TD12"])
        },
        { name: "Top",
          altNames: ["F Bar B Opp", "Front Bar", "RLFF"],
          children: ch(["TT1", "TT2", "TT3", "TT4", "TT5", "TT6", "TT7", "TT8", "TT9", "TT10", "TT11", "TT12"])
        },
        { name: "Bottom",
          altNames: ["F Opp B Bar", "Back Bar", "FFLR"],
          children: ch(["TB1", "TB2", "TB3", "TB4", "TB5", "TB6", "TB7", "TB8", "TB9", "TB10", "TB11", "TB12"])
        },
        { name: "Left",
          altNames: ["Left Bar", "FLFR"],
          children: ch(["TL1", "TL2", "TL3", "TL4", "TL5", "TL6", "TL7", "TL8", "TL9", "TL10", "TL11", "TL12"])
        },
        { name: "Right",
          altNames: ["Right Bar", "RFLF"],
          children: ch(["TR1", "TR2", "TR3", "TR4", "TR5", "TR6", "TR7", "TR8", "TR9", "TR10", "TR11", "TR12"])
        }
      ]
    }
  }

  const tBHGrouping = (): IAlgset => {
    return { 
      config: c.displayConfig,
      sets: [
        { name: "S",
          altNames: ["C/C", "Block", "Solved"],
        },
        { name: "H",
          altNames: ["O/O"],
        },
        { name: "Z",
          altNames: ["A/A", "Checker"],
        },
        { name: "AntiZ",
          altNames: ["OxO", "4 Unique Colors"],
        },
        { name: "BarA",
          altNames: ["C/A", "Sleeping Bar"],
        },
        { name: "BarO",
          altNames: ["C/O", "Sleeping Burger"],
        },
        { name: "HAnti",
          altNames: ["O/A", "Sleeping Antibar"],
        },
        { name: "OBar",
          altNames: ["O/C", "Standing Burger"],
        },
        { name: "HArrow",
          altNames: ["CxO", "Waterfall"],
        },
        { name: "ABar",
          altNames: ["A/C", "Standing Bar"],
        },
        { name: "VAnti",
          altNames: ["A/O", "Sleeping Antibar"],
        },
        { name: "VArrow",
          altNames: ["OxC", "River"],
        },  
      ]
    }
  }

  return {
    't_none': tNoGrouping(),
    't_cp': tCPGrouping()
  }
}