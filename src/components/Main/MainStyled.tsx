import { styled } from "styled-components";

export const MainStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.dark};
`;
