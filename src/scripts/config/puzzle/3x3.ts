import { cube3x3x3 } from "cubing/puzzles";
import type { IPuzzleDisplayConfig } from ".";
import { backMoveGroups, baseMoveGroups, mirrorMoveGroups } from "../../../configs/moveTranslations";
import { triggerSubstitutionGroups } from "../../../configs/triggers";

export const puzzle3x3x3: IPuzzleDisplayConfig = {
  type: '3x3x3', 
  vc: 3, 
  cancel: cube3x3x3.puzzleSpecificSimplifyOptions,
  imgSource: "vc",
  triggers: triggerSubstitutionGroups["3x3x3"]!,
  baseMoves: baseMoveGroups['3x3x3']!,
  mirrorTranslation: mirrorMoveGroups['3x3x3']!,
  backTranslation: { left: backMoveGroups['3x3x3']!, right: backMoveGroups['3x3x3']! }
}