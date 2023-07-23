// STAY HERE
export type twistyPuzzleType = "3x3x3" | "custom" | "2x2x2" | "4x4x4" | "5x5x5" | "6x6x6" | "7x7x7" | "40x40x40" | "megaminx" | "pyraminx" | "square1" | "clock" | "skewb" | "fto" | "gigaminx" | "master_tetraminx" | "kilominx" | "redi_cube" | "melindas2x2x2x2"
export type twistyPuzzleTypeWithChirality = twistyPuzzleType | 'megaminx-lefty'
// OLD
interface IVCParams {
    stage?: string
    view?: "plan" | "trans"
    rot?: string
    colorScheme?: string
}
// OLD
interface ITwistyParams {
    stage?: string
    rot?: string
    cameraX?: number
    cameraY?: number
    tempo?: number
}
// OLD
export interface IOptions {
    name: string;
    puzzle: twistyPuzzleType
    imgSource?: "vc" | "cubingjs" | "none"
    vcparams?: IVCParams
    twistyplayerparams?: ITwistyParams
    note?: string
}
// OLD
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


// SET / DATA
// https://stackoverflow.com/questions/51352229/optional-generic-type-with-typescript
export type IDataCaseList<T extends string = any> = Record<T, IDataCase> 
export type IDataSetList<T extends string = any> = Record<T, IDataSet>
export type IGroupElementList<T extends string = any> = Record<T, IDataSet | IDataCase>

// ALG.TS
export type TNotationTargets = 'vc' | 'cubingjs'

// UNUSED
export type LocalOptionsList<T extends string = any> = Record<T, ILocalSetOptions | ILocalCaseOptions> 

// USED BELOW
interface IGroupElement {
    name: string
    altNames?: string[]
    note?: string
}
//TODO: make iterable
// FRONTEND / BELOW
export interface IDataSet extends IGroupElement {
    children?: IGroupElementList
    image?: string
}

// TODO: make iterable
// FRONTEND / BELOW
export interface IDataCase extends IGroupElement {
    algs: IDataAlg[]
    recog?: string[],
    scrambles?: string[] // optional for now
}

// ALG.TS / ABOVE
export interface IDataAlg {
    setup?: string
    alg: string
    isLefty?: boolean
    tags?: string[]
    note?: string
}

// MOVE TO SET
export interface IDataAlgset { options: IOptions, sets: IDataSet[] }

// UNUSED
export interface ILocalSetOptions {
    loadCollapsed?: boolean
    personalNote?: string
}

// UNUSED
export interface ILocalCaseOptions {
    personalNote?: string
    preferredAlg?: string // TODO: figure out how to to mark down preferredAlgs
    learnStatus?: "training" | "learned"
    trainerLists?: any[]
}