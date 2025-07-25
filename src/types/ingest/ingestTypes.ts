import { useCLLGrouping } from "../../configs/set/setGroupings/cll";
import { useEG1Grouping } from "../../configs/set/setGroupings/eg1";
import { useMegaOLLGrouping } from "../../configs/set/setGroupings/megaOLL";
import { useMegaPLLGrouping } from "../../configs/set/setGroupings/megaPLL";
import { useOLLGrouping } from "../../configs/set/setGroupings/oll";
import { useParityPLLGrouping } from "../../configs/set/setGroupings/parityPLL";
import { usePLLGrouping } from "../../configs/set/setGroupings/pll";
import { useZBLLGrouping } from "../../configs/set/setGroupings/zbll";
import { useZBLSGrouping } from "../../configs/set/setGroupings/zbls";
import { ICaseList } from "../dataFormat";

export const definedSets = {
  "OLL": useOLLGrouping,
  "PLL": usePLLGrouping,
  "MEGAOLL": useMegaOLLGrouping,
  "MEGAPLL": useMegaPLLGrouping,
  "CLL": useCLLGrouping,
  "EG1": useEG1Grouping,
  "ZBLL": useZBLLGrouping,
  "ZBLS": useZBLSGrouping,
  "PARITYPLL": useParityPLLGrouping,
 } as const

type DefinedSets = keyof typeof definedSets

export type GroupingTypeMap = {
  [P in DefinedSets]: ReturnType<typeof definedSets[P]>
}

export interface IIngestFormatV2 extends ICaseList {}