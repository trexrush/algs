import merge from "ts-deepmerge"
import type { IConfig, ITwistyPlayerConfig, IVisualCubeConfig } from "."
import type { IJustPuzzleConfig } from "./puzzle"
import type { IJustSetConfig } from "./set"

const DefaultPuzzleConfig: IJustPuzzleConfig = {
  type: '3x3x3', // TODO: remove twistypuzzlewithchirality
  right: '3x3x3', 
  left: '3x3x3', 
  vc: 3, 
  imgSource: "none",
  note: ""
}

const DefaultSetConfig: IJustSetConfig= {
  name: '',
}

const DefaultVisualCubeConfig: IVisualCubeConfig = {
  stage: "",
  view: "plan",
}

const DefaultTwistyPlayerConfig: ITwistyPlayerConfig = {
  stage: "full",
  cameraX: 30,
  cameraY: 30,
  tempo: 4,
  cameraDist: 5,
}

export const DefaultConfig: IConfig = merge(
  {
    visualCubeConfig: DefaultVisualCubeConfig, 
    twistyPlayerConfig: DefaultTwistyPlayerConfig,
  }, 
  DefaultPuzzleConfig, 
  DefaultSetConfig
)