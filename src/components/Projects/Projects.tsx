import { ProjectsStyled } from "./ProjectsStyled";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Projects = (): React.ReactElement => {
  useEffect(() => {
    Aos.init({ duration: 1000, easing: "ease-in-out-cubic", once: true });
  }, []);

  return (
    <ProjectsStyled>
      <h1
        className="projects-title"
        data-aos="slide-right"
        data-aos-offset="600"
      >
        Currently working on
      </h1>
      <div className="projects-container">
        <article
          className="projects-article"
          data-aos="zoom-in"
          data-aos-offset="650"
        >
          <h2
            className="projects-title1"
            data-aos="zoom-in"
            data-aos-offset="650"
          >
            Pirate Haven
          </h2>
          <div className="image-container">
            <a href="https://pol-usieto-final-project-front-2023.netlify.app/pirates">
              <img
                className="projects-article__picture"
                src="./images/PirateHaven.PNG"
                alt="App view"
                height={300}
              />
            </a>
            <a href="https://pol-usieto-final-project-front-2023.netlify.app/pirates">
              <img
                className="projects-article__picture2"
                src="./images/PirateHaven3.PNG"
                alt="App view"
                height={300}
              />
            </a>
            <a href="https://pol-usieto-final-project-front-2023.netlify.app/pirates">
              <img
                className="projects-article__picture2"
                src="./images/PirateHaven2.PNG"
                alt="App view"
                height={300}
              />
            </a>
          </div>
          <div className="projects-container__logos">
            <a href="https://github.com/Mystic93/PirateHaven-front">
              <img
                className="logo"
                src="./images/techicons/github-orange.svg"
                alt="Github logo"
                height={50}
                width={50}
              />
            </a>
            <a href="https://pol-usieto-final-project-front-2023.netlify.app/pirates">
              <img
                className="logo"
                src="./images/techicons/web-orange.svg"
                alt="Website logo"
                height={50}
                width={50}
              />
            </a>
          </div>
          <div className="info-container">
            <span className="projects-article__info">Clean code</span>
            <span className="projects-article__info">For One Piece fans</span>
            <span className="projects-article__info">
              Tested and mainteinable
            </span>
            <span className="projects-article__info">
              CRUD with React and TypeScript
            </span>
            <span className="projects-article__info">
              State management with redux
            </span>
            <span className="projects-article__info">
              Continuous integration
            </span>
            <span className="projects-article__info">User auth via JWT</span>
            <span className="projects-article__info">Material UI</span>
          </div>
        </article>
      </div>

      <article
        className="github-container"
        data-aos="fade-left"
        data-aos-offset="650"
      >
        <h2>Looking for more?</h2>
        <span className="github-container__info">Check out my GitHub!</span>
        <a href="https://github.com/Mystic93">
          <img
            className="github-container__icon"
            src="./images/techicons/github-orange.svg"
            alt="Github logo"
            height={50}
            width={50}
          />
        </a>
      </article>
    </ProjectsStyled>
  );
};

export default Projects;
