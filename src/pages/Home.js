
import Header from "./comp/Header";
import Footer from "./comp/Footer";
import Mainpage from "./comp/Mainpage";
const Home = ( {Pname}) => {
  return (
    <>
    <Header />

    <Mainpage Pname ="Home Page" />

      <Footer />
    </>
  );
}

export default Home;
