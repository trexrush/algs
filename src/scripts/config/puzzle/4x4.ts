import type { IPuzzleDisplayConfig } from "."
import { backMoveGroups, baseMoveGroups, mirrorMoveGroups } from "../../../configs/moveTranslations"
import { triggerSubstitutionGroups } from "../../../configs/triggers"

const notation4 = (a: string, to: 'vc' | 'cubingjs'): string => {
  const notation = {
    display: ["r", "r'", "r2", "r2'", "l", "l'", "l2", "l2'", "M", "M'", "M2", "M2'"],
    vc: ["Rw R'", "Rw' R", "Rw2 R2", "Rw2 R2", "Lw L'", "Lw' L", "Lw2 L2", "Lw2 L2", "M", "M'", "M2", "M2'"],
    cubingjs: ["2R", "2R'", "2R2", "2R2'", "2L", "2L'", "2L2", "2L2'", "m", "m'", "m2", "m2'"],
  }
  return a.split(' ').map(e => 
    notation.display.includes(e) 
      ? notation[to][notation.display.indexOf(e)]
      : e
  ).join(' ')    
}

export const puzzle4x4x4: IPuzzleDisplayConfig = { 
  type: '4x4x4', 
  vc: 4,
  cancel: { quantumMoveOrder: () => 4 }, 
  twistyPlayerConfig: {
    tempo: 2.5,
  },
  notation: (a, to) => { return notation4(a, to as 'vc' | 'cubingjs') },
  imgSource: "vc",
  triggers: triggerSubstitutionGroups["4x4x4"]!,
  baseMoves: baseMoveGroups['4x4x4']!,
  mirrorTranslation: mirrorMoveGroups['4x4x4']!,
  backTranslation: { left: backMoveGroups['4x4x4']!, right: backMoveGroups['4x4x4']! }
}