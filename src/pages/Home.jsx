/* eslint-disable react/no-unescaped-entities */
import backgroundImage from "../assets/images/BG1.png";
import Logo from "../assets/images/Logo.png";
const Home = () => {
  return (
    <div
      id="home"
      className="h-screen bg-center bg-no-repeat bg-cover flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div
        className="absolute inset-0 bg-black opacity-50"
        style={{ zIndex: -1 }}
      >
        <img src={Logo} alt="Logo" className=" max-w-24" />
      </div>
      <div className="text-white text-center">
        <h1
          className="text-5xl font-bold mb-4 #fff "
          style={{
            fontFamily: "Philosopher",
            fontSize: "60px",
            fontWeight: "bold",
            lineHeight: "1",
            color: "#fff",
          }}
        >
          Innovating The Future
        </h1>
        <p
          className="text-lg mb-8 text-white"
          style={{
            fontFamily: "Poppins",
            fontSize: "15px",
            fontWeight: "300",
            fontStretch: "normal",
            fontStyle: "normal",
            letterSpacing: "normal",
            lineHeight: "1.8",
            color: "#e1e1e1",
          }}
        >
          We Assure you the Best Web Designing, Mobile App Development & Digital
          Marketing Services in the Kingdom of Saudi Arabia
        </p>

        {/*   <LinkWithAnimation
          className="bg-traparent text-white py-2 px-4"
          text="Scroll Down"
          path="process"
          color="white"
          style={{
            backgroundColor: "transparent",
            paddingTop: "0.5rem",
            borderRadius: "9999px",
            paddingBottom: " 0.5rem",
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem",
          }}
        /> */}
      </div>
    </div>
  );
};

export default Home;
