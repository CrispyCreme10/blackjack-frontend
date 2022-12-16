import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from 'react'

import './Sidebar.css';

const Sidebar = () => {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  useEffect(() => {
    const sidebar = document.getElementsByClassName('Sidebar')[0];
    if (sidebarExpanded) {
      sidebar.style.width = '180px';
    } else {
      sidebar.style.width = '60px';
    }
  }, [sidebarExpanded])
  
  return (
    <div className="Sidebar">
      <div className="ExpandBtn">
        <div className="BtnHover" onClick={e => setSidebarExpanded(prev => !prev)}>
          {!sidebarExpanded &&
            <FontAwesomeIcon icon="fa-solid fa-arrow-right" className="menu-icon" />
          }
          {sidebarExpanded &&
            <FontAwesomeIcon icon="fa-solid fa-arrow-left" className="menu-icon" />
          }
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