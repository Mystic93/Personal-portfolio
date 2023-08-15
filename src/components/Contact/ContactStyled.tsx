import styled from "styled-components";

export const ContactStyled = styled.section`
  background-color: ${(props) => props.theme.colors.lightBackground};
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0px 30px;
  align-items: center;
  @media (min-width: 900px) {
    justify-content: space-between;
  }

  .contact-container__title {
    display: flex;
    justify-content: center;
    color: ${(props) => props.theme.colors.aboutBlue};
    text-align: center;
    font-size: 1.8rem;
    font-weight: 500;
    padding: 20px;
    @media (min-width: 900px) {
      font-size: 2.2rem;
      text-align: center;
    }
    @media (min-width: 1200px) {
      font-size: 6rem;
      text-align: center;
    }
  }

  img {
    margin-top: 30px;
    margin-bottom: 20px;
  }

  .contact-article {
    font-weight: 400;
    font-size: 1.4rem;
    text-align: center;

    &__presentation {
      padding-bottom: 30px;
      line-height: 2;
      @media (min-width: 900px) {
        font-size: 2.2rem;
        text-align: center;
      }
      @media (min-width: 1200px) {
        font-size: 3.2rem;
        text-align: center;
      }
    }

    &__logo {
      @media (min-width: 700px) {
        width: 60px;
      }

      @media (min-width: 900px) {
        width: 200px;
        height: 90px;
      }
    }

    &__button {
      background-color: ${(props) => props.theme.colors.yellow};
      padding: 0px;
      padding-left: 15px;
      padding-right: 15px;
      margin-top: 15px;
      display: flex;
      margin: 0 auto;
      width: 130px;
      height: 40px;
      justify-content: center;
      align-items: center;
      font-size: 15px;
      @media (min-width: 900px) {
        font-size: 2rem;
        height: 100px;
        width: 250px;
        cursor: pointer;
        margin-top: 60px;
        margin-bottom: 60px;
      }
    }
  }

  .closing-info {
    text-align: center;
    font-size: 0.7rem;
    @media (min-width: 900px) {
      font-size: 2rem;
      margin-top: 130px;
    }
    @media (min-width: 1110px) {
      font-size: 2rem;
      margin-top: 100px;
    }
  }

  span {
    color: ${(props) => props.theme.colors.yellow};
  }
`;
