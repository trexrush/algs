import type { ISetConfig } from ".."
import { listFromData } from ".."
import { IConfig, createConfig } from "../.."
import type { IPuzzleConfig } from "../../puzzle"
import { puzzleMegaminx } from "../../puzzle/megaminx"
import type { IAlgset, ICaseList } from "../dataFormat"

import caseDefinitions from '../caseDefaults/megaOLL.yml'
import merge from "ts-deepmerge"

// CONFIG
const puzzleOptions: IPuzzleConfig = puzzleMegaminx
const setOptions: ISetConfig = {
  name: "Megaminx OLL",
  twistyPlayerConfig: {
    cameraY: 55,
    stage: 'OLL'
  },
  puzzleGenConfig: {
    options: {
      puzzle: {
        scheme: {
          U: { value: '#222', stroke: '#111'},
          F: { value: '#b7c7cc', stroke: '#b7c7cc' },
          R: { value: '#ccccb7', stroke: '#ccccb7' },
          BR: { value: '#ccb7c7', stroke: '#ccb7c7' },
          BL: { value: '#ccc5b7', stroke: '#ccc5b7' },
          L: { value: '#c2ccb7', stroke: '#c2ccb7' },
        }
      }
    }
  }
}
const config: IConfig = createConfig(puzzleOptions, setOptions)

// CASES
const caseNames = [
  "1A", "1B",
  "2A", "2B", "2C", "2D",
  "3A+", "3A-", "3B+", "3B-",
  "4A", "4B", "4C", "4D", "4E+", "4E-",
  "5+", "5-",
  "6A", "6B",
  "7A", "7B",
  "8A+", "8A-", "8B+", "8B-",
  "9A+", "9A-", "9B+", "9B-",
  "10A+", "10A-", "10B+", "10B-",
  "11A+", "11A-", "11B+", "11B-",
  "12+", "12-",
  "13+", "13-",
  "14A+", "14A-", "14B+", "14B-",
  "15A+", "15A-", "15B+", "15B-",
  "16A+", "16A-", "16B+", "16B-",
  "17A+", "17A-", "17B+", "17B-",
  "18A", "18B", "18C", "18D", "18E+", "18E-",
  "19A+", "19A-", "19B+", "19B-", "19C+", "19C-", "19D+", "19D-", "19E+", "19E-", "19F+", "19F-",
  "20A+", "20A-", "20B+", "20B-", "20C+", "20C-", "20D+", "20D-", "20E+", "20E-", "20F+", "20F-",
  "21A+", "21A-", "21B+", "21B-", "21C+", "21C-", "21D+", "21D-", "21E+", "21E-",
  "22A", "22B",
  "23A", "23B",
  "24A+", "24A-", "24B+", "24B-",
  "25A+", "25A-", "25B+", "25B-",
  "26A+", "26A-", "26B+", "26B-",
  "27A+", "27A-", "27B+", "27B-",
  "28+", "28-",
  "29+", "29-",
  "30A+", "30A-", "30B+", "30B-",
  "31A+", "31A-", "31B+", "31B-",
  "32A+", "32A-", "32B+", "32B-",
  "33A+", "33A-", "33B+", "33B-",
  "34A", "34B", "34C", "34D", "34E+", "34E-",
  "35A+", "35A-", "35B+", "35B-", "35C+", "35C-", "35D+", "35D-", "35E+", "35E-", "35F+", "35F-",
  "36A+", "36A-", "36B+", "36B-", "36C+", "36C-", "36D+", "36D-", "36E+", "36E-", "36F+", "36F-",
  "37A+", "37A-", "37B+", "37B-", "37C+", "37C-", "37D+", "37D-", "37E+", "37E-",
  // dots
  "1C",
  "38A", "38B",
  "39A", "39B",
  "40A+", "40A-", "40B+", "40B-",
  "41A+", "41A-", "41B+", "41B-",
  "42A+", "42A-", "42B+", "42B-",
  "43A+", "43A-", "43B+", "43B-",
  "44+", "44-",
  "45+", "45-",
  "46A+", "46A-", "46B+", "46B-",
  "47A+", "47A-", "47B+", "47B-",
  "48A+", "48A-", "48B+", "48B-",
  "49A+", "49A-", "49B+", "49B-",
  "50A", "50B", "50C", "50D", "50E+", "50E-",
  "51A+", "51A-", "51B+", "51B-", "51C+", "51C-", "51D+", "51D-", "51E+", "51E-", "51F+", "51F-",
  "52A+", "52A-", "52B+", "52B-", "52C+", "52C-", "52D+", "52D-", "52E+", "52E-", "52F+", "52F-",
  "53A+", "53A-", "53B+", "53B-", "53C+", "53C-", "53D+", "53D-", "53E+", "53E-",
] as const
type ICaseName = typeof caseNames[number]

