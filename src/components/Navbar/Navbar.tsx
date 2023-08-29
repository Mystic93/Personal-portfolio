import { Link } from "react-scroll";
import Button from "../Button/Button";
import NavBarStyled from "./NavbarStyled";
import { url } from "../../utils/utils";

const handleOnClick = () => {
  window.location.href = url;
};

const Navbar = (): React.ReactElement => {
  return (
    <NavBarStyled>
      <ul className="navbar-container">
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
