import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductDs = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/product/${id}`);
        setProduct(res.data);
      } catch (error) {
        console.error("failed to load product", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = async (productId) => {
    try {
      const response = await fetch("http://localhost:5000/api/post-cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ product: productId, quantity: 1 }),
      });

      if (response.ok) {
        console.log("Item moved to cart");
      } else {
        console.error("Failed to add to cart");
      }
    } catch (error) {
      console.error("Add to cart failed:", error);
    }
  };

  if (!product) return <p>Loading......!</p>;

  return (
    <div className="flex flex-col md:flex-row items-center   place-Item-center  p-10  ">
      {/* Product Image */}
      <div className="  md:w-1/4 item-center m-auto  ">
        <img
          src={product?.image}
          alt={product?.image}
          className="rounded-lg shadow-lg w-full h-[500px]  "
        />
      </div>

      {/* Product Info */}
      <div className="w-full md:w-1/2 space-y-4">
        <p className="text-sm text-gray-400 uppercase">New Collection</p>
        <h2 className="text-3xl font-semibold">{product.name}</h2>
        <p className="text-gray-600">Color: Cream</p>

        {/* Rating */}
        <div className="flex items-center gap-1 text-orange-400">
          {"★".repeat(4)}
          <span className="text-gray-400">★</span>
          <a href="#" className="text-sm text-blue-600 ml-2 underline">
            8 Reviews
          </a>
        </div>

        {/* Price */}
        <p className="text-2xl text-red-500 font-bold">
          ${product.price.toFixed(2)}
        </p>

        {/* Quantity Selector */}
        <div className="flex items-center gap-3">
          <button className="px-3 py-1 border rounded">-</button>
          <span>1</span>
          <button className="px-3 py-1 border rounded">+</button>
        </div>

        {/* Description */}
        <div className="mt-4">
          <h4 className="font-semibold">Description</h4>
          <ul className="text-gray-600 text-sm space-y-1 mt-1">
            <li>Size: 29.4" H × 35.8" W × 32.3" D</li>
            <li>Seat Height: 14.5"</li>
            <li>Materials: Plywood, Oak Veneer, Italian Leather</li>
            <li>Weight: 40 lbs</li>
          </ul>
        </div>

        {/* Total Price */}
        <p className="text-xl font-semibold mt-4">
          Total Price:{" "}
          <span className="text-black">${product.price.toFixed(2)}</span>
        </p>

        {/* Add to Cart Button */}
        <button
          onClick={() => handleAddToCart(product._id)}
          className="bg-blue-700 cursor-pointer hover:bg-blue-800 text-white px-4 py-2 rounded-full text-sm"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDs;
