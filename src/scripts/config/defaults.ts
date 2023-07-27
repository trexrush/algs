import merge from "ts-deepmerge"
import type { IConfig, IPuzzleGenConfig, ITwistyPlayerConfig, IVisualCubeConfig } from "."
import type { IJustPuzzleConfig } from "./puzzle"
import type { IJustSetConfig } from "./set"
import { puzzle3x3x3 } from "./puzzle/3x3"
import { Type } from "sr-puzzlegen"

const DefaultPuzzleConfig: IJustPuzzleConfig = {
  ...puzzle3x3x3,
  note: ''
}

const DefaultSetConfig: IJustSetConfig= {
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

export const DefaultConfig: IConfig = merge(
  {
    visualCubeConfig: DefaultVisualCubeConfig, 
    twistyPlayerConfig: DefaultTwistyPlayerConfig,
    puzzleGenConfig: DefaultPuzzleGenConfig
    
  }, 
  DefaultPuzzleConfig, 
  DefaultSetConfig
)