import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import FAQ from './pages/FAQ'

function App() {

  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<FAQ />} />
      </Routes>
    </Router>
  )
}

export default App
