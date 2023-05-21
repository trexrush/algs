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
    colorScheme?: string
}

export type twistyPuzzleType = "3x3x3" | "custom" | "2x2x2" | "4x4x4" | "5x5x5" | "6x6x6" | "7x7x7" | "40x40x40" | "megaminx" | "pyraminx" | "square1" | "clock" | "skewb" | "fto" | "gigaminx" | "master_tetraminx" | "kilominx" | "redi_cube" | "melindas2x2x2x2"
export type twistyPuzzleTypeWithChirality = twistyPuzzleType | 'megaminx-lefty'

interface ITwistyParams {
    stage?: string
    rot?: string
    cameraX?: number
    cameraY?: number
    tempo?: number
}

export interface IOptions {
    name: string;
    puzzle: twistyPuzzleType
    // vc - doesnt work with non-cubics
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
    puzzle: "3x3x3",
    vcparams: {
        stage: "",
        view: "plan",
        rot: "",
        colorScheme: '',
    },
    twistyplayerparams: {
        stage: "full",
        rot: "",
        cameraX: 30,
        cameraY: 30,
        tempo: 4
    },
    note: ""
}

//______V2______//

// https://stackoverflow.com/questions/51352229/optional-generic-type-with-typescript
export type ICaseListV2<T extends string = any> = Record<T, ICaseV2> 
export type ISetListV2<T extends string = any> = Record<T, ISetV2>
export type IGroupElementListV2<T extends string = any> = Record<T, ISetV2 | ICaseV2>

//WIP
export type LocalOptionsList<T extends string = any> = Record<T, ILocalSetOptionsV2 | ILocalCaseOptionsV2> 
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
    recognition?: string[],
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

export interface ISheetsResponse {
    nameList: string[],
    caseList: ICaseListV2
}
export interface ILocalSetOptionsV2 {
    loadCollapsed?: boolean
    personalNote?: string
}

export interface ILocalCaseOptionsV2 {
    personalNote?: string
    preferredAlg?: string // TODO: figure out how to to mark down preferredAlgs
    learnStatus?: "training" | "learned"
    trainerLists?: any[]
}


export type IModifiersList = "INVERSE" | "BACK" | "B" | "LEFTY" | "L" | "DOUBLE" | "X2" | "TRIPLE" | "X3" 


export type modularPuzzleGroup<T> = Partial<Record<twistyPuzzleTypeWithChirality, T>>