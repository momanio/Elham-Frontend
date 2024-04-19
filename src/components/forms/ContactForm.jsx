import Button from "../UI/Button";
const ContactForm = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <form className="flex flex-col gap-2 justify-center text-black w-full">
        <div className="flex flex-col justify-center items-center">
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
          text="Get in Touch"
          style={{ hover: { color: "white" } }}
          className=""
        />
      </form>
    </div>
  );
};

export default ContactForm;
