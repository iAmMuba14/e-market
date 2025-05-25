import React from 'react'
import './bestProducts.css'
import { BsArrowLeftShort, BsArrowRightShort, BsStarFill, BsStarHalf } from 'react-icons/bs'
import { CiHeart } from 'react-icons/ci';
import { IoEyeOutline } from 'react-icons/io5';

import jacket from '../../../assets/Frame 605.png'
import bag from '../../../assets/Frame 606.png'
import Keyboard from '../../../assets/Frame 610.png'
import shelf from '../../../assets/Frame 615.png'

function BestProducts() {
  return (
    <div className="bestProducts section">
      <div className="mainContent flex">
        <div className="top">
          <div className="left">
            <div className="description">
              <div className="today">
                <h6>This Month</h6>
              </div>
              <div className="title">
                <h1>Best Selling Products</h1>
              </div>
            </div>
          </div>

          <div className="right">
            <div className="button">
              View All
            </div>
          </div>

        </div>

        <div className="cards">
            <Card image={jacket} desc={"The north coat"} price={260} canPrice={360} reviews={65} />
            <Card image={bag} desc={"Gucci duffle bag"} price={960} canPrice={1160} reviews={65} />
            <Card image={Keyboard} desc={"RGB liquid CPU Cooler"} price={160} canPrice={170} reviews={99} />
            <Card image={shelf} desc={"Small BookShelf"} price={360} reviews={49} />
        </div>
        
      </div>
    </div>
  );
}

export default BestProducts

const Card = ({image, desc, price, canPrice, reviews}) => (
  <div className="card">
    <div className="cardContent">
      <div className="cardImage">
        <div className="image">
            <img src={image} alt="" />
        </div>
        <div className="reaction">
          <div className="icon">
            <CiHeart />
          </div>
          <div className="icon">
            {" "}
            <IoEyeOutline />
          </div>
        </div>
      </div>
      <div className="cardDesc">
        <h5>{desc}</h5>
        <p>${price} <span><del>${canPrice}</del></span></p> 
        <div className="rating">
          <div className="star">
          <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarFill /> <BsStarHalf />
          <span>({reviews})</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);