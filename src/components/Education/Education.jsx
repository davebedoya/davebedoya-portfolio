import "./Education.css";

function Education() {
  return (
    <section className="education" id="education">
      <div className="education__inner">
        <p className="education__section-label">Education</p>
        <div className="education__grid">
          <div className="education__card">
            <h3 className="education__degree">B.S. Business Economics</h3>
            <p className="education__school">SUNY Oneonta · 2017 – 2021</p>
            <p className="education__details">
              Corporate Finance · Stats · Mgmt Info Systems
            </p>
          </div>
          <div className="education__card education__card_type_featured">
            <h3 className="education__degree">Software Engineering Program</h3>
            <p className="education__school">TripleTen · May 2026</p>
            <p className="education__details">
              MERN · REST APIs · Deployment · Git
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
