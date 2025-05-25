import React from 'react'
import './footer.css'

import { VscSend } from 'react-icons/vsc'
import qrCode from '../../assets/footer/Qrcode.png'
import appStore from '../../assets/footer/app_store.png'
import playStore from '../../assets/footer/play_store.png'

function Footer() {
  return (
    <div className="footer">
        <div className="footer-panel1">
            <div className="info-panel">
                <div className="info1 info">
                    <h3>Exclusive</h3>
                    <span className='sub'>Subscribe</span>
                    <span>Get 10% off your first order</span>
                    <div className="input">
                        <input type="text" placeholder='Enter your email' />
                        <VscSend size={17} />
                    </div>
                </div>
                <div className="info2 info">
                    <h3>Support</h3>
                    <span>
                        111 Bijoy sarani, Dhaka, <br />DH 1515, Bangladesh
                    </span>
                    <span>exclusive@gmail.com</span>
                    <span>+88015-88888-9999</span>
                </div>
                <div className="info3 info">
                    <h3>Account</h3>
                    <a href="">My Account</a>
                    <a href="">Login / Register</a>
                    <a href="">Cart</a>
                    <a href="">Wishlist</a>
                    <a href="">Shop</a>
                </div>
                <div className="info4 info">
                    <h3>Quick Link</h3>
                    <a href="">Privacy</a>
                    <a href="">Terms of Use</a>
                    <a href="">FAQ</a>
                    <a href="">Contact</a>
                </div>
                <div className="info5 info">
                    <h3>Download App</h3>
                    <span>Save $3 with App New User Only</span>
                    <div className="app">
                        <div className="qr">
                            <img src={qrCode} alt="" />
                        </div>
                        <div className="store">
                            <div className="play-store">
                                <img src={playStore} alt="" />
                            </div>
                            <div className="app-store">
                                <img src={appStore} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="footer-panel2">
            <p>&copy; Copyright MubTech 2025. All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer