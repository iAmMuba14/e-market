import React from 'react'
import './products.css'
import { BsArrowLeftShort, BsArrowRightShort, BsStarFill, BsStarHalf } from 'react-icons/bs'
import { CiHeart } from 'react-icons/ci';
import { IoEyeOutline } from 'react-icons/io5';

import dogfood from '../../../assets/products/dog_food.png'
import camera from '../../../assets/products/camera.png'
import laptop from '../../../assets/products/laptop.png'
import bobycream from '../../../assets/products/body_cream.png'
import toycar from '../../../assets/products/toy_car.png'
import boots from '../../../assets/products/football_boots.png'
import gamepad from '../../../assets/products/gamepad.png'
import jacket from '../../../assets/products/jacket.png'

function Products() {
  return (
    <div className="products section">
      <div className="mainContent flex">
        <div className="top">
          <div className="left">
            <div className="description">
              <div className="today">
                <h6>Our Products</h6>
              </div>
              <div className="title">
                <h1>Explore Our  Products</h1>
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
            <Card image={dogfood} desc={"Breed Dry Dog Food"} price={100} reviews={35} />
            <Card image={camera} desc={"CANON EOS DSUR Camera"} price={360} reviews={95} />
            <Card image={laptop} desc={"ASUS FHD Gaming Laptop"} price={700} reviews={325} />
            <Card image={bobycream} desc={"Curology Product Set"} price={500} reviews={145} />
            <Card status={"NEW"} image={toycar} desc={"Kids Electric Car"} price={960} reviews={65} />
            <Card image={boots} desc={"Jr. Zoom Soccer Cleats"} price={1160} reviews={35} />
            <Card status={"NEW"} image={gamepad} desc={"GP11 Shooter USB Gamepad"} price={660} reviews={55} />
            <Card image={jacket} desc={"QuiltednSatin Jacket"} price={375} reviews={55} />
        </div>
        
      </div>

      <div className="button">
        <button>View All Products</button>
      </div>
    </div>
  );
}

export default Products

const Card = ({status, image, desc, price, canPrice, reviews}) => (
  <div className="card">
    <div className="cardContent">
      <div className="cardImage">
        <div className="status">
          <small>{status}</small>
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