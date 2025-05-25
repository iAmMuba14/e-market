import React from 'react'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/homepage/HomePage'
import Signpage from './pages/signpage/Signpage'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/signpage' element={<Signpage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App