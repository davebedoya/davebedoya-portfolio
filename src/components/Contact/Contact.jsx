import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__inner">
        <div className="contact__card">
          <h2 className="contact__headline">Let&apos;s build something.</h2>
          <p className="contact__subtext">
            Open to junior full-stack and front-end roles · Manhattan / NYC / Remote
          </p>
          <div className="contact__actions">
            <a
              href="mailto:david@example.com"
              className="contact__button contact__button_type_primary"
            >
              Email David
            </a>
            <a
              href="https://linkedin.com/in/davebedoya"
              target="_blank"
              rel="noreferrer"
              className="contact__button contact__button_type_ghost"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/davebedoya"
              target="_blank"
              rel="noreferrer"
              className="contact__button contact__button_type_ghost"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
