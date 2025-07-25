import Banner from "../components/Banner";
import Cart from "../components/Cart";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Popular from "../components/Popular";
import Welcome from "../components/Welcome";




const Home = () => {
  return (
    <div>
      <Header />
      <Categories />
      {/* <Welcome /> */}
      <Popular />
      
      <Banner />
      <Footer />
    </div>
  );
};

export default Home;
