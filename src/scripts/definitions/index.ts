import type { PuzzleSpecificSimplifyOptions } from "cubing/dist/types/alg";
import type { modularPuzzleGroup, twistyPuzzleType, twistyPuzzleTypeWithChirality } from "../types";
import { puzzle3x3x3 } from "./puzzle/3x3";
import { puzzle4x4x4 } from "./puzzle/4x4";
import { puzzleMegaminx } from "./puzzle/megaminx";
import { puzzle2x2x2 } from "./puzzle/2x2";

interface IVCParams {
  stage?: string
  view?: "plan" | "trans"
  rot?: string
  colorScheme?: string
}

interface ITwistyParams {
  stage?: string
  rot?: string
  cameraX?: number
  cameraY?: number
  tempo?: number
}

export type IPuzzleDefinitionMapping = { 
  type: twistyPuzzleType, 
  // TODO: remove twistypuzzlewithchirality
  right: twistyPuzzleTypeWithChirality, 
  left: twistyPuzzleTypeWithChirality, 
  vc: string | number, 
  cancel?: PuzzleSpecificSimplifyOptions,
  notation?: (a: string, to: "vc" | "cubingjs") => string,
  imgSource?: "vc" | "cubingjs" | "none"
  visualcubeConfig?: IVCParams
  twistyPlayerConfig?: ITwistyParams
  note?: string
}

// set: name

export const puzzleMapping: modularPuzzleGroup<IPuzzleDefinitionMapping> = {
  "2x2x2": puzzle2x2x2,
  "3x3x3": puzzle3x3x3,
  "4x4x4": puzzle4x4x4,
  "megaminx": puzzleMegaminx,
}