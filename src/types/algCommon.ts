import { IDisplayConfig } from "./displayConfig"
import { twistyPuzzleType } from "./localOptions"

export type TAlgCommon<T extends TAlgCommon<T>> = Pick<IDisplayConfig, "imgSource"> & {
  puzzle: twistyPuzzleType
  isMirror: boolean
  mirror(): T
  notation(to: TNotationTargets): string
}
export type TNotationTargets = 'vc' | 'pg' | 'cubingjs'