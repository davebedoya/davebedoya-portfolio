import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__left">
          <span className="footer__name">David Bedoya</span>
          <span className="footer__role">Full-Stack Developer · NYC</span>
        </div>
        {/* <div className="footer__links">
          <a href="mailto:david@example.com" className="footer__link">Email</a>
          <a href="https://linkedin.com/in/davebedoya" target="_blank" rel="noreferrer" className="footer__link">LinkedIn</a>
          <a href="https://github.com/davebedoya" target="_blank" rel="noreferrer" className="footer__link">GitHub</a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="footer__link">Resume</a>
        </div> */}
        <p className="footer__copy">
          © {new Date().getFullYear()} David Bedoya
        </p>
      </div>
    </footer>
  );
}

export default Footer;
