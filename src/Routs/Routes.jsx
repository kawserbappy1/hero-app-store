import { createBrowserRouter } from "react-router";
import Layouts from "../Layouts/Layouts";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installations from "../Pages/Installations";
import AppsDetails from "../Pages/AppsDetails";
import ErrorPage from "./../Pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layouts,
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
      {
        path: "*",
        Component: ErrorPage,
      },
    ],
  },
]);
