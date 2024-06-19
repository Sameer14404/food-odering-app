import ReactDOM from "react-dom/client";
import Error from "../Pages/Error.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Applayout from "./components/Applayout.jsx";
import Contactus from "../Pages/Contactus.jsx";
import Body from "./components/Body.jsx";
import RestrauntMenu from "../Pages/RestrauntMenu.jsx";
import { lazy, Suspense } from "react";
import Cart from "../Pages/Cart.jsx";
const About = lazy(() => "../Pages/Aboutus.jsx");

// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.9690247&lng=72.8205292&restaurantId=105262&catalog_qa=undefined&submitAction=ENTER;
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/aboutus",
        element: (
          <Suspense fallback={<h1>Loading..</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/restraunt/:id",
        element: <RestrauntMenu />,
      },
      {
        path: "/contact",
        element: <Contactus />,
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
    ],

    errorElement: <Error />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={Router} />
);
