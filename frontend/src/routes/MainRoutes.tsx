import { lazy } from "react";

import { ROUTING_PATHS } from "./paths";
import Loadable from "../components/Loadable/Loadable";

const CatalogPage = Loadable(
  lazy(() => import("../pages/CatalogPage/CatalogPage"))
);
const RecipePage = Loadable(
  lazy(() => import("../pages/RecipePage/RecipePage"))
);
const Page404 = Loadable(
  lazy(() => import("../pages/NotFoundPage/NotFoundPage.tsx"))
);

const MainRoutes = {
  path: ROUTING_PATHS.ROOT,
  children: [
    {
      path: "",
      element: <CatalogPage />,
    },
    {
      path: ROUTING_PATHS.RECIPE_PAGE,
      element: <RecipePage />,
    },
    { path: "*", element: <Page404 /> },
  ],
};

export default MainRoutes;
