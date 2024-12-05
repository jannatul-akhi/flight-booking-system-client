
import Banner from "./components/Banner/banner"
import UserProfile from "./pages/UserProfile/UserProfile";
import Footer from "./shared/Footer/Footer";
import Navbar from "./shared/Navbar/Navbar"


function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <UserProfile></UserProfile>
      <Footer></Footer>
    </>
  )
}

export default App;
