import styled from "styled-components";

export const AboutStyled = styled.section`
  background-color: ${(props) => props.theme.colors.light};
  display: flex;
  flex-direction: column;
  padding: 30px;
  flex-direction: column;

  .about_title {
    text-align: center;
    color: darkblue;
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: 0;
  }

  .about_article {
    text-align: left;
    color: ${(props) => props.theme.colors.dark};
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 24px;
  }
`;

export default AboutStyled;
