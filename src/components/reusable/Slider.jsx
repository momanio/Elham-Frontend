/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Slider = ({ clients }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? clients.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="hidden md:flex flex-col max-w-2xl mx-auto my-5 md:my-10 ">
      <div className="flex items-center justify-center">
        <button
          onClick={prevSlide}
          className="hidden md:flex text-2xl text-gray-500 focus:outline-none"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <div className="flex-1 mx-4 my-4 overflow-hidden">
          <div
            className="flex transition-transform ease-in-out duration-300"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {clients.map((client) => (
              <div key={client?.id} className="flex-shrink-0 w-full flex-wrap">
                <h1 className="text-white mt-2 font-extrabold text-xl">
                  {client.name}
                </h1>
                <p className="text-fuchsia-50-">{client.comment}</p>
                <div className="bg-transparent opacity-4 py-10 rounded-lg">
                  <div className="flex flex-row justify-center gap-5 mt-5">
                    <img
                      src={client.image}
                      alt={`${client.name} avatar`}
                      className="w-auto h-auto  mb-4"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={nextSlide}
          className="hidden md:flex text-2xl text-gray-500 focus:outline-none"
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default Slider;
