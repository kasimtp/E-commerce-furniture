import Categories from "../components/Categories";
import Header from "../components/Header";
import Popular from "../components/Popular";
import Welcome from "../components/Welcome";

const Home = () => {
  return (
    <div>
      <Header />
      <Categories />
      <Welcome />
      <Popular />
    </div>
  );
};

export default Home;
