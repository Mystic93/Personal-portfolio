import Aos from "aos";
import { techStack } from "../../utils/utils";
import AboutStyled from "./AboutStyled";
import { useEffect } from "react";

const About = (): React.ReactElement => {
  useEffect(() => {
    Aos.init({ duration: 1000, easing: "ease-in-out-cubic", once: true });
  }, []);

  return (
    <AboutStyled className="about">
      <section>
        <h1 className="about_title" data-aos="fade-right" data-aos-offset="300">
          About me
        </h1>
        <article
          className="about_article"
          data-aos="fade-right"
          data-aos-offset="300"
        >
          I love to create new ways of solving problems, taking advantage of my
          resolutive skills.
        </article>

        <article
          className="about_article"
          data-aos-offset="300"
          data-aos="fade-left"
        >
          With testing as my main strategy, I consider myself a clean code
          advocate, with special attention to maintainability and scalability.
        </article>

        <img
          data-aos="fade-left"
          className="hero_picture"
          src="./images/pol.webp"
          alt="Pol smiling"
        />

        <section className="about_education" data-aos="fade-right">
          <img
            className="about_hat-icon"
            src="./images/graduation-hat.webp"
            alt="Graduation hat icon"
            height={50}
            width={50}
          />
          <div className="about-education__info">
            <p className="about-education__titulation">
              Full-stack Web Developer
            </p>
            <p>ISDI CODERS 2023</p>
          </div>
        </section>
        <section className="about_education" data-aos="fade-left">
          <img
            className="about_hat-icon"
            src="./images/graduation-hat.webp"
            alt="Graduation hat icon"
            height={50}
            width={50}
          />
          <div className="about-education__info">
            <p className="about-education__titulation">Prosthetic Dental</p>
            <p>IES Salvador Segui 2014</p>
          </div>
        </section>
      </section>
      <section data-aos="fade-right">
        <h2 className="about_subtitle">My Stack</h2>

        <div className="about_icon-container">
          {techStack.map((stack) => {
            return (
              <img
                key={stack}
                height={60}
                alt={`${stack} logo`}
                src={`./images/techicons/${stack}-logo.svg`}
              ></img>
            );
          })}
        </div>
      </section>
    </AboutStyled>
  );
};

export default About;
