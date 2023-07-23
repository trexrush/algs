
import type { IJustSetConfig, ISetConfig } from "./set";
import type { IJustPuzzleConfig, IPuzzleConfig } from "./puzzle";
import merge from "ts-deepmerge";
import { DefaultConfig } from "./defaults";

export interface IVisualCubeConfig {
  stage: string
  view: "plan" | "trans"
  rot: string
}
export interface ITwistyPlayerConfig {
  stage: string
  rot: string
  cameraDist: number
  cameraX: number
  cameraY: number
  tempo: number
}
export interface IImageConfig {
  visualCubeConfig: IVisualCubeConfig, 
  twistyPlayerConfig: ITwistyPlayerConfig
}

export interface IConfig extends IImageConfig, IJustPuzzleConfig, IJustSetConfig {}
export const createConfig = (p: IPuzzleConfig, s: ISetConfig): IConfig => {
  return merge(DefaultConfig, merge(p, s)) as IConfig
}
