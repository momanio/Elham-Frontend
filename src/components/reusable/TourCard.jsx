// eslint-disable-next-line react/prop-types
const TourCard = ({ image, title, description }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center ">
      <div className="text-white  text-center">
        <div className="relative  bg-gray-300 bg-opacity-20 backdrop-blur-lg rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="text-white text-center">
            <p className="">{description}</p>
          </div>
        </div>
        <span
          className="font-normal"
          style={{
            width: "52px",
            height: "22px",
            margin: "40px 40px 40px 40px",
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
        </span>
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
