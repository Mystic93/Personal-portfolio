import About from "../About/About";
import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";
import { MainStyled } from "./MainStyled";

const Main = (): React.ReactElement => {
  return (
    <MainStyled>
      <Hero />
      <About />
      <Projects />
    </MainStyled>
  );
};

export default Main;
