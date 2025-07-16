import { p } from "../../../configs/navigation/routes";

export const getRoutes = () => p.flatMap(pElem => {
  // TODO: support multiple layouts via settings
  return { data: pElem.datalists[0].data, path: pElem.path, name: pElem.name }
})