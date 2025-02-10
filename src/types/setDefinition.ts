import { DeepPartial } from "ts-essentials";
import { IVisDisplayConfig } from "./displayConfig";

export interface IJustSetDisplayConfig {
  name: string
}
export interface ISetDisplayConfig extends IJustSetDisplayConfig, DeepPartial<IVisDisplayConfig> {}