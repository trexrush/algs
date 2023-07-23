import type { PuzzleSpecificSimplifyOptions } from "cubing/dist/types/alg";
import type { IImageConfig } from "..";
import type { twistyPuzzleType, twistyPuzzleTypeWithChirality } from "../../types";
import { puzzle2x2x2 } from "./2x2";
import { puzzle3x3x3 } from "./3x3";
import { puzzle4x4x4 } from "./4x4";
import { puzzleMegaminx } from "./megaminx";
import type { DeepPartial } from "ts-essentials";

export interface IJustPuzzleConfig {
  type: twistyPuzzleType, // TODO: remove twistypuzzlewithchirality
  right: twistyPuzzleTypeWithChirality, 
  left: twistyPuzzleTypeWithChirality, 
  vc: string | number, 
  cancel?: PuzzleSpecificSimplifyOptions,
  notation?: (a: string, to: "vc" | "cubingjs") => string,
  imgSource: "vc" | "cubingjs" | "none"
  note?: string
}
export interface IPuzzleConfig extends IJustPuzzleConfig, DeepPartial<IImageConfig> {}

export type modularPuzzleGroup<T> = Partial<Record<twistyPuzzleTypeWithChirality, T>>
export const puzzleMapping: modularPuzzleGroup<IPuzzleConfig> = {
  "2x2x2": puzzle2x2x2,
  "3x3x3": puzzle3x3x3,
  "4x4x4": puzzle4x4x4,
  "megaminx": puzzleMegaminx,
}