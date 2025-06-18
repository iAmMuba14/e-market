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
import Account from './pages/account/Account'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import ProductDetailsPage from './pages/productDetailsPage/ProductDetailsPage'

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
          <Route path='/account' element={<Account />} />
          <Route path='/about' element={<About />} />
          <Route path='/contacts' element={<Contact />} />
          <Route path='/details' element={<ProductDetailsPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App