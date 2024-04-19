import Slider from "../components/reusable/Slider";
import { clients } from "../assets/data";
import Title from "../components/UI/Title";

import LinkWithAnimation from "../components/UI/LinkWithAnimation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
const Services = () => {
  return (
    <section
      id="services"
      className="h-screen bg-center bg-no-repeat bg-cover  flex items-center justify-center"
    >
      <div className="text-white items-center text-center">
        <Title text={"Our Services"} />
        <Slider clients={clients} />
      </div>
    </section>
  );
};

export default Services;
