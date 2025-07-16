import { cllTrexSheetGroupings } from "../algSheets/ingest/CLL_TREX";
import { eg1TrexSheetGroupings } from "../algSheets/ingest/EG1_TREX";
import { megaOLLTrexSheetGroupings } from "../algSheets/ingest/MEGAOLL_TREX";
import { megaPLLTrexSheetGroupings } from "../algSheets/ingest/MEGAPLL_TREX";
import { pllParityTrexSheetGroupings } from "../algSheets/ingest/PLLPARITY_TREX";
import { ollTrexSheetGroupings} from "../algSheets/ingest/OLL_TREX";
import { pllTrexSheetGroupings } from "../algSheets/ingest/PLL_TREX";
import { zbllTrexSheetGroupings } from "../algSheets/ingest/ZBLL_TREX";

import { ZBLSNoGrouping } from "../../data_old/ZBLS/zblsObj";

import type { IRouteConfig } from "../../types/navigation/navigationTypes";


export const navbarRoutes: IRouteConfig[] = [
  {
    icon: "cubing-icon event-333",
    pages: [
      { 
        path: 'CFOP/OLL', 
        name: "OLL",
        datalists: [
          { name: "EO", data: ollTrexSheetGroupings.eo },
          { name: "No Grouping", data: ollTrexSheetGroupings.none },
        ]
      },
      { 
        path: 'CFOP/PLL', 
        name: "PLL",
        datalists: [
          { name: "CP", data: pllTrexSheetGroupings.cp },
          { name: "No Grouping", data: pllTrexSheetGroupings.none },
        ]
      },
      { 
        path: 'ZB/ZBLS', 
        name: "ZBLS",
        datalists: [
          { name: "No Grouping", data: ZBLSNoGrouping },
        ]
      },
      { 
        path: 'ZB/ZBLL/T', 
        name: "T ZBLL",
        datalists: [
          { name: "CP", data: zbllTrexSheetGroupings.t_cp },
          { name: "No Grouping", data: zbllTrexSheetGroupings.t_none },
          { name: "BH", data: zbllTrexSheetGroupings.t_bh },
        ]
      },
      { 
        path: 'ZB/ZBLL/U', 
        name: "U ZBLL",
        datalists: [
          { name: "CP", data: zbllTrexSheetGroupings.u_cp },
          { name: "No Grouping", data: zbllTrexSheetGroupings.u_none },
          { name: "BH", data: zbllTrexSheetGroupings.u_bh },
        ]
      },
      { 
        path: 'ZB/ZBLL/H', 
        name: "H ZBLL",
        datalists: [
          // { name: "CP", data: zbllTrexSheetGroupings.h_cp },
          { name: "No Grouping", data: zbllTrexSheetGroupings.t_none },
          // { name: "BH", data: zbllTrexSheetGroupings.h_bh },
        ]
      },
    ]
  },
  {
    icon: "cubing-icon event-222",
    pages: [
      { 
        path: '222/EG1', 
        name: "EG1",
        datalists: [
          { name: "OLL", data: eg1TrexSheetGroupings.oll },
          { name: "No Grouping", data: eg1TrexSheetGroupings.none },
        ]
      },
      { 
        path: '222/CLL', 
        name: "CLL",
        datalists: [
          { name: "OLL", data: cllTrexSheetGroupings.oll },
          { name: "No Grouping", data: cllTrexSheetGroupings.none },
        ]
      },
    ]
  },
  {
    icon: "cubing-icon event-minx",
    pages: [
      { 
        path: 'mega/PLL', 
        name: "Mega PLL",
        datalists: [
          { name: "Feature", data: megaPLLTrexSheetGroupings.feature },
          { name: "No Grouping", data: megaPLLTrexSheetGroupings.none },
          { name: "Letter", data: megaPLLTrexSheetGroupings.letter },
        ]
      },
      { 
        path: 'mega/OLL', 
        name: "Mega OLL",
        datalists: [
          { name: "Feature", data: megaOLLTrexSheetGroupings.feature },
          { name: "No Grouping", data: megaOLLTrexSheetGroupings.none },
          { name: "OLL", data: megaOLLTrexSheetGroupings.oll },
        ]
      },
      { 
        path: 'mega/CO', 
        name: "Mega 4LLL CO",
        datalists: [
          { name: "CO", data: megaOLLTrexSheetGroupings.justCO },
        ]
      },
      { 
        path: 'mega/CP', 
        name: "Mega 4LLL CP", 
        datalists: [
          { name: "CP", data: megaPLLTrexSheetGroupings.justCP },
        ]
      },
    ]
  },
  {
    icon: "cubing-icon event-444",
    pages: [
      { 
        path: 'bigs/ParityPLL', 
        name: "Parity PLL",
        datalists: [
          { name: "CP", data: pllParityTrexSheetGroupings.cp },
          { name: "No Grouping", data: pllParityTrexSheetGroupings.none },
        ]
      },

    ]
  }
]