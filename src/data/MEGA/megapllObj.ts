import type { IAlgSet, IOptions, ICaseList } from "../../scripts/types"
import { createOptions } from "../../scripts/utilities"
//@ts-expect-error
import yml from './megapll.yml'

const Options: IOptions = createOptions({
  name: "Megaminx PLL",
  puzzle: 'megaminx',
  imgSource: "cubingjs",
  twistyplayerparams: {
    rot: 'x2 y3',
    cameraX: 10,
    cameraY: 45,
    tempo: 3,
  },
})

let _: ICaseList = yml

const MegaPLLNoGrouping: IAlgSet = {
  options: Options,
  sets: [
    {
      name: "WIP Format",
      children: Object.assign(_)
    },
  ]
}

const MegaPLLGroupByLetter: IAlgSet = {
  options: Options,
  sets: [
    {
      name: "A",
      altNames: ["3 Corner CP"],
      children: Object.assign([_['A1+'], _['A1-'], _['A2+'], _['A2-']])
    },
    {
      name: "B",
      altNames: ["Double R block"],
      children: Object.assign([_['B1+'], _['B1-'], _['B2+'], _['B2-']])
    },
    {
      name: "C",
      altNames: ["2 2x1s touching"],
      children: Object.assign([_['C1+'], _['C1-'], _['C2+'], _['C2-'], _['C3+'], _['C3-'], _['C4+'], _['C4-'], _['C5+'], _['C5-'], _['C6+'], _['C6-']])
    },
    {
      name: "D",
      altNames: ["3x1 and 2x2"],
      children: Object.assign([_['D+'], _['D-']])
    },
    {
      name: "E",
      altNames: ["4 Corner CP"],
      children: Object.assign([_['E1'], _['E2'], _['E3']])
    },
    {
      name: "F",
      altNames: ["2x2 and 2x1(s)"],
      children: Object.assign([_['F1+'], _['F1-'], _['F2+'], _['F2-'], _['F3+'], _['F3-'], _['F4+'], _['F4-'], _['F5+'], _['F5-']]),
    },
    {
      name: "G",
      altNames: ["2x1 and headlights"],
      children: Object.assign([_['G1+'], _['G1-'], _['G2+'], _['G2-']])
    },
    {
      name: "H",
      altNames: ["5 Corner EP/CP"],
      children: Object.assign([_['H1+'], _['H1-'], _['H2+'], _['H2-']])
    },
    {
      name: "I",
      altNames: ["2x1"],
      children: Object.assign([_['I1+'], _['I1-'], _['I2+'], _['I2-'], _['I3+'], _['I3-'], _['I4+'], _['I4-'], _['I5+'], _['I5-'], _['I6+'], _['I6-']])
    },
    {
      name: "J",
      altNames: ["J block"],
      children: Object.assign([_['J1+'], _['J1-'], _['J2+'], _['J2-'], _['J3+'], _['J3-']])
    },
    {
      name: "K",
      altNames: ["5 Corner CP"],
      children: Object.assign([_['K1+'], _['K1-'], _['K2+'], _['K2-']])
    },
    {
      name: "L",
      altNames: ["Double headlights, no blocks"],
      children: Object.assign([_['L1'], _['L2'], _['L3+'], _['L3-'], _['L4+'], _['L4-'], _['L5+'], _['L5-'], _['L6+'], _['L6-']])
    },
    {
      name: "M",
      altNames: ["2 3x1s"],
      children: Object.assign([_['M']])
    },
    {
      name: "N",
      altNames: ["5 2x1s"],
      children: Object.assign([_['N1+'], _['N1-'], _['N2+'], _['N2-']])
    },
    {
      name: "P",
      altNames: ["R block"],
      children: Object.assign([_['P1+'], _['P1-'], _['P2+'], _['P2-'], _['P3+'], _['P3-'], _['P4+'], _['P4-']])
    },
    {
      name: "Q",
      altNames: ["5 Edge EP"],
      children: Object.assign([_['Q1+'], _['Q1-'], _['Q2+'], _['Q2-']])
    },
    {
      name: "R",
      altNames: ["R block and 2x1"],
      children: Object.assign([_['R1+'], _['R1-'], _['R2+'], _['R2-'], _['R3+'], _['R3-'], _['R4+'], _['R4-']])
    },
    {
      name: "S",
      altNames: ["2 2x1s, not touching"],
      children: Object.assign([_['S1+'], _['S1-'], _['S2+'], _['S2-'], _['S3+'], _['S3-'], _['S4+'], _['S4-'], _['S5+'], _['S5-'], _['S6+'], _['S6-']])
    },
    {
      name: "T",
      altNames: ["2/3/4 2x1s in a symettrical T like pattern"],
      children: Object.assign([_['T1'], _['T2+'], _['T2-'], _['T3+'], _['T3-'], _['T4+'], _['T4-']])
    },
    {
      name: "U",
      altNames: ["3 Edge EP"],
      children: Object.assign([_['U1+'], _['U1-'], _['U2+'], _['U2-']])
    },
    {
      name: "V",
      altNames: ["2x2 and 2x1"],
      children: Object.assign([_['V1+'], _['V1-'], _['V2+'], _['V2-'], _['V3+'], _['V3-'], _['V4+'], _['V4-']])
    },
    {
      name: "W",
      altNames: ["2 2x2s"],
      children: Object.assign([_['W']])
    },
    {
      name: "X",
      altNames: ["No blocks / headlights"],
      children: Object.assign([_['X1'], _['X2'], _['X3'], _['X4'], _['X5+'], _['X5-'], _['X6+'], _['X6-'], _['X7+'], _['X7-']])
    },
    {
      name: "Y",
      altNames: ["2 2x1s in Y pattern + other stuff"],
      children: Object.assign([_['Y1+'], _['Y1-'], _['Y2+'], _['Y2-'], _['Y3+'], _['Y3-']])
    },
    {
      name: "Z",
      altNames: ["4 Edge EP"],
      children: Object.assign([_['Z1'], _['Z2'], _['Z3']])
    },
  ]
}

