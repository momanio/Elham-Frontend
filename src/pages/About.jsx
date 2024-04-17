import Title from "../components/UI/Title";
import ServiceCard from "../components/reusable/ServiceCard";
import { ideat, define, design, build, deploy } from "../assets/gallery";

const About = () => {
  return (
    <div id="aboutUs" className="flex flex-col gap-5 mx-8 bg-transparent">
      <div className="">
        <Title style={{ color: "rgb(0 0 0)" }} text="Our Process" />
      </div>
      <div className="justify-center object-cover  items-center grid grid-cols-5 gap-4">
        <ServiceCard
          icon={ideat}
          title="ideate"
          description="Description Section"
        />
        <ServiceCard
          icon={define}
          title="define"
          description="Description Section"
        />
        <ServiceCard
          icon={design}
          title="design"
          description="Description Section"
        />
        <ServiceCard
          icon={build}
          title="build"
          description="Description Section"
        />
        <ServiceCard
          icon={deploy}
          title="deploy"
          description="Description Section"
        />
      </div>
    </div>
  );
};

export default About;
