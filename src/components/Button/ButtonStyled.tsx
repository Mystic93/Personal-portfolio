import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: ${(props) => props.theme.colors.dark};
  color: ${(props) => props.theme.colors.light};
  border-radius: 40px;
  width: 100px;
  border: 0px;
  height: 30px;
`;

export default ButtonStyled;
