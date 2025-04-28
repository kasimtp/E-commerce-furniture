import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Popular from "../components/Popular";
import Welcome from "../components/Welcome";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Header />
      <Categories />
      <Welcome />
      <Popular />
      <Banner />
      <Footer />

    </div>
  );
};

export default Home;
