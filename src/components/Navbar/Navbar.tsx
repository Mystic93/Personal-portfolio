import { Link } from "react-scroll";
import Button from "../Button/Button";
import NavBarStyled from "./NavbarStyled";
import { url } from "../../utils/utils";

const handleOnClick = () => {
  window.location.href = url;
};
interface NavbarProps {
  themeAction: () => void;
}

const Navbar = ({ themeAction }: NavbarProps): React.ReactElement => {
  return (
    <NavBarStyled>
      <ul className="navbar-container">
        <div className="switch">
          <label htmlFor="burger-menu"> </label>
          <input
            onClick={themeAction}
            type="checkbox"
            className="switch__toggler"
            id="burger-menu"
            name="burger-menu"
            readOnly
          />

          <div className="switch__button" />
        </div>
        <Link
          className="navbar-container__links"
          to="about"
          smooth={true}
          duration={500}
        >
          About
        </Link>
        <Link
          className="navbar-container__links"
          to="projects"
          smooth={true}
          duration={500}
        >
          Projects
        </Link>
        <Link
          className="navbar-container__links"
          to="contact"
          smooth={true}
          duration={500}
        >
          Contact
        </Link>
        <Button
          className="navbar-container__button"
          text="Resume"
          onClick={handleOnClick}
        />
      </ul>
    </NavBarStyled>
  );
};

export default Navbar;
