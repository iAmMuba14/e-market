import React from 'react'
import './checkoutPage.css'

const CheckoutPage = () => {
  return (
    <div>
        <div className="checkout section">
            <Menu />

            <div className="checkout-content">
            <div className="billing-details">
                <h1>Billing Details</h1>

                <Input label="First Name" />
                <Input label="Company Name" />
                <Input label="Street Address" />
                <Input label="Apartment, floor, etc. (optional)" />
                <Input label="Town/City" />
                <Input label="Phone Number" />
                <Input label="Email Address" />
            </div>

            <div className="item-details">
                <div className="product-info">
                    <div className="product-name">
                        <img src="" alt="" />
                        <span>Product Name</span>
                    </div>
                    <div className="product-price">
                        <span>$ 550.00</span>
                    </div>
                </div>
                <div className="product-invoice">
                    <div className="subtotal">
                        <span>Subtotal:</span>
                        <span>$ 550.00</span>
                    </div>
                    <div className="shipping">
                        <span>Shipping:</span>
                        <span>Free Shipping</span>
                    </div>
                    <div className="total">
                        <span>Total:</span>
                        <span>$ 550.00</span>
                    </div>
                </div>
                <div className="payment-option">
                    <div className="payment-methods">
                        <div className="method">
                            <div>
                                <input type="radio" name="payment" id="credit-card" />
                            <label htmlFor="credit-card">Bank</label>
                            </div>
                            <div className="">

                            </div>
                        </div>
                        <div className="method">
                            <input type="radio" name="payment" id="paypal" />
                            <label htmlFor="paypal">Cash on delivery</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>

       
    </div>
  )
}

export default CheckoutPage

const Menu = () => {
    const menuItems = ['Account', 'My Account', 'Product', 'View Cart', 'Checkout'];

    return (
        <nav className="menu-bar">
            <div className="menu">
                {menuItems.map((item, index) => (
                <a href={index}>
                    <span className='menu-item'>{item}</span>
                    {index < menuItems.length - 1 && <span className='separator'>/</span>}
                </a>
            ))}
            </div>
        </nav>
    )
}

const Input = ({ label, type = 'text' }) => {
    return (
        <div className="input">
            <label htmlFor={label}>{label}</label>
            <input type={type} />
        </div>
    );
}