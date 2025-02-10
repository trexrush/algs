import { Type } from "sr-puzzlegen";
import type { IPuzzleDisplayConfig } from ".";
import { backMoveGroups, baseMoveGroups, mirrorMoveGroups } from "../../../configs/moveTranslations";
import { triggerSubstitutionGroups } from "../../../configs/triggers";

export const puzzleMegaminx: IPuzzleDisplayConfig = {
  type: 'megaminx',
  vc: 'mega', // TODO: move to VisualCubeConfig
  imgSource:'pg',
  cancel: { quantumMoveOrder: () => 5 } ,
  twistyPlayerConfig: {
    cameraDist: 5.5,
    cameraX: 10,
    tempo: 3,
  },
  puzzleGenConfig: {
    type: Type.MEGAMINX_TOP,
    options: { 
      puzzle: {
        scale: -1.5,
        rotations: [{z: 180}]
      }
    }
  },
  triggers: triggerSubstitutionGroups["megaminx"]!,
  baseMoves: baseMoveGroups['megaminx']!,
  mirrorTranslation: mirrorMoveGroups['megaminx']!,
  backTranslation: { left: backMoveGroups['megaminx-l']!, right: backMoveGroups['megaminx']! }
}