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
      <div className="projects-container" data-aos="zoom-in">
        <h1 className="projects-title">Currently working on</h1>
        <h2>Pirate Haven</h2>
        <article className="projects-article">
          <a href="https://pol-usieto-final-project-front-2023.netlify.app/pirates">
            <img
              className="projects-article__picture"
              src="./images/PirateHaven.PNG"
              alt="App view"
              height={300}
            />
          </a>
          <div className="projects-container__logos">
            <a href="https://github.com/Mystic93/PirateHaven-front">
              <img
                src="./images/techicons/github-orange.svg"
                alt="Github logo"
                height={50}
                width={50}
              />
            </a>
            <a href="https://pol-usieto-final-project-front-2023.netlify.app/pirates">
              <img
                src="./images/techicons/web-orange.svg"
                alt="Website logo"
                height={50}
                width={50}
              />
            </a>
          </div>

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
          <span className="projects-article__info">Continuous integration</span>
          <span className="projects-article__info">User auth via JWT</span>
          <span className="projects-article__info">Material UI</span>
        </article>
      </div>

      <article className="github-container">
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
