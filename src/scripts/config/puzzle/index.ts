import type { PuzzleSpecificSimplifyOptions } from "cubing/dist/types/alg";
import type { IImageConfig } from "..";
import type { twistyPuzzleType } from "../../types";
import { puzzle2x2x2 } from "./2x2";
import { puzzle3x3x3 } from "./3x3";
import { puzzle4x4x4 } from "./4x4";
import { puzzleMegaminx } from "./megaminx";
import type { DeepPartial } from "ts-essentials";
import type { TTrigger } from "./triggers";
import { DefaultConfig } from "../defaults";
import type { TNotationTargets } from "../../alg";

export interface IJustPuzzleConfig {
  type: twistyPuzzleType,
  vc: string | number, 
  cancel?: PuzzleSpecificSimplifyOptions,
  notation?: (a: string, to: TNotationTargets) => string,
  imgSource: "vc" | "pg" | "cubingjs" | "none"
  note?: string
  triggers: TTrigger[]
  baseMoves: string[]
  mirrorTranslation: string[]
  backTranslation: { left: string[], right: string[] }
}
export interface IPuzzleConfig extends IJustPuzzleConfig, DeepPartial<IImageConfig> {}

export type modularPuzzleGroup<T> = Partial<Record<twistyPuzzleType | string, T>>
const puzzleMapping: modularPuzzleGroup<IPuzzleConfig> = {
  "2x2x2": puzzle2x2x2,
  "3x3x3": puzzle3x3x3,
  "4x4x4": puzzle4x4x4,
  "megaminx": puzzleMegaminx,
}

export const getConfig = (p: twistyPuzzleType): IPuzzleConfig => {
  return puzzleMapping[p] ?? DefaultConfig
}