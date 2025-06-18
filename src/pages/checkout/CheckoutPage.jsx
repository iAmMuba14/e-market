import React from "react";
import "./checkoutPage.css";

import image from '../../assets/Frame 613.png'

const CheckoutPage = () => {
  return (
    <div>
      <div className="checkout section">
        <Menu />

        <div className="checkout-content">
          <div className="checkout-header">
            <h2>Billing Details</h2>
          </div>
          <div className="billing-details">
            <div className="input-group">
              <Input label="First Name" />
              <Input label="Company Name" />
              <Input label="Street Address" />
              <Input label="Apartment, floor, etc. (optional)" />
              <Input label="Town/City" />
              <Input label="Phone Number" />
              <Input label="Email Address" />
              <div className="checkbox-group">
                <input type="checkbox" id="saveInfo" />
                <label htmlFor="saveInfo">
                  Save this information for faster check-out next time
                </label>
              </div>
            </div>

            <div className="order-summary">
              <div className="order-items">
              <div className="order-item">
                <div className="product-desc">
                  <div className="image">
                    <img src={image} alt="img" />
                  </div>
                  <span>Product Name</span>
                </div>
                <div className="product-price">
                  <span>$ 550.00</span>
                </div>
              </div>
              <div className="order-item">
                <div className="product-desc">
                  <div className="image">
                    <img src={image} alt="img" />
                  </div>
                  <span>Product Name</span>
                </div>
                <div className="product-price">
                  <span>$ 550.00</span>
                </div>
              </div>
              </div>

              <div className="order-summary-detail">
                <div className="status subtotal">
                  <span>Subtotal:</span>
                  <span>$ 550.00</span>
                </div>
                <div className="status shipping">
                  <span>Shipping:</span>
                  <span>Free</span>
                </div>
                <div className="status total">
                  <span>Total:</span>
                  <span>$ 550.00</span>
                </div>
              </div>
              <div className="payment-methods">
                <div className="payment-method">
                  <div className="bank">
                    <input type="radio" name="payment" id="credit-card" />
                    <label htmlFor="credit-card">Bank</label>
                  </div>
                  <div className="credit-cards">
                    <img
                      src="https://img.icons8.com/color/24/000000/visa.png"
                      alt="Visa"
                    />
                    <img
                      src="https://img.icons8.com/color/24/000000/mastercard.png"
                      alt="MasterCard"
                    />
                    <img
                      src="https://img.icons8.com/color/24/000000/paypal.png"
                      alt="PayPal"
                    />
                  </div>
                </div>
                <div className="payment-method">
                  <div className="cash-on-delivery">
                    <input type="radio" name="payment" id="paypal" />
                    <label htmlFor="paypal">Cash on delivery</label>
                  </div>
                </div>
              </div>
              <div className="coupon-group">
                <input type="text" placeholder="Coupon Code" />
                <button className="apply-coupon">Apply Coupon</button>
              </div>
              <button className="place-order">Place Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

const Menu = () => {
  const menuItems = [
    "Account",
    "My Account",
    "Product",
    "View Cart",
    "Checkout",
  ];

  return (
    <nav className="menu-bar">
      <div className="menu">
        {menuItems.map((item, index) => (
          <a href={index}>
            <span className="menu-item">{item}</span>
            {index < menuItems.length - 1 && (
              <span className="separator">/</span>
            )}
          </a>
        ))}
      </div>
    </nav>
  );
};

const Input = ({ label, type = "text" }) => {
  return (
    <div className="input">
      <label htmlFor={label}>{label}</label>
      <input type={type} />
    </div>
  );
};
