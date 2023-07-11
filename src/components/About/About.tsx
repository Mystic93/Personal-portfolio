import AboutStyled from "./AboutStyled";

const About = (): React.ReactElement => {
  return (
    <AboutStyled>
      <h1 className="about_title">About me</h1>
      <article className="about__article">
        I love to create new ways of solving problems, taking advantage of my
        resolutive skills.
      </article>
      <article className="about_article">
        With testing as my main strategy, I consider myself a clean code
        advocate, with special attention to maintainability and scalability.
      </article>
    </AboutStyled>
  );
};

export default About;
