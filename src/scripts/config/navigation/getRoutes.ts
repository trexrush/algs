import { navbarRoutes } from "../../../configs/navigation/routes";

export const getRoutes = () => navbarRoutes.flatMap(gElem => {
  // TODO: support multiple layouts via settings
  return gElem.pages.flatMap(pElem => {
    return { data: pElem.datalists[0].data, path: pElem.path, name: pElem.name }
  })
})