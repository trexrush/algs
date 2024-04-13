import type { IAlgset } from "../../set/dataFormat"

export interface IPageData {
  path: string,
  name: string,
  icon: string,
  datalists: {
    main: IAlgset,
    unsorted?: IAlgset,
    altsorts?: {
      data: IAlgset
      url: string
    }[]
  }
}