/* eslint-disable react/no-unescaped-entities */
import backgroundImage from "../assets/images/BG2@2x.png";
import ServiceCard from "../components/reusable/ServiceCard";
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
        <div className="grid-cols-5 gap-2 ">
          <div className="flex justify-center flex-nowrap gap-3 items-center">
            <ServiceCard
              icon={ideat}
              title="ideat"
              description="Unlock the skies with seamless."
            />
            <ServiceCard
              icon={define}
              title="define"
              description="Indulge in our exclusive Top Package, "
            />
            <ServiceCard
              icon={design}
              title="design"
              description="Discover a home away from home with our hotel booking service. From cozy retreats to lavish escapes, we ensure a perfect stay tailored to your preferences."
            />
            <ServiceCard
              icon={build}
              title="build"
              description="Embark on an Amazing Tour with us, where every moment is a masterpiece. Immerse yourself in unforgettable experiences and create memories that last a lifetime."
            />
            <ServiceCard
              icon={deploy}
              title="deploy"
              description="Uncover the Best Destinations with our expertly crafted itineraries. Whether you seek adventure, relaxation, or cultural exploration, we guide you to the most captivating places on Earth."
            />
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
