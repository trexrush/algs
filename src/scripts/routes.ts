import { CLLGroupByOLL, CLLNoGrouping } from "../templates/CLL";
import { EG1GroupByOLL, EG1NoGrouping } from "../templates/EG1";
import { LNoGrouping } from "../templates/L_zbll";
import { TGroupByBH, TGroupByCP, TNoGrouping } from "../templates/T_zbll";
import { UGroupByBH, UGroupByCP, UNoGrouping } from "../templates/U_zbll";
import { MegaOLLNoGrouping } from "../templates/megaOLL";
import { MegaPLLGroupByFeatures, MegaPLLGroupByLetter } from "../templates/megaPLL";
import { OLLGroupByEO, OLLNoGrouping } from "../templates/oll";
import { PLLGroupedBySet, PLLNoGrouping } from "../templates/pll";
import { ZBLSNoGrouping } from "../templates/zbls";
import type { IAlgSet } from "./types";

/* NAMING CONVENTION -
- a new set's unsorted AlgSet goes as a new letter in the "a" object
- any other page variants (for AlgSet 2 for example) are named a2, b2, c2, etc 
- the "main" variant goes in the b object, any other variant shouldnt be findable via navbar or buttons
*/

export interface IPageData {
  path: string,
  name: string,
  data: IAlgSet
}

const b: Record<string, IPageData> = {
  oll: { path: 'CFOP/OLL', name: "OLL", data: OLLGroupByEO },
  pll: { path: 'CFOP/PLL', name: "PLL", data: PLLGroupedBySet },
  zbls: { path: 'ZB/ZBLS', name: "ZBLS", data: ZBLSNoGrouping },
  zbllt: { path: 'ZB/ZBLL/T', name: "T ZBLL", data: TGroupByCP },
  zbllu: { path: 'ZB/ZBLL/U', name: "U ZBLL", data: UGroupByCP },
  zblll: { path: 'ZB/ZBLL/L', name: "L ZBLL", data: LNoGrouping },
  eg1: { path: '222/EG1', name: "EG1", data: EG1GroupByOLL },
  cll: { path: '222/CLL', name: "CLL", data: CLLGroupByOLL },
  mpll: { path: 'mega/PLL', name: "Mega PLL", data: MegaPLLGroupByFeatures },
  moll: { path: 'mega/OLL', name: "Mega OLL", data: MegaOLLNoGrouping },
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
  10: { path: b.mpll.path + '/list', name: b.mpll.name, data: MegaOLLNoGrouping },
  
  a1: { path: b.oll.path + '/group', name: "OLL", data: OLLGroupByEO },
  a2: { path: b.pll.path + '/group', name: "PLL", data: PLLGroupedBySet },
  a4: { path: b.zbllt.path + '/cp', name: "T ZBLL", data: TGroupByCP },
  b4: { path: b.zbllt.path + '/bh', name: "T ZBLL", data: TGroupByBH },
  a5: { path: b.zbllu.path + '/cp', name: "U ZBLL", data: UGroupByCP },
  b5: { path: b.zbllu.path + '/bh', name: "U ZBLL", data: UGroupByBH },
  a7: { path: b.eg1.path + '/set', name: "EG1", data: EG1GroupByOLL },
  a8: { path: b.cll.path + '/set', name: "CLL", data: CLLGroupByOLL },
  a9: { path: b.moll.path + '/set', name: "Full PLL", data: MegaPLLGroupByLetter },
  b9: { path: b.mpll.path + '/group', name: "Full PLL", data: MegaPLLGroupByFeatures },
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
]