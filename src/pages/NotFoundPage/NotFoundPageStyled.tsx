import styled from "styled-components";

const NotFoundPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 28px;
  color: ${(props) => props.theme.colors.bluesky};
  background-color: ${(props) => props.theme.colors.dark};
  min-height: 100vh;
  padding: 30px;

  .notFound-container {
    &__image {
      margin-top: 50px;
      border-radius: 20%;
    }
  }
`;

export default NotFoundPageStyled;
