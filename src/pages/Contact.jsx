import ContactForm from "../components/forms/ContactForm";

const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-center bg-no-repeat bg-cover  flex items-center justify-center"
    >
      <h1 className="text-center text-4xl font-bold">Get In Touch</h1>
      <ContactForm />
    </div>
  );
};

export default Contact;
