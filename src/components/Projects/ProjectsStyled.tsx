import styled from "styled-components";

export const ProjectsStyled = styled.section`
  display: flex;
  flex-direction: column;
  padding: 30px;
  min-height: 100vh;
  width: 100%;
  align-items: center;
  background-color: ${(props) => props.theme.colors.dark};
  min-width: 100vh;

  .projects-title {
    color: ${(props) => props.theme.colors.bluesky};
    text-align: center;
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: 20px;
  }

  h2 {
    color: ${(props) => props.theme.colors.yellow};
    font-size: 1.4rem;
    padding-bottom: 20px;
    display: flex;
    justify-content: center;
  }
  .github-container {
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    text-align: center;
    &__info {
      color: ${(props) => props.theme.colors.yellow};
      font-size: 1.4rem;
    }
    &__icon {
      display: flex;
      align-self: center;
      padding-top: 10px;
    }
  }

  .projects-article {
    color: ${(props) => props.theme.colors.bluesky};
    display: flex;
    align-items: center;
    flex-direction: column;

    &__info {
      display: flex;
      justify-content: center;
    }

    &__picture {
      border-radius: 8%;
    }
  }

  .projects-container__logos {
    gap: 20px;
    padding: 20px;
    display: flex;
    justify-content: center;
  }
`;
