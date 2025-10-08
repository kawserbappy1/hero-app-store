import { createBrowserRouter } from "react-router";
import Layouts from "../Layouts/Layouts";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installations from "../Pages/Installations";
import AppsDetails from "../Pages/AppsDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layouts,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/apps",
        Component: Apps,
      },
      {
        path: "/installation",
        Component: Installations,
      },
      {
        path: "/app-details/:id",
        Component: AppsDetails,
      },
    ],
  },
]);
