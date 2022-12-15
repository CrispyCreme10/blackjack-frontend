import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react'

import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="ExpandBtn">
        <div className="BtnHover">
          <FontAwesomeIcon icon="fa-solid fa-arrow-right" className="menu-icon" />
        </div>
      </div>
      <div className="MenuItems">
        <div className="BtnHover">
          <FontAwesomeIcon icon="fa-solid fa-house" className="menu-icon" />
        </div>
        <FontAwesomeIcon icon="fa-solid fa-minus" className="menu-icon" />
        <div className="BtnHover">
          <FontAwesomeIcon icon="fa-solid fa-ranking-star" className="menu-icon" />
        </div>
      </div>
    </div>
  )
}

export default Sidebar