import Projects from "../Projects/Projects.jsx";
import Journey from "../Journey/Journey.jsx";
import About from "../About/About.jsx";
import Skills from "../Skills/Skills.jsx";
import Education from "../Education/Education.jsx";
import Contact from "../Contact/Contact.jsx";
import "./Main.css";

function Main() {
  return (
    <main className="main">
      <Projects />
      <Journey />
      <About />
      <Skills />
      <Education />
      <Contact />
    </main>
  );
}

export default Main;
