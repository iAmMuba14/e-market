import React from 'react'
import './Categories.css'

import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'

import phone from '../../../assets/Category-CellPhone.svg'
import computer from '../../../assets/Category-Computer.png'
import watch from '../../../assets/Category-SmartWatch.png'
import camera from '../../../assets/Category-Camera.png'
import headphone from '../../../assets/Category-Headphone.png'
import game from '../../../assets/Category-Gamepad.png'

function Categories() {
  return (
    <div className="categories section">
      <div className="top">

        <div className="description">
          <div className="category">
            <h6>Categories</h6>
          </div>
          <div className="title">
            <h1>Browse By Category</h1>
          </div>
        </div>

        <div className="buttons">
          <BsArrowLeftShort className="icon" />
          <BsArrowRightShort className="icon" />
        </div>

      </div>

      <div className="cards">
        <Card image={phone} title={"Phone"} />
        <Card image={computer} title={"Computer"} />
        <Card image={watch} title={"Smart Watch"} />
        <Card image={camera} title={"Camera"} />
        <Card image={headphone} title={"Headphone"} />
        <Card image={game} title={"Gamepad"} />
      </div>
    </div>
  );
}

export default Categories

const Card = ({image, title}) => (
    <div className="card">
            <div className="icon">
                <img src={image} alt="" />
            </div>
            <small>{title}</small>
        </div>
)