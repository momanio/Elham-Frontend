// eslint-disable-next-line react/prop-types
const TourCard = ({ image, title, description }) => {
  return (
    <div className="flex justify-center items-center text-center flex-col  overflow-hidden group  sm:w-full md:w-full lg:w-full xl:w-1/3 max-w-[200px]">
      <div className="text-white  text-center">
        <div className="relative w-full  bg-gray-300 bg-opacity-20 backdrop-blur-lg rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="text-white text-center">
            <p className="">{description}</p>
          </div>
        </div>
        <h3
          className="font-normal"
          style={{
            width: "52px",
            height: "22px",
            margin: "50px 50px 50px 50px",
            textShadow: "5px 5px 20px #000",
            fontStretch: "normal",
            fontFamily: "Philosopher",
            fontSize: "20px",
            lineHeight: "3",
            letterSpacing: "normal",
            textAlign: "center",
            color: "#fff",
          }}
        >
          {title}
        </h3>
        <img
          src={image}
          alt={`${title} image`}
          className="object-cover  h-auto w-full transition-transform transform group-hover:scale-110"
        />
      </div>
    </div>
  );
};

export default TourCard;
