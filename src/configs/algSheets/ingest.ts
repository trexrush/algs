import cll_trex from './data/CLL_TREX.yml'
import eg1_trex from './data/EG1_TREX.yml'
import megaoll_trex from './data/MEGAOLL_TREX.yml'
import megapll_trex from './data/MEGAPLL_TREX.yml'
import oll_trex from './data/OLL_TREX.yml'
import pll_trex from './data/PLL_TREX.yml'
import paritypll_trex from './data/PLLPARITY_TREX.yml'
import zbls_trex from './data/ZBLS_FR_TREX.yml'
import zb_t_trex from './data/ZBLL_T_TREX.yml'
import zb_u_trex from './data/ZBLL_U_TREX.yml'
import zb_h_trex from './data/ZBLL_H_TREX.yml'
import { useGroupingsForV3Data } from '../../scripts/dataIngest/ingest'

export const cllTrexSheetGroupings = useGroupingsForV3Data(cll_trex, 'CLL')
export const eg1TrexSheetGroupings = useGroupingsForV3Data(eg1_trex, 'EG1')
export const megaOLLTrexSheetGroupings = useGroupingsForV3Data(megaoll_trex, 'MEGAOLL')
export const megaPLLTrexSheetGroupings = useGroupingsForV3Data(megapll_trex, 'MEGAPLL')
export const ollTrexSheetGroupings = useGroupingsForV3Data(oll_trex, 'OLL')
export const pllTrexSheetGroupings = useGroupingsForV3Data(pll_trex, 'PLL')
export const pllParityTrexSheetGroupings = useGroupingsForV3Data(paritypll_trex, 'PARITYPLL')
export const zblsTrexSheetGroupings = useGroupingsForV3Data(zbls_trex, 'ZBLS')
export const zbllTrexSheetGroupings = useGroupingsForV3Data({
  ...zb_t_trex, 
  ...zb_u_trex,
  ...zb_h_trex,
}, 'ZBLL')

const zblsSheets = await fetch('https://script.google.com/macros/s/AKfycbyr0Avhy6rJ1jhU0RSBsv4lQmB8UU2N4-MQbTX6Ppb2jV0T6TiEW6Ey5eRqh23wfHOv/exec').then(res => res.json())
export const zblsSheetsGroupings = await useGroupingsForV3Data(zblsSheets, 'ZBLS')
