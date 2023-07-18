import Aos from "aos";
import { ContactStyled } from "./ContactStyled";
import { useEffect } from "react";
import Button from "../Button/Button";

const Contact = (): React.ReactElement => {
  useEffect(() => {
    Aos.init({ duration: 1000, easing: "ease-in-out-cubic", once: true });
  }, []);
  return (
    <ContactStyled>
      <div className="contact-container">
        <h1 className="contact-container__title" data-aos="fade-left">
          Contact
        </h1>
        <article className="contact-article">
          <p className="contact-article__presentation" data-aos="fade-left">
            I’m always looking for new oportunities. Whether you want to say hi
            or have a question. My inbox is always open.
          </p>

          <Button
            className="contact-article__button"
            text="Get in touch"
            dataAos="zoom-in"
          />
          <img
            className="contact-article__logo"
            src="./images/techicons/linkedin-logo.svg"
            alt="Linkedin icon"
            width={70}
            height={70}
          />
        </article>
        <p className="closing-info">
          {" "}
          <span>Built</span> and
          <span> designed</span> by Pol Gil Usieto
        </p>
      </div>
    </ContactStyled>
  );
};

export default Contact;
