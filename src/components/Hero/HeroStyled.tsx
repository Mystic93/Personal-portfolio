import { styled } from "styled-components";

export const HeroStyled = styled.section`
  padding: 30px;
  background-color: ${(props) => props.theme.colors.darkBackground};
  min-height: 100vh;
  height: 100%;

  .hero {
    padding-top: 50px;
    @media (min-width: 1100px) {
      margin-left: 80px;
      font-size: 2rem;
      padding-top: 130px;
    }
  }

  .hero_subheading {
    color: ${(props) => props.theme.colors.primaryText};
    font-weight: 600;
    margin: 0px;
    text-align: start;
    font-size: 20px;

    @media (min-width: 700px) {
      font-size: 1.5rem;
      margin-left: 20px;
    }
    @media (min-width: 900px) {
      margin-left: 40px;
    }
    @media (min-width: 1100px) {
      margin-left: 80px;
      font-size: 2rem;
    }
    @media (min-width: 1300px) {
      margin-left: 100px;
      font-size: 2.5rem;
    }
  }

  .hero_name {
    color: ${(props) => props.theme.colors.yellow};
    font-size: 3.8rem;
    margin: 0px;
    padding-top: 20px;
    padding-bottom: 20px;
    @media (min-width: 700px) {
      font-size: 3rem;
      margin-left: 20px;
    }

    @media (min-width: 900px) {
      font-size: 4rem;
      margin-left: 40px;
    }

    @media (min-width: 1100px) {
      margin-left: 80px;
      font-size: 5rem;
    }

    @media (min-width: 1300px) {
      margin-left: 100px;
      font-size: 11rem;
    }
  }

  .hero_title {
    color: ${(props) => props.theme.colors.secondaryText};
    padding-bottom: 20px;
    font-size: 2.3rem;
    font-weight: 400;
    margin: 0px;
    font-family: ${(props) => props.theme.fonts.primary};

    @media (min-width: 700px) {
      font-size: 3rem;
      font-size: 4rem;
      margin-left: 20px;
    }
    @media (min-width: 900px) {
      font-size: 3rem;
      font-size: 4rem;
      margin-left: 40px;
    }
    @media (min-width: 1100px) {
      margin-left: 80px;
    }
    @media (min-width: 1300px) {
      margin-left: 100px;
      font-size: 6rem;
    }
  }
  .hero_text {
    color: ${(props) => props.theme.colors.primaryText};
    font-weight: 500;
    padding-top: 10px;
    text-align: left;
    font-size: 20px;
    padding-bottom: 30px;

    @media (min-width: 700px) {
      width: 40%;
      margin-left: 20px;
    }
    @media (min-width: 900px) {
      width: 40%;
      margin-left: 40px;
    }
    @media (min-width: 1100px) {
      margin-left: 80px;
      font-size: 1.5rem;
    }
    @media (min-width: 1300px) {
      margin-left: 100px;
      font-size: 2.5rem;
    }
  }
`;

export const Name = styled.h1`
  color: ${(props) => props.theme.colors.bluesky};
  font-size: 2.8rem;
  margin: 0px;
`;

export const Dot = styled.span`
  color: ${(props) => props.theme.colors.secondaryText};
`;
