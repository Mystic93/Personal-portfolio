import Aos from "aos";
import { HeroStyled, Name, Dot } from "./HeroStyled";
import { useEffect } from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const Hero = (): React.ReactElement => {
  useEffect(() => {
    Aos.init({ duration: 1000, easing: "ease-in-out-cubic", once: true });
  }, []);

  return (
    <HeroStyled>
      <BurgerMenu />

      <div className="hero">
        <p data-aos="fade-down" className="hero_subheading">
          Hi, I am
        </p>
        <Name className="hero_name" data-aos="fade-left">
          Pol Gil Usieto<Dot>.</Dot>
        </Name>
        <h2 className="hero_title" data-aos="fade-right">
          I create stuff for the web.
        </h2>

        <p data-aos="fade-up" className="hero_text">
          I am a passionate software engineer, dedicated to discovering
          innovative solutions while crafting exceptional digital experiences.
        </p>
      </div>
    </HeroStyled>
  );
};

export default Hero;
