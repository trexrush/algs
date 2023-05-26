export type twistyPuzzleType = "3x3x3" | "custom" | "2x2x2" | "4x4x4" | "5x5x5" | "6x6x6" | "7x7x7" | "40x40x40" | "megaminx" | "pyraminx" | "square1" | "clock" | "skewb" | "fto" | "gigaminx" | "master_tetraminx" | "kilominx" | "redi_cube" | "melindas2x2x2x2"
export type twistyPuzzleTypeWithChirality = twistyPuzzleType | 'megaminx-lefty'

interface IVCParams {
    stage?: string
    view?: "plan" | "trans"
    rot?: string
    colorScheme?: string
}

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


// https://stackoverflow.com/questions/51352229/optional-generic-type-with-typescript
export type ICaseList<T extends string = any> = Record<T, ICase> 
export type ISetList<T extends string = any> = Record<T, ISet>
export type IGroupElementList<T extends string = any> = Record<T, ISet | ICase>

//WIP
export type LocalOptionsList<T extends string = any> = Record<T, ILocalSetOptions | ILocalCaseOptions> 
export interface IGroupElement {
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
    recognition?: string[],
    scrambles?: string[] // optional for now
}

export interface IAlg {
    setup?: string
    alg: string
    isLefty?: boolean
    tags?: IAlgTags[]
    note?: string
}

export type IAlgTags = "OH" | "BLD" | "BigCube" | "Swag" | "2Gen" | "New"

export interface IAlgSet { options: IOptions, sets: ISet[] }

export interface ISheetsResponse {
    nameList: string[],
    caseList: ICaseList
}
export interface ILocalSetOptions {
    loadCollapsed?: boolean
    personalNote?: string
}

export interface ILocalCaseOptions {
    personalNote?: string
    preferredAlg?: string // TODO: figure out how to to mark down preferredAlgs
    learnStatus?: "training" | "learned"
    trainerLists?: any[]
}

export const modifiersList = ["INVERSE", "BACK", "B", "LEFTY", "LEFT", "L", "DOUBLE", "X2", "TRIPLE", "X3"] as const
export type TModifiersList = typeof modifiersList[number]


export type modularPuzzleGroup<T> = Partial<Record<twistyPuzzleTypeWithChirality, T>>