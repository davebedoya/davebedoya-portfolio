import "./About.css";
import headshot from "../../assets/headshot.jpeg";

function About() {
  return (
    <section className="about" id="about">
      <div className="about__inner">
        <p className="about__section-label">About</p>
        <div className="about__card">
          <div className="about__content">
            <h2 className="about__headline">Software Engineer.</h2>
            <p className="about__subheadline">Lifelong learner.</p>
            <div className="about__bio">
              <p className="about__bio-text">
                I’m a full-stack software engineer with a background in finance,
                operations, and client-facing business roles. Before
                transitioning into software development, I worked in real estate
                finance at Corcoran Group and supported business operations
                across multiple industries.
              </p>
              <p className="about__bio-text">
                Today, I build web applications using JavaScript, React,
                Node.js, Express, and MongoDB. I enjoy solving technical
                problems, creating intuitive user experiences, and continuously
                improving through hands-on projects, technical interview
                preparation, and lifelong learning.s
              </p>
              <p className="about__bio-text">
                Outside of software engineering, I coach youth Brazilian
                Jiu-Jitsu, compete as a blue belt, and enjoy helping others
                develop confidence and discipline through structured
                instruction.
              </p>
            </div>
            <div className="about__chips">
              <span className="about__chip about__chip_type_gold">
                B.S. Economics
              </span>
              <span className="about__chip about__chip_type_gold">
                Corcoran · 2yr
              </span>
              <span className="about__chip">EN / ES</span>
              <span className="about__chip about__chip_type_green">
                BJJ Instructor
              </span>
              <span className="about__chip about__chip_type_blue">
                TripleTen · May 2026
              </span>
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
