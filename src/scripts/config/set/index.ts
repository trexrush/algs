import type { DeepPartial } from "ts-essentials"
import type { IConfig, IImageConfig } from ".."
import type { ICase, ICaseList } from "./dataFormat"


export interface IJustSetConfig {
  name: string
}
export interface ISetConfig extends IJustSetConfig, DeepPartial<IImageConfig> {}

export const listFromData = <T extends string>(arr: T[], cases: ICaseList<T>): ICase[] => {
  return arr.flatMap((caseName) => {
    return Object.keys(cases).includes(caseName) ? [cases[caseName as T]] : []
  })
}
export const objFromData = <T extends string>(arr: T[], cases: ICaseList): ICaseList<T> => {
  return Object.fromEntries(Object.entries(cases).filter(([k, _]) => arr.includes(k as T))) as ICaseList<T>
}