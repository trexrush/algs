import type { DeepPartial } from "ts-essentials"
import type { IImageConfig } from ".."
import type { IDataCase, IDataCaseList } from "../../types"


export interface IJustSetConfig {
  name: string
}
export interface ISetConfig extends IJustSetConfig, DeepPartial<IImageConfig> {}

export const listFromData = <T extends string>(arr: T[], cases: IDataCaseList<T>): IDataCase[] => {
  return arr.flatMap((caseName) => {
    return Object.keys(cases).includes(caseName) ? [cases[caseName as T]] : []
  })
}
export const objFromData = <T extends string>(arr: T[], cases: IDataCaseList): IDataCaseList<T> => {
  return Object.fromEntries(Object.entries(cases).filter(([k, _]) => arr.includes(k as T))) as IDataCaseList<T>
}