/* eslint-disable react/no-unescaped-entities */
import backgroundImage from "../assets/images/BG1.png";
import InfoContainer from "../components/UI/InfoContainer";

import LinkWithAnimation from "../components/UI/LinkWithAnimation";

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen bg-center bg-no-repeat bg-cover  flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="text-white items-center text-center">
        <InfoContainer
          title={"Innovating The Future"}
          description={
            "We Assure you the Best Web Designing, Mobile App Development & Digital Marketing Services in the Kingdom of Saudi Arabia"
          }
        />

        <LinkWithAnimation
          path="process"
          text="Scroll Down"
          className="page-scroll"
          color="white"
          hoverColor="rgb(209, 213, 219)"
        />
      </div>
    </section>
  );
};

export default Home;
