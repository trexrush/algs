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

interface ITwistyParams {
    stage?: string;
    rot?: string,
    cameraX?: number,
    cameraY?: number,
}

export interface IData {
    name: string;
    imgSource?: "vc" | "cubingjs" | "local";
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
    },
}