// import Banner from "../components/Banner";
// import Cart from "../components/Cart";
// import Categories from "../components/Categories";
// import Footer from "../components/Footer";
// import Header from "../components/Header";
// import Popular from "../components/Popular";
// import Welcome from "../components/Welcome";




// const Home = () => {
//   return (
//     <div>
//       <Header />
//       <Categories />
    
//       <Popular />
      
//       <Banner />
//       <Footer />
//     </div>
//   );
// };

// export default Home;





import { useState } from "react";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Popular from "../components/Popular";
import Topbanner from "../components/Topbanner";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null); // add this line

  return (
    <div>
      <Topbanner/>
      {/* <Header /> */}
      <Categories onCategoryClick={setSelectedCategory} /> {/* Pass prop */}
      <Popular selectedCategory={selectedCategory} /> {/* Send to Popular */}
      <Banner />
      <Footer />
    </div>
  );
};

export default Home;

