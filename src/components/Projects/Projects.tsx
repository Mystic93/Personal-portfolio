import { ProjectsStyled } from "./ProjectsStyled";

const Projects = (): React.ReactElement => {
  return (
    <ProjectsStyled>
      <div className="projects-container">
        <h1 className="projects-title">Currently working on</h1>
        <h2>Pirate Haven</h2>
        <article className="projects-article">
          <img
            className="projects-article__picture"
            src="./images/PirateHaven.PNG"
            alt="App view"
            height={300}
          />

          <div className="projects-container__logos">
            <img
              src="./images/techicons/github-orange.svg"
              alt="Github logo"
              height={50}
              width={50}
            />

            <img
              src="./images/techicons/web-orange.svg"
              alt="Website logo"
              height={50}
              width={50}
            />
          </div>

          <span className="projects-article__info">For One Piece fans</span>
          <span className="projects-article__info">
            Clean, tested and mainteinable code
          </span>
          <span className="projects-article__info">
            CRUD built with React and TypeScript
          </span>
          <span className="projects-article__info">
            State management with redux
          </span>
          <span className="projects-article__info">Continuous integration</span>
          <span className="projects-article__info">Material UI</span>
          <span className="projects-article__info">User auth via JWT</span>
        </article>
      </div>

      <article className="github-container">
        <h2>Looking for more?</h2>
        <span className="github-container__info">Check out my GitHub!</span>
        <img
          className="github-container__icon"
          src="./images/techicons/github-orange.svg"
          alt="Github logo"
          height={50}
          width={50}
        />
      </article>
    </ProjectsStyled>
  );
};

export default Projects;
