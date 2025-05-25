import React from 'react'
import './heroBanner.css'

import musix_box from '../../../assets/JBL_BOOMBOX.png'

function HeroBanner() {
  return (
    <div className="heroBanner section">
      <div className="banner">
        <div className="left flex">
          <div className="title">
            <p>Categories</p>
          </div>
          <div className="subtitle">
            <h2>
              Enhance Your <br /> Music Experience
            </h2>
          </div>
          <div className="timing">
            <div className="countdown-item">
              <span className="countdown-number" id="days">
                03
              </span>
              <span className="countdown-label">Days</span>
            </div>

            <div className="countdown-item">
              <span className="countdown-number" id="hours">
                23
              </span>
              <span className="countdown-label">Hours</span>
            </div>

            <div className="countdown-item">
              <span className="countdown-number" id="minutes">
                19
              </span>
              <span className="countdown-label">Minutes</span>
            </div>

            <div className="countdown-item">
              <span className="countdown-number" id="seconds">
                56
              </span>
              <span className="countdown-label">Seconds</span>
            </div>
          </div>

          <div className="button">
            <button className="buyNow">Buy Now</button>
          </div>
        </div>

        <div className="right">
          <div className="image">
            <img src={musix_box} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner