import React from 'react'
import './flashSales.css'
import { BsArrowLeftShort, BsArrowRightShort, BsStarFill, BsStarHalf } from 'react-icons/bs'
import { CiHeart } from 'react-icons/ci';
import { IoEyeOutline } from 'react-icons/io5';

import Gamepad from '../../../assets/Frame 611.png'
import Monitor from '../../../assets/Frame 613.png'
import Keyboard from '../../../assets/Frame 612.png'
import Chair from '../../../assets/Frame 614.png'

function FlashSale() {
  return (
    <div className="flashSale section">
      <div className="mainContent flex">
        <div className="top">
          <div className="left">
            <div className="description">
              <div className="today">
                <h6>Today's</h6>
              </div>
              <div className="title">
                <h1>Flash Sales</h1>
              </div>
            </div>
            <div className="timing">
              <div className="countdown-item">
                <span className="countdown-label">Days</span>
                <span className="countdown-number" id="days">
                  03
                </span>
              </div>
              <span className="colon">:</span>
              <div className="countdown-item">
                <span className="countdown-label">Hours</span>
                <span className="countdown-number" id="hours">
                  23
                </span>
              </div>
              <span className="colon">:</span>
              <div className="countdown-item">
                <span className="countdown-label">Minutes</span>
                <span className="countdown-number" id="minutes">
                  19
                </span>
              </div>
              <span className="colon">:</span>
              <div className="countdown-item">
                <span className="countdown-label">Seconds</span>
                <span className="countdown-number" id="seconds">
                  56
                </span>
              </div>
            </div>
          </div>

          <div className="right">
            <div className="buttons">
              <BsArrowLeftShort className='icon' />
              <BsArrowRightShort className='icon' />
            </div>
          </div>

        </div>

        <div className="cards">
            <Card discount={"-4%"} image={Gamepad} desc={"HAVIT HV-G92 Gamepad"} price={120} canPrice={160} reviews={88} />
            <Card discount={"-30%"} image={Monitor} desc={"IPS LCD Gaming Monitor"} price={370} canPrice={400} reviews={75} />
            <Card discount={"-35%"} image={Keyboard} desc={"AK-900 Wired Keyboard"} price={960} canPrice={1160} reviews={99} />
            <Card discount={"-30%"} image={Chair} desc={"S-Series Comfort Chair"} price={375} canPrice={400} reviews={99} />
            <Card discount={"-4%"} image={Gamepad} desc={"HAVIT HV-G92 Gamepad"} price={120} canPrice={160} reviews={88} />
        </div>
        
      </div>

      <div className="button">
        <button>View All Products</button>
      </div>
    </div>
  );
}

export default FlashSale

const Card = ({discount, image, desc, price, canPrice, reviews}) => (
  <div className="card">
    <div className="cardContent">
      <div className="cardImage">
        <div className="discount">
          <small>{discount}</small>
        </div>
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