import type { IAlgSetV2, IOptions } from "../scripts/types"
import { createOptions } from "../scripts/utilities";
//@ts-expect-error
import yml from './CLLData.yml'

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

const _:IAlgSetV2 = yml

const CLLNoGrouping: IAlgSetV2 = {
    options: Options,
    sets: [
        {
            name: "WIP Format",
            children: Object.assign(_)
        },
    ]
}

export { CLLNoGrouping }