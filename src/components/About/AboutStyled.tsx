import styled from "styled-components";

export const AboutStyled = styled.section`
  background-color: ${(props) => props.theme.colors.lightBackground};
  display: flex;
  flex-direction: column;
  padding: 30px;
  flex-direction: column;
  min-height: 100vh;

  .about_title {
    text-align: center;
    color: ${(props) => props.theme.colors.aboutBlue};
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: 20px;
  }

  .about_subtitle {
    text-align: center;
    color: ${(props) => props.theme.colors.aboutBlue};
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: 20px;
    margin-top: 20px;
  }

  .about_education {
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
    padding: 10px;
  }
  .about-education__info {
    display: flex;
    flex-direction: column;
  }

  .about_icon-container {
    padding: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 15px;
    width: 80vw;
    justify-content: center;
  }

  .about-education__titulation {
    color: ${(props) => props.theme.colors.aboutBlue};
  }

  .about_article {
    text-align: left;
    color: ${(props) => props.theme.colors.dark};
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    padding: 10px;
  }
  .hero_picture {
    border-radius: 20%;
    padding: 20px;
  }
`;

export default AboutStyled;
