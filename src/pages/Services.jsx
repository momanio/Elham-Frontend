import React, { useState } from "react";
import CostumSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "../components/reusable/Slider";
import { clients } from "../assets/data";
const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };
  const goToPrevSlide = () => {
    setCurrentSlide(currentSlide - 1);
  };

  const goToNextSlide = () => {
    setCurrentSlide(currentSlide + 1);
  };
  return (
    <div className="carousel-container">
      <div className="carousel-navigation">
        <button onClick={goToPrevSlide}>Up</button>
        <button onClick={goToNextSlide}>Down</button>
      </div>
      <CostumSlider {...settings}>
        <Slider clients={clients} />
      </CostumSlider>
    </div>
  );
};

export default Services;
