// eslint-disable-next-line react/prop-types
const TourCard = ({ image, title, description }) => {
  return (
    <div className="inline-table  overflow-hidden group  sm:w-full md:w-full lg:w-full xl:w-1/3 max-w-[300px]">
      {/* Adjusted height for responsiveness */}

      <div className="text-white  text-center">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal mb-2">
          {title}
        </h2>
        <img
          src={image}
          alt={`${title} image`}
          className="object-cover  sm:h-auto md:h-auto lg:h-auto w-full transition-transform transform group-hover:scale-110"
        />
      </div>
      <div className="relative inset-0 bg-transparent bg-opacity-50 backdrop-blur-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="text-white text-center">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal mb-2">
            {description}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
