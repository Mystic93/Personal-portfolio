import { techStack } from "../../utils/utils";
import AboutStyled from "./AboutStyled";

const About = (): React.ReactElement => {
  return (
    <AboutStyled className="about">
      <h1 className="about_title">About me</h1>
      <article className="about_article">
        I love to create new ways of solving problems, taking advantage of my
        resolutive skills.
      </article>

      <article className="about_article">
        With testing as my main strategy, I consider myself a clean code
        advocate, with special attention to maintainability and scalability.
      </article>

      <img className="hero_picture" src="./images/pol.webp" alt="Pol smiling" />

      <section className="about_education">
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
      <section className="about_education">
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
    </AboutStyled>
  );
};

export default About;
