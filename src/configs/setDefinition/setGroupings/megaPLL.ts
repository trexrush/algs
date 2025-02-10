import { listFromData } from "../../../scripts/config/dataParsingUtilities"
import type { IAlgset, ICaseList } from "../../../types/dataFormat"
import merge from "ts-deepmerge"

import { mpllGroupingConfig as setConfig } from "../setAndGroupingDefinition/megaPLL"
import caseDefinitions from '../setCaseListDefaults/megaPLL.yml'

type GroupingNames = typeof setConfig.groupingNames[number]
type CaseNames = typeof setConfig.caseNames[number]

export const useMegaPLLGrouping = (dataRaw: ICaseList): Record<GroupingNames, IAlgset> => {
  const data = merge(caseDefinitions, dataRaw) as unknown as ICaseList
  const ch = (list: CaseNames[]) => { return Object.assign(listFromData<CaseNames>(list, data)) }


  const c = {
    "A": { name: "A", altNames: ["3 Corner CP"],
      children: ch(["A1+", "A1-", "A2+", "A2-",])
    },
    "B": { name: "B", altNames: ["Double R block"],
      children: ch(["B1+", "B1-", "B2+", "B2-",])
    },
    "C": { name: "C", altNames: ["2 2x1s touching"],
      children: ch(["C1+", "C1-", "C2+", "C2-", "C3+", "C3-", "C4+", "C4-", "C5+", "C5-", "C6+", "C6-",])
    },
    "D": { name: "D", altNames: ["3x1 and 2x2"],
      children: ch(["D+", "D-",])
    },
    "E": { name: "E", altNames: ["4 Corner CP"],
      children: ch(["E1", "E2", "E3",])
    },
    "F": { name: "F", altNames: ["2x2 and 2x1(s)"],
      children: ch(["F1+", "F1-", "F2+", "F2-", "F3+", "F3-", "F4+", "F4-", "F5+", "F5-",])
    },
    "G": { name: "G", altNames: ["2x1 and headlights"],
      children: ch(["G1+", "G1-", "G2+", "G2-",])
    },
    "H": { name: "H", altNames: ["5 Corner EP/CP"],
      children: ch(["H1+", "H1-", "H2+", "H2-",])
    },
    "I": { name: "I", altNames: ["2x1"],
      children: ch(["I1+", "I1-", "I2+", "I2-", "I3+", "I3-", "I4+", "I4-", "I5+", "I5-", "I6+", "I6-",])
    },
    "J": { name: "J", altNames: ["J block"],
      children: ch(["J1+", "J1-", "J2+", "J2-", "J3+", "J3-",])
    },
    "K": { name: "K", altNames: ["5 Corner CP"],
      children: ch(["K+", "K1-", "K2+", "K2-",])
    },
    "L": { name: "L", altNames: ["Double headlights, no blocks"],
      children: ch(["L1", "L2", "L3+", "L3-", "L4+", "L4-", "L5+", "L5-", "L6+", "L6-",])
    },
    "M": { name: "M", altNames: ["2 3x1s"],
      children: ch(["M",])
    },
    "N": { name: "N", altNames: ["5 2x1s"],
      children: ch(["N1+", "N1-", "N2+", "N2-",])
    },
    "P": { name: "P", altNames: ["R block"],
      children: ch(["P1+", "P1-", "P2+", "P2-", "P3+", "P3-", "P4+", "P4-",])
    },
    "Q": { name: "Q", altNames: ["5 Edge EP"],
      children: ch(["Q1+", "Q1-", "Q2+", "Q2-",])
    },
    "R": { name: "R", altNames: ["R block and 2x1"],
      children: ch(["R1+", "R1-", "R2+", "R2-", "R3+", "R3-", "R4+", "R4-",])
    },
    "S": { name: "S", altNames: ["2 2x1s, not touching"],
      children: ch(["S1+", "S1-", "S2+", "S2-", "S3+", "S3-", "S4+", "S4-", "S5+", "S5-", "S6+", "S6-",])
    },
    "T": { name: "T", altNames: ["2/3/4 2x1s in a symmetrical T like pattern"],
      children: ch(["T1", "T2+", "T2-", "T3+", "T3-", "T4+", "T4-",])
    },
    "U": { name: "U", altNames: ["3 Edge EP"],
      children: ch(["U1+", "U1-", "U2+", "U2-",])
    },
    "V": { name: "V", altNames: ["2x2 and 2x1"],
      children: ch(["V1+", "V1-", "V2+", "V2-", "V3+", "V3-", "V4+", "V4-",])
    },
    "W": { name: "W", altNames: ["2 2x2s"],
      children: ch(["W",])
    },
    "X": { name: "X", altNames: ["No blocks / headlights"],
      children: ch(["X1", "X2","X3", "X4", "X5+", "X5-", "X6+", "X6-", "X7+", "X7-"])
    },
    "Y": { name: "Y", altNames: ["2 2x1s in Y pattern + other stuff"],
      children: ch(["Y1+", "Y1-", "Y2+", "Y2-", "Y3+", "Y3-",])
    },
    "Z": { name: "Z", altNames: ["4 Edge EP"],
      children: ch(["Z1", "Z2", "Z3",])
    },
  }

  const noGrouping = (): IAlgset => {
    return {
      config: setConfig.displayConfig,
      sets: [
        { name: "OLL",
          children: Object.assign(data)
        },
      ]
    }
  }
  
  const ollGrouping = (): IAlgset => {
    return { 
      config: setConfig.displayConfig,
      sets: Object.assign(Object.values(c))
    }
  }

  const featureGrouping = (): IAlgset => {
    return {
      config: setConfig.displayConfig,
      sets: [
        { name: "CPLL", altNames: ["A E H K", "CP (4LLL)"], children: Object.assign([c["A"], c["E"], c["H"], c["K"], ]) },
        { name: "EPLL", altNames: ["H U Z Q"], children: Object.assign([c["H"], c["U"], c["Z"], c["Q"] ])},
        { name: "Block / Line", altNames: ["D F J M V W"], children: Object.assign([c["D"], c["F"], c["J"], c["M"], c["V"], c["W"] ])},
        { name: "R Block", altNames: ["B P R"], children: Object.assign([c["B"], c["P"], c["R"], ])},
        { name: "Multiple Bars", altNames: ["C N S T Y"], children: Object.assign([c["C"], c["N"], c["S"], c["T"], c["Y"] ])},
        { name: "2x1 Bar", altNames: ["G I"], children: Object.assign([c["G"], c["I"], ])},
        { name: "No Bars", altNames: ["L X"], children: Object.assign([c["L"], c["X"], ])},
      ]
    }
  }

  const just4LLL = (): IAlgset => {
    return {
      config: setConfig.displayConfig,
      sets: [
        { name: "CP", altNames: ["A E H K", "CPLL (2LLL)"], children: Object.assign([c["A"], c["E"], c["H"], c["K"], ]) },
      ]
    }
  }

  return {
    'none': noGrouping(),
    'letter': ollGrouping(),
    'feature': featureGrouping(),
    'justCP': just4LLL()
  }
}