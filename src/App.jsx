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
import ProductDs from './pages/ProductDs'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

// Inside JSX
<ToastContainer />

import ProtectedRoute from './components/ProtectedRoute' // ⬅️ Import it
import BottomNavbar from './components/BottomNavbar'

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path='/login' element={<Login />} />

        <Route path='/' element={<Home />} />
         <Route path='/cart' element={<CartPage/>} />
        <Route path='/shop' element={<Shope />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/shoppingcart' element={<Cart />} />
        <Route path='/search' element={<SearchBar />} />
        <Route path='/productdetiles/:id' element={<ProductDs />} />
        
        <Route path='/login' element={<Login />} />


        {/* 🔐 Protected Routes */}
        <Route
          path='/cart'
          element={
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>
          }
        />

        <Route
          path='/shoppingcart'
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />

        <Route
          path='/wishlist'
          element={
            <ProtectedRoute>
              <WishList />
            </ProtectedRoute>
          }
        />
      </Routes>
      <BottomNavbar/>
    </div>
  )
}

export default App
