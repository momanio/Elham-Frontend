/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ssImg } from "../../assets/gallery";
import Title from "../UI/Title";

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
    <div className="hidden md:flex flex-col max-w-full mx-auto my-5 md:my-10 lg:my-16">
      <div className="mb-8">
        <Title style={{ color: "#fff" }} text="UI/UX Design" />
      </div>
      <div className="flex items-center">
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
            {/* {clients.map((client) => (
              <div key={client?.id} className="flex-shrink-0 w-full flex-wrap">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <div className="flex flex-row justify-center gap-5 mt-5">
                    <img
                      src={client.avatar}
                      alt={`${client.name} avatar`}
                      className="w-12 h-12 rounded-full mb-4"
                    />
                  </div>
                </div>
              </div>
            ))} */}
            <div key={0} className="flex-shrink-0 w-full flex-wrap">
              <div className="bg-gray-100 p-4 rounded-lg">
                <div className="flex flex-row justify-center gap-5 mt-5">
                  <img
                    src={ssImg}
                    alt="dsfsdf"
                    className="w-2/5 h-auto full mb-4"
                  />
                </div>
              </div>
            </div>
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
