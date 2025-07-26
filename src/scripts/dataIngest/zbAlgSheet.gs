function doGet() {
  let sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('FR_ZBLS')
  const START_POINT = sheet.getRange('A4')
  const ALG_OFFSET = [0, 1]

  const processCase = (r, c) => {
    let values = START_POINT
      .offset(r, c)
      .offset(ALG_OFFSET[0], ALG_OFFSET[1])
      .getValue()

    return values.split('\n').filter(a => a != '').map(algString => (
      { ...splitAlgIntoStrings(algString), tags: ['ZB_SHEET'], isLefty: isAlgLefty(algString) }
    ))
  }

  let data = {}

  SUBSETS_CONFIG.forEach(subset => {
    GROUPING_OFFSETS[subset.grouping](subset.offset[0], subset.offset[1]).forEach((caseOffset, index) => (
      data[subset.name + (index + 1)] = {
        algs: processCase(caseOffset[0], caseOffset[1])
      }
    ))
  })

  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON)
}

const splitAlgIntoStrings = (alg) => {
  const SETUP_MOVES = [`y`, `y'`, `y2`, `U`, `U'`, `U2`]
  const moveList = alg.split(' ')
  const hasSetupMove = SETUP_MOVES.includes(moveList[0])

  return {
    ...(hasSetupMove && { setup: moveList[0]}),
    alg: hasSetupMove ? moveList.slice(1).join(' ') : moveList.join(' ')
  }

}

const isAlgLefty = (alg) => {
  const moveList = alg.split(' ')

  const leftyMoves = moveList.filter(m => [`L`, `L'`, `L2`, `L2'`, `Lw`, `Lw'`, `Lw2`, `Lw2'`, `l`, `l'`, `l2`, `l2'`].includes(m)).length
  const rightyMoves = moveList.filter(m => [`R`, `R'`, `R2`, `R2'`, `Rw`, `Rw'`, `Rw2`, `Rw2'`, `r`, `r'`, `r2`, `r2'`].includes(m)).length

  return (leftyMoves > rightyMoves)
}

const GROUPING_OFFSETS = {
  '8': (r, c) => {
    return (
      [
        [r, c],
        [r, c + 2],
        [r + 1, c],
        [r + 1, c + 2],
        [r + 2, c],
        [r + 2, c + 2],
        [r + 3, c],
        [r + 3, c + 2],
      ]
    )
  },
  '4': (r, c) => {
    return (
      [
        [r, c],
        [r + 1, c],
        [r + 2, c],
        [r + 3, c],
      ]
    )
  },
  '2': (r, c) => {
    return (
      [
        [r, c],
        [r + 1, c],
      ]
    )
  },
}

const SUBSETS_CONFIG = [
  { name: 'A+', offset: [0, 0], grouping: '8' },
  { name: 'X-', offset: [0, 5], grouping: '8' },
  { name: 'W+', offset: [5, 0], grouping: '8' },
  { name: 'R-', offset: [5, 5], grouping: '8' },
  { name: 'M+', offset: [10, 0], grouping: '8' },
  { name: 'B-', offset: [10, 5], grouping: '8' },
  { name: 'I+', offset: [15, 0], grouping: '8' },
  { name: 'K-', offset: [15, 5], grouping: '8' },
  { name: 'K+', offset: [20, 0], grouping: '8' },
  { name: 'I-', offset: [20, 5], grouping: '8' },
  { name: 'B+', offset: [25, 0], grouping: '8' },
  { name: 'M-', offset: [25, 5], grouping: '8' },
  { name: 'R+', offset: [30, 0], grouping: '8' },
  { name: 'W-', offset: [30, 5], grouping: '8' },
  { name: 'A-', offset: [35, 0], grouping: '8' },
  { name: 'X+', offset: [35, 5], grouping: '8' },
  { name: 'H+', offset: [40, 0], grouping: '8' },
  { name: 'G-', offset: [40, 5], grouping: '8' },
  { name: 'Q+', offset: [45, 0], grouping: '8' },
  { name: 'P-', offset: [45, 5], grouping: '8' },
  { name: 'P+', offset: [50, 0], grouping: '8' },
  { name: 'Q-', offset: [50, 5], grouping: '8' },
  { name: 'H-', offset: [55, 0], grouping: '8' },
  { name: 'G+', offset: [55, 5], grouping: '8' },
  { name: 'U+', offset: [60, 0], grouping: '8' },
  { name: 'V+', offset: [60, 5], grouping: '8' },
  { name: 'U-', offset: [65, 0], grouping: '8' },
  { name: 'V-', offset: [65, 5], grouping: '8' },
  { name: 'S', offset: [70, 0], grouping: '8' },
  { name: 'T', offset: [70, 5], grouping: '8' },
  { name: 'J-', offset: [75, 0], grouping: '8' },
  { name: 'L-', offset: [75, 5], grouping: '8' },
  { name: 'J+', offset: [80, 0], grouping: '8' },
  { name: 'L+', offset: [80, 5], grouping: '8' },
  { name: 'E+', offset: [85, 0], grouping: '8' },
  { name: 'E-', offset: [85, 5], grouping: '8' },
  { name: 'D+', offset: [90, 0], grouping: '4' },
  { name: 'D-', offset: [90, 2], grouping: '4' },
  { name: 'C-', offset: [90, 5], grouping: '2' },
  { name: 'C+', offset: [90, 7], grouping: '2' },
  { name: 'F', offset: [95, 2], grouping: '2' },
]

