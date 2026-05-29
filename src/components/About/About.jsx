import "./About.css";
import headshot from "../../assets/headshot.jpeg";

function About() {
  return (
    <section className="about" id="about">
      <div className="about__inner">
        <p className="about__section-label">About</p>
        <div className="about__card">
          <div className="about__content">
            <h2 className="about__headline">Software engineer.</h2>
            <p className="about__subheadline">Business operator. Lifelong learner.</p>
            <div className="about__chips">
              <span className="about__chip about__chip_type_gold">B.S. Economics</span>
              <span className="about__chip about__chip_type_gold">Corcoran · 2yr</span>
              <span className="about__chip">EN / ES</span>
              <span className="about__chip about__chip_type_green">BJJ Instructor</span>
              <span className="about__chip about__chip_type_blue">TripleTen · May 2026</span>
              <span className="about__chip">First-Gen Grad</span>
            </div>
          </div>
          <div className="about__photo-wrapper">
            <img src={headshot} className="about__photo" alt="David Bedoya" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
