import React from 'react'
import Main from './main/Main'
import FlashSale from './FlashSales/FlashSale'
import Categories from './categories/Categories'
import BestProducts from './best products/BestProducts'
import HeroBanner from './banner/HeroBanner'
import Products from './products/Products'
import Featured from './featured/Featured'
import Services from './my_service/Services'
import { IoArrowUpOutline } from 'react-icons/io5'

function Hero() {
  return (
   <div className="hero" id='home' style={{marginBottom : "2rem"}}>
    <Main />
    <FlashSale/>
    <Categories />
    <BestProducts />
    <HeroBanner />
    <Products />
    <Featured />
    <Services />
    
    <div className="hero-arrow">
      <IoArrowUpOutline size={35} />
    </div>
   </div>
  )
}

export default Hero