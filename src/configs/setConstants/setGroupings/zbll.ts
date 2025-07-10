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
          children: ch(["TP1", "TD3", "TT1", "TB3", "TR1", "TL3"  ])
        },
        { name: "H",
          altNames: ["O/O"],
          children: ch(["TP2", "TD8", "TT7", "TB4", "TR9", "TL10"  ])
        },
        { name: "Z",
          altNames: ["A/A", "Checker"],
          children: ch(["TP3", "TD11", "TT5", "TB2", "TR8", "TL12"  ])
        },
        { name: "AntiZ",
          altNames: ["OxO", "4 Unique Colors"],
          children: ch(["TP4", "TD5", "TT10", "TB1", "TR6", "TL5"  ])
        },
        { name: "BarA",
          altNames: ["C/A", "Sleeping Bar"],
          children: ch(["TP5", "TD7", "TT2", "TB5", "TR5", "TL7"  ])
        },
        { name: "BarO",
          altNames: ["C/O", "Sleeping Burger"],
          children: ch(["TP6", "TD1", "TT3", "TB7", "TR4", "TL6"  ])
        },
        { name: "HAnti",
          altNames: ["O/A", "Sleeping Antibar"],
          children: ch(["TP7", "TD4", "TT8", "TB8", "TR12", "TL11"  ])
        },
        { name: "OBar",
          altNames: ["O/C", "Standing Burger"],
          children: ch(["TP8", "TD2", "TT4", "TB6", "TR2", "TL8"  ])
        },
        { name: "HArrow",
          altNames: ["CxO", "Waterfall"],
          children: ch(["TP9", "TD9", "TT11", "TB12", "TR11", "TL9"  ])
        },
        { name: "ABar",
          altNames: ["A/C", "Standing Bar"],
          children: ch(["TP10", "TD6", "TT6", "TB10", "TR3", "TL4"  ])
        },
        { name: "VAnti",
          altNames: ["A/O", "Sleeping Antibar"],
          children: ch(["TP11", "TD12", "TT9", "TB11", "TR10", "TL2"  ])
        },
        { name: "VArrow",
          altNames: ["OxC", "River"],
          children: ch(["TP12", "TD10", "TT12", "TB9", "TR7", "TL1"  ])
        },  
      ]
    }
  }

  return {
    't_none': tNoGrouping(),
    't_cp': tCPGrouping(),
    't_bh': tBHGrouping()
  }
}