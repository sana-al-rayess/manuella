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
     
     
     
    </div>
  );
};

export default ImageSlider;
