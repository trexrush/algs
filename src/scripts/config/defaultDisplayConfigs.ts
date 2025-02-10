import merge from "ts-deepmerge"
import type { IDisplayConfig, IPuzzleGenConfig, ITwistyPlayerConfig, IVisualCubeConfig } from "../../types/displayConfig"
import type { IJustPuzzleDisplayConfig } from "./puzzle"
import type { IJustSetDisplayConfig } from "../../types/setDefinition"
import { puzzle3x3x3 } from "./puzzle/3x3"
import { Type } from "sr-puzzlegen"

const DefaultPuzzleConfig: IJustPuzzleDisplayConfig = {
  ...puzzle3x3x3,
  note: ''
}

const DefaultSetConfig: IJustSetDisplayConfig= {
  name: '',
}

const DefaultVisualCubeConfig: IVisualCubeConfig = {
  stage: '',
  view: 'plan',
  rot: ''
}

const DefaultPuzzleGenConfig: IPuzzleGenConfig = {
  type: Type.CUBE_TOP,
  options: {}  
}

const DefaultTwistyPlayerConfig: ITwistyPlayerConfig = {
  stage: 'full',
  cameraX: 30,
  cameraY: 30,
  tempo: 4,
  cameraDist: 5,
  rot: ''
}

export const DefaultDisplayConfig: IDisplayConfig = merge(
  {
    visualCubeConfig: DefaultVisualCubeConfig, 
    twistyPlayerConfig: DefaultTwistyPlayerConfig,
    puzzleGenConfig: DefaultPuzzleGenConfig
    
  }, 
  DefaultPuzzleConfig, 
  DefaultSetConfig
)