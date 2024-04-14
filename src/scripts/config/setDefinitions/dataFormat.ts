import type { XOR } from "ts-essentials"
import type { IConfig } from ".."

// https://stackoverflow.com/questions/51352229/optional-generic-type-with-typescript
export type ICaseList<T extends string = any> = Record<T, ICase> 
type IGroupElementList<T extends string = any> = Record<T, XOR<ICase, ISet>>

interface IGroupElement {
  name: string
  altNames?: string[]
  note?: string
}


// TODO: use this format to reduce unnecessary data pulled in for a case
interface ICaseCommon {
  name: string
}
interface ICaseScrambles extends ICaseCommon{
  scrambles: string[]
}
interface ICaseDefinition extends ICaseCommon {
  imageAlg?: string
  altNames: string[]
  mirror?: string
  recog?: string[]
  recogImage?: string
}
interface ICaseData extends ICaseCommon {
  algs: IAlg[]
  note?: string
}

export interface ISet extends IGroupElement {
  children?: IGroupElementList
  image?: string
}

export interface ICase extends ICaseDefinition, ICaseData {
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

// TODO: define iterables for set and case