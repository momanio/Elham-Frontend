import LinkWithAnimation from "../components/UI/LinkWithAnimation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
const NavBar = () => {
  return (
    <nav className="fixed bottom-0 left-0 z-50 w-full h-16 bg-transparent">
      <div className="flex justify-center items-center h-full">
        <div className="grid max-w-xl mx-auto">
          <span className="inline-flex items-center justify-center text-white group">
            <LinkWithAnimation
              path="process"
              text="Scroll Down"
              className="page-scroll"
              color="white"
              hoverColor="rgb(209, 213, 219)"
            />
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
