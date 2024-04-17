/* eslint-disable react/no-unescaped-entities */
import backgroundImage from "../assets/images/BG1.png";
import InfoContainer from "../components/UI/InfoContainer";
import NavBar from "../navigation/NavBar";
const Home = () => {
  return (
    <div
      id="home"
      className="h-screen bg-center bg-no-repeat bg-cover py-10 flex items-center justify-center"
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
      </div>
      <NavBar />
    </div>
  );
};

export default Home;
