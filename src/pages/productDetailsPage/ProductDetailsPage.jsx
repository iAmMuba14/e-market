import './ProductDetailsPage.css';

import ProductDetails from '../../components/productDetails/ProductDetails';

const ProductDetailsPage = () => {
  return (
    <div className="productDetailsPage">
        <div className="productDetailsContents">
            <div className="topBar">
                <div className="left">
                    <span>Home / </span><span>Contact /</span><span> Havic HV G-92 Gamepad</span>
                </div>
            </div>
        </div>

        <ProductDetails />
    </div>
  )
}

export default ProductDetailsPage