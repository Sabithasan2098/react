import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/LogIn/LogIn";
import Details from "../Pages/Details/Details";
import GameDetails from "../Pages/GameDetails/GameDetails";
import PrivatePage from "../Pages/PrivatePage/PrivatePage";
import Facilites from "../Pages/Facilites/Facilites";
import ErrorPage from "../Pages/ErrorPage/errorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/game/:id",
        element: <GameDetails></GameDetails>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/details",
        element: (
          <PrivatePage>
            <Details></Details>
          </PrivatePage>
        ),
        loader: () => fetch("../../public/platForm.json"),
      },
      {
        path: "/facilites",
        element: <Facilites></Facilites>,
      },
      {
        path: "/error",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);

export default router;
