import React, { useState, useEffect } from 'react';
import ImageSlider from '../ImageSlider';


import torn from '../../images/sh1.jpg'
import bg3 from '../../images/sh2.jpg';

const Intro = () => {
  const images = [bg3, torn];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [images]);

  return (
    <div className="app">
        
      <ImageSlider images={images} interval={3000} />
     
    </div>
  );
};

export default Intro;
