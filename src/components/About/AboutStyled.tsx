import styled from "styled-components";

export const AboutStyled = styled.section`
  background-color: ${(props) => props.theme.colors.light};
  display: flex;
  flex-direction: column;
  padding: 30px;
  flex-direction: column;
  height: 100vh;

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

  .about_article {
    text-align: left;
    color: ${(props) => props.theme.colors.dark};
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
  }
  .hero_picture {
    border-radius: 20%;
    padding: 20px;
  }
`;

export default AboutStyled;
