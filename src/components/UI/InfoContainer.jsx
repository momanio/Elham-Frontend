/* eslint-disable react/prop-types */

import Logo from "../../assets/images/Logo.png";

const InfoContainer = ({ title, description }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center ">
      <h2
        className="text-white py-10"
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
        className="text-white  py-10"
        style={{
          width: "548px",
          height: "48px",
          margin: "40px 40px 40px 40px",
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
