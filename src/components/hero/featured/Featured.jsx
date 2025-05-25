import React from 'react'
import './featured.css'

import ps5 from '../../../assets/featured/ps5.png'
import woman from '../../../assets/featured/woman.png'
import speakers from '../../../assets/featured/speakers.png'
import perfume from '../../../assets/featured/perfume.png'

function Featured() {
  return (
    <div className="featured section">
        
        <div className="top">
            <div className="head flexColStart">
                <div className="title">
                    <h6>Featured</h6>
                </div>
                <div className="subtitle">
                    <h1>New Arrival</h1>
                </div>
            </div>
        </div>

        <div className="bottom">

            <div className="left bg">
                <img src={ps5} alt="" />
            </div>

            <div className="right">
                <div className="right-top bg">
                    <div className="description">
                        <h2>Women's Collections</h2>
                        <p>
                            Featured woman collections that <br />
                            give you another vibe
                        </p>
                        <h4>Shop Now</h4>
                    </div>
                    <img src={woman} alt="" />
                </div>
                <div className="right-bottom">
                    <div className="bottom-left bg">
                        <img src={speakers} alt="" />
                    </div>
                    <div className="bottom-right bg">
                        <img src={perfume} alt="" />
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Featured