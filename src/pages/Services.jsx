import Title from "../components/UI/Title";
import TourCard from "../components/reusable/TourCard";
import { ideat, define, design, build, deploy } from "../assets/gallery";

const Services = () => {
  return (
    <div
      id="gallery"
      className="justify-center  bg-black flex-nowrap items-center "
    >
      <div className="py-2">
        <Title style={{ color: "white" }} text="Our Services" />
      </div>
      <div className="grid grid-cols-5  justify-center ml-10 mr-10  my-5  px-10 ">
        <TourCard image={ideat} title="ideat" />
        <TourCard image={define} title="define" />
        <TourCard image={design} title="design" />
        <TourCard image={build} title="build" />
        <TourCard image={deploy} title="deploy" />
      </div>
    </div>
  );
};

export default Services;
