function doGet(e) {
  // enable to debug
  // let sheetName = 'ZBLS_FR'

  // disable to debug
  if (!e.parameter['name']) { return }
  let sheetName = e.parameter['name']

  let sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName)
  let data = []
  let dataV2 = {}

  if (['ZBLS_FR'].includes(sheetName)) {
    const setName = sheet.getRange('D7')
    const setRange = sheet.getRange('F7:M11')

    // loop through F2L cases (41)
    for (let c = 0; c < 41; c++) {
      let colOffset = (c % 2) ? 11 : 0
      let rowOffset = Math.floor(c / 2) * 10
      currSetName = setName.offset(rowOffset, colOffset).getValue()
      // console.log(currSetName)
      currSet = setRange.offset(rowOffset, colOffset)

      // index 0 is name, 3 is algs, 4 is notes
      for (let a = 0; a < 8; a++) {
        let caseRes = {}
        if (currSet.getValues()[3][a]) {
          let nameRes = "" + currSetName + "-" + currSet.getValues()[0][a]
          caseRes['name'] = nameRes
          caseRes['algs'] = currSet.getValues()[3][a].split('\n').map((al) => ({"alg": al}))
          if (currSet.getValues()[4][a]) {
            caseRes['note'] = currSet.getValues()[4][a].replace('\n', ' ')
          }
          dataV2[nameRes] = caseRes
        }
      }
    }
  }

  // V2 FORMAT
  if (['T_ZBLL', 'U_ZBLL', 'L_ZBLL', 'OLL', 'CLL', 'EG1', 'H_ZBLL'].includes(sheetName)) {
    let firstAlg, nameI, algI, commentI, aufI, setNameI, setSpacing
    let areCommentsNotes = false
    let setLengths = []
    let nameList = []
    switch (sheetName) {
      case 'CLL':
        firstAlg = sheet.getRange('B6:L6')
        setLengths = [6, 6, 6, 6, 6, 4, 6, 2]
        setNameI = 0
        aufI = 4
        algI = 5
        commentI = 10
        setSpacing = 1
        break
      case 'EG1':
        firstAlg = sheet.getRange('B6:L6')
        setLengths = [6, 6, 6, 6, 6, 4, 6, 3]
        setNameI = 0
        aufI = 4
        algI = 5
        commentI = 10
        setSpacing = 1
        break
      case 'T_ZBLL':
      case 'U_ZBLL':
      case 'L_ZBLL':
        firstAlg = sheet.getRange('E6:P6')
        setLengths = [12, 12, 12, 12, 12, 12]
        setNameI = 0
        nameI = 3
        algI = 11
        commentI = 11
        areCommentsNotes = true
        setSpacing = 1
        break
      case 'H_ZBLL':
        firstAlg = sheet.getRange('E6:Q6')
        setLengths = [12, 12, 12, 12]
        setNameI = 0
        nameI = 3
        aufI = 11
        algI = 12
        commentI = 12
        areCommentsNotes = true
        setSpacing = 1
        break
      case 'OLL':
        firstAlg = sheet.getRange('B6:F6')
        setLengths = [57]
        nameI = 0
        algI = 4
        commentI = 4
        areCommentsNotes = true
        setSpacing = 0
        break
      }
    let startOffset = [0].concat(setLengths.map((sum = 0, n => sum += (n + setSpacing))))

    for (let s = 0; s < setLengths.length; s++) {
      let currSet = firstAlg.offset(startOffset[s], 0, setLengths[s])
      for (let c = 0; c < setLengths[s]; c++) {
        if (!currSet.getValues()[c][algI]) { continue }
        let caseRes = {}

        let nameRes = ""
        if (setNameI != undefined && nameI != undefined) {
          nameRes = "" + currSet.getValues()[c][setNameI] + "_" + currSet.getValues()[c][nameI].toString().replace(' ', '')
        } else if (setNameI === undefined && nameI != undefined) {
          nameRes = "" + currSet.getValues()[c][nameI].toString().replace(' ', '')
        } else if (setNameI != undefined && nameI === undefined) {
          nameRes = "" + currSet.getValues()[c][setNameI] + (c + 1)
        } else {
          nameRes = "" + (c + 1)
        }
        caseRes['name'] = nameRes

        caseRes['algs'] = currSet.getValues()[c][algI].split('\n').map((a) => ({"alg": a}))

        if (areCommentsNotes && currSet.getNotes()[c][commentI]) { caseRes['note'] = currSet.getNotes()[c][commentI].split('\n').join(' ') }
        else if (!areCommentsNotes && currSet.getValues()[c][commentI]) { caseRes['note'] = currSet.getValues()[c][commentI].split('\n').join(' ') }

        dataV2[nameRes] = caseRes
        nameList.push(nameRes)
      }
    }
  }
  console.log(dataV2)
  return ContentService.createTextOutput(JSON.stringify(dataV2)).setMimeType(ContentService.MimeType.JSON)
}