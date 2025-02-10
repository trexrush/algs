import { cllTrexSheetGroupings } from "../algSheets/ingest/CLL_TREX";
import { eg1TrexSheetGroupings } from "../algSheets/ingest/EG1_TREX";
import { megaOLLTrexSheetGroupings } from "../algSheets/ingest/MEGAOLL_TREX";
import { megaPLLTrexSheetGroupings } from "../algSheets/ingest/MEGAPLL_TREX";
import { pllParityTrexSheetGroupings } from "../algSheets/ingest/PLLPARITY_TREX";
import { ollTrexSheetGroupings} from "../algSheets/ingest/OLL_TREX";
import { pllTrexSheetGroupings } from "../algSheets/ingest/PLL_TREX";

import { HNoGrouping } from "../../data/ZBLL/hObj";
import { LNoGrouping } from "../../data/ZBLL/lObj";
import { TGroupByBH, TGroupByCP, TNoGrouping } from "../../data/ZBLL/tObj";
import { UGroupByBH, UGroupByCP, UNoGrouping } from "../../data/ZBLL/uObj";
import { ZBLSNoGrouping } from "../../data/ZBLS/zblsObj";

import type { IPageData } from "../../types/navigation/navigationTypes";


export const p: IPageData[] = [
  { path: 'CFOP/OLL', name: "OLL", icon: "cubing-icon event-333",
    datalists: {
      main: ollTrexSheetGroupings.eo,
      unsorted: ollTrexSheetGroupings.none,
      altsorts: [
        { url: '/group', data: ollTrexSheetGroupings.eo },
      ]
    }
  },
  { path: 'CFOP/PLL', name: "PLL", icon: "cubing-icon event-333",
    datalists: {
      main: pllTrexSheetGroupings.cp,
      unsorted: pllTrexSheetGroupings.none,
      altsorts: [
        { url: '/group', data: pllTrexSheetGroupings.cp },
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
      main: eg1TrexSheetGroupings.oll,
      unsorted: eg1TrexSheetGroupings.none,
      altsorts: [
        { url: '/set', data: eg1TrexSheetGroupings.oll },
      ]
    }
  },
  { path: '222/CLL', name: "CLL", icon: "cubing-icon event-222",
    datalists: {
      main: cllTrexSheetGroupings.oll,
      unsorted: cllTrexSheetGroupings.none,
      altsorts: [
        { url: '/set', data: cllTrexSheetGroupings.oll },
      ]
    }
  },
  { path: 'mega/PLL', name: "Mega PLL", icon: "cubing-icon event-minx",
    datalists: {
      main: megaPLLTrexSheetGroupings.feature,
      unsorted: megaPLLTrexSheetGroupings.none,
      altsorts: [
        { url: '/set', data: megaPLLTrexSheetGroupings.letter },
        { url: '/group', data: megaPLLTrexSheetGroupings.feature },
      ]
    }
  },
  { path: 'mega/OLL', name: "Mega OLL", icon: "cubing-icon event-minx",
    datalists: {
      main: megaOLLTrexSheetGroupings.feature,
      unsorted: megaOLLTrexSheetGroupings.none,
      altsorts: [
        { url: '/set', data: megaOLLTrexSheetGroupings.oll },
        { url: '/set', data: megaOLLTrexSheetGroupings.feature },
      ]
    }
  },
  { path: 'bigs/ParityPLL', name: "Parity PLL", icon: "cubing-icon event-444",
    datalists: {
      main: pllParityTrexSheetGroupings.cp,
      unsorted: pllParityTrexSheetGroupings.none,
      altsorts: [
        { url: '/group', data: pllParityTrexSheetGroupings.cp },
      ]
    }
  },
  { path: 'mega/CO', name: "Mega 4LLL CO", icon: "cubing-icon event-minx",
    datalists: {
      main: megaOLLTrexSheetGroupings.justCO,
    }
  },
  { path: 'mega/CP', name: "Mega 4LLL CP", icon: "cubing-icon event-minx",
    datalists: {
      main: megaPLLTrexSheetGroupings.justCP,
    }
  },
]