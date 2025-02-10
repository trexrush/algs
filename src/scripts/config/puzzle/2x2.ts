import type { IPuzzleDisplayConfig } from ".";
import { backMoveGroups, baseMoveGroups, mirrorMoveGroups } from "../../../configs/moveTranslations";
import { triggerSubstitutionGroups } from "../../../configs/triggers";

export const puzzle2x2x2: IPuzzleDisplayConfig = {
  type: '2x2x2',
  vc: 2,
  imgSource: "vc",
  triggers: triggerSubstitutionGroups["2x2x2"]!,
  baseMoves: baseMoveGroups['2x2x2']!,
  mirrorTranslation: mirrorMoveGroups['2x2x2']!,
  backTranslation: { left: backMoveGroups['2x2x2']!, right: backMoveGroups['2x2x2']! }
}