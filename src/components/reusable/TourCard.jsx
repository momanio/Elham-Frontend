// eslint-disable-next-line react/prop-types
const TourCard = ({ image, title, description }) => {
  return (
    <div className="flex justify-center items-center text-center flex-col  overflow-hidden group  sm:w-full md:w-full lg:w-full xl:w-1/3 max-w-[300px]">
      <div className="text-white  text-center">
        <h2
          className="font-normal   mb-2"
          style={{
            width: "52px",
            height: "22px",
            margin: "0 135px 31px 11px",
            textShadow: "5px 5px 20px #000",
            fontStretch: "normal",
            fontFamily: "Philosopher",
            fontSize: "20px",
            fontWeight: "bold",
            lineHeight: "3",
            letterSpacing: "normal",
            textAlign: "center",
            color: "#fff",
          }}
        >
          {title}
        </h2>
        <img
          src={image}
          alt={`${title} image`}
          className="object-cover  sm:h-auto md:h-auto lg:h-auto w-full transition-transform transform group-hover:scale-110"
        />
      </div>
      <div className="relative w-full  bg-gray-400 bg-opacity-40 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="text-white text-center">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3">
            {description}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
