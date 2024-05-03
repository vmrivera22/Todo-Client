import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import check from "../assets/check.png";

const Header = () => {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} href="/">
        <img
          src={check}
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Todo List
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="/help">Help</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
