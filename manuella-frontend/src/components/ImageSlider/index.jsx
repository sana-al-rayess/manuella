import React, { useState, useEffect } from 'react';
import '../Intro/intro.css';
import logo from '../../images/logo.png';
import icon1 from '../../images/search.png';
import icon2 from '../../images/bag.png';

const ImageSlider = ({ images, interval }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(sliderInterval);
  }, [images, interval]);

  return (
    <div className="image-slider-container">
      <div className="logo-overlay">
        <img className='logo-img' src={logo} alt="Logo" />
      </div>
      <div className="image-slider">
        <img src={images[currentImageIndex]} alt="Slider Image" />
      </div>
      <div className="navigation-bar">
        <div className="text-items">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
        <div className="icon-items">
          <img className="icon" src={icon1} alt="Icon 1" />
          <img className="icon" src={icon2} alt="Icon 2" />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
