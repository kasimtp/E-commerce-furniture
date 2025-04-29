import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Login from "../components/Login";
import Popular from "../components/Popular";
import Welcome from "../components/Welcome";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Header />
      <Login />
      <Categories />
      <Welcome />
      <Popular />
      <Banner />
      <Footer />

    </div>
  );
};

export default Home;
