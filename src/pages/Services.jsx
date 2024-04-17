import React, { useState } from "react";
import Slider from "../components/reusable/Slider";
import { clients } from "../assets/data";
import Title from "../components/UI/Title";
const Services = () => {
  return (
    <div
      id="services"
      className="h-screen bg-center bg-no-repeat bg-cover py-10 flex items-center justify-center"
    >
      <div className="text-white items-center text-center">
        <Title text={"Our Services"} />
        <div className="carousel-container">
          <Slider clients={clients} />
        </div>
      </div>
    </div>
  );
};

export default Services;
