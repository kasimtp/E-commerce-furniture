import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import { apiClient } from "../utils/api.js";
import { FiShoppingCart } from "react-icons/fi";
import Footer from "../components/Footer.jsx";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/productSlice";

const ProductDs = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [addingToCart, setAddingToCart] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await apiClient.get(`/product/${id}`);
        setProduct(res.data);
      } catch (error) {
        console.error("Failed to load product:", error);
        toast.error("Failed to load product.");
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

  const handleAddToCart = async () => {
    const userId = localStorage.getItem("id");

    if (!userId) {
      toast.error("Please login to add items to cart.");
      return navigate("/login");
    }

    try {
      setAddingToCart(true);

      await apiClient.post("/post-cart", {
        user: userId,
        product: product._id,
        quantity,
      });

      dispatch(addToCart({ product, quantity }));
      toast.success("Added to cart!");
    } catch (error) {
      console.error("Add to cart failed:", error);
      toast.error("Failed to add to cart. Please try again.");
    } finally {
      setAddingToCart(false);
    }
  };

  const handleBuyNow = () => {
    const userId = localStorage.getItem("id");

    if (!userId) {
      toast.error("Please login first.");
      return navigate("/login");
    }

    dispatch(addToCart({ product, quantity }));
    navigate("/checkout");
  };

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-500 text-lg">Loading product...</p>
      </div>
    );
  }

  return (
    <div className="w-full bg-gray-50 min-h-screen pt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start bg-white p-6 md:p-8 lg:p-12 rounded-3xl shadow-sm">
          <div className="flex justify-center items-center bg-gray-50 aspect-square rounded-2xl overflow-hidden p-6 md:p-10">
            <img
              src={product?.image}
              alt={product?.name}
              className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="space-y-6 flex flex-col justify-center h-full">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                {product.name}
              </h2>
              <p className="text-base sm:text-lg text-gray-500 mt-4 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <p className="text-3xl sm:text-4xl font-extrabold text-[#4CB19A]">
                ₹{product.price.toFixed(2)}
              </p>
            </div>

            <div className="pt-2">
              <p className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wider">
                Quantity
              </p>
              <div className="flex items-center bg-gray-100 text-black rounded-full px-4 py-2 w-fit space-x-6">
                <button
                  onClick={() => handleQuantityChange("decrement")}
                  className="text-xl font-medium text-gray-600 hover:text-[#4CB19A] transition-colors"
                >
                  −
                </button>
                <span className="font-semibold text-lg w-4 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange("increment")}
                  className="text-xl font-medium text-gray-600 hover:text-[#4CB19A] transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            <p className="text-base font-semibold text-gray-600">
              Total:{" "}
              <span className="text-gray-900 text-lg">
                ₹{(product.price * quantity).toFixed(2)}
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={handleBuyNow}
                className="bg-[#4CB19A] hover:bg-[#3a8d7c] text-white font-semibold rounded-xl py-4 px-6 w-full sm:w-1/2 shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
              >
                Buy Now
              </button>

              <button
                onClick={handleAddToCart}
                disabled={addingToCart}
                className="bg-gray-800 hover:bg-black text-white rounded-xl py-4 px-6 w-full sm:w-1/2 flex items-center justify-center gap-2 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-lg disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <FiShoppingCart className="text-xl" />
                {addingToCart ? "Adding..." : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDs;
