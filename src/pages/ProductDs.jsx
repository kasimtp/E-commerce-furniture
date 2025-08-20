
import { Navigate, useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { apiClient } from "../utils/api.js";
import { FiShoppingCart,  } from "react-icons/fi";

const ProductDs = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate(); 

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
        return navigate ("/Login");

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
    <div className="max-w-7xl mx-auto  lg:bg-gray-000 lg:max-w-screen  lg:h-[1000px] p-0 sm:p-6 pb-16 md:p-10">
      <div className="grid grid-cols-1 bg-amber-000   bg-amber-000 p-4 md:grid-cols-2 gap-8  lg:gap-20  ">
        {/* Image */}
       <div className="flex justify-center items-center bg-amber-000 lg:mt-28 p-10">
  <img
    src={product?.image}
    alt={product?.name}
    className="w-full max-w-[500px] lg:max-w-[700px] xl:max-w-[900px] h-auto rounded-lg object-contain"
  />
</div>


        {/* Product Info */}
        <div className="space-y-4 lg:mt-38 lg:top-0  bg-amber-000 lg:space-y-8">
          <p className="text-xs lg:text-[65px] sm:text-sm font-Poppins text-gray-400 uppercase">
            New Collection
          </p>

          <h4 className="font-semibold text-base font-Poppins lg:text-[60px] text-gray-600 sm:text-lg">Description</h4>
          <p className="text-gray-600 lg:text-[55px] lg:font-normal text-sm sm:text-base font-medium leading-relaxed capitalize">
            {product.description}
          </p>

          <h2 className="text-2xl sm:text-3xl lg:mt-22 text-gray-600 lg:text-[45px] font-semibold font-Poppins capitalize">
            {product.name}
          </h2>

          <p className="text-sm sm:text-base lg:text-[40px] lg:font-light font-Poppins text-gray-600">Color: Cream</p>

          <div className="flex items-center lg:text-[40px] gap-1 text-orange-400">
            {"★".repeat(3)}
            <span className="text-gray-400">★</span>
            <a
              href="#"
              className="text-xs lg:text-[40px] sm:text-sm text-blue-600 ml-2 underline"
            >
              8 Reviews
            </a>
          </div>

          <p className="text-xl sm:text-2xl lg:text-[50px] lg:font-semibold font-Poppins  font-semibold">
            ₹{product.price.toFixed(2)}
          </p>

          {/* Quantity Selector */}
          <div className="flex items-center lg:mt-12  lg:h-25 lg:w-85 text-white bg-[#4CB19A] hover:bg-gray-600 w-fit rounded-3xl px-4 py-1">
            <button
              className="text-xl m-auto lg:text-[60px] px-2"
              onClick={() => handleQuantityChange("decrement")}
            >
              −
            </button>
            <span className="px-3  text-lg m-auto lg:text-[50px]  font-Poppins">{quantity}</span>
            <button
              className="text-xl  lg:text-[60px] m-auto px-2"
              onClick={() => handleQuantityChange("increment")}
            >
              +
            </button>
          </div>

          <p className="text-lg sm:text-xl   lg:text-[50px]   font-Poppin font-bold mt-2">
            Total Price: ₹{(product.price * quantity).toFixed(2)}
          </p>

          {/* Buttons */}
          <div className="flex bg-amber-000 lg:w-[50%]   flex-rol bg-amber-000 sm:flex-row gap-8 lg:gap-6 pt-2 lg:mt-12 w-full">

             <button
              onClick={handleBuyNow}
              className="bg-[#4CB19A] border w-36 hover:bg-green-600 lg:w-[50%] lg:h-[150px] sm:w-40 h-12  font-semibold text-white lg:rounded-2xl rounded-[4px]"
            >
             <p className="lg:text-[44px] text-[15px] font-semibold font-Poppins p-2 "> Buy Now</p>
            </button>
            <button
              onClick={() => handleAddToCart(product._id)}
              className="bg-gray-600  hover:bg-[#4CB19A]  w-36  lg:w-[50%] lg:h-[150px] sm:w-40 h-12 font-semibold text-white lg:rounded-2xl rounded-[4px]"
            >
              
              <FiShoppingCart className="m-auto text-white lg:text-[90px] text-[20px]"/>
            </button>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDs;







