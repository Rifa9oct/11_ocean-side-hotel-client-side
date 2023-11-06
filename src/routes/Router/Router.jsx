import { createBrowserRouter } from "react-router-dom";
import Root from "../../Root/Root";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home";
import AboutUs from "../../pages/About Us/AboutUs";
import Rooms from "../../pages/Rooms/Rooms";
import MyBookings from "../../pages/My Bookings/MyBookings";
import Gallery from "../../pages/Galery/Gallery";
import RoomDetail from "../../Components/RoomDetail/RoomDetail";

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
        loader: ()=>fetch('http://localhost:5000/rooms')
      },
      {
        path: "/myBookings",
        element: <MyBookings></MyBookings>
      },


    ]
  },
]);

export default router;