import type { IAlgSetV2, IOptions, ICaseListV2 } from "../scripts/types"
import { createOptions } from "../scripts/utilities"
//@ts-expect-error
import yml from './megaPLLData.yml'

const Options: IOptions = createOptions({
  name: "Megaminx PLL",
  puzzle: 'megaminx',
  imgSource: "cubingjs",
  twistyplayerparams: {
    rot: 'x2 y3',
    cameraX: -10,
    cameraY: 45,
    tempo: 3,
  },
})

let _: ICaseListV2 = yml

const MegaNoGrouping: IAlgSetV2 = {
  options: Options,
  sets: [
    {
      name: "WIP Format",
      children: Object.assign(_)
    },
  ]
}

const MegaGroupByLetter: IAlgSetV2 = {
  options: Options,
  sets: [
    {
      name: "A",
      children: Object.assign([_['A1+'], _['A1-'], _['A2+'], _['A2-']])
    },
    {
      name: "B",
      children: Object.assign([_['B1+'], _['B1-'], _['B2+'], _['B2-']])
    },
    {
      name: "C",
      children: Object.assign([_['C1+'], _['C1-'], _['C2+'], _['C2-'], _['C3+'], _['C3-'], _['C4+'], _['C4-'], _['C5+'], _['C5-'], _['C6+'], _['C6-']])
    },
    {
      name: "D",
      children: Object.assign([_['D+'], _['D-']])
    },
    {
      name: "E",
      children: Object.assign([_['E1'], _['E2'], _['E3']])
    },
    {
      name: "F",
      children: Object.assign([_['F1+'], _['F1-'], _['F2+'], _['F2-'], _['F3+'], _['F3-'], _['F4+'], _['F4-'], _['F5+'], _['F5-']]),
    },
    {
      name: "G",
      children: Object.assign([_['G1+'], _['G1-'], _['G2+'], _['G2-']])
    },
    {
      name: "H",
      children: Object.assign([_['H1+'], _['H1-'], _['H2+'], _['H2-']])
    },
    {
      name: "I",
      children: Object.assign([_['I1+'], _['I1-'], _['I2+'], _['I2-'], _['I3+'], _['I3-'], _['I4+'], _['I4-'], _['I5+'], _['I5-'], _['I6+'], _['I6-']])
    },
    {
      name: "J",
      children: Object.assign([_['J1+'], _['J1-'], _['J2+'], _['J2-'], _['J3+'], _['J3-']])
    },
    {
      name: "K",
      children: Object.assign([_['K1+'], _['K1-'], _['K2+'], _['K2-']])
    },
    {
      name: "L",
      children: Object.assign([_['L1'], _['L2'], _['L3+'], _['L3-'], _['L4+'], _['L4-'], _['L5+'], _['L5-'], _['L6+'], _['L6-']])
    },
    {
      name: "M",
      children: Object.assign([_['M']])
    },
    {
      name: "N",
      children: Object.assign([_['N1+'], _['N1-'], _['N2+'], _['N2-']])
    },
    {
      name: "P",
      children: Object.assign([_['P1+'], _['P1-'], _['P2+'], _['P2-'], _['P3+'], _['P3-'], _['P4+'], _['P4-']])
    },
    {
      name: "Q",
      children: Object.assign([_['Q1+'], _['Q1-'], _['Q2+'], _['Q2-']])
    },
    {
      name: "R",
      children: Object.assign([_['R1+'], _['R1-'], _['R2+'], _['R2-'], _['R3+'], _['R3-'], _['R4+'], _['R4-']])
    },
    {
      name: "S",
      children: Object.assign([_['S1+'], _['S1-'], _['S2+'], _['S2-'], _['S3+'], _['S3-'], _['S4+'], _['S4-'], _['S5+'], _['S5-'], _['S6+'], _['S6-']])
    },
    {
      name: "T",
      children: Object.assign([_['T1'], _['T2+'], _['T2-'], _['T3+'], _['T3-'], _['T4+'], _['T4-']])
    },
    {
      name: "U",
      children: Object.assign([_['U1+'], _['U1-'], _['U2+'], _['U2-']])
    },
    {
      name: "V",
      children: Object.assign([_['V1+'], _['V1-'], _['V2+'], _['V2-'], _['V3+'], _['V3-'], _['V4+'], _['V4-']])
    },
    {
      name: "W",
      children: Object.assign([_['W']])
    },
    {
      name: "X",
      children: Object.assign([_['X1'], _['X2'], _['X3'], _['X4'], _['X5+'], _['X5-'], _['X6+'], _['X6-'], _['X7+'], _['X7-']])
    },
    {
      name: "Y",
      children: Object.assign([_['Y1+'], _['Y1-'], _['Y2+'], _['Y2-'], _['Y3+'], _['Y3-']])
    },
    {
      name: "Z",
      children: Object.assign([_['Z1'], _['Z2'], _['Z3']])
    },
  ]
}
console.log (MegaGroupByLetter.sets[0])

export { MegaNoGrouping, MegaGroupByLetter }