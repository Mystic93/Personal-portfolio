import { ContactStyled } from "./ContactStyled";

const Contact = (): React.ReactElement => {
  return (
    <ContactStyled>
      <div className="contact-container">
        <h1 className="contact-container__title">Contact</h1>
        <article className="contact-article">
          <p className="contact-article__presentation">
            I’m always looking for new oportunities. Whether you want to say hi
            or have a question. My inbox is always open.
          </p>
          <button className="contact-article__button">Get in touch</button>
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
