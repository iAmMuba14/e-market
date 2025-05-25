import React from 'react'
import './sidebar.css'
import { RxCaretRight } from 'react-icons/rx';

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="menu">
            <ul className="menuList flex">
                <ListItem item={"Woman's Fashion"} icon={<RxCaretRight/>} />
                <ListItem item={"Mens's Fashion"} icon={<RxCaretRight/>} />
                <ListItem item={"Electronics"}  />
                <ListItem item={"Home & Lifestyle"}  />
                <ListItem item={"Medicine"}  />
                <ListItem item={"Sports & Outdoor"}  />
                <ListItem item={"Baby's & Toys"}  />
                <ListItem item={"Groceries & Pets"}  />
                <ListItem item={"Health & Beauty"}  />
            </ul>
        </div>
    </div>
  )
}

export default Sidebar

const ListItem = ({item, icon}) => (
  <li className="listItem">
    <a href="" className="menuLink flex">
      {item}
      <span className='icon'>{icon}</span>
    </a>
  </li>
);