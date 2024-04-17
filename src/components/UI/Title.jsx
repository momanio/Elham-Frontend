/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types

const Title = ({ text }) => {
  return (
    <div className="mb-10 flex justify-center items-center text-center flex-col">
      <h2
        className=" text-white  mb-2"
        style={{
          width: "398px",
          height: "127px",
          textShadow: "5px 5px 20px #000",
          fontStretch: "normal",
          fontFamily: "Philosopher",
          fontSize: "60px",
          fontWeight: "bold",
          lineHeight: "1",
          letterSpacing: "normal",
          textAlign: "center",
          color: "#fff",
        }}
      >
        {text}
      </h2>
    </div>
  );
};

export default Title;
