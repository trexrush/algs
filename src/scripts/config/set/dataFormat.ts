import type { IConfig } from ".."

// https://stackoverflow.com/questions/51352229/optional-generic-type-with-typescript
export type ICaseList<T extends string = any> = Record<T, ICase> 
type IGroupElementList<T extends string = any> = Record<T, ICase | ISet>

interface IGroupElement {
  name: string
  altNames?: string[]
  note?: string
}

export interface ISet extends IGroupElement {
  children?: IGroupElementList
  image?: string
}

export interface ICase extends IGroupElement {
  algs: IAlg[]
  recog?: string[],
}

// TODO: use this format to reduce unnecessary data pulled in for a case
interface ICaseScrambles {
  scrambles: string[]
}
interface ICaseDefinition {
  imageAlg?: string
  altNames: string[]
}
interface ICaseData {
  algs: IAlg[]
  recog?: string[],
  note?: string
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