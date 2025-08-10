
import { Navigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { apiClient } from "../utils/api.js";
import { FiShoppingCart,  } from "react-icons/fi";

const ProductDs = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await apiClient.get(`/product/${id}`);
        setProduct(res.data);
        setQuantity(res.data.quantity || 1);
      } catch (error) {
        console.error("Failed to load product", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleQuantityChange = (type) => {
    setQuantity((prev) => {
      if (type === "decrement" && prev > 1) return prev - 1;
      if (type === "increment") return prev + 1;
      return prev;
    });
  };

  const handleAddToCart = async (productId) => {
    try {
      const userId = localStorage.getItem("id");
      if (!userId) {
        toast.error("⚠️ User not logged in");
        return Navigate("/Login");

      }

      await apiClient.post("/post-cart", {
        user: userId,
        product: productId,
        quantity,
      });

      toast.success("🛒 Item added to cart!");
    } catch (error) {
      console.error("Add to cart failed:", error);
      toast.error("❌ Failed to add to cart");
    }
  };

  const handleBuyNow = () => {
    const phoneNumber = "917592084226";
    const message = `Hello! I'm interested in buying:\n\nProduct: ${product.name}\nPrice: ₹${product.price}\nQuantity: ${quantity}\nTotal: ₹${(
      product.price * quantity
    ).toFixed(2)}`;
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, "_blank");
  };

  if (!product) return <p className="text-center mt-10">Loading......!</p>;

  return (
    <div className="max-w-7xl mx-auto  lg:bg-gray-000 lg:max-w-screen  lg:h-[1000px] p-4 sm:p-6 pb-16 md:p-10">
      <div className="grid grid-cols-1 bg-amber-000   bg-amber-000 p-4 md:grid-cols-2 gap-8  lg:gap-20  ">
        {/* Image */}
        <div className="flex bg-amber-000 lg:mt-28 h-max-screen lg:w-[100%] justify-center">
          <img
            src={product?.image}
            alt={product?.name}
            className="w-full max-w-sm cover sm:max-w-md lg:max- lg:max-w-4/5 md:max-w-lg rounded-lg object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-4 lg:mt-38 lg:top-0  bg-amber-000 lg:space-y-8">
          <p className="text-xs lg:text-[65px] sm:text-sm font-Poppins text-gray-400 uppercase">
            New Collection
          </p>

          <h4 className="font-semibold text-base font-Poppins lg:text-[60px] text-gray-600 sm:text-lg">Description</h4>
          <p className="text-gray-600 lg:text-[35px] text-sm sm:text-base font-medium leading-relaxed capitalize">
            {product.description}
          </p>

          <h2 className="text-2xl sm:text-3xl lg:mt-22 text-gray-600 lg:text-[45px] font-semibold font-Poppins capitalize">
            {product.name}
          </h2>

          <p className="text-sm sm:text-base font-Poppins text-gray-600">Color: Cream</p>

          <div className="flex items-center gap-1 text-orange-400">
            {"★".repeat(3)}
            <span className="text-gray-400">★</span>
            <a
              href="#"
              className="text-xs sm:text-sm text-blue-600 ml-2 underline"
            >
              8 Reviews
            </a>
          </div>

          <p className="text-xl sm:text-2xl font-Poppins  font-semibold">
            ₹{product.price.toFixed(2)}
          </p>

          {/* Quantity Selector */}
          <div className="flex items-center text-white bg-[#4CB19A] hover:bg-green-300 w-fit rounded-3xl px-4 py-1">
            <button
              className="text-xl px-2"
              onClick={() => handleQuantityChange("decrement")}
            >
              −
            </button>
            <span className="px-3 text-lg font-Poppins">{quantity}</span>
            <button
              className="text-xl px-2"
              onClick={() => handleQuantityChange("increment")}
            >
              +
            </button>
          </div>

          <p className="text-lg sm:text-xl   font-Poppins font-bold mt-2">
            Total Price: ₹{(product.price * quantity).toFixed(2)}
          </p>

          {/* Buttons */}
          <div className="flex  flex-rol bg-amber-000 sm:flex-row gap-1 pt-2 w-full">

             <button
              onClick={handleBuyNow}
              className="bg-[#4CB19A] hover:bg-green-600 w-full sm:w-40 h-12 font-semibold text-white rounded-sm"
            >
              Buy Now
            </button>
            <button
              onClick={() => handleAddToCart(product._id)}
              className="bg-gray-400  hover:bg-green-800 w-[35%] sm:w-40 h-12 font-semibold text-black rounded-sm"
            >
              
              <FiShoppingCart className="m-auto text-black text-[20px]"/>
            </button>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDs;







