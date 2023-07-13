import { CLLGroupByOLL, CLLNoGrouping } from "../data/2x2/cllObj";
import { EG1GroupByOLL, EG1NoGrouping } from "../data/2x2/eg1Obj";
import { HNoGrouping } from "../data/ZBLL/hObj";
import { LNoGrouping } from "../data/ZBLL/lObj";
import { ParityPLLNoGrouping } from "../data/paritypllObj";
import { TGroupByBH, TGroupByCP, TNoGrouping } from "../data/ZBLL/tObj";
import { UGroupByBH, UGroupByCP, UNoGrouping } from "../data/ZBLL/uObj";
import { MegaOLLNoGrouping } from "../data/MEGA/megaollObj";
import { MegaPLLGroupByFeatures, MegaPLLGroupByLetter, MegaPLLNoGrouping } from "../data/MEGA/megapllObj";
import { OLLGroupByEO, OLLNoGrouping } from "../data/ollObj";
import { PLLGroupedBySet, PLLNoGrouping } from "../data/pllObj";
import { ZBLSNoGrouping } from "../data/ZBLS/zblsObj";
import type { IDataAlgset } from "./types";

/* NAMING CONVENTION -
- a new set's unsorted AlgSet goes as a new letter in the "a" object
- any other page variants (for AlgSet 2 for example) are named a2, b2, c2, etc 
- the "main" variant goes in the b object, any other variant shouldnt be findable via navbar or buttons
*/

export interface IPageData {
  path: string,
  name: string,
  data: IDataAlgset
}

const b: Record<string, IPageData> = {
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
  moll: { path: 'mega/OLL', name: "Mega OLL", data: MegaOLLNoGrouping },
  bcppll: { path: 'bigs/ParityPLL', name: "Parity PLL", data: ParityPLLNoGrouping },
}

const a: Record<string, IPageData> = {
  ...b,
  1: { path: b.oll.path + '/list', name: b.oll.name, data: OLLNoGrouping },
  2: { path: b.pll.path + '/list', name: b.pll.name, data: PLLNoGrouping },
  3: { path: b.zbls.path + '/list', name: b.zbls.name, data: ZBLSNoGrouping },
  4: { path: b.zbllt.path + '/list', name: b.zbllt.name, data: TNoGrouping },
  5: { path: b.zbllu.path + '/list', name: b.zbllu.name, data: UNoGrouping },
  6: { path: b.zblll.path + '/list', name: b.zblll.name, data: LNoGrouping },
  7: { path: b.eg1.path + '/list', name: b.eg1.name, data: EG1NoGrouping },
  8: { path: b.cll.path + '/list', name: b.cll.name, data: CLLNoGrouping },
  9: { path: b.moll.path + '/list', name: b.moll.name, data: MegaOLLNoGrouping },
  10: { path: b.mpll.path + '/list', name: b.mpll.name, data: MegaPLLNoGrouping },
  11: { path: b.zbllh.path + '/list', name: b.zbllh.name, data: HNoGrouping },
  12: { path: b.bcppll.path + '/list', name: b.bcppll.name, data: ParityPLLNoGrouping },
  
  a1: { path: b.oll.path + '/group', name: b.oll.name, data: OLLGroupByEO },
  a2: { path: b.pll.path + '/group', name: b.pll.name, data: PLLGroupedBySet },
  a4: { path: b.zbllt.path + '/cp', name: b.zbllt.name, data: TGroupByCP },
  b4: { path: b.zbllt.path + '/bh', name: b.zbllt.name, data: TGroupByBH },
  a5: { path: b.zbllu.path + '/cp', name: b.zbllu.name, data: UGroupByCP },
  b5: { path: b.zbllu.path + '/bh', name: b.zbllu.name, data: UGroupByBH },
  a7: { path: b.eg1.path + '/set', name: b.eg1.name, data: EG1GroupByOLL },
  a8: { path: b.cll.path + '/set', name: b.cll.name, data: CLLGroupByOLL },
  a9: { path: b.mpll.path + '/set', name: b.mpll.name, data: MegaPLLGroupByLetter },
  b9: { path: b.mpll.path + '/group', name: b.moll.name, data: MegaPLLGroupByFeatures },
}

export const PageRoutes: IPageData[] = Object.values(a)
export const CorePageRoutes: IPageData[] = Object.values(b)

export const NavbarRoutes = [
  { name: "CFOP", folder: [
      { name: a.oll.name, href: "/algs/" + a.oll.path },
      { name: a.pll.name, href: "/algs/" + a.pll.path },
    ], 
  },
  { name: a.zbls.name, href: "/algs/" + a.zbls.path },
  { name: "ZBLL", href: "/algs/zbll", folder: [
      { name: a.zbllt.name, href: "/algs/" + a.zbllt.path },
      { name: a.zbllu.name, href: "/algs/" + a.zbllu.path },
      { name: a.zblll.name, href: "/algs/" + a.zblll.path },
      { name: a.zbllh.name, href: "/algs/" + a.zbllh.path },
    ], 
  },
  { name: "2x2", href: "/algs/2x2", folder: [
    { name: a.cll.name, href: "/algs/" + a.cll.path }, 
    { name: a.eg1.name, href: "/algs/" + a.eg1.path }, 
  ] },
  { name: "Megaminx", href: "/algs/mega", folder: [ 
      { name: a.moll.name, href: "/algs/" + a.moll.path }, 
      { name: a.mpll.name, href: "/algs/" + a.mpll.path }, 
    ],
  },
  { name: "Big Cube", href: "/algs/bigs", folder: [ 
      { name: a.bcppll.name, href: "/algs/" + a.bcppll.path }, 
    ],
  },
]