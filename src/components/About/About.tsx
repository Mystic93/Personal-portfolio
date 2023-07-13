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
