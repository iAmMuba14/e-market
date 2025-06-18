import './productDetails.css'

import image1 from '../../assets/productDetails/image 57.png'
import image2 from '../../assets/productDetails/image 58.png'
import image3 from '../../assets/productDetails/image 59.png'
import image4 from '../../assets/productDetails/image 61.png'
import image5 from '../../assets/productDetails/image 63.png'
import { BsStar, BsStarFill } from 'react-icons/bs'
import { FaRegHeart } from 'react-icons/fa'
import { TbTruckDelivery } from 'react-icons/tb'
import { RiLoopLeftFill } from 'react-icons/ri'

const ProductDetails = () => {
  return (
    <div className="productDetails">
        <div className="productImagesBox">
            <div className="sideImages">
                <div className="sideImagesItem">
                    <img src={image1} alt="" />
                </div>
                <div className="sideImagesItem">
                    <img src={image2} alt="" />
                </div>
                <div className="sideImagesItem">
                    <img src={image3} alt="" />
                </div>
                <div className="sideImagesItem">
                    <img src={image4} alt="" />
                </div>
            </div>
            <div className="mainImage">
                <img src={image5} alt="" />
            </div>
        </div>

        <div className="productDesc">
            <div className="productInfo">
                <h2>Havic HV G-92 Gamepad</h2>
                <div className="rating">
                    <div className="star">
                        <BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStar />
                    </div>
                    <span>(150 Reviews)</span> | <span className='stock'>In Stock</span>
                </div>
                <span className='price'>$192.00</span>
                <p>
                    PlayStation 5 Controller Skin High quality vinyl with air 
                    channel adhesive for easy bubble free install & mess 
                    free removal Pressure sensitive.
                </p>
            </div>
            <div className="productProperties">
                <div className="colour">
                    Colours: 
                    <div className="blue col"></div>
                    <div className="pink col"></div>
                </div>
                <div className="size">
                    Size:
                    <div className="sizes">
                        <span>XS</span>
                        <span>S</span>
                        <span>M</span>
                        <span>L</span>
                        <span>XL</span>
                    </div>
                </div>
                <div className="counter">
                    <div className="">
                        <div className="counterItem">-</div>
                        <div className="counterItem">2</div>
                        <div className="counterItem">+</div>
                    </div>
                    <button className="">Buy Now</button>
                    <div className=""><FaRegHeart /></div>
                </div>
            </div>
            <div className="deliveryStatus">
                <div className="delivery">
                    <TbTruckDelivery />
                    <div className="deliveryDiv">
                        <span>Free Delivery</span>
                        <span>Enter your postal code for Delivery Availability</span>
                    </div>
                </div>
                <div className="delivery">
                    <RiLoopLeftFill />
                    <div className="deliveryDiv">
                        <span>Return Delivery</span>
                        <span>Free 30 Days Delivery Returns</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails