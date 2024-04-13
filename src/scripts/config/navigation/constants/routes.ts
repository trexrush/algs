import { CLLGroupByOLL, CLLNoGrouping } from "../../../../data/output/cllObj";
import { EG1GroupByOLL, EG1NoGrouping } from "../../../../data/output/eg1Obj";
import { HNoGrouping } from "../../../../data/ZBLL/hObj";
import { LNoGrouping } from "../../../../data/ZBLL/lObj";
import { ParityPLLNoGrouping, ParityPLLGroupByCP } from "../../../../data/output/paritypllObj";
import { TGroupByBH, TGroupByCP, TNoGrouping } from "../../../../data/ZBLL/tObj";
import { UGroupByBH, UGroupByCP, UNoGrouping } from "../../../../data/ZBLL/uObj";
import { MegaOLLNoGrouping, MegaOLLGroupByOLL, MegaOLLGroupByFeature } from "../../../../data/output/megaollObj";
import { MegaPLLGroupByFeatures, MegaPLLGroupByLetter, MegaPLLNoGrouping } from "../../../../data/output/megapllObj";
import { OLLGroupByEO, OLLNoGrouping } from "../../../../data/output/ollObj";
import { PLLGroupedBySet, PLLNoGrouping } from "../../../../data/output/pllObj";
import { ZBLSNoGrouping } from "../../../../data/ZBLS/zblsObj";
import { MegaCO, MegaCP } from "../../../../data/output/mega4LLLObj";
import type { IPageData } from "./navigationTypes";


export const p: IPageData[] = [
  { path: 'CFOP/OLL', name: "OLL", icon: "cubing-icon event-333",
    datalists: {
      main: OLLGroupByEO,
      unsorted: OLLNoGrouping,
      altsorts: [
        { url: '/group', data: OLLGroupByEO },
      ]
    }
  },
  { path: 'CFOP/PLL', name: "PLL", icon: "cubing-icon event-333",
    datalists: {
      main: PLLGroupedBySet,
      unsorted: PLLNoGrouping,
      altsorts: [
        { url: '/group', data: PLLGroupedBySet },
      ]
    }
  },
  { path: 'ZB/ZBLS', name: "ZBLS", icon: "cubing-icon event-333",
    datalists: {
      main: ZBLSNoGrouping,
      unsorted: ZBLSNoGrouping,
    }
  },
  { path: 'ZB/ZBLL/T', name: "T ZBLL", icon: "cubing-icon event-333",
    datalists: {
      main: TGroupByCP,
      unsorted: TNoGrouping,
      altsorts: [
        { url: '/cp', data: TGroupByCP },
        { url: '/bh', data: TGroupByBH },
      ]
    }
  },
  { path: 'ZB/ZBLL/U', name: "U ZBLL", icon: "cubing-icon event-333",
    datalists: {
      main: UGroupByCP,
      unsorted: UNoGrouping,
      altsorts: [
        { url: '/cp', data: UGroupByCP },
        { url: '/bh', data: UGroupByBH },
      ]
    }
  },
  { path: 'ZB/ZBLL/L', name: "L ZBLL", icon: "cubing-icon event-333",
    datalists: {
      main: LNoGrouping,
      unsorted: LNoGrouping,
    }
  },
  { path: 'ZB/ZBLL/H', name: "H ZBLL", icon: "cubing-icon event-333",
    datalists: {
      main: HNoGrouping,
      unsorted: HNoGrouping,
    }
  },
  { path: '222/EG1', name: "EG1", icon: "cubing-icon event-222",
    datalists: {
      main: EG1GroupByOLL,
      unsorted: EG1NoGrouping,
      altsorts: [
        { url: '/set', data: EG1GroupByOLL },
      ]
    }
  },
  { path: '222/CLL', name: "CLL", icon: "cubing-icon event-222",
    datalists: {
      main: CLLGroupByOLL,
      unsorted: CLLNoGrouping,
      altsorts: [
        { url: '/set', data: CLLGroupByOLL },
      ]
    }
  },
  { path: 'mega/PLL', name: "Mega PLL", icon: "cubing-icon event-minx",
    datalists: {
      main: MegaPLLGroupByFeatures,
      unsorted: MegaPLLNoGrouping,
      altsorts: [
        { url: '/set', data: MegaPLLGroupByLetter },
        { url: '/group', data: MegaPLLGroupByFeatures },
      ]
    }
  },
  { path: 'mega/OLL', name: "Mega OLL", icon: "cubing-icon event-minx",
    datalists: {
      main: MegaOLLGroupByFeature,
      unsorted: MegaOLLNoGrouping,
      altsorts: [
        { url: '/set', data: MegaOLLGroupByOLL },
        { url: '/set', data: MegaOLLGroupByFeature },
      ]
    }
  },
  { path: 'bigs/ParityPLL', name: "Parity PLL", icon: "cubing-icon event-444",
    datalists: {
      main: ParityPLLGroupByCP,
      unsorted: ParityPLLNoGrouping,
      altsorts: [
        { url: '/group', data: ParityPLLGroupByCP },
      ]
    }
  },
  { path: 'mega/CO', name: "Mega 4LLL CO", icon: "cubing-icon event-minx",
    datalists: {
      main: MegaCO,
    }
  },
  { path: 'mega/CP', name: "Mega 4LLL CP", icon: "cubing-icon event-minx",
    datalists: {
      main: MegaCP,
    }
  },
]