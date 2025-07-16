import { navbarRoutes } from "../../../configs/navigation/routes";
import { IRouteConfig } from "../../../types/navigation/navigationTypes";

// shed the alglists when populating the navbars, its bloating
export const getNavbarRoutes = (): IRouteConfig[] => {
  return navbarRoutes.map(group => {
    return {...group, pages: group.pages.map(page => {
      return {...page, datalists: []}
    })}
  })
}