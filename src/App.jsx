import React from 'react'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/homepage/HomePage'
import Signpage from './pages/signpage/Signpage'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import LoginPage from './pages/loginpage/LoginPage'
import WishListPage from './pages/wishList/WishListPage'
import CartPage from './pages/cart/CartPage'
import CheckoutPage from './pages/checkout/CheckoutPage'

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/signpage' element={<Signpage />} />
          <Route path='/LoginPage' element={<LoginPage />} />
          <Route path='/wishListPage' element={<WishListPage />} />
          <Route path='/cartPage' element={<CartPage />} />
          <Route path='/checkoutPage' element={<CheckoutPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App