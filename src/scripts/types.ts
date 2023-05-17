export interface ISet {
    name: string
    sets?: ISet[]
    cases?: ICase[]
    folder?: string
}

export interface ICase {
    name: string
    altNames?: string[]
    algs: string[]
    fileName?: string
    comment?: string
}

interface IVCParams {
    stage?: string
    view?: "plan" | "trans"
    rot?: string
    puzzle?: number | "mega"
    colorScheme?: string
}

export type twistyPuzzleType = "3x3x3" | "custom" | "2x2x2" | "4x4x4" | "5x5x5" | "6x6x6" | "7x7x7" | "40x40x40" | "megaminx" | "pyraminx" | "square1" | "clock" | "skewb" | "fto" | "gigaminx" | "master_tetraminx" | "kilominx" | "redi_cube" | "melindas2x2x2x2"
interface ITwistyParams {
    stage?: string
    rot?: string
    cameraX?: number
    cameraY?: number
    puzzle?: twistyPuzzleType
    tempo?: number
}

export interface IOptions {
    name: string;
    // vc - puts strain on external visualcube api (cubicle was for mega but it doesnt work with BL/FL/DL/wide mega moves)
    // cubingjs - needs to hydrate to display image
    imgSource?: "vc" | "cubingjs" | "none"
    vcparams?: IVCParams
    twistyplayerparams?: ITwistyParams
    note?: string
}


export interface IAlgSet { options: IOptions, sets: ISet[] }

export const DefaultOptions: { vcparams: Required<IVCParams>, twistyplayerparams: Required<ITwistyParams> } & Required<IOptions> = {
    name: "My Algset",
    imgSource: "vc",
    vcparams: {
        stage: "",
        view: "plan",
        rot: "",
        puzzle: 3,
        colorScheme: '',
    },
    twistyplayerparams: {
        stage: "full",
        rot: "",
        cameraX: 30,
        cameraY: 30,
        puzzle: "3x3x3",
        tempo: 4
    },
    note: ""
}


//______V2______//

export type ICaseListV2 = Record<string, ICaseV2>
export type ISetListV2 = Record<string, ISetV2>
export type IGroupElementListV2 = Record<string, ISetV2 | ICaseV2>
export interface IGroupElementV2 {
    name: string
    altNames?: string[]
    note?: string
}

export interface ISetV2 extends IGroupElementV2 {
    children?: IGroupElementListV2
    image?: string
}

export interface ICaseV2 extends IGroupElementV2 {
    algs: IAlgV2[]
    scrambles?: string[] // optional for now
}

export interface IAlgV2 {
    setup?: string
    alg: string
    tags?: IAlgTagsV2[]
    note?: string
}
export type IAlgTagsV2 = "OH" | "BLD" | "BigCube" | "Swag" | "2Gen" | "Lefty" | "New"

export interface IAlgSetV2 { options: IOptions, sets: ISetV2[] }