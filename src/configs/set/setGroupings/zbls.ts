import { listFromData } from "../../../scripts/config/dataParsingUtilities"
import type { IAlgset, ICaseList } from "../../../types/dataFormat"
import merge from "ts-deepmerge"

import { zblsGroupingConfig as setConfig } from "../setDefinition/zbls"
import caseDefinitions from '../setCaseListDefaults/zbls.yml'

type GroupingNames = typeof setConfig.groupingNames[number]
type CaseNames = typeof setConfig.caseNames[number]

export const useZBLSGrouping = (dataRaw: ICaseList): Record<GroupingNames, IAlgset> => {
  // TODO: make a helper func to do deepMerge on intersection only
  const data = merge(caseDefinitions, dataRaw) as unknown as ICaseList
  const ch = (list: CaseNames[]) => { return Object.assign(listFromData<CaseNames>(list, data)) }
const b = {
  'A+': {
    addlproperty: 'something'
  }
}

   const c = {
    'A+': {
      name: 'A+',
      altNames: ['F2L 1'],
      children: ch(['A+1', 'A+2', 'A+3', 'A+4', 'A+5', 'A+6', 'A+7', 'A+8'])
    },
    'A-': {
      name: 'A-',
      altNames: ['F2L 2'],
      children: ch(['A-1', 'A-2', 'A-3', 'A-4', 'A-5', 'A-6', 'A-7', 'A-8'])
    },
    'B-': {
      name: 'B-',
      altNames: ['F2L 3'],
      children: ch(['B-1', 'B-2', 'B-3', 'B-4', 'B-5', 'B-6', 'B-7', 'B-8'])
    },
    'B+': {
      name: 'B+',
      altNames: ['F2L 4'],
      children: ch(['B+1', 'B+2', 'B+3', 'B+4', 'B+5', 'B+6', 'B+7', 'B+8'])
    },
    'W+': {
      name: 'W+',
      altNames: ['F2L 5'],
      children: ch(['W+1', 'W+2', 'W+3', 'W+4', 'W+5', 'W+6', 'W+7', 'W+8'])
    },
    'W-': {
      name: 'W-',
      altNames: ['F2L 6'],
      children: ch(['W-1', 'W-2', 'W-3', 'W-4', 'W-5', 'W-6', 'W-7', 'W-8'])
    },
    'M+': {
      name: 'M+',
      altNames: ['F2L 7'],
      children: ch(['M+1', 'M+2', 'M+3', 'M+4', 'M+5', 'M+6', 'M+7', 'M+8'])
    },
    'M-': {
      name: 'M-',
      altNames: ['F2L 8'],
      children: ch(['M-1', 'M-2', 'M-3', 'M-4', 'M-5', 'M-6', 'M-7', 'M-8'])
    },
    'R-': {
      name: 'R-',
      altNames: ['F2L 9'],
      children: ch(['R-1', 'R-2', 'R-3', 'R-4', 'R-5', 'R-6', 'R-7', 'R-8'])
    },
    'R+': {
      name: 'R+',
      altNames: ['F2L 10'],
      children: ch(['R+1', 'R+2', 'R+3', 'R+4', 'R+5', 'R+6', 'R+7', 'R+8'])
    },
    'X-': {
      name: 'X-',
      altNames: ['F2L 11'],
      children: ch(['X-1', 'X-2', 'X-3', 'X-4', 'X-5', 'X-6', 'X-7', 'X-8'])
    },
    'X+': {
      name: 'X+',
      altNames: ['F2L 12'],
      children: ch(['X+1', 'X+2', 'X+3', 'X+4', 'X+5', 'X+6', 'X+7', 'X+8'])
    },
    'K-': {
      name: 'K-',
      altNames: ['F2L 13'],
      children: ch(['K-1', 'K-2', 'K-3', 'K-4', 'K-5', 'K-6', 'K-7', 'K-8'])
    },
    'K+': {
      name: 'K+',
      altNames: ['F2L 14'],
      children: ch(['K+1', 'K+2', 'K+3', 'K+4', 'K+5', 'K+6', 'K+7', 'K+8'])
    },
    'I+': {
      name: 'I+',
      altNames: ['F2L 15'],
      children: ch(['I+1', 'I+2', 'I+3', 'I+4', 'I+5', 'I+6', 'I+7', 'I+8'])
    },
    'I-': {
      name: 'I-',
      altNames: ['F2L 16'],
      children: ch(['I-1', 'I-2', 'I-3', 'I-4', 'I-5', 'I-6', 'I-7', 'I-8'])
    },
    'H+': {
      name: 'H+',
      altNames: ['F2L 17'],
      children: ch(['H+1', 'H+2', 'H+3', 'H+4', 'H+5', 'H+6', 'H+7', 'H+8'])
    },
    'H-': {
      name: 'H-',
      altNames: ['F2L 18'],
      children: ch(['H-1', 'H-2', 'H-3', 'H-4', 'H-5', 'H-6', 'H-7', 'H-8'])
    },
    'Q+': {
      name: 'Q+',
      altNames: ['F2L 19'],
      children: ch(['Q+1', 'Q+2', 'Q+3', 'Q+4', 'Q+5', 'Q+6', 'Q+7', 'Q+8'])
    },
    'Q-': {
      name: 'Q-',
      altNames: ['F2L 20'],
      children: ch(['Q-1', 'Q-2', 'Q-3', 'Q-4', 'Q-5', 'Q-6', 'Q-7', 'Q-8'])
    },
    'P+': {
      name: 'P+',
      altNames: ['F2L 21'],
      children: ch(['P+1', 'P+2', 'P+3', 'P+4', 'P+5', 'P+6', 'P+7', 'P+8'])
    },
    'P-': {
      name: 'P-',
      altNames: ['F2L 22'],
      children: ch(['P-1', 'P-2', 'P-3', 'P-4', 'P-5', 'P-6', 'P-7', 'P-8'])
    },
    'G+': {
      name: 'G+',
      altNames: ['F2L 23'],
      children: ch(['G+1', 'G+2', 'G+3', 'G+4', 'G+5', 'G+6', 'G+7', 'G+8'])
    },
    'G-': {
      name: 'G-',
      altNames: ['F2L 24'],
      children: ch(['G-1', 'G-2', 'G-3', 'G-4', 'G-5', 'G-6', 'G-7', 'G-8'])
    },
    'E-': {
      name: 'E-',
      altNames: ['F2L 25'],
      children: ch(['E-1', 'E-2', 'E-3', 'E-4', 'E-5', 'E-6', 'E-7', 'E-8'])
    },
    'E+': {
      name: 'E+',
      altNames: ['F2L 26'],
      children: ch(['E+1', 'E+2', 'E+3', 'E+4', 'E+5', 'E+6', 'E+7', 'E+8'])
    },
    'J+': {
      name: 'J+',
      altNames: ['F2L 27'],
      children: ch(['J+1', 'J+2', 'J+3', 'J+4', 'J+5', 'J+6', 'J+7', 'J+8'])
    },
    'L-': {
      name: 'L-',
      altNames: ['F2L 28'],
      children: ch(['L-1', 'L-2', 'L-3', 'L-4', 'L-5', 'L-6', 'L-7', 'L-8'])
    },
    'L+': {
      name: 'L+',
      altNames: ['F2L 29'],
      children: ch(['L+1', 'L+2', 'L+3', 'L+4', 'L+5', 'L+6', 'L+7', 'L+8'])
    },
    'J-': {
      name: 'J-',
      altNames: ['F2L 30'],
      children: ch(['J-1', 'J-2', 'J-3', 'J-4', 'J-5', 'J-6', 'J-7', 'J-8'])
    },
    'T': {
      name: 'T',
      altNames: ['F2L 31'],
      children: ch(['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8'])
    },
    'S': {
      name: 'S',
      altNames: ['F2L 32'],
      children: ch(['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'])
    },
    'U+': {
      name: 'U+',
      altNames: ['F2L 33'],
      children: ch(['U+1', 'U+2', 'U+3', 'U+4', 'U+5', 'U+6', 'U+7', 'U+8'])
    },
    'U-': {
      name: 'U-',
      altNames: ['F2L 34'],
      children: ch(['U-1', 'U-2', 'U-3', 'U-4', 'U-5', 'U-6', 'U-7', 'U-8'])
    },
    'V+': {
      name: 'V+',
      altNames: ['F2L 35'],
      children: ch(['V+1', 'V+2', 'V+3', 'V+4', 'V+5', 'V+6', 'V+7', 'V+8'])
    },
    'V-': {
      name: 'V-',
      altNames: ['F2L 36'],
      children: ch(['V-1', 'V-2', 'V-3', 'V-4', 'V-5', 'V-6', 'V-7', 'V-8'])
    },
    'F': {
      name: 'F',
      altNames: ['F2L 37'],
      children: ch(['F1', 'F2'])
    },
    'D+': {
      name: 'D+',
      altNames: ['F2L 38'],
      children: ch(['D+1', 'D+2', 'D+3', 'D+4'])
    },
    'D-': {
      name: 'D-',
      altNames: ['F2L 39'],
      children: ch(['D-1', 'D-2', 'D-3', 'D-4'])
    },
    'C+': {
      name: 'C+',
      altNames: ['F2L 40'],
      children: ch(['C+1', 'C+2'])
    },
    'C-': {
      name: 'C-',
      altNames: ['F2L 41'],
      children: ch(['C-1', 'C-2'])
    }
   }

  let eoGrouping = () => {
    return { 
      config: setConfig.displayConfig,
      sets: [
        { name: "Oriented",
          altNames: ["2GLL", "CO+EP", "BBFF"],
          children: {}
        },
      ]
    }
  }
  
  let f2lGrouping = () => {
    return { 
      config: setConfig.displayConfig,
      sets: [
        { name: "Oriented",
          altNames: ["2GLL", "CO+EP", "BBFF"],
          children: Object.assign(c)
        },
      ]
    }
  }
  

  return {
    'eo': eoGrouping(),
    'f2l': f2lGrouping(),
    // 'vhls': {},
    'none': {
      config: setConfig.displayConfig,
      sets: [
        { name: "Algs",
          children: Object.assign(data)
        },
      ]
    }
  }
}