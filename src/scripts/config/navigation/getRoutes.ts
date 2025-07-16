import { navbarRoutes } from "../../../configs/navigation/routes";

export const getRoutes = () => navbarRoutes.flatMap(pElem => {
  // TODO: support multiple layouts via settings
  return { data: pElem.datalists[0].data, path: pElem.path, name: pElem.name }
})