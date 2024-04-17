/* eslint-disable react/prop-types */
const Button = ({ text, style }) => {
  return (
    <button
      className="bg-transparent border-2  border-white text-white py-2 px-8 rounded-full"
      style={style}
    >
      {text}
    </button>
  );
};

export default Button;
