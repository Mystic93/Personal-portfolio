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
  margin-top: 60px;

  @media (max-width: 899px) {
    display: none;
  }

  .switch {
    display: flex;
    align-items: center;
    background-color: white;
    border: solid 2px white;
    height: 30px;
    width: 60px;
    border-radius: 20px;
    margin-right: 45px;

    &__toggler {
      cursor: pointer;
      z-index: 6;
      height: 25px;
      width: 15px;
      position: absolute;
      opacity: 0;
      margin-left: 3px;
    }

    &__toggler:checked {
      cursor: pointer;
      z-index: 6;
      height: 25px;
      width: 15px;
      position: absolute;
      opacity: 0;
      margin-left: 36px;
    }

    &__button {
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.darkBackground};
      border: solid 2px ${({ theme }) => theme.colors.yellow};
      height: 19px;
      width: 19px;
      margin-left: 2px;
      border-radius: 20px;
      transition: all 0.3s;
    }
  }

  .navbar-container {
    display: flex;
    align-items: center;
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
