import type { twistyPuzzleTypeWithChirality } from "../../types"
import { backAction, invertAction, mirrorAction, repeatAction } from "../actions"

const modifierAlias = {
  "INVERSE": 'invert',
  "INV": 'invert',

  "LEFTY": 'left',
  "LEFT": 'left',
  "L": 'left',

  "BACK": 'back',
  "B": 'back',

  "DOUBLE": 'double',
  "X2": 'double',
  "2x": 'double',

  "TRIPLE": 'triple',
  "X3": 'triple',
  "3x": 'triple',
} as const
export const modifiersList = ["INVERSE", "BACK", "B", "LEFTY", "LEFT", "L", "DOUBLE", "X2", "TRIPLE", "X3"] as const
export type TModifiersList = typeof modifiersList[number]
export type TModifierAliases = keyof typeof modifierAlias
export type TModifiers = typeof modifierAlias[TModifierAliases]
export type TModifierActions = { type: TModifiers, action: (a: string, pzl: twistyPuzzleTypeWithChirality) => string, text: TModifierAliases }

export const getModActionsFromText = (m: TModifierAliases): TModifierActions => { return modifierActions[modifierAlias[m]] }
export const modifierActions: Record<TModifiers, TModifierActions> = {
  "invert": { type: "invert", action: (a, pzl) => { return invertAction(a) }, text: 'INV'},
  "left": { type: "left",  action: (a, pzl) => { return mirrorAction(a, pzl) }, text: 'LEFT'},
  "back": { type: "back",  action: (a, pzl) => { return backAction(a, pzl) }, text: 'BACK'},
  "double": { type: "double",  action: (a, pzl) => { return repeatAction(a, 2, pzl) }, text: '2x'},
  "triple": { type: "triple",  action: (a, pzl) => { return repeatAction(a, 3, pzl) }, text: '3x'},
}
