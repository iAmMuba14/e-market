import React from 'react'
import './services.css'
import { TbTruckDelivery } from 'react-icons/tb'
import { RiCustomerServiceLine } from 'react-icons/ri'
import { GoShieldCheck } from 'react-icons/go'

function Services() {
  return (
    <div className="services section">
        <div className="service">
            <div className="delivery icon">
                <TbTruckDelivery size={30} />
            </div>
            <div className="detail">
                <span className='primaryText'>FREE AND FAST DELIVERY</span>
                <span className='secondaryText'>Free delivery for all orders over $140</span>
            </div>
        </div>
        <div className="service">
            <div className="delivery icon">
                <RiCustomerServiceLine size={30} />
            </div>
            <div className="detail">
                <span className='primaryText'>24/7 CUSTOMER SERVICE</span>
                <span className='secondaryText'>Friendly 24/7 customer support</span>
            </div>
        </div>
        <div className="service">
            <div className="delivery icon">
                <GoShieldCheck size={30} />
            </div>
            <div className="detail">
                <span className='primaryText'>MONEY BACK GUARANTEE</span>
                <span className='secondaryText'>We return money within 30days</span>
            </div>
        </div>
    </div>
  )
}

export default Services