import { createBrowserRouter } from "react-router-dom";
import Root from "../../Root/Root";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home";
import AboutUs from "../../pages/About Us/AboutUs";
import Rooms from "../../pages/Rooms/Rooms";
import MyBookings from "../../pages/My Bookings/MyBookings";
import Gallery from "../../pages/Galery/Gallery";
import RoomDetail from "../../Components/RoomDetail/RoomDetail";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import UpdatePage from "../../pages/UpdatePage/UpdatePage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>
      },
      {
        path: "/rooms",
        element: <Rooms></Rooms>
      },
      {
        path: "/roomDetail/:id",
        element: <RoomDetail></RoomDetail>,
        loader: ({params})=>fetch(`https://ocean-side-hotel-server-side.vercel.app/rooms/${params.id}`)
      },
      {
        path: "/myBookings",
        element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/updatePage/:id",
        element: <UpdatePage></UpdatePage>,
        loader: ({params})=>fetch(`https://ocean-side-hotel-server-side.vercel.app/bookings/${params.id}`)
      },
    ]
  },
]);

export default router;