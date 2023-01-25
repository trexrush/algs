// TODO: allow this alg to be a tree style instead of a fixed set of algs
// ex: oll grouped by shape, zbll frouped by COLL and OLL, mega pll grouped by letter
// TODO: allow naming of algs + alternate algs
// TODO: formalize types of XAlgSet and XAglsetInfo (maybe group into one obj?)
// TODO: make some flag to bypass algvis or us a different alg than display? 
// ex where I say fruruf [ZBLL] or the pll parity cases
// TODO: filter out [U] setup moves like I do in my spreadsheet
// atm this is just proof of concept

const testAlgSet = [
    `U R U' R'`,
    `R' F R2 U' R' F' S r' F r S'`,
    `R' F R F'`,
    `U R B U' B' R'`,
    `U F' L' U' L F`,
    `U R U R' U2 R' F R F'`,
    `U2 R U' R' U' R' F R F' `,
    `U S' R U' R' S`,
    `U' F' U F`,
    `r U r' U2 M' U M`,
    `U' r U' r' U r U r'`,
    `F R' F' R`,
    `U' R B U B' R'`,
    `U R' D' r U' r' D R`,
    `U' R U R2' D' r U r' D R`,
    `U' R' D' r U r' D R`,
    `R U R'`,
    `R' D' r U r' D R2 U R'`,
    `U' F' U2 F U R U' R'`,
    `R U2' R' U' R' F R F'`,
    `U2 L F' L' U' L F L'`,
    `S' R U R' S`,
    `R U2 B U' B' R'`,
    `R U' R2' F R F' R U2' R'`,
    `F' U' F`,
    `U2 S' R U' R' S U' R' F R F'`,
    `U2 S' R U' R' S R U' R'`,
    `S U R U' R' S'`,
    `U' R' F R U R U' R2' F' R`,
    `y' S' R' U' R S y`,
    `U R2 D r' U' r D' R2'`,
    `U2 R' D' r U' r' D R2 U' R'`,
]

const testAlgSetData = {
    name: "Anti-TEG2+",
    image: "vc", // useless atm
    // params specific to vc as opposed to local or whatever i do for mega
    imgparams: {
        stage: 'ZBLS',
        view: 'trans',
        rot: 'yy',
        puzzle: "3", // useless atm TODO: standardize this for the page + twistyplayer + visualcube
        // rest is default
    },
    twistyplayerparams: {
        stage: 'ZBLS'
    }
}

export { testAlgSetData, testAlgSet }