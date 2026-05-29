import "./Header.css";
import NavBar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Stack from "../Stack/Stack";

function Header() {
  return (
    <header className="header">
      <NavBar />
      <Hero />
      <Stack />
    </header>
  );
}

export default Header;
