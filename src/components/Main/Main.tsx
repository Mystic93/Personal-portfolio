import About from "../About/About";
import Contact from "../Contact/Contact";
import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";
import { MainStyled } from "./MainStyled";
import { Element } from "react-scroll";

const Main = (): React.ReactElement => {
  return (
    <MainStyled>
      <Element name="home">
        <Hero />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </MainStyled>
  );
};

export default Main;
