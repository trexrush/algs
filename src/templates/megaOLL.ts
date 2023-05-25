import type { IAlgSet, ICaseList, IOptions } from "../scripts/types"
//@ts-expect-error
import yml from '../data/megaOLLData.yml'


const Options: IOptions = {
    name: "Megaminx OLL",
    puzzle: "megaminx",
    imgSource: "cubingjs",
    twistyplayerparams: {
        rot: 'y',
        cameraX: 10,
        cameraY: 55,
        tempo: 3,
        stage: 'OLL'
    },
}

let _: ICaseList = yml

const MegaOLLNoGrouping: IAlgSet = {
  options: Options,
  sets: [
    {
      name: "WIP Format",
      children: Object.assign(_)
    },
  ]
}

//TODO: add
// const MegaOLLGroupByNumber: IAlgSet = {
//     options: Options,
//     sets: [
//       {
//         name: "1",
//         altNames: [""],
//         children: Object.assign([])
//       },
//       {
//         name: "2",
//         altNames: [""],
//         children: Object.assign([_['2A'], _['2B'], _['2C'], _['2D'], ])
//       },
//       {
//         name: "3",
//         altNames: [""],
//         children: Object.assign([])
//       },
//       {
//         name: "4",
//         altNames: [""],
//         children: Object.assign([])
//       },
//       {
//         name: "5",
//         altNames: [""],
//         children: Object.assign([])
//       },
//       {
//         name: "6",
//         altNames: [""],
//         children: Object.assign([])
//       },
//       {
//         name: "7",
//         altNames: [""],
//         children: Object.assign([])
//       },
//       {
//         name: "8",
//         altNames: [""],
//         children: Object.assign([])
//       },
//       {
//         name: "9",
//         altNames: [""],
//         children: Object.assign([])
//       },
//       {
//         name: "10",
//         altNames: [""],
//         children: Object.assign([])
//       },
//       {
//         name: "11",
//         altNames: [""],
//         children: Object.assign([])
//       },
//       {
//         name: "12",
//         altNames: [""],
//         children: Object.assign([])
//       },
//       {
//         name: "13",
//         altNames: [""],
//         children: Object.assign([])
//       },
//       {
//         name: "14",
//         altNames: [""],
//         children: Object.assign([])
//       },
//       {
//         name: "15",
//         altNames: [""],
//         children: Object.assign([])
//       },
//       {
//         name: "16",
//         altNames: [""],
//         children: Object.assign([])
//       },
//       {
//         name: "17",
//         altNames: [""],
//         children: Object.assign([])
//       },
//       {
//         name: "18",
//         altNames: [""],
//         children: Object.assign([])
//       },
//       {
//         name: "19",
//         altNames: [""],
//         children: Object.assign([])
//       },
//       {
//         name: "20",
//         altNames: [""],
//         children: Object.assign([])
//       },
//       {
//         name: "21",
//         altNames: [""],
//         children: Object.assign([])
//       },
//       {
//         name: "22",
//         altNames: [""],
//         children: Object.assign([])
//       },
//       {
//         name: "23",
//         altNames: [""],
//         children: Object.assign([])
//       },
//       {
//         name: "24",
//         altNames: [""],
//         children: Object.assign([])
//       },
//       {
//         name: "25",
//         altNames: [""],
//         children: Object.assign([])
//       },
//       {
//         name: "26",
//         altNames: [""],
//         children: Object.assign([])
//       },
//       {
//         name: "27",
//         altNames: [""],
//         children: Object.assign([])
//       },
//       {
//         name: "28",
//         altNames: [""],
//         children: Object.assign([])
//       },
//       {
//         name: "29",
//         altNames: [""],
//         children: Object.assign([])
//       },
//       {
//         name: "30",
//         altNames: [""],
//         children: Object.assign([])
//       },
//       {
//         name: "31",
//         altNames: [""],
//         children: Object.assign([])
//       },
//       {
//         name: "32",
//         altNames: [""],
//         children: Object.assign([])
//       },
//       {
//         name: "33",
//         altNames: [""],
//         children: Object.assign([])
//       },
//       {
//         name: "34",
//         altNames: [""],
//         children: Object.assign([])
//       },
//       {
//         name: "35",
//         altNames: [""],
//         children: Object.assign([])
//       },
//       {
//         name: "36",
//         altNames: [""],
//         children: Object.assign([])
//       },
//       {
//         name: "37",
//         altNames: [""],
//         children: Object.assign([])
//       },
//     ]
//   }

export { MegaOLLNoGrouping }