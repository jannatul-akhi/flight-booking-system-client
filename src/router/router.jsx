import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SearchFlight from "../components/SearchResult/SearchResult";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import Feedback from "../components/Feedback/Feedback";
import Banner from "../components/Banner/banner";
import FlightDetails from "../pages/FlightDetails/FlightDetails";
import FlightBooking from "../pages/FlightBooking/FlightBooking";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/banner",
      element: <Banner />,
    },
    {
      path: "/search",
      element: <SearchFlight />,
    },
    {
      path: "/details",
      element: <FlightDetails />,
    },
    {
      path: "/booking",
      element: <FlightBooking />,
    },
    {
      path: "/details",
      element: <FlightDetails />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/feedback",
      element: <Feedback />,
    },
]);

export default router;
