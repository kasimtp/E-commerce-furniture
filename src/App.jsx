import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router'
import Home from "./pages/Home"
import Shope from './pages/Shope'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Login from './components/Login'
import SearchBar from './components/SearchBar'
import CartPage from './pages/CartPage'
import Cart from './components/Cart'
import WishList from './pages/WishList'


const App = () => {
  return (
    <div className=''>

      <Navbar />
      <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='/shop' element={<Shope />} />
        <Route path='/shoppingcart' element={<Cart />} />
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/contact' element={<Contact/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/search' element={<SearchBar/>} />
        <Route path='/wishlist' element={<WishList/>} />
        
        
      </Routes>

    </div>
  )
}

export default App



