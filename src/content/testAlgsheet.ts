// TODO: allow this alg to be a tree style instead of a fixed set of algs
// ex: oll grouped by shape, zbll frouped by COLL and OLL, mega pll grouped by letter
// TODO: allow naming of algs + alternate algs
// TODO: formalize types of XAlgSet and XAglsetInfo (maybe group into one obj?)
// TODO: make some flag to bypass algvis or us a different alg than display? 
// ex where I say fruruf [ZBLL] or the pll parity cases
// TODO: filter out [U] setup moves like I do in my spreadsheet
// atm this is just proof of concept

const testAlgSet= [
    "R U R' U' R' F R F'",
    "r U R' U R' F R F' R U2' r'",
    "L U2' R' F R U2 R' F' R U2 L'",
    "S' R U R' S U' M' U R U' r'",
    "S' R U R' S U' (R' F R F')",
    "f R f' U' r' U' R U M'",
    "F' U' L2' D' L U L' D L2 F"
]

const testAlgSetData = {
    name: "Anti L-EG2+",
    image: "vc", // useless atm
    // params specific to vc as opposed to local or whatever i do for mega
    imgparams: {
        stage: 'OLL-x2',
        view: 'plan',
        rot: 'x2',
        puzzle: "3", // useless atm TODO: standardize this for the page + twistyplayer + visualcube
        // rest is default
    },
    twistyplayerparams: {
        stage: 'OLL'
    }
}

export { testAlgSetData, testAlgSet }