import { useState } from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";
import { MainStyled } from "./MainStyled";
import { Element } from "react-scroll";
import Button from "../Button/Button";

const Main = (): React.ReactElement => {
  const [scrollVisible, setScrollVisivility] = useState(false);

  const toggleVisivility = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 50) {
      setScrollVisivility(true);
    } else if (scrolled <= 50) {
      setScrollVisivility(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisivility);

  return (
    <MainStyled>
      <Button className="scroll-button" onClick={scrollToTop}>
        <img
          className={scrollVisible ? "scrolled" : "arrow-up"}
          src="./images/up-arrow.svg"
          alt="Go to top arrow"
          width={25}
          height={25}
        />
      </Button>
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
