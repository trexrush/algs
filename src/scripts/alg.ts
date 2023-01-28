// cubicle vc doesnt have rotations


// export const transformToRLUF = (a: string) => {
//     const transformations = {
//         "BL": "y'",
//         "BR": "y2'",
//         "FL": "",
//         "FR": "",
//         "DL": "",
//         "DR": "",
//         "D": "",
//         "B": "",
//         "bl": "y'",
//         "br": "y2'",
//         "fl": "",
//         "fr": "",
//         "dl": "",
//         "dr": "",
//         "f": "",
//         "r": "",
//         "u": "",
//         "l": "",
//         "d": "",
//         "b": "",
//     }
// }

export const removePrePostAUF = (a: string): string => {
    // remove brackets and replace with a pause after
    return a.replace(/\[(.*)\]/, '$1 . ')
  }