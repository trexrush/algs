import { CLLGroupByOLL, CLLNoGrouping } from "../data/2x2/cllObj";
import { EG1GroupByOLL, EG1NoGrouping } from "../data/2x2/eg1Obj";
import { HNoGrouping } from "../data/ZBLL/hObj";
import { LNoGrouping } from "../data/ZBLL/lObj";
import { ParityPLLNoGrouping, ParityPLLGroupByCP } from "../data/paritypllObj";
import { TGroupByBH, TGroupByCP, TNoGrouping } from "../data/ZBLL/tObj";
import { UGroupByBH, UGroupByCP, UNoGrouping } from "../data/ZBLL/uObj";
import { MegaOLLNoGrouping, MegaOLLGroupByOLL, MegaOLLGroupByFeature } from "../data/MEGA/megaollObj";
import { MegaPLLGroupByFeatures, MegaPLLGroupByLetter, MegaPLLNoGrouping } from "../data/MEGA/megapllObj";
import { OLLGroupByEO, OLLNoGrouping } from "../data/ollObj";
import { PLLGroupedBySet, PLLNoGrouping } from "../data/pllObj";
import { ZBLSNoGrouping } from "../data/ZBLS/zblsObj";
import type { XOR } from "ts-essentials";
import type { IAlgset } from "./config/set";
import { MegaCO, MegaCP } from "../data/MEGA/mega4LLLObj";

/* NAMING CONVENTION -
- a new set's unsorted AlgSet goes as a new letter in the "a" object
- any other page variants (for AlgSet 2 for example) are named a2, b2, c2, etc 
- the "main" variant goes in the b object, any other variant shouldnt be findable via navbar or buttons
*/

export interface IPageData {
  path: string,
  name: string,
  data: IAlgset
}

const p: Record<string, IPageData> = {
  oll: { path: 'CFOP/OLL', name: "OLL", data: OLLGroupByEO },
  pll: { path: 'CFOP/PLL', name: "PLL", data: PLLGroupedBySet },
  zbls: { path: 'ZB/ZBLS', name: "ZBLS", data: ZBLSNoGrouping },
  zbllt: { path: 'ZB/ZBLL/T', name: "T ZBLL", data: TGroupByCP },
  zbllu: { path: 'ZB/ZBLL/U', name: "U ZBLL", data: UGroupByCP },
  zblll: { path: 'ZB/ZBLL/L', name: "L ZBLL", data: LNoGrouping },
  zbllh: { path: 'ZB/ZBLL/H', name: "H ZBLL", data: HNoGrouping },
  eg1: { path: '222/EG1', name: "EG1", data: EG1GroupByOLL },
  cll: { path: '222/CLL', name: "CLL", data: CLLGroupByOLL },
  mpll: { path: 'mega/PLL', name: "Mega PLL", data: MegaPLLGroupByFeatures },
  moll: { path: 'mega/OLL', name: "Mega OLL", data: MegaOLLGroupByFeature },
  bcppll: { path: 'bigs/ParityPLL', name: "Parity PLL", data: ParityPLLGroupByCP },
  megaco: { path: 'mega/CO', name: "Mega 4LLL CO", data: MegaCO },
  megacp: { path: 'mega/CP', name: "Mega 4LLL CP", data: MegaCP },
}

