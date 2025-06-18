import React from "react";
import "./header.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiHeart, CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";

function Header() {
  return (
    <div className="headerSection">
      <div className="topHead flex">
        <div className="headText">
          <p>
            Summer Sale For All Suits And Free Express Delivery - OFF 50%!
            <span>
              <a href="">Shop Now</a>
            </span>
          </p>
        </div>

        <div className="lang flex">
          English <RiArrowDropDownLine className="icon" size={30} />
        </div>
      </div>

      <nav className="flex">
        <div className="navbar flex">
          <div className="logo">
            <h1>Exclusive</h1>
          </div>

          <div className="menu">
            <ul className="flex">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/contacts">Contact</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/signpage">Sign Up</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="nav-search flex">
          <div className="search flex">
            <input type="text" placeholder="what are you looking for?" />
            <CiSearch className="icon" />
          </div>

          <div className="prefIcons flex">
            <Link to="/wishListPage">
              <CiHeart className="icon" />
            </Link>
            <Link to="/cartPage">
              <IoCartOutline className="icon" />
            </Link>
            
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
