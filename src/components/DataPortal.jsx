import '../style/DataPort.css';
import React from 'react';
import {Link} from 'react-router-dom'
import logo from '../Assets/logo.png'
import img1 from '../Assets/IMG1.jpg'
import img2 from '../Assets/IMG2.jpg'
import img3 from '../Assets/img3.jpg'
import img4 from '../Assets/img4.jpg'
import map1 from '../Assets/map1.jpg'
import map2 from '../Assets/map2.jpg'
import map3 from '../Assets/map3.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function DataPortal(){

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };

    return (
        <>
        {/* navbar */}
        <header className="header">
             <img src={logo} alt="" className='logo'/>
             <h3>DATA PORTAL</h3>
        </header>
            
        {/* slider */}
       <div className='slider-container'>
       <Slider {...settings}>
      <div>
        <h3><img src={img1} alt="" className='slider-img'/></h3>
      </div>
      <div>
        <h3><img src={img2} alt="" className='slider-img'/></h3>
      </div>
      <div>
        <h3><img src={img3} alt="" className='slider-img'/></h3>
      </div>
      <div>
        <h3><img src={img4} alt="" className='slider-img'/></h3>
      </div>
      </Slider>
       </div>

       <div className='map-container'>
        <nav className='nav-map'>
        <img src={map1} alt="" className='map-img'/>
          <h3>Map Portal</h3>
          <Link to={"/Navpage"} ><button className='btn'>Go</button></Link>
         
        </nav>
        <nav className='nav-map'>
        <img src={map2} alt="" className='map-img'/>
          <h3>Map Portal</h3>
          <Link to={"/Navpage"} ><button className='btn'>Go</button></Link>
        </nav>
        <nav className='nav-map'>
        <img src={map3} alt="" className='map-img'/>
          <h3>Map Portal</h3>
          <Link to={"/Navpage"} ><button className='btn'>Go</button></Link>
        </nav>
       </div>
        
        {/* footer */}
        <div className='footer'>
            <h1>FOOTER</h1>
        </div>
        <div className='ff'>
            <h3>copy right</h3>
        </div>
        
        </>
      
    )
}
export default DataPortal;