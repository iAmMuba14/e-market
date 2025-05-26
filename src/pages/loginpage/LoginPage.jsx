import React from 'react'
import "./loginPage.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";

import shopping from '../../assets/signpage/cart.png'
import { FcGoogle } from 'react-icons/fc';

function LoginPage() {
  return (
    <div className='loginpage' id='loginpage'>

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
                                <h1>Log in to Exclusive</h1>
                                <p>Enter your details below</p>
                            </div>
                            <div className="form-main">
                                <div className="inputs">
                                    <div className="input-mail input">
                                        <input type="email" placeholder='E-mail or Phone Number' />
                                    </div>
                                    <div className="input-password input">
                                        <input type="password" placeholder='password' />
                                    </div>
                                </div>

                                <div className="input-action">
                                    <div className="button">
                                        Log In
                                    </div>
                                    <div className="forget__password">
                                        Forget Password?
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

export default LoginPage