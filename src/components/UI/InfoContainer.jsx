/* eslint-disable react/prop-types */

import Logo from "../../assets/images/Logo.png";

const InfoContainer = ({ title, description }) => {
  return (
    <div className="mx-10 my-10 flex justify-center items-center text-center flex-col">
      <h2
        className="text-white  mb-2"
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
        {title}
      </h2>
      <p
        className="text-white  mb-4"
        style={{
          width: "548px",
          height: "48px",
          margin: "26px 70.3px 53.3px 152px",
          fontStretch: "normal",
          fontFamily: "Poppins",
          fontSize: "15px",
          fontWeight: "300",
          lineHeight: "1.8",
          letterSpacing: "normal",
          textAlign: "center",
          color: "#e1e1e1",
        }}
      >
        {description}
      </p>
      <div className="flex items-center justify-center pl-5">
        <img src={Logo} alt="Logo" className="w-auto" />
      </div>
    </div>
  );
};

export default InfoContainer;
