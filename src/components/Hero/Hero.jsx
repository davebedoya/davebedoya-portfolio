import "./Hero.css";
import headshot from "../../assets/headshot.jpeg";
function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">
            MERN Stack · TripleTen Graduate · 2026
          </p>
          <h1 className="hero__title">Full-Stack Developer</h1>
          <p className="hero__subtitle">
            with a business operator&apos;s mindset.
          </p>
          <p className="hero__details">
            Corcoran Group · B.S. Economics · Bilingual EN/ES
          </p>

          <div className="hero__actions">
            <a
              className="hero__button hero__button_type_primary"
              href="#projects"
            >
              See Projects
            </a>
            <a
              className="hero__button hero__button_type_secondary"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Resume PDF
            </a>
          </div>

          <p className="hero__status">
            Open to work · NYC Area · Hybrid · Remote
          </p>
        </div>
        <img src={headshot} className="hero__image"></img>
      </div>
    </section>
  );
}

export default Hero;
