import type { IPuzzleDefinitionMapping } from ".."

export const puzzleMegaminx: IPuzzleDefinitionMapping = {
  type: 'megaminx',
  right: 'megaminx',
  left: 'megaminx-lefty',
  vc: 'mega',
  imgSource:"cubingjs",
  cancel: { quantumMoveOrder: () => 5 } ,
}