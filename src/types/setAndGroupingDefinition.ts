import { IDisplayConfig } from "./displayConfig";

export interface SetAndGroupingDefinition {
  displayConfig: IDisplayConfig
  casesList: Record<string, any>
  caseNames: readonly string[]
  groupingNames: readonly string[]
}