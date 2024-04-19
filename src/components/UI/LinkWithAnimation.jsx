/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-scroll";
import Icon from "../../assets/images/Bullets.svg";
const LinkWithAnimation = ({
  path,
  text,
  color,
  hoverColor,
  onClick,
  style,
}) => {
  const [isHover, setIsHover] = useState(false);

  const link = {
    cursor: "pointer",
    color: isHover ? hoverColor : color,
    width: "144px",
    height: "16px",
    margin: "0 0 19px",
    opacity: 0.7,
    fontFamily: "Poppins",
    fontSize: "13px",
    fontWeight: "500",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "2.45",
    letterSpacing: "6.6px",
    textAlign: "center",
  };
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  const svgStyle = {
    margin: "0 auto",
    maxWidth: "25px",
    height: "auto",
  };
  return (
    <div className="py-15 pb-12  w-full h-4 bg-transparent">
      <Link
        to={path}
        smooth={true}
        duration={1000}
        style={{ ...link, ...style }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
      >
        {text}
        <img src={Icon} style={{ ...svgStyle }} alt="Icon" />
      </Link>
    </div>
  );
};

export default LinkWithAnimation;
