import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Products from './components/Products'
import Navbar from './components/Navbar'
import ProductDetail from './components/ProductDetail'
import SearchItem from './components/SearchItem'

import { items } from './components/Data'

import './App.css'
import Cart from './components/Cart'

function App() {
  const [data, setData] = React.useState([...items]);

  const [cart, setCart] = React.useState([]);
  return (
    <>
      <div>
        <Router>
          <Navbar setData={setData} cart={cart} />
          <Routes>
            <Route path="/" element={<Products items={data} cart={cart} setCart={setCart} />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail setCart={setCart} cart={cart} />} />
            <Route path="/search/:term" element={<SearchItem cart={cart} setCart={setCart}  />} />
            <Route path="/cart" element={<Cart cart={cart} setCart={setCart}  />} />


          </Routes>



        </Router>
      </div>





    </>
  )
}

export default App
