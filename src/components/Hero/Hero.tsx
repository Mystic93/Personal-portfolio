import { HeroStyled, Name, Dot } from "./HeroStyled";

const Hero = (): React.ReactElement => {
  return (
    <HeroStyled>
      <div className="hero">
        <p className="hero_subheading">Hi, I am</p>
        <Name className="hero_name">
          Pol Gil Usieto<Dot>.</Dot>
        </Name>
        <h2 className="hero_title">I create stuff for the web</h2>

        <p className="hero_text">
          I am a software engineer, who loves to find new ways of solving
          problems while building great digital experiences.
        </p>
      </div>
    </HeroStyled>
  );
};

export default Hero;