const a: Record<string, IPageData> = {
  ...p,
  1: { path: p.oll.path + '/list', name: p.oll.name, data: OLLNoGrouping },
  2: { path: p.pll.path + '/list', name: p.pll.name, data: PLLNoGrouping },
  3: { path: p.zbls.path + '/list', name: p.zbls.name, data: ZBLSNoGrouping },
  4: { path: p.zbllt.path + '/list', name: p.zbllt.name, data: TNoGrouping },
  5: { path: p.zbllu.path + '/list', name: p.zbllu.name, data: UNoGrouping },
  6: { path: p.zblll.path + '/list', name: p.zblll.name, data: LNoGrouping },
  7: { path: p.eg1.path + '/list', name: p.eg1.name, data: EG1NoGrouping },
  8: { path: p.cll.path + '/list', name: p.cll.name, data: CLLNoGrouping },
  9: { path: p.moll.path + '/list', name: p.moll.name, data: MegaOLLNoGrouping },
  10: { path: p.mpll.path + '/list', name: p.mpll.name, data: MegaPLLNoGrouping },
  11: { path: p.zbllh.path + '/list', name: p.zbllh.name, data: HNoGrouping },
  12: { path: p.bcppll.path + '/list', name: p.bcppll.name, data: ParityPLLNoGrouping },
  
  a1: { path: p.oll.path + '/group', name: p.oll.name, data: OLLGroupByEO },
  a2: { path: p.pll.path + '/group', name: p.pll.name, data: PLLGroupedBySet },
  a4: { path: p.zbllt.path + '/cp', name: p.zbllt.name, data: TGroupByCP },
  b4: { path: p.zbllt.path + '/bh', name: p.zbllt.name, data: TGroupByBH },
  a5: { path: p.zbllu.path + '/cp', name: p.zbllu.name, data: UGroupByCP },
  b5: { path: p.zbllu.path + '/bh', name: p.zbllu.name, data: UGroupByBH },
  a7: { path: p.eg1.path + '/set', name: p.eg1.name, data: EG1GroupByOLL },
  a8: { path: p.cll.path + '/set', name: p.cll.name, data: CLLGroupByOLL },
  a9: { path: p.moll.path + '/set', name: p.moll.name, data: MegaOLLGroupByOLL },
  b9: { path: p.moll.path + '/set', name: p.moll.name, data: MegaOLLGroupByFeature },
  a10: { path: p.mpll.path + '/set', name: p.mpll.name, data: MegaPLLGroupByLetter },
  b10: { path: p.mpll.path + '/group', name: p.moll.name, data: MegaPLLGroupByFeatures },
  a12: { path: p.bcppll.path + '/group', name: p.bcppll.name, data: ParityPLLGroupByCP },
}

export const PageRoutes: IPageData[] = Object.values(a)
export const CorePageRoutes: IPageData[] = Object.values(p)


export interface IRouteCommon { name: string, href?: string, icon?: string }
export interface IRoute extends IRouteCommon { href: string }
export interface IFolderSection extends IRouteCommon { folder: XOR<IFolderSection, IRoute>[], }
export interface IMainSection extends IFolderSection { icon: string }

// to do typechecking just check if theres a folder
export const NavbarRoutes = [
  { name: "3x3", icon: "cubing-icon event-333",
    folder: [
      { name: "CFOP", 
        folder: [
          { name: a.oll.name, href: "/algs/" + a.oll.path, },
          { name: a.pll.name, href: "/algs/" + a.pll.path },
        ],
      },
      { name: "ZB", // href: "/algs/zbll", 
        folder: [
          { name: a.zbls.name, href: "/algs/" + a.zbls.path },
          { name: a.zbllt.name, href: "/algs/" + a.zbllt.path },
          { name: a.zbllu.name, href: "/algs/" + a.zbllu.path },
          { name: a.zblll.name, href: "/algs/" + a.zblll.path },
          { name: a.zbllh.name, href: "/algs/" + a.zbllh.path },
        ],
      },
    ], 
  },
  { name: "2x2", href: "/algs/2x2", icon: "cubing-icon event-222", 
    folder: [
      { name: "EG",
        folder: [
          { name: a.cll.name, href: "/algs/" + a.cll.path }, 
          { name: a.eg1.name, href: "/algs/" + a.eg1.path }, 
        ]
      }
    ] 
  },
  { name: "Big Cube", href: "/algs/bigs", icon: "cubing-icon event-444", 
    folder: [ 
      { name: a.bcppll.name, href: "/algs/" + a.bcppll.path }, 
    ],
  },
  { name: "Megaminx", href: "/algs/mega", icon: "cubing-icon event-minx", 
    folder: [ 
      { name: "2LLL", // href: "/algs/zbll", 
        folder: [
          { name: "OLL", href: "/algs/" + a.moll.path }, 
          { name: "PLL", href: "/algs/" + a.mpll.path }, 
        ],
      },
      { name: "4LLL",
        folder: [
          // { name: "EO", href: "#" }, 
          { name: "CO", href: "/algs/" + a.megaco.path }, 
          // { name: "EP", href: "#" }, 
          { name: "CP", href: "/algs/" + a.megacp.path }, 
        ],
      },
    ],
  },
] as XOR<IMainSection, IRoute>[]