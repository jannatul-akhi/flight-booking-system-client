
import Banner from "./components/Banner/banner"
import SearchFlight from "./components/SearchResult/SearchResult"
import FlightBooking from "./pages/FlightBooking/FlightBooking";
import FlightDetails from "./pages/FlightDetails/FlightDetails";
import Navbar from "./shared/Navbar/Navbar"


function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <SearchFlight></SearchFlight>
      <FlightDetails></FlightDetails>
      <FlightBooking></FlightBooking>
    </>
  )
}

export default App
