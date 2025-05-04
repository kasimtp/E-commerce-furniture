import React from 'react'
import { useNavigate } from 'react-router'
import Footer from '../components/Footer'

const WishList = () => {

    const navigate = useNavigate()
  return (
    <>
      <div className="flex flex-col space-y-10 mt-28 pl-24 h-[600px] bg-white px-4">

      <p className='text-5xl font-Poppins font-semibold'>Default wishlist</p>
        
        <div className="bg-blue-800 text-white p-6 rounded-md w-full max-w-[1500px] h-20 flex items-center space-x-4">
          <div className="w-5 h-5 border-2 border-white rounded-sm flex items-center justify-center">
            <div className="w-2 h-2 bg-white"></div>
          </div>
          
          <span className="text-[20px]">Your cart is currently empty.</span>
        </div>

        
        <div className="mt-10">
          <button onClick={() => navigate('/shop')} 
          
           className="bg-blue-800 cursor-pointer text-white px-8 py-4 rounded-full text-lg hover:bg-blue-900 transition">
            Return to shop
          </button>
        </div>
      </div>

      <Footer />
    </>

  )
}

export default WishList
