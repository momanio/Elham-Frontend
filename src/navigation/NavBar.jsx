import { useState } from "react";
import LinkWithAnimation from "../components/UI/LinkWithAnimation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-transparent  fixed py-10 bottom-0 left-0 z-50 w-full h-16  items-center">
      <div className="flex justify-center flex-col  bottom-0 left-0 z-50 w-full h-16 bg-transparent ">
        <div className="grid pb-5  max-w-xl  mx-auto">
          <span
            type="button"
            className="inline-flex flex-col items-center justify-center text-white hover:bg-gray-50 dark:hover:bg-transparent group"
          >
            <LinkWithAnimation
              path="process"
              text="Scroll Down"
              className="page-scroll"
              color="white"
              hoverColor="rgb(209 213 219)"
            />

            <FontAwesomeIcon icon={faEllipsisVertical} />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
