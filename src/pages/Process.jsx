/* eslint-disable react/no-unescaped-entities */
import backgroundImage from "../assets/images/BG2@2x.png";
import TourCard from "../components/reusable/TourCard";
import { ideat, define, design, build, deploy } from "../assets/gallery";
import Button from "../components/UI/Button";

const Process = () => {
  return (
    <div
      id="process"
      className="h-screen bg-center bg-no-repeat bg-cover flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="text-white text-center">
        <h1
          className="text-5xl font-bold  my-3 #fff "
          style={{
            fontFamily: "Philosopher",
            fontSize: "60px",
            fontWeight: "bold",
            lineHeight: "1",
            color: "#fff",
          }}
        >
          Our Process
        </h1>
        <div className=" grid-cols-5 gap-1 pt-16">
          <div className="flex justify-center flex-nowrap gap-2 items-center">
            <TourCard image={ideat} title="ideat" />
            <TourCard image={define} title="define" />
            <TourCard image={design} title="design" />
            <TourCard image={build} title="build" />
            <TourCard image={deploy} title="deploy" />
          </div>
        </div>
        <div className="py-10 text-white text-center">
          <Button
            text="Get in Touch"
            style={{ hover: { color: "white" } }}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Process;