const MegaPLLGroupByFeatures: IAlgSet = {
  options: Options,
  sets: [
    {
      name: "CPLL",
      altNames: ["A E H K", "4LLL"],
      children: Object.assign([
        {
          name: "A",
          altNames: ["3 Corner CP"],
          children: Object.assign([_['A1+'], _['A1-'], _['A2+'], _['A2-']])
        },
        {
          name: "E",
          altNames: ["4 Corner CP"],
          children: Object.assign([_['E1'], _['E2'], _['E3']])
        },
        {
          name: "H",
          altNames: ["5 Corner EP/CP"],
          children: Object.assign([_['H1+'], _['H1-'], _['H2+'], _['H2-']])
        },
        {
          name: "K",
          altNames: ["5 Corner CP"],
          children: Object.assign([_['K1+'], _['K1-'], _['K2+'], _['K2-']])
        },
      ])
    },
    {
      name: "EPLL",
      altNames: ["H U Z Q"],
      children: Object.assign([
        {
          name: "Q",
          altNames: ["5 Edge EP"],
          children: Object.assign([_['Q1+'], _['Q1-'], _['Q2+'], _['Q2-']])
        },
        {
          name: "U",
          altNames: ["3 Edge EP"],
          children: Object.assign([_['U1+'], _['U1-'], _['U2+'], _['U2-']])
        },
        {
          name: "Z",
          altNames: ["4 Edge EP"],
          children: Object.assign([_['Z1'], _['Z2'], _['Z3']])
        },
      ])
    },
    {
      name: "Block larger than 2x1",
      altNames: ["D F J M V W"],
      children: Object.assign([
        {
          name: "D",
          altNames: ["3x1 and 2x2"],
          children: Object.assign([_['D+'], _['D-']])
        },
        {
          name: "F",
          altNames: ["2x2 and 2x1(s)"],
          children: Object.assign([_['F1+'], _['F1-'], _['F2+'], _['F2-'], _['F3+'], _['F3-'], _['F4+'], _['F4-'], _['F5+'], _['F5-']]),
        },
        {
          name: "J",
          altNames: ["J block"],
          children: Object.assign([_['J1+'], _['J1-'], _['J2+'], _['J2-'], _['J3+'], _['J3-']])
        },
        {
          name: "M",
          altNames: ["2 3x1s"],
          children: Object.assign([_['M']])
        },
        {
          name: "V",
          altNames: ["2x2 and 2x1"],
          children: Object.assign([_['V1+'], _['V1-'], _['V2+'], _['V2-'], _['V3+'], _['V3-'], _['V4+'], _['V4-']])
        },
        {
          name: "W",
          altNames: ["2 2x2s"],
          children: Object.assign([_['W']])
        },
      ])
    },
    {
      name: "R block sets",
      altNames: ["B P R"],
      children: Object.assign([
        {
          name: "B",
          altNames: ["Double R block"],
          children: Object.assign([_['B1+'], _['B1-'], _['B2+'], _['B2-']])
        },
        {
          name: "P",
          altNames: ["R block"],
          children: Object.assign([_['P1+'], _['P1-'], _['P2+'], _['P2-'], _['P3+'], _['P3-'], _['P4+'], _['P4-']])
        },
        {
          name: "R",
          altNames: ["R block and 2x1"],
          children: Object.assign([_['R1+'], _['R1-'], _['R2+'], _['R2-'], _['R3+'], _['R3-'], _['R4+'], _['R4-']])
        },
      ])
    },
    {
      name: "Multiple 2x1 bars",
      altNames: ["C N S T Y"],
      children: Object.assign([
        {
          name: "C",
          altNames: ["2 2x1s touching"],
          children: Object.assign([_['C1+'], _['C1-'], _['C2+'], _['C2-'], _['C3+'], _['C3-'], _['C4+'], _['C4-'], _['C5+'], _['C5-'], _['C6+'], _['C6-']])
        },
        {
          name: "N",
          altNames: ["5 2x1s"],
          children: Object.assign([_['N1+'], _['N1-'], _['N2+'], _['N2-']])
        },
        {
          name: "S",
          altNames: ["2 2x1s, not touching"],
          children: Object.assign([_['S1+'], _['S1-'], _['S2+'], _['S2-'], _['S3+'], _['S3-'], _['S4+'], _['S4-'], _['S5+'], _['S5-'], _['S6+'], _['S6-']])
        },
        {
          name: "T",
          altNames: ["2/3/4 2x1s in a symettrical T like pattern"],
          children: Object.assign([_['T1'], _['T2+'], _['T2-'], _['T3+'], _['T3-'], _['T4+'], _['T4-']])
        },
        {
          name: "Y",
          altNames: ["2 2x1s in Y pattern + other stuff"],
          children: Object.assign([_['Y1+'], _['Y1-'], _['Y2+'], _['Y2-'], _['Y3+'], _['Y3-']])
        },
      ])
    },
    {
      name: "1 2x1 bar and no blocks",
      altNames: ["G I L X"],
      children: Object.assign([
        {
          name: "G",
          altNames: ["2x1 and headlights"],
          children: Object.assign([_['G1+'], _['G1-'], _['G2+'], _['G2-']])
        },
        {
          name: "I",
          altNames: ["2x1"],
          children: Object.assign([_['I1+'], _['I1-'], _['I2+'], _['I2-'], _['I3+'], _['I3-'], _['I4+'], _['I4-'], _['I5+'], _['I5-'], _['I6+'], _['I6-']])
        },
        {
          name: "L",
          altNames: ["Double headlights, no blocks"],
          children: Object.assign([_['L1'], _['L2'], _['L3+'], _['L3-'], _['L4+'], _['L4-'], _['L5+'], _['L5-'], _['L6+'], _['L6-']])
        },
        {
          name: "X",
          altNames: ["No blocks / headlights"],
          children: Object.assign([_['X1'], _['X2'], _['X3'], _['X4'], _['X5+'], _['X5-'], _['X6+'], _['X6-'], _['X7+'], _['X7-']])
        },        
      ])
    },
  ]
}

export { MegaPLLNoGrouping, MegaPLLGroupByLetter, MegaPLLGroupByFeatures }











