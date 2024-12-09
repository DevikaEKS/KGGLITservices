import React from 'react';
import Slider from 'react-slick';

const CardCarousel = () => {
  // Settings for the left-moving carousel
  const settingsLeft = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    rtl: false,  // left movement
  };

  // Settings for the right-moving carousel
  const settingsRight = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    rtl: true,  // right movement
  };

  return (
    <div>
      {/* Left-moving carousel */}
      <h2>Left Side Carousel</h2>
      <Slider {...settingsLeft}>
        <div><h3>Card 1</h3></div>
        <div><h3>Card 2</h3></div>
        <div><h3>Card 3</h3></div>
        <div><h3>Card 4</h3></div>
        <div><h3>Card 5</h3></div>
      </Slider>

      {/* Right-moving carousel */}
      <h2 style={{ marginTop: '50px' }}>Right Side Carousel</h2>
      <Slider {...settingsRight}>
        <div><h3>Card 1</h3></div>
        <div><h3>Card 2</h3></div>
        <div><h3>Card 3</h3></div>
        <div><h3>Card 4</h3></div>
        <div><h3>Card 5</h3></div>
      </Slider>
    </div>
  );
};

export default CardCarousel;
