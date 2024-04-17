import Button from "../UI/Button";
import backgroundImage from "../../assets/images/Send.svg";
const ContactForm = () => {
  return (
    <div className="flex flex-col sm:flex-row p-5 sm:p-10 m-5 gap-10 sm:m-10 justify-center bg-dark flex-wrap">
      <form className="flex flex-col gap-5 justify-start text-black w-full sm:w-auto">
        <div className="flex flex-col sm:flex-row gap-5">
          <input
            placeholder="Email"
            className="text-white placeholder-white text-lg bg-transparent border-b border-white outline-none focus:border-none"
          />
        </div>
        <input
          placeholder="Mobile"
          className="text-white placeholder-white text-lg bg-transparent border-b border-white outline-none focus:border-none"
        />
        <textarea
          placeholder="Few Words About Your Investment"
          className="text-white placeholder-white text-lg bg-transparent border-b border-white outline-none focus:border-none "
        />
        <Button
          text=""
          style={{
            backgroundImage: `url(${backgroundImage})`,
            hover: { color: "red" },
          }}
          className="w-full justify-center sm:w-auto"
        />
      </form>
    </div>
  );
};

export default ContactForm;
