import { useCLLGrouping } from "../../configs/setConstants/setGroupings/cll";
import { useEG1Grouping } from "../../configs/setConstants/setGroupings/eg1";
import { useMegaOLLGrouping } from "../../configs/setConstants/setGroupings/megaOLL";
import { useMegaPLLGrouping } from "../../configs/setConstants/setGroupings/megaPLL";
import { useOLLGrouping } from "../../configs/setConstants/setGroupings/oll";
import { useParityPLLGrouping } from "../../configs/setConstants/setGroupings/parityPLL";
import { usePLLGrouping } from "../../configs/setConstants/setGroupings/pll";
import { useZBLLGrouping } from "../../configs/setConstants/setGroupings/zbll";
import { useZBLSGrouping } from "../../configs/setConstants/setGroupings/zbls";
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