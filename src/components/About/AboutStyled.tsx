import styled from "styled-components";

export const AboutStyled = styled.section`
  background-color: ${(props) => props.theme.colors.lightBackground};
  display: flex;
  flex-direction: column;
  padding: 30px;
  flex-direction: column;
  min-height: 100vh;
  @media (min-width: 900px) {
    align-items: center;
  }

  .about_title {
    text-align: center;
    color: ${(props) => props.theme.colors.aboutBlue};
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: 20px;
    @media (min-width: 900px) {
      font-size: 2.2rem;
      text-align: center;
    }
    @media (min-width: 1200px) {
      font-size: 6rem;
      text-align: center;
    }
  }

  .about_subtitle {
    text-align: center;
    color: ${(props) => props.theme.colors.aboutBlue};
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: 20px;
    margin-top: 20px;
    @media (min-width: 900px) {
      text-align: center;
      font-size: 2.2rem;
    }
    @media (min-width: 1200px) {
      font-size: 4rem;
      text-align: center;
      padding-top: 80px;
    }
  }

  .about_education {
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
    padding: 10px;
    @media (min-width: 900px) {
      justify-content: center;
    }
    @media (min-width: 1200px) {
      justify-content: center;
    }
  }
  .about-education__info {
    display: flex;
    flex-direction: column;
    @media (min-width: 900px) {
      font-size: 2rem;
      line-height: 20px;
      margin-bottom: 30px;
    }
    @media (min-width: 1200px) {
      font-size: 2rem;
      margin-bottom: 30px;
    }
  }

  .about_icon-container {
    padding: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 15px;
    width: 80vw;
    justify-content: center;
    @media (min-width: 900px) {
      justify-content: center;
    }
    @media (min-width: 1200px) {
      justify-content: center;
      padding-bottom: 80px;
    }
  }

  .tech-icons {
    @media (min-width: 900px) {
      width: 100px;
      height: 100px;
    }
    @media (min-width: 1200px) {
      width: 100px;
      height: 100px;
    }
  }

  .about_hat-icon {
    @media (min-width: 900px) {
      width: 100px;
      height: 100px;
    }
    @media (min-width: 1200px) {
      width: 100px;
      height: 100px;
    }
  }
  .about-education__titulation {
    color: ${(props) => props.theme.colors.aboutBlue};
    @media (min-width: 900px) {
      font-size: 3rem;
      line-height: 20px;
      margin-bottom: 40px;
    }
    @media (min-width: 1200px) {
      font-size: 3rem;
      margin-bottom: 40px;
    }
  }

  .about_article {
    text-align: left;
    color: ${(props) => props.theme.colors.dark};
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    padding: 10px;
    @media (min-width: 900px) {
      font-size: 2.2rem;
      text-align: center;
      line-height: 1.5;
    }
    @media (min-width: 1200px) {
      font-size: 3.2rem;
      text-align: center;
      line-height: 1.5;
    }
  }
  .about_picture {
    @media (min-width: 900px) {
      display: flex;
      justify-content: center;
      padding: 20px;
    }
    @media (min-width: 1200px) {
      display: flex;
      justify-content: center;
      padding: 20px;
    }
  }
  .hero_picture {
    border-radius: 20%;
    padding: 20px;
    @media (min-width: 900px) {
      width: 600px;
    }
  }
`;

export default AboutStyled;
