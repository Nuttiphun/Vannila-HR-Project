import FirstComponent from "./HomeComponent/FirstComponent";
import NavbarComponent from "../Component/Navbar/Navbar";
import Divider from "../Component/Divider";
import MenuDetail from "./HomeComponent/MenuDetail/MenuDetail";
import Overview from "./HomeComponent/Overview";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <>
      <NavbarComponent />
      <FirstComponent />
      <Divider />
      <Overview />
      <MenuDetail />
      <Footer />
    </>
  );
};

export default HomePage;
