import { Link } from 'react-router-dom';
import ProductTable from '../../components/productsTable/ProductTable'
import './cartPage.css'

const CartPage = () => {
  return (
    <div>
      <div className="cart section">
        <div className="cart-content">
          <div className="top">
            <span>Home</span>/ <span>Cart</span>
          </div>

          <ProductTable />

          <div className="bottom">
            <div className="return">
              <span>Return to shop</span>
            </div>
            <div className="update">
              <span>Update Cart</span>
            </div>
          </div>
        </div>

        <div className="cart-summary">
          <div className="coupon-container">
           <div className="coupon">
            <input type="text" placeholder='Coupon Code' className='coupon-code'/>
            <div className="apply-coupon">
              <span>Apply Coupon</span>
            </div>
           </div>
          </div>

          <div className="cart-detail">
            <h3>Cart Total</h3>

            <div className="cart-item">
              <div className="item">
                <span>Subtotal:</span>
                <span>$ 550.00</span>
              </div>
              <div className="item shipping">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="item">
                <span>Total:</span>
                <span>$ 550.00</span>
              </div>
            </div>

            <div className="checkout">
                <Link to="/checkoutPage" className='checkout'>
                   proceed to checkout
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage