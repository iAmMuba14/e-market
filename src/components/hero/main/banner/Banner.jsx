import React from 'react'
import './banner.css'
import { GoArrowRight } from 'react-icons/go'

import AppleLogo from '../../../../assets/apple-logo.png'
import iPhone from '../../../../assets/iphone.png'

function Banner() {
  return (
    <div className="mainHero">
      <div className="banner flex">
        <div className="rightContent">
          <div className="prodIcon flex">
            <img src={AppleLogo} alt="" />
            <small>iPhone 14 series</small>
          </div>

          <div className="discount">
            <h1>
              Up to 10% <br />
              off Voucher{" "}
            </h1>
          </div>

          <div className="link flex">
            Shop Now{" "}
            <span>
              <GoArrowRight className="icon" />
            </span>
          </div>
        </div>

        <div className="leftContent">
          <img src={iPhone} alt="" className="product" />
        </div>
      </div>
    </div>
  );
}

export default Banner