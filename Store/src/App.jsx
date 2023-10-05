import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home'
import FAQ from './pages/FAQ'
import Products from './pages/Products';
import Cart from './pages/Cart';
import NavbarComp from './components/NavComponents/NavbarComp';
import Footer from './components/LowerComponents/Footer';
import { AnimatePresence } from 'framer-motion';

function App() {

  const location = useLocation();

  return (
    <>
      <NavbarComp />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/category/products" element={<Products />} />
          <Route path="/checkout/cart" element={<Cart />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  )
}

export default App
