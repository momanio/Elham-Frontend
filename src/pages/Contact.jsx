import ContactForm from "../components/forms/ContactForm";

const Contact = () => {
  return (
    <section
      id="contact"
      className="h-screen bg-center bg-no-repeat bg-cover  flex items-center justify-center"
    >
      <h1 className="text-center text-4xl font-bold">Get In Touch</h1>
      <ContactForm />
    </section>
  );
};

export default Contact;
