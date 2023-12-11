import Footer from "../components/Footer";
import Header from "../components/Header";

const Contact = () => {

  const handleContactSubmit = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const message = event.target.message.value;

    console.log(email,message);
  }

  return (
    <>
      <Header />
      <p>Page contact</p>
      <form onSubmit={handleContactSubmit}>
        <label>
          Email
          <input type="text" name="email" />
        </label>
        <label>
          Message
          <input type="text" name="message" />
        </label>
        <input type="submit" />
      </form>
      <Footer />
    </>
  );
};

export default Contact;