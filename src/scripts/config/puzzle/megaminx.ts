import type { IPuzzleConfig } from ".";

export const puzzleMegaminx: IPuzzleConfig = {
  type: 'megaminx',
  right: 'megaminx',
  left: 'megaminx-lefty',
  vc: 'mega',
  imgSource:"cubingjs",
  cancel: { quantumMoveOrder: () => 5 } ,
  twistyPlayerConfig: {
    cameraDist: 5.5,
    cameraX: 10,
    tempo: 3,
  },
}