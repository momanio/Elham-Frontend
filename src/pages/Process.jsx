/* eslint-disable react/no-unescaped-entities */
import backgroundImage from "../assets/images/BG2@2x.png";
import TourCard from "../components/reusable/TourCard";
import { ideat, define, design, build, deploy } from "../assets/gallery";
import Button from "../components/UI/Button";
import Title from "../components/UI/Title";

import LinkWithAnimation from "../components/UI/LinkWithAnimation";
const Process = () => {
  return (
    <section
      id="process"
      className="h-screen bg-center bg-no-repeat bg-cover  flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="text-white items-center text-center">
        <Title text={"Our Process"} />
        <div className="grid-cols-5">
          <div className="inline-flex justify-center items-center">
            <TourCard image={ideat} title="ideat" description={"Bla Bla Bla"} />
            <TourCard
              image={define}
              title="define"
              description={"Bla Bla Bla"}
            />
            <TourCard
              image={design}
              title="design"
              description={"Bla Bla Bla"}
            />
            <TourCard image={build} title="build" description={"Bla Bla Bla"} />
            <TourCard
              image={deploy}
              title="deploy"
              description={"Bla Bla Bla"}
            />
          </div>
        </div>
        <div className="py-10 my-5 text-white text-center">
          <Button
            text="Get in Touch"
            style={{ hover: { color: "white" } }}
            className=""
          />
        </div>
        <LinkWithAnimation
          path="services"
          text="Scroll Down"
          className="page-scroll"
          color="white"
          hoverColor="rgb(209, 213, 219)"
        />
      </div>
    </section>
  );
};

export default Process;
