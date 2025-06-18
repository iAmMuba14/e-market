import './fullServices.css'

import { BiStoreAlt } from 'react-icons/bi'
import { PiCurrencyCircleDollar } from 'react-icons/pi'
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { BsPiggyBankFill } from "react-icons/bs";

const FullServices = () => {
  return (
    <div className="FullServices ">
            <div className="service">
                <div className="delivery icon">
                    <BiStoreAlt size={30} />
                </div>
                <div className="detail">
                    <span className='primaryText'>10.5k</span>
                    <span className='secondaryText'>Sellers active on our site</span>
                </div>
            </div>
            <div className="service active">
                <div className="delivery icon">
                    <PiCurrencyCircleDollar size={30} />
                </div>
                <div className="detail">
                    <span className='primaryText'>33k</span>
                    <span className='secondaryText'>Monthly Product Sale</span>
                </div>
            </div>
            <div className="service">
                <div className="delivery icon">
                    <HiOutlineShoppingBag size={30} />
                </div>
                <div className="detail">
                    <span className='primaryText'>45.5k</span>
                    <span className='secondaryText'>Customers active on our site</span>
                </div>
            </div>
            <div className="service">
                <div className="delivery icon">
                    <BsPiggyBankFill size={30} />
                </div>
                <div className="detail">
                    <span className='primaryText'>25k</span>
                    <span className='secondaryText'>Annual gross sale on our site</span>
                </div>
            </div>
        </div>
  )
}

export default FullServices