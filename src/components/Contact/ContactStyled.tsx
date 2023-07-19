import styled from "styled-components";

export const ContactStyled = styled.section`
  background-color: white;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0px 30px;
  align-items: center;

  .contact-container__title {
    display: flex;
    justify-content: center;
    color: ${(props) => props.theme.colors.aboutBlue};
    text-align: center;
    font-size: 1.8rem;
    font-weight: 500;
    padding: 20px;
  }

  .contact-article {
    font-weight: 400;
    font-size: 1.4rem;
    text-align: center;

    &__presentation {
      padding-bottom: 30px;
      line-height: 2;
    }

    &__logo {
    }

    &__button {
      background-color: ${(props) => props.theme.colors.yellow};
      padding: 0px;
      padding-left: 15px;
      padding-right: 15px;
      margin-top: 15px;
      display: flex;
      margin: 0 auto;
      margin-bottom: 30px;
      width: 130px;
      height: 40px;
      justify-content: center;
      align-items: center;
    }
  }

  .closing-info {
    text-align: center;
    font-size: 0.7rem;
  }

  span {
    color: ${(props) => props.theme.colors.yellow};
  }
`;
