import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Signup from "../pages/AuthenticationPages/Signup";
import Login from "../pages/AuthenticationPages/Login";
import ServicesPage from "../pages/ServicePage/ServicesPage";
import Booking from "../pages/Home/Booking/Booking";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import AboutDetails from "../pages/AboutDetails/AboutDetails";
// import AboutDetails from "../pages/AboutDetails/AboutDetails";
// import AboutDetails from "../pages/AboutDetails/AboutDetails";
// import AboutDetails from "../pages/AboutDetails/AboutDetails";
// import AboutDetails from "../pages/AboutDetails/AboutDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "signup",
        element: <Signup></Signup>,
      },
      {
        path: "signin",
        element: <Login></Login>,
      },
      {
        path: "services",
        element: <ServicesPage></ServicesPage>,
      },
      {
        path: "about",
        element: <AboutDetails></AboutDetails>,
      },
      {
        path: "services",
        element: <ServicesPage></ServicesPage>,
      },
      {
        path: "/product/:id",
        element: (
          <PrivetRoute>
            <Booking></Booking>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
      },
      {
        path: "/services/:id",
        element: (
          <PrivetRoute>
            <Booking></Booking>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
    ],
  },
]);
export default router;
