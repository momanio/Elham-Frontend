import Slider from "../components/reusable/Slider";
import { clients } from "../assets/data";
import Title from "../components/UI/Title";
const Services = () => {
  return (
    <div
      id="services"
      className="bg-center bg-no-repeat bg-cover  flex items-center justify-center"
    >
      <div className="text-white items-center text-center">
        <Title text={"Our Services"} />
        <Slider clients={clients} />
      </div>
    </div>
  );
};

export default Services;
