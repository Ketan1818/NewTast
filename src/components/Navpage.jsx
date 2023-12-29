import React from "react";
import { useState } from "react";
import '../style/Navpage.css'
import logo from '../Assets/logo.png'
import icon from '../Assets/icon.png'
import home from '../Assets/home.png'
import printer from '../Assets/print.png'
import location from '../Assets/zoom1.png'
import zoom from '../Assets/zoom.png'
import scale from '../Assets/scale.png'

function Navpage(){

  const [showMenu, setShowMenu] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setSelectedMenu(null);
  };

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };
    return (
        <>
        {/* navbar */}
        <header className="nav-header">
          <div className="nav-left">
            <img src={logo} alt="" className="logo-i" />
            <h3>New App</h3>
          </div>
          <div className="nav-mid">
            <input type="text" className="input" />
            
          </div>
          <div className="nav-right">
              <img src={icon} alt=""  className="icon"/>
          </div>
        </header>

        {/* menubar */}

        <div className="menu-container">
      <div className="menu-icon" onClick={toggleMenu}>
        ☰ {/* You can replace this with your preferred menu icon */}
      </div>
      
      {showMenu && (
        <div className="options-container">
          <div
            className={`menu-option ${selectedMenu === 'layer' && 'selected'}`}
            onClick={() => handleMenuClick('layer')}
          >
            Layer
          </div>
          <div
            className={`menu-option ${selectedMenu === 'mapTool' && 'selected'}`}
            onClick={() => handleMenuClick('mapTool')}
          >
            Map Tool
          </div>
          <div
            className={`menu-option ${selectedMenu === 'share' && 'selected'}`}
            onClick={() => handleMenuClick('share')}
          >
            Share
          </div>
        </div>
      )}

      {selectedMenu === 'layer' && (
        <div className="submenu">
          <div className="submenu-option">Layer 1</div>
          <div className="submenu-option">Layer 2</div>
        </div>
      )}

      {selectedMenu === 'mapTool' && (
        <div className="submenu">
          <div className="submenu-option">Tool 1</div>
          <div className="submenu-option">Tool 2</div>
        </div>
      )}
    </div>
       {/* container */}

       <div className="container">
      {/* Your content */}
      <div className="iconList">
        {/* Your icons (replace with your own icon components or images) */}
        <div className="icon"><img src={home} alt="" className="list"/></div>
        <div className="icon"><img src={printer} alt="" className="list"/></div>
        <div className="icon"><img src={location} alt="" className="list"/></div>
        <div className="icon"><img src={zoom} alt="" className="list"/></div>
        <div className="icon"><img src={scale} alt="" className="list"/></div>
        
      </div>
    </div>
    {/* footer */}
    <div className='ff'>
            <h3>copy right</h3>
        </div>
        </>
    )
    
}

export default Navpage;