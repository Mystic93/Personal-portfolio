import { styled } from "styled-components";

export const HeroStyled = styled.div`
  padding: 30px;
  background-color: ${(props) => props.theme.colors.dark};
  min-height: 100vh;

  .hero_subheading {
    color: ${(props) => props.theme.colors.light};
    font-weight: 600;
    margin: 0px;
  }
  .hero_title {
    color: ${(props) => props.theme.colors.light};
    font-size: 2.3rem;
    font-weight: 400;
    margin: 0px;
  }
  .hero_text {
    color: ${(props) => props.theme.colors.yellow};
    font-weight: 500;
    padding-top: 10px;
  }

  .hero_picture {
    border-radius: 20%;
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
