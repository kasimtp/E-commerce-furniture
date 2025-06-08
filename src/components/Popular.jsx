import { BsCart2, BsCurrencyDollar } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { useEffect, useState } from "react";
import { getData } from "../../../admin/src/utils/ProductList";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { useDispatch } from 'react-redux'

const Popular = () => {
  
    const dispatch = useDispatch()
  const [product, setProduct] = useState([]);

  // Fetch product data
  const fetchInfo = async () => {
    try {
      const response = await getData();
      if (response.data) {
        setProduct(response.data);
      }
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);
  const navigate = useNavigate();


    const handleClickwishList = (id) => {
    const user = localStorage.getItem("id");

    if (user) {
      fetch("http://localhost:5000/api/wish-list", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user,
          product: id,
          quantity: 1,
          
          
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("wishlist Data:", data);
          toast.success("Product added to wishlist!");
        })
        .catch((error) => {
          console.error("Error adding to wishlist:", error);
          toast.error("Failed to add to wishlist");
        });
    } else {
      alert("Please login to add to wishlist.");
      navigate("/Login");
    }
  }

  const handleClick = (id) => {
    const user = localStorage.getItem("id");

    if (user) {
      fetch("http://localhost:5000/api/post-cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user,
          product: id,
          quantity: 1,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Cart Data:", data);
          toast.success("Product added to cart!");
        })
        .catch((error) => {
          console.error("Error adding to cart:", error);
          toast.error("Failed to add to cart");
        });
    } else {
      alert("Please login to add to cart.");
      navigate("/Login");
    }
  };

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
          <div
            key={index}
            className="flex flex-col gap-4 p-4 rounded-lg shadow-lg w-full h-[550px]"
          >
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
              <CiHeart onClick={()=> handleClickwishList(item._id) } className="absolute top-4 right-4 text-5xl text-black bg-white p-2 rounded-full shadow-md cursor-pointer" />
            </div>

            {/* Text Section */}
            <div className="flex flex-col items-center justify-between flex-grow text-center">
              <p className="text-lg font-semibold">{item.name}</p>

              {/* Price and Add to Cart */}
              <div className="flex flex-col items-center gap-2 mt-4">
                <div className="flex items-center gap-1 hover:text-blue-600">
                  <BsCurrencyDollar className="text-xl" />
                  <span className="text-lg font-semibold">
                    {item.price.toFixed(2)}
                  </span>
                </div>

                {/* Add to Cart Button */}
                <div
                  className="flex flex-row items-center gap-2 hover:bg-neutral-200 border border-amber-100 hover:border-black bg-white p-2 rounded-md shadow-md cursor-pointer"
                  onClick={() => handleClick(item._id)}
                >
                  <BsCart2 className="text-xl text-black" />
                  <button className="text-sm font-semibold text-black">
                    Add To Cart
                  </button>
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
