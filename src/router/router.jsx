import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SearchFlight from "../components/SearchResult/SearchResult";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/search",
      element: <SearchFlight />,
    },
]);

export default router;
