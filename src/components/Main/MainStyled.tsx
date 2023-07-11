import { styled } from "styled-components";

export const MainStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  overflow: hidden;

  @keyframes blink {
    50% {
      color: transparent;
    }
  }
  .loading-dot {
    animation: 1s blink infinite;
  }
  .loading-dot:nth-child(2) {
    animation-delay: 250ms;
  }
  .loading-dot:nth-child(3) {
    animation-delay: 500ms;
  }
`;
