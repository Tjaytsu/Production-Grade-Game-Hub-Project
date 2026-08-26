import logo from "../assets/logo.webp";
const NavBar = () => {
  return (
    <nav className="navbar">
      <img src={logo} className="img-thumbnail brand-logo" alt="..."></img>
      <p className="mb-3">NavBar</p>
    </nav>
  );
};

export default NavBar;
