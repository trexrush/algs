import type { ICase, ICaseList } from "../../types/dataFormat"

export const listFromData = <T extends string>(arr: T[], cases: ICaseList<T>): ICase[] => {
  return arr.flatMap((caseName) => {
    return Object.keys(cases).includes(caseName) ? [cases[caseName as T]] : []
  })
}