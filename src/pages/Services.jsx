import Title from "../components/UI/Title";
import Slider from "../components/reusable/Slider";
import { clients } from "../assets/data";
const Services = () => {
  return (
    <div
      id="gallery"
      className="justify-center  bg-black flex-nowrap items-center "
    >
      <div className="py-2">
        <Title style={{ color: "white" }} text="Our Services" />
      </div>
      <div>
        <Slider clients={clients} />
      </div>
    </div>
  );
};

export default Services;
