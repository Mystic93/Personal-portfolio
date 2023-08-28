import styled from "styled-components";

export const ProjectsStyled = styled.section`
  display: flex;
  flex-direction: column;
  padding: 30px;
  min-height: 100vh;
  width: 100%;
  align-items: center;
  background-color: ${(props) => props.theme.colors.darkBackground};

  .projects-title {
    color: ${(props) => props.theme.colors.primaryText};
    text-align: center;
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: 20px;
    width: 297px;
    @media (min-width: 900px) {
      font-size: 2.2rem;
      text-align: center;
      width: 100vh;
    }
    @media (min-width: 1200px) {
      font-size: 6rem;
      text-align: center;
      padding-bottom: 50px;
    }
  }

  .projects-title1 {
    @media (min-width: 900px) {
      position: absolute;
      top: 1px;
      right: 400px;
    }
  }

  h2 {
    color: ${(props) => props.theme.colors.yellow};
    font-size: 1.4rem;
    padding-bottom: 20px;
    display: flex;
    justify-content: center;
    @media (min-width: 900px) {
      font-size: 3rem;
      line-height: 20px;
      margin-bottom: 40px;
    }
  }
  .github-container {
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    @media (min-width: 900px) {
      padding-bottom: 50px;
      padding-top: 100px;
    }
    &__info {
      color: ${(props) => props.theme.colors.yellow};
      font-size: 1.4rem;
      @media (min-width: 900px) {
        font-size: 3rem;
      }
    }
    &__icon {
      display: flex;
      align-self: center;
      padding-top: 10px;
      @media (min-width: 900px) {
        width: 100px;
        height: 100px;
      }
    }
  }

  .logo {
    @media (min-width: 900px) {
      width: 70px;
      height: 70px;
    }
  }

  .projects-article {
    color: ${(props) => props.theme.colors.primaryText};
    display: flex;
    align-items: center;
    flex-direction: column;
    @media (min-width: 900px) {
      font-size: 2.2rem;
      flex-direction: row;
    }
    @media (min-width: 1200px) {
      font-size: 2.8rem;
      text-align: left;
    }

    &__info {
      display: flex;
      justify-content: center;
      @media (min-width: 900px) {
        font-size: 2.2rem;
        justify-content: left;
      }
    }

    &__picture {
      border-radius: 8%;
      @media (min-width: 900px) {
        width: 300px;
        height: 600px;
      }
    }
    &__picture2 {
      border-radius: 8%;
      width: 300px;
      height: 600px;
      @media (max-width: 899px) {
        display: none;
      }
    }
  }

  .info-container {
    @media (min-width: 900px) {
      align-self: end;
      position: absolute;
      top: 50px;
      right: 140px;
      position: absolute;
    }
  }

  .image-container {
    @media (min-width: 900px) {
      align-self: start;
      gap: 30px;
      display: flex;
    }
  }

  .projects-container {
    @media (min-width: 900px) {
      width: 100%;
    }
  }

  .projects-container__logos {
    gap: 20px;
    padding: 20px;
    display: flex;
    justify-content: center;
    @media (min-width: 900px) {
      position: absolute;
      top: 500px;
      right: 400px;
    }
  }
`;
