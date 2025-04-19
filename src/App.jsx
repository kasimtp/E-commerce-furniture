import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router'
import Home from "./pages/Home"
import Shope from './pages/Shope'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Cart from './pages/Cart'

const App = () => {
  return (
    <div className=''>

      <Navbar />
      <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='/shope' element={<Shope />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/blog' element={<Blog/>} />
        
      </Routes>

    </div>
  )
}

export default App



