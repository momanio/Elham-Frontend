import Slider from "../components/reusable/Slider";
import { clients } from "../assets/data";
import Title from "../components/UI/Title";
import LinkWithAnimation from "../components/UI/LinkWithAnimation";
const Services = () => {
  return (
    <section
      id="services"
      className="h-screen bg-center bg-no-repeat bg-cover  flex items-center justify-center"
    >
      <div className="text-white items-center text-center">
        <Title text={"Our Services"} />
        <Slider clients={clients} />
        <LinkWithAnimation
          path="contact"
          text="Scroll Down"
          className="page-scroll"
          color="white"
          hoverColor="rgb(209, 213, 219)"
        />
      </div>
    </section>
  );
};

export default Services;
