import styled from "styled-components";

export const MenuButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 24px;
  cursor: pointer;
  position: absolute;
  right: 20px;

  div {
    width: 30px;
    height: 3px;
    background-color: ${(props) => props.theme.colors.primaryText};
  }
`;

export const MenuLinks = styled.div<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.light};
  position: absolute;
  top: 60px;
  right: 20px;
  width: 150px;
  height: ${({ open }) => (open ? "250px" : "0")};
  transition: height 0.3s ease-in-out;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.lightBackground};
  z-index: 1;
  border-radius: 5px;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.aboutBlue};
    padding: 10px 0;
    transition: color 0.2s;

    &:hover {
      color: ${(props) => props.theme.colors.dark};
    }
  }
  .burger-button {
    margin-top: 10px;
    background-color: ${(props) => props.theme.colors.darkBackground};
  }
`;
