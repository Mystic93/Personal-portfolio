import { styled } from "styled-components";

export const MainStyled = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.dark};

  .hero {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    &-headings {
      display: flex;
      flex-direction: column;
      &__presentation {
        color: ${(props) => props.theme.colors.bluesky};
        margin-bottom: 0;
        font-size: 2rem;
        align-self: center;
      }
      &__name {
        margin-top: 0;
        margin-bottom: 10px;
        font-size: 2rem;
        color: ${(props) => props.theme.colors.light};
      }
    }
  }

  .bio-profile-picture {
    border-radius: 30%;
  }
`;
