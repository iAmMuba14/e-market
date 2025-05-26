import React from 'react'
import './wishListPage.css'

import {BsStarFill, BsStarHalf} from "react-icons/bs"
import { IoCartOutline, IoEyeOutline } from 'react-icons/io5';

import jacket from '../../assets/Frame 605.png'
import bag from '../../assets/Frame 606.png'
import AirCooler from '../../assets/Frame 610.png'
import Keyboard from '../../assets/Frame 612.png'

import Gamepad from '../../assets/Frame 611.png'
import Monitor from '../../assets/Frame 613.png'
import Chair from '../../assets/Frame 614.png'
import { LuTrash2 } from 'react-icons/lu';

const WishListPage = () => {
  return (
    <div>
        <div className="wishList section">
            <div className="myWishList">
                <div className="top">
                    <div className="wish-title">
                        Wishlist(4)
                    </div>
                    <div className="top-button">
                        Move All To Bag
                    </div>
                </div>

                <div className="cards">
                    <ListCard discount={"-35%"} image={bag} desc={"Gucci duffle bag"} price={950} canPrice={1160} />
                    <ListCard image={AirCooler} desc={"RGB liquid CPU Cooler"} price={1960}  />
                    <ListCard image={Gamepad} desc={"GP11 Shooter USB Gamepad"} price={550}  />
                    <ListCard image={jacket} desc={"Quilted Satin Jacket"} price={750}  />
                </div>
            </div>
            <div className="just-for-you">
                <div className="top">
                    <div className="title">
                        <p>Just For You</p>
                    </div>
                    <div className="top-button">
                        See All
                    </div>
                </div>

                <div className="cards">
                    <J4Card discount={"-35%"} image={bag} desc={"Gucci duffle bag"} price={950} canPrice={1160} reviews={""} />
                    <J4Card discount={"-35%"} image={bag} desc={"Gucci duffle bag"} price={950} canPrice={1160} reviews={""} />
                    <J4Card discount={"-35%"} image={bag} desc={"Gucci duffle bag"} price={950} canPrice={1160} reviews={""} />
                    <J4Card discount={"-35%"} image={bag} desc={"Gucci duffle bag"} price={950} canPrice={1160} reviews={""} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default WishListPage

const ListCard = ({discount, image, desc, price, canPrice, reviews}) => (
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
            <LuTrash2 />
          </div>
        </div>
      </div>
      <div className="img-bottom">
        <IoCartOutline className='icon' size={20} />
        Add to Cart
      </div>
      <div className="cardDesc">
        <h5>{desc}</h5>
        <p>${price} <span><del>${canPrice}</del></span></p> 
      </div>
    </div>
  </div>
);
const J4Card = ({discount, image, desc, price, canPrice, reviews}) => (
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
            <IoEyeOutline />
          </div>
        </div>
      </div>
      <div className="img-bottom">
        <IoCartOutline className='icon' size={20} />
        Add to Cart
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