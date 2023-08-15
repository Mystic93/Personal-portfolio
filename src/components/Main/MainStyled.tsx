import { styled, keyframes } from "styled-components";

const zoomInOutAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(2.1);
  }
  100% {
    transform: scale(1);
  }
`;

export const MainStyled = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .scroll-button {
    display: flex;
    position: absolute;
    bottom: 30px;
    right: 30px;
    z-index: 20;
    width: 30px;
    transition: all 0.4s;

    cursor: pointer;
  }
  .arrow-up {
    opacity: 0;
    transition: all 0.4s;
  }

  img.scrolled {
    opacity: 100;
    transition: all 0.4s;
    animation: ${zoomInOutAnimation} 1s ease 0s 1 normal none running;
    display: flex;
    position: fixed;
    bottom: 30px;
    @media (min-width: 900px) {
      width: 50px;
      height: 50px;
      bottom: 80px;
      right: 80px;
    }
  }
`;
