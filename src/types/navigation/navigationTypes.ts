import type { IAlgset } from "../dataFormat"

export interface IPageData {
  path: string,
  name: string,
  datalists: {
    name: string
    data: IAlgset
  }[]
}

export interface IRouteConfig {
  icon: string
  pages: IPageData[]
}