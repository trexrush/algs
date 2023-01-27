// TODO: make some flag to bypass algvis or us a different alg than display? 
// ex where I say fruruf [ZBLL] or the pll parity cases

export interface ISet {
    name: string,
    sets?: ISet[],
    cases?: ICase[],
    folder?: string
}

export interface ICase {
    name: string,
    altNames?: string[]
    algs: string[],
    fileName?: string
}

interface IVCParams {
    stage?: string;
    view?: "plan" | "trans";
    rot?: string;
    puzzle?: number;
}

export type twistyPuzzleType = "3x3x3" | "custom" | "2x2x2" | "4x4x4" | "5x5x5" | "6x6x6" | "7x7x7" | "40x40x40" | "megaminx" | "pyraminx" | "square1" | "clock" | "skewb" | "fto" | "gigaminx" | "master_tetraminx" | "kilominx" | "redi_cube" | "melindas2x2x2x2"
interface ITwistyParams {
    stage?: string;
    rot?: string,
    cameraX?: number,
    cameraY?: number,
    puzzle?: twistyPuzzleType,
    tempo?: number
}

export interface IData {
    name: string;
    imgSource?: "vc" | "cubingjs" | "local" | "none";
    vcparams?: IVCParams,
    twistyplayerparams?: ITwistyParams,
}


export interface IAlgSet { data: IData, sets: ISet[] }

export const DefaultData: { vcparams: Required<IVCParams>, twistyplayerparams: Required<ITwistyParams> } & Required<IData> = {
    name: "My Algset",
    imgSource: "vc",
    vcparams: {
        stage: "fl",
        view: "plan",
        rot: "",
        puzzle: 3,
    },
    twistyplayerparams: {
        stage: "full",
        rot: "",
        cameraX: 30,
        cameraY: 30,
        puzzle: "3x3x3",
        tempo: 4
    },
}