const useGrouping = (grouping: "none" | "oll" | 'feature' | '4LLLjustCO', d: ICaseList): IAlgset => {
  const data = merge(caseDefinitions, d) as unknown as ICaseList
  // curry away data and type to make defining sets easier
  const ch = (list: ICaseName[]) => { return Object.assign(listFromData<ICaseName>(list, data)) }

  const c = {
    "1": { name: "1", altNames: ["EO"],
        children: ch(["1A", "1B", "1C"])
    },
    "2": { name: "2", altNames: ["2 Corner CO"],
        children: ch(["2A", "2B", "2C", "2D",])
    },
    "3": { name: "3", altNames: ["3 Corner CO"],
        children: ch(["3A+", "3A-", "3B+", "3B-",])
    },
    "4": { name: "4", altNames: ["4 Corner CO"],
        children: ch(["4A", "4B", "4C", "4D", "4E+", "4E-",])
    },
    "5": { name: "5", altNames: ["5 Corner CO"],
        children: ch(["5+", "5-",])
    },
    "6": { name: "6", altNames: ["Anchor Shapes"],
        children: ch(["6A", "6B",])
    },
    "7": { name: "7", altNames: ["T Shapes"],
        children: ch(["7A", "7B",])
    },
    "8": { name: "8", altNames: ["C Shapes"],
        children: ch(["8A+", "8A-", "8B+", "8B-",])
    },
    "9": { name: "9", altNames: ["S Shapes"],
        children: ch(["9A+", "9A-", "9B+", "9B-",])
    },
    "10": { name: "10", altNames: ["Pi Shapes"],
        children: ch(["10A+", "10A-", "10B+", "10B-",])
    },
    "11": { name: "11", altNames: ["Y Shapes"],
        children: ch(["11A+", "11A-", "11B+", "11B-",])
    },
    "12": { name: "12", altNames: ["Hammerhead Shapes"],
        children: ch(["12+", "12-",])
    },
    "13": { name: "13", altNames: ["W Shapes"],
        children: ch(["13+", "13-",])
    },
    "14": { name: "14", altNames: ["Duck Head Shapes"],
        children: ch(["14A+", "14A-", "14B+", "14B-",])
    },
    "15": { name: "15", altNames: ["Megaphone Shapes"],
        children: ch(["15A+", "15A-", "15B+", "15B-",])
    },
    "16": { name: "16", altNames: ["Claw Shapes"],
        children: ch(["16A+", "16A-", "16B+", "16B-",])
    },
    "17": { name: "17", altNames: ["Rabbit Shapes"],
        children: ch(["17A+", "17A-", "17B+", "17B-",])
    },
    "18": { name: "18", altNames: ["Long block"],
        children: ch(["18A", "18B", "18C", "18D", "18E+", "18E-",])
    },
    "19": { name: "19", altNames: ["Fox Head Shapes"],
        children: ch(["19A+", "19A-", "19B+", "19B-", "19C+", "19C-", "19D+", "19D-", "19E+", "19E-", "19F+", "19F-",])
    },
    "20": { name: "20", altNames: ["Scorpion Shapes"],
        children: ch(["20A+", "20A-", "20B+", "20B-", "20C+", "20C-", "20D+", "20D-", "20E+", "20E-", "20F+", "20F-",])
    },
    "21": { name: "21", altNames: ["Line Shapes"],
        children: ch(["21A+", "21A-", "21B+", "21B-", "21C+", "21C-", "21D+", "21D-", "21E+", "21E-",])
    },
    "22": { name: "22", altNames: ["Flower Shapes"],
        children: ch(["22A", "22B",])
    },
    "23": { name: "23", altNames: ["Chandelier Shapes"],
        children: ch(["23A", "23B",])
    },
    "24": { name: "24", altNames: ["P Shapes"],
        children: ch(["24A+", "24A-", "24B+", "24B-",])
    },
    "25": { name: "25", altNames: ["E Shapes"],
        children: ch(["25A+", "25A-", "25B+", "25B-",])
    },
    "26": { name: "26", altNames: ["Sprinter Shapes"],
        children: ch(["26A+", "26A-", "26B+", "26B-",])
    },
    "27": { name: "27", altNames: ["Eagle Shapes"],
        children: ch(["27A+", "27A-", "27B+", "27B-",])
    },
    "28": { name: "28", altNames: ["Big Block"],
        children: ch(["28+", "28-",])
    },
    "29": { name: "29", altNames: ["Lobster Shapes"],
        children: ch(["29+", "29-",])
    },
    "30": { name: "30", altNames: ["Lightning Shapes"],
        children: ch(["30A+", "30A-", "30B+", "30B-",])
    },
    "31": { name: "31", altNames: ["Cobra Shapes"],
        children: ch(["31A+", "31A-", "31B+", "31B-",])
    },
    "32": { name: "32", altNames: ["Hand Shapes"],
        children: ch(["32A+", "32A-", "32B+", "32B-",])
    },
    "33": { name: "33", altNames: ["Magic Lamp Shapes"],
        children: ch(["33A+", "33A-", "33B+", "33B-",])
    },
    "34": { name: "34", altNames: ["Human Shapes"],
        children: ch(["34A", "34B", "34C", "34D", "34E+", "34E-",])
    },
    "35": { name: "35", altNames: ["Axe Shapes"],
        children: ch(["35A+", "35A-", "35B+", "35B-", "35C+", "35C-", "35D+", "35D-", "35E+", "35E-", "35F+", "35F-",])
    },
    "36": { name: "36", altNames: ["Parrot Shapes"],
        children: ch(["36A+", "36A-", "36B+", "36B-", "36C+", "36C-", "36D+", "36D-", "36E+", "36E-", "36F+", "36F-",])
    },
    "37": { name: "37", altNames: ["L Shapes"],
        children: ch(["37A+", "37A-", "37B+", "37B-", "37C+", "37C-", "37D+", "37D-", "37E+", "37E-", ])
    },
    "38": { name: "38", altNames: ["Candle Shapes"],
        children: ch(["38A", "38B", ])
    },
    "39": { name: "39", altNames: ["Wither Shapes"],
        children: ch(["39A", "39B", ])
    },
    "40": { name: "40", altNames: [],
        children: ch(["40A+", "40A-", "40B+", "40B-", ])
    },
    "41": { name: "41", altNames: ["Poodle Shapes"],
        children: ch(["41A+", "41A-", "41B+", "41B-", ])
    },
    "42": { name: "42", altNames: [],
        children: ch(["42A+", "42A-", "42B+", "42B-", ])
    },
    "43": { name: "43", altNames: ["Goofy Shapes", "Scorpion"],
        children: ch(["43A+", "43A-", "43B+", "43B-", ])
    },
    "44": { name: "44", altNames: ["Small T"],
        children: ch(["44+", "44-", ])
    },
    "45": { name: "45", altNames: ["Ovary Shapes"],
        children: ch(["45+", "45-", ])
    },
    "46": { name: "46", altNames: [],
        children: ch(["46A+", "46A-", "46B+", "46B-", ])
    },
    "47": { name: "47", altNames: [],
        children: ch(["47A+", "47A-", "47B+", "47B-", ])
    },
    "48": { name: "48", altNames: ["Raygun Shapes"],
        children: ch(["48A+", "48A-", "48B+", "48B-", ])
    },
    "49": { name: "49", altNames: ["Mickey Shapes"],
        children: ch(["49A+", "49A-", "49B+", "49B-", ])
    },
    "50": { name: "50", altNames: ["Thin Line"],
        children: ch(["50A", "50B", "50C", "50D", "50E+", "50E-", ])
    },
    "51": { name: "51", altNames: ["Hook Shapes"],
        children: ch(["51A+", "51A-", "51B+", "51B-", "51C+", "51C-", "51D+", "51D-", "51E+", "51E-", "51F+", "51F-", ])
    },
    "52": { name: "52", altNames: ["Ocarina Shapes"],
        children: ch(["52A+", "52A-", "52B+", "52B-", "52C+", "52C-", "52D+", "52D-", "52E+", "52E-", "52F+", "52F-", ])
    },
    "53": { name: "53", altNames: ["Drops"],
        children: ch(["53A+", "53A-", "53B+", "53B-", "53C+", "53C-", "53D+", "53D-", "53E+", "53E-", ])
    },
  }

  const noGrouping = (): IAlgset => {
    return {
      config: config,
      sets: [
        { name: "OLL",
          children: Object.assign(data)
        },
      ]
    }
  }
  
  const ollGrouping = (): IAlgset => {
    return { 
      config: config,
      sets: Object.assign(Object.values(c))
    }
  }

  const featureGrouping = (): IAlgset => {
    return {
      config: config,
      sets: [
        { name: "Star", altNames: ["OCLL", "CO(4LLL)", "2 3 4 5"], children: Object.assign([c[2], c[3], c[4], c[5], ]) },
        { name: "Line", children: Object.assign([
          { name: "5 Corner Line", children: ch(['1A'])},
          { name: "3 Corner Line", altNames: ["6 7 8 9 10 11"], children: Object.assign([c[6], c[7], c[8], c[9], c[10], c[11], ])},
          { name: "2 Corner Line", altNames: ["12 13 14 15 16 17"], children: Object.assign([c[12], c[13], c[14], c[15], c[16], c[17], ])},
          { name: "0/1 Corner Line", altNames: ["18 19 20 21"], children: Object.assign([c[18], c[19], c[20], c[21]])},
        ])},
        { name: "L", children: Object.assign([
          { name: "5 Corner L", children: ch(['1B'])},
          { name: "3 Corner L", altNames: ["22 23 24 25 26 27"], children: Object.assign([c[22], c[23], c[24], c[25], c[26], c[27], ])},
          { name: "2 Corner L", altNames: ["28 29 30 31 32 33"], children: Object.assign([c[28], c[29], c[30], c[31], c[32], c[33], ])},
          { name: "0/1 Corner L", altNames: ["34 35 36 37"], children: Object.assign([c[34], c[35], c[36], c[37], ])},
        ])},
        { name: "Dot", children: Object.assign([
          { name: "5 Corner Dot", children: ch(['1C'])},
          { name: "3 Corner Dot", altNames: ["38 39 40 41 42 43"], children: Object.assign([c[38], c[39], c[40], c[41], c[42], c[43], ])},
          { name: "2 Corner Dot", altNames: ["44 45 46 47 48 49"], children: Object.assign([c[44], c[45], c[46], c[47], c[48], c[49], ])},
          { name: "0/1 Corner Dot", altNames: ["50 51 52 53"], children: Object.assign([c[50], c[51], c[52], c[53], ])},
        ])},
      ]
    }
  }

  const just4LLL = (): IAlgset => {
    return {
      config: config,
      sets: [
        { name: "CO", altNames: ["OCLL", "Star(2LLL)", "2 3 4 5"], children: Object.assign([c[2], c[3], c[4], c[5], ]) },
      ]
    }
  }

  switch (grouping) {
    case 'none':
      return noGrouping()
    case 'oll':
      return ollGrouping()
    case 'feature':
      return featureGrouping()
    case '4LLLjustCO':
      return just4LLL()
  }
}

export { useGrouping }