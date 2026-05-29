import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <div className="navbar__identity">
          <h2 className="navbar__identity_name">David Bedoya</h2>
          <h3 className="navbar__identity_profession">
            Full-Stack Developer · NYC
          </h3>
        </div>
        <div className="navbar__links">
          <a href="#projects" className="navbar__link">
            Work
          </a>
          <a href="#about" className="navbar__link">
            About
          </a>
          <a href="#skills" className="navbar__link">
            Skills
          </a>
          <a href="#contact" className="navbar__link">
            Contact
          </a>
          <a href="#contact" className="navbar__link navbar__link_cta">
            Hire Me →
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
