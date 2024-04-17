/* eslint-disable react/no-unescaped-entities */
import backgroundImage from "../assets/images/BG2@2x.png";
import TourCard from "../components/reusable/TourCard";
import { ideat, define, design, build, deploy } from "../assets/gallery";
import Button from "../components/UI/Button";
import Title from "../components/UI/Title";

const Process = () => {
  return (
    <div
      id="process"
      className="bg-center bg-no-repeat bg-cover  flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="text-white items-center text-center py-10">
        <Title text={"Our Process"} />
        <div className=" grid-cols-5 gap-1 m-5">
          <div className="flex justify-center   items-center">
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
        <div className="py-10 text-white text-center">
          <Button
            text="Get in Touch"
            style={{ hover: { color: "white" } }}
            className="py-5"
          />
        </div>
      </div>
    </div>
  );
};

export default Process;
