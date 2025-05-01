import React, { useState } from 'react';
import { Search , X } from 'lucide-react';
import { useNavigate } from 'react-router';

const SearchBar = () => {
    
    const [isOpen, setIsOpen ] = useState(true)
    const navigate = useNavigate();

  return (
    
    <>
    {isOpen && (
    <div className="fixed inset-0 bg-[#474747] bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-xl rounded shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-sm font-semibold uppercase text-gray-700">
            Type to Search
          </h2>
          <button onClick={() => navigate ('/')}
           className="text-gray-500 hover:text-gray-800 text-lg">
          <X />
          </button>
        </div>

        {/* Search Input */}
        <div className="flex items-center px-6 py-4">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 text-sm text-gray-700 placeholder-gray-400 bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="ml-2 text-gray-500 hover:text-gray-700 text-xl">
          <Search />
          </button>
        </div>
      </div>
    </div>
    )}
    </>
    
  );
};

export default SearchBar;
