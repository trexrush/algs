import { cube3x3x3 } from "cubing/dist/types/puzzles";
import type { IPuzzleDefinitionMapping } from "..";

export const puzzle3x3x3: IPuzzleDefinitionMapping = {
  type: '3x3x3', 
  right: '3x3x3', 
  left: '3x3x3', 
  vc: 3, 
  cancel: cube3x3x3.puzzleSpecificSimplifyOptions,
  imgSource: "vc",
}