
import { IJustSetDisplayConfig, ISetDisplayConfig } from "./setDefinition"
import type { IJustPuzzleDisplayConfig, IPuzzleDisplayConfig } from "../scripts/config/puzzle";
import merge from "ts-deepmerge";
import { DefaultDisplayConfig } from "../scripts/config/defaultDisplayConfigs";
import type { CanvasVisualizerOptions, PNGVisualizerOptions, SVGVisualizerOptions, Type } from "sr-puzzlegen";

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

export interface IPuzzleGenConfig {
  type: Type,
  options: CanvasVisualizerOptions | PNGVisualizerOptions | SVGVisualizerOptions
}
export interface IVisDisplayConfig {
  visualCubeConfig: IVisualCubeConfig, 
  twistyPlayerConfig: ITwistyPlayerConfig,
  puzzleGenConfig: IPuzzleGenConfig
}

export interface IDisplayConfig extends IVisDisplayConfig, IJustPuzzleDisplayConfig, IJustSetDisplayConfig {}
export const createConfig = (p: IPuzzleDisplayConfig, s: ISetDisplayConfig): IDisplayConfig => {
  return merge(DefaultDisplayConfig, merge(p, s)) as IDisplayConfig
}
