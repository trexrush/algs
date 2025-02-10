import { p } from "../../../configs/navigation/routes";

export const getRoutes = () => p.flatMap(pElem => {
  const main = { data: pElem.datalists.main, path: pElem.path, name: pElem.name } // main
  const rawList = pElem.datalists.unsorted ? { data: pElem.datalists.unsorted, path: pElem.path + '/raw', name: pElem.name } : undefined // raw
  const altSorts = pElem.datalists.altsorts?.map(altSort => (
    { data: altSort.data, path: pElem.path + altSort.url, name: pElem.name }
  ))

  return [main, ...(rawList ? [rawList] : []), ...(altSorts ?? [])]
})