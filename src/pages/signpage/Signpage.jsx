import React from 'react'
import "./signpage.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";

import shopping from '../../assets/signpage/cart.png'
import { FcGoogle } from 'react-icons/fc';

function Signpage() {
  return (
    <div className='signpage' id='signpage'>

            <div className="hero">
                <div className="hero-content">
                    <div className="left">
                        <div className="image">
                            <img src={shopping} alt="" />
                        </div>
                    </div>

                    <div className="right">
                        <div className="form">
                            <div className="form-head">
                                <h1>Create an account</h1>
                                <p>Enter your details below</p>
                            </div>
                            <div className="form-main">
                                <div className="inputs">
                                    <div className="input-name input">
                                        <input type="text" placeholder='Name' />
                                    </div>
                                    <div className="input-mail input">
                                        <input type="email" placeholder='E-mail or Phone Number' />
                                    </div>
                                    <div className="input-password input">
                                        <input type="password" placeholder='password' />
                                    </div>
                                </div>

                                <div className="input-action">
                                    <div className="button">
                                        Create Account
                                    </div>
                                    <div className="s-google">
                                        <FcGoogle /> Sign up with Google
                                    </div>
                                    <div className="log-in">
                                        Already have account? <span><a href="/loginPage">Log in</a></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Signpage