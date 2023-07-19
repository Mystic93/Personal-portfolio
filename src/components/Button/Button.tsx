import Aos from "aos";
import ButtonStyled from "./ButtonStyled";
import { useEffect } from "react";

interface ButtonProps {
  text?: string;
  className?: string;
  onClick?: () => void;
  dataAos?: string;
  children?: React.ReactElement;
}

const Button = ({
  text,
  className,
  onClick,
  dataAos,
  children,
}: ButtonProps): React.ReactElement => {
  useEffect(() => {
    Aos.init({ duration: 1000, easing: "ease-in-out-cubic", once: true });
  }, []);

  return (
    <ButtonStyled data-aos={dataAos} className={className} onClick={onClick}>
      {text}
      {children}
    </ButtonStyled>
  );
};

export default Button;
