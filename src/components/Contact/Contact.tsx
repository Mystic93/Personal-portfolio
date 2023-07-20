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
            I am always on the lookout for exciting opportunities. Whether you
            want to say hello or have any questions, my inbox is open and ready
            to connect.
          </p>

          <Button
            className="contact-article__button"
            text="Get in touch"
            dataAos="zoom-in"
            onClick={() => window.open("mailto:polgil24@hotmail.com")}
          />
          <a href="https://www.linkedin.com/in/pol-gil-usieto-5b9324280/">
            <img
              className="contact-article__logo"
              src="./images/techicons/linkedin-logo.svg"
              alt="Linkedin icon"
              width={70}
              height={70}
            />
          </a>
        </article>
        <p className="closing-info">
          {" "}
          <span>Built</span> and
          <span> designed</span> by Pol Gil
        </p>
      </div>
    </ContactStyled>
  );
};

export default Contact;
