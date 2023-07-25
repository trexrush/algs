import merge from "ts-deepmerge"
import type { IConfig, ITwistyPlayerConfig, IVisualCubeConfig } from "."
import type { IJustPuzzleConfig } from "./puzzle"
import type { IJustSetConfig } from "./set"
import { puzzle3x3x3 } from "./puzzle/3x3"

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
  }, 
  DefaultPuzzleConfig, 
  DefaultSetConfig
)