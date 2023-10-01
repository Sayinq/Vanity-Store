import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home'
import FAQ from './pages/FAQ'
import Products from './pages/Products';
import NavbarComp from './components/NavComponents/NavbarComp';
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
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
