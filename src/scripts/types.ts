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

export interface IData {
    name: string;
    // vc - puts strain on external visualcube api (cubicle was for mega but it doesnt work with BL/FL/DL/wide mega moves)
    // cubingjs - needs to hydrate to display image
    imgSource?: "vc" | "cubingjs" | "none"
    vcparams?: IVCParams
    twistyplayerparams?: ITwistyParams
    note?: string
}


export interface IAlgSet { data: IData, sets: ISet[] }

export const DefaultData: { vcparams: Required<IVCParams>, twistyplayerparams: Required<ITwistyParams> } & Required<IData> = {
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

export interface ISetV2 {
    sort?: number
    name: string
    altNames?: string[]
    sets?: ISetV2[]
    cases?: ICaseV2[]
    image?: string
    note?: string
}

export interface ICaseV2 {
    sort?: number
    name: string
    algs: IAlgV2[]
    scrambles: string[]
    note?: string
}

export interface IAlgV2 {
    setup?: string
    alg: string
    tags?: IAlgTagsV2[]
    note?: string
}
export type IAlgTagsV2 = "OH" | "BLD" | "BigCube" | "Swag" | "2Gen" | "Lefty" | "New"

export interface IAlgSetV2 { data: IData, sets: ISetV2[] }
