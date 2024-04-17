/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from "react";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="relative   bg-transparent overflow-hidden group  sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/3 max-w-[500px]">
      <div className="py-5  text-center bg-transparent ">
        <h2 className="text-xl font-normal ml-6">{title}</h2>
        <img
          src={icon}
          alt={`${title} image`}
          className="object-cover  h-56 sm:h-64 md:h-72 lg:h-80 w-auto transition-transform transform group-hover:scale-110"
        />
      </div>

      {/* <div className="absolute inset-0 bg-transparent bg-opacity-40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="text-white text-center">
          <h2 className="text-center sm:text-xl md:text-2xl lg:text-3xl font-normal mb-2">
            {description}
          </h2>
        </div>
      </div> */}
    </div>
  );
};

export default ServiceCard;
