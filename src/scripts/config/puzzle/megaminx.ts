import type { IPuzzleConfig } from ".";
import { backMoveGroups, baseMoveGroups, mirrorMoveGroups } from "./moveTranslations";
import { triggerSubstitutionGroups } from "./triggers";

export const puzzleMegaminx: IPuzzleConfig = {
  type: 'megaminx',
  vc: 'mega',
  imgSource:"cubingjs",
  cancel: { quantumMoveOrder: () => 5 } ,
  twistyPlayerConfig: {
    cameraDist: 5.5,
    cameraX: 10,
    tempo: 3,
  },
  triggers: triggerSubstitutionGroups["megaminx"]!,
  baseMoves: baseMoveGroups['megaminx']!,
  mirrorTranslation: mirrorMoveGroups['megaminx']!,
  backTranslation: { left: backMoveGroups['megaminx-l']!, right: backMoveGroups['megaminx']! }
}