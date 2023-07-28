import { Type } from "sr-puzzlegen";
import type { IPuzzleConfig } from ".";
import { backMoveGroups, baseMoveGroups, mirrorMoveGroups } from "./moveTranslations";
import { triggerSubstitutionGroups } from "./triggers";

export const puzzleMegaminx: IPuzzleConfig = {
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