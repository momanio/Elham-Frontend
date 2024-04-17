import { useState } from "react";
import LinkWithAnimation from "../components/UI/LinkWithAnimation";
import Button from "../components/UI/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-transparent fixed py-10 bottom-5 left-0 z-50 w-full h-16 items-center">
      <div className="container mx-auto flex justify-between items-center">
        <div className="inline font-normal text-xl md:flex">
          <Button
            text="Eng"
            style={{ hover: { color: "white" } }}
            className="w-full"
          />
        </div>
        <div className="inline font-normal  md:flex">
          <LinkWithAnimation
            path="process"
            text="Scroll Down"
            className="page-scroll"
            color="white"
            hoverColor="rgb(209 213 219)"
          />
        </div>

        <div className="inline lg:flex justify-between items-center gap-4">
          <LinkWithAnimation
            path="home"
            text="X"
            color="white"
            hoverColor="rgb(209 213 219)"
          />

          <LinkWithAnimation
            path="aboutUs"
            text="X"
            color="white"
            hoverColor="rgb(209 213 219)"
          />

          <LinkWithAnimation
            path="gallery"
            text="X"
            color="white"
            hoverColor="rgb(209 213 219)"
          />
          <LinkWithAnimation
            path="contact"
            text="X"
            color="white"
            hoverColor="rgb(209 213 219)"
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
