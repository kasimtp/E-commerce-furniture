// import table from "../assets/table.jpg";
// import sofa1 from "../assets/sofa 1.jpg";
// import chair1 from "../assets/chair 1.jpg";
import { BsCart2, BsCurrencyDollar } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { useEffect, useState } from "react";
import { getData } from "../../../admin/src/utils/ProductList";

const Popular = () => {

  // const items = [
  //   {
  //     image: table,
  //     title: "Chair Black",
  //     extraText: "⭐⭐⭐⭐⭐",
  //     price: 33.0,
  //     discount: true,
  //   },
  //   {
  //     image: chair1,
  //     title: "Swing (Copy)",
  //     extraText: "",
  //     price: 45.0,
  //     discount: false,
  //   },
  //   {
  //     image: sofa1,
  //     title: "Swing",
  //     extraText: "⭐⭐⭐⭐⭐",
  //     price: 55.0,
  //     discount: true,
  //   },
  //   {
  //     image: table,
  //     title: "Sofa Mini",
  //     extraText: "",
  //     price: 60.0,
  //     discount: false,
  //   },
  // ];

  const [product, setProduct] = useState([])

  // get data from backend utils folder
    const fetchInfo = async () => {
    const response = await getData()
    console.log(response.data)
    if (response.data) {
      setProduct(response.data);
    }
  };

    useEffect(() => {
    fetchInfo();
  }, []);



  console.log("prd",product);
  


  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="flex flex-col items-center gap-4 mt-28">
        <p className="text-[15px] uppercase">Trending now</p>
        <p className="font-Poppins font-semibold capitalize text-5xl">
          Popular This Week
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24 px-6 w-[90%] mx-auto">
        {product.map((item, index) => (
          <div key={index} className="flex flex-col gap-4 p-4 rounded-lg shadow-lg w-full h-[550px]">
            {/* Image */}
            <div className="relative overflow-hidden h-[300px]">
              <img
                src={item.image}
                alt={`popular-${index}`}
                className="h-full w-full object-cover rounded-md"
              />
              {item.discount && (
                <div className="absolute top-4 left-4 bg-white text-black px-3 py-1 text-sm font-semibold rounded-full shadow-md">
                  5% OFF
                </div>
              )}
              <CiHeart className="absolute top-4 right-4 text-5xl text-black bg-white p-2 rounded-full shadow-md  cursor-pointer" />
            </div>

            {/* Text Section */}
            <div className="flex flex-col items-center justify-between flex-grow text-center">
              <p className="text-lg font-semibold">{item.title}</p>

              {item.extraText && (
                <p className="text-[18px] font-medium text-yellow-500 mt-2">
                  {item.extraText}
                </p>
              )}

              {/* Price and Add to Cart */}
              <div className="flex flex-col items-center gap-2 mt-4 ">
                {/* Price */}
                <div className="flex items-center gap-1 hover:text-blue-600">
                  <BsCurrencyDollar className="text-xl" />
                  <span className="text-lg font-semibold ">{item.price.toFixed(2)}</span>
                </div>

                {/* Add to Cart */}
                <div className="flex flex-row items-center gap-2 hover:bg-neutral-200 border border-amber-100 hover:border-black   bg-white p-2 rounded-md shadow-md cursor-pointer">
                  <BsCart2 className="text-xl text-black" />
                  <span className="text-sm font-semibold text-black">Add To Cart</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
