import type { DeepPartial } from "ts-essentials"
import type { IConfig, IImageConfig } from ".."


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


// SET / DATA
// https://stackoverflow.com/questions/51352229/optional-generic-type-with-typescript
export type ICaseList<T extends string = any> = Record<T, ICase> 
export type IGroupElementList<T extends string = any> = Record<T, ICase | ISet>

export interface IGroupElement {
    name: string
    altNames?: string[]
    note?: string
}
//TODO: make iterable
export interface ISet extends IGroupElement {
    children?: IGroupElementList
    image?: string
}

// TODO: make iterable
export interface ICase extends IGroupElement {
    algs: IAlg[]
    recog?: string[],
}

export interface IAlg {
    setup?: string
    alg: string
    isLefty?: boolean
    tags?: string[]
    note?: string
}

export interface IAlgset { config: IConfig, sets: ISet[] }