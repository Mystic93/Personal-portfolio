import { styled } from "styled-components";

export const HeroStyled = styled.section`
  padding: 30px;
  background-color: ${(props) => props.theme.colors.dark};
  min-height: 100vh;

  .hero {
    padding-top: 50px;
  }

  .hero_subheading {
    color: ${(props) => props.theme.colors.yellow};
    font-weight: 600;
    margin: 0px;
    text-align: start;
    font-size: 20px;
  }

  .hero_name {
    color: ${(props) => props.theme.colors.bluesky};
    font-size: 3.8rem;
    margin: 0px;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .hero_title {
    color: ${(props) => props.theme.colors.bluesky};
    padding-bottom: 20px;
    font-size: 2.3rem;
    font-weight: 400;
    margin: 0px;
  }
  .hero_text {
    color: ${(props) => props.theme.colors.yellow};
    font-weight: 500;
    padding-top: 10px;
    text-align: left;
    font-size: 20px;
  }
`;

export const Name = styled.h1`
  color: ${(props) => props.theme.colors.bluesky};
  font-size: 2.8rem;
  margin: 0px;
`;

export const Dot = styled.span`
  color: ${(props) => props.theme.colors.bluesky};
`;
