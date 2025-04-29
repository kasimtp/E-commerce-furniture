import table from "../assets/table.jpg";
import sofa1 from "../assets/sofa 1.jpg";
import chair1 from "../assets/chair 1.jpg";
import chair2 from "../assets/chair 1.jpg";
import { BsCart2, BsCurrencyDollar } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import Footer from "../components/Footer";

const Shope = () => {
  const items = [
    { image: table, title: "Chair Black", extraText: "⭐⭐⭐⭐⭐", price: 33.0, discount: true },
    { image: chair1, title: "Swing (Copy)", extraText: "", price: 45.0, discount: false },
    { image: sofa1, title: "Swing", extraText: "⭐⭐⭐⭐⭐", price: 55.0, discount: true },
    { image: table, title: "Sofa Mini", extraText: "", price: 60.0, discount: false },
    { image: chair2, title: "Sofa Mini", extraText: "", price: 60.0, discount: false },
  ];

  return (
    <div className="w-full font-Poppins pt-12">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-6 lg:px-16 mb-8 gap-4">
        <p className="text-lg">Showing all {items.length} results</p>
        <div className="flex items-center gap-4 w-full md:w-auto">
          <label htmlFor="sort" className="text-sm font-medium text-gray-700">
            Sort by
          </label>
          <select
            id="sort"
            name="sort"
            className="block w-full md:w-60 px-4 py-2 text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
          >
            <option>Default sorting</option>
            <option>Sort by popularity</option>
            <option>Sort by average rating</option>
            <option>Sort by latest</option>
            <option>Sort by price: low to high</option>
            <option>Sort by price: high to low</option>
          </select>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 px-6 lg:px-16 mb-16">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 p-4 rounded-lg shadow-lg w-full h-[500px] bg-white"
          >
            {/* Image */}
            <div className="relative overflow-hidden h-[300px] rounded-md">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover rounded-md"
              />
              {item.discount && (
                <div className="absolute top-4 left-4 bg-white text-black px-3 py-1 text-sm font-semibold rounded-full shadow-md">
                  5% OFF
                </div>
              )}
              <CiHeart className="absolute top-4 right-4 text-4xl text-black bg-white p-2 rounded-full shadow-md cursor-pointer" />
            </div>

            {/* Text Section */}
            <div className="flex flex-col items-center justify-between text-center flex-grow">
              <p className="text-lg font-semibold">{item.title}</p>

              {item.extraText && (
                <p className="text-yellow-500 text-[18px] font-medium mt-2">{item.extraText}</p>
              )}

              {/* Price + Cart */}
              <div className="flex flex-col items-center gap-2 mt-4">
                <div className="flex items-center gap-1 hover:text-blue-600">
                  <BsCurrencyDollar className="text-xl" />
                  <span className="text-lg font-semibold">{item.price.toFixed(2)}</span>
                </div>

                <div className="flex items-center gap-2 hover:bg-neutral-200 border border-gray-100 hover:border-black bg-white px-4 py-2 rounded-md shadow-md cursor-pointer">
                  <BsCart2 className="text-xl text-black" />
                  <span className="text-sm font-semibold text-black">Add To Cart</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Shope;
