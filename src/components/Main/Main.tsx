import About from "../About/About";
import Hero from "../Hero/Hero";
import { MainStyled } from "./MainStyled";

const Main = (): React.ReactElement => {
  return (
    <MainStyled>
      <Hero />
      <About />
    </MainStyled>
  );
};

export default Main;
