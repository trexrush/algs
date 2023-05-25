import type { IAlgSet, IOptions } from "../scripts/types"
import { createOptions } from "../scripts/utilities";
//@ts-expect-error
import yml from '../data/EG1Data.yml'

const Options: IOptions = createOptions({
  name: "EG1",
  puzzle: '2x2x2',
  imgSource: "vc",
  vcparams: {
    view: 'plan',
    rot: "y",
  },
  twistyplayerparams: {
    rot: "x2 y'",
  }
})

const _:IAlgSet = yml

const EG1NoGrouping: IAlgSet = {
    options: Options,
    sets: [
        {
            name: "WIP Format",
            children: Object.assign(_)
        },
    ]
}

export { EG1NoGrouping }