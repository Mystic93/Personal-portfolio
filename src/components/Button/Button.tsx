import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps): React.ReactElement => {
  return <ButtonStyled>{text}</ButtonStyled>;
};

export default Button;
