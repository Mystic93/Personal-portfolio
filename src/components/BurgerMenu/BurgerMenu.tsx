import { Link } from "react-scroll";
import Button from "../Button/Button";
import { MenuButton, MenuLinks } from "./BurgerMenuStyled";
import { useState } from "react";

const BurgerMenu = (): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MenuButton onClick={handleToggleMenu}>
        <div />
        <div />
        <div />
      </MenuButton>
      <MenuLinks open={isOpen}>
        <Link to="home" smooth={true} onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <Link to="about" smooth={true} onClick={() => setIsOpen(false)}>
          About
        </Link>
        <Link to="projects" smooth={true} onClick={() => setIsOpen(false)}>
          Projects
        </Link>
        <Link to="contact" smooth={true} onClick={() => setIsOpen(false)}>
          Contact
        </Link>
        <Button text="RESUME " className="burger-button" />
      </MenuLinks>
    </>
  );
};

export default BurgerMenu;
