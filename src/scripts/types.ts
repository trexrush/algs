export type twistyPuzzleType = "3x3x3" | "custom" | "2x2x2" | "4x4x4" | "5x5x5" | "6x6x6" | "7x7x7" | "40x40x40" | "megaminx" | "pyraminx" | "square1" | "clock" | "skewb" | "fto" | "gigaminx" | "master_tetraminx" | "kilominx" | "redi_cube" | "melindas2x2x2x2"
export type twistyPuzzleTypeWithChirality = twistyPuzzleType | 'megaminx-lefty'

// UNUSED
export type LocalOptionsList<T extends string = any> = Record<T, ILocalSetOptions | ILocalCaseOptions> 

// UNUSED
export interface ILocalSetOptions {
    loadCollapsed?: boolean
    personalNote?: string
}

// UNUSED
export interface ILocalCaseOptions {
    personalNote?: string
    preferredAlg?: string
    learnStatus?: "training" | "learned"
    trainerLists?: any[]
}