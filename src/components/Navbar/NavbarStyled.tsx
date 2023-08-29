import styled from "styled-components";

const NavBarStyled = styled.nav`
  position: absolute;
  color: ${({ theme }) => theme.colors.primaryText};
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-right: 10vw;
  height: 60px;
  align-items: center;
  font-size: 2rem;

  @media (max-width: 899px) {
    display: none;
  }

  .navbar-container {
    &__links {
      cursor: pointer;
      padding-left: 50px;
      padding-right: 50px;
      gap: 21px;
      &:hover {
        color: ${(props) => props.theme.colors.yellow};
        text-decoration: underline;
      }

      .active {
        color: ${(props) => props.theme.colors.dark};
      }
    }
    &__button {
      background-color: ${(props) => props.theme.colors.yellow};
      padding-bottom: 50px;
      padding-left: 20px;
      padding-right: 150px;
      cursor: pointer;
      &:hover {
        color: ${(props) => props.theme.colors.dark};
      }
    }
  }
`;
export default NavBarStyled;
