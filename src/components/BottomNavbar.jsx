import { Link } from "react-router-dom";
import { FiHome, FiHeart, FiShoppingCart, FiUser, FiTag } from "react-icons/fi";

const BottomNavbar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-md z-50 md:hidden">
      <div className="flex justify-around items-center bg-amber-700 text-gray-700 text-xs py-2">
        <Link to="/" className="flex flex-col items-center justify-center">
          <FiHome size={24} />
          <span className="mt-1">HOME</span>
        </Link>
        <Link to="/wishlist" className="flex flex-col items-center justify-center">
          <FiHeart size={24} />
          <span className="mt-1">WISHLIST</span>
        </Link>
        <Link to="/shop" className="flex flex-col items-center justify-center">
          <FiTag size={24} />
          <span className="mt-1">PRODUCTS</span>
        </Link>
        <Link to="/account" className="flex flex-col items-center justify-center">
          <FiUser size={24} />
          <span className="mt-1">ACCOUNT</span>
        </Link>
        <Link to="/cart" className="flex flex-col items-center justify-center">
          <FiShoppingCart size={24} />
          <span className="mt-1">CART</span>
        </Link>
      </div>
    </div>
  );
};

export default BottomNavbar;
