import "./Projects.css";
import wtwrScreenshot from "../../assets/wtwr3.jpeg";
import newsexplorerScreenshot from "../../assets/newsexplorer.jpeg";
import holidayNavigatorsScreenshot from "../../assets/holidaynavigators.jpeg";

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects__inner">
        <p className="projects__section-label">Featured Work</p>

        {/* Featured wide card */}
        <div className="projects__card projects__card_type_featured">
          <div className="projects__card-media">
            {/* <span className="projects__card-placeholder">
              WTWR Live Screenshot
            </span> */}
            <img
              src={wtwrScreenshot}
              alt="WTWR Live Screenshot"
              className="projects__card-image"
            />
          </div>
          <div className="projects__card-body">
            <div className="projects__card-badges">
              <span className="projects__badge projects__badge_type_gold">
                Full-Stack
              </span>
              <span className="projects__badge projects__badge_type_gold">
                Deployed
              </span>
            </div>
            <h3 className="projects__card-title">What to Wear (WTWR)</h3>
            <p className="projects__card-subtitle">
              Weather-based clothing recommender
            </p>
            <p className="projects__card-stack">
              React · Node · MongoDB · Google Cloud · Nginx · PM2
            </p>
            <p className="projects__card-description">
              Full auth · REST API · live weather · production server
            </p>
            <div className="projects__card-links">
              <a
                href="https://wtwr.ubeagle.com/"
                className="projects__link projects__link_type_live"
              >
                Live ↗
              </a>
              <a
                href="https://github.com/davebedoya/se_project_react"
                className="projects__link"
              >
                GitHub Frontend ↗
              </a>
              <a
                href="https://github.com/davebedoya/se_project_express"
                className="projects__link"
              >
                GitHub Backend ↗
              </a>
              {/* <a href="#" className="projects__link">
                Case Study ↗
              </a> */}
            </div>
          </div>
        </div>

        {/* Two-card row */}
        <div className="projects__grid">
          <div className="projects__card">
            <div className="projects__card-media">
              <img
                src={newsexplorerScreenshot}
                alt="News Explorer Live Screenshot"
                className="projects__card-image"
              />
            </div>
            <div className="projects__card-body">
              <div className="projects__card-badges">
                <span className="projects__badge">JWT</span>
                <span className="projects__badge">News API</span>
              </div>
              <h3 className="projects__card-title">News Explorer</h3>
              <p className="projects__card-subtitle">
                Authenticated article search
              </p>
              <p className="projects__card-stack">
                React · Express · JWT · Vite
              </p>
              <div className="projects__card-links">
                <a
                  href="https://davebedoya.github.io/news-explorer-frontend/"
                  className="projects__link projects__link_type_live"
                >
                  Live ↗
                </a>
                <a
                  href="https://github.com/davebedoya/news-explorer-frontend"
                  className="projects__link"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </div>

          <div className="projects__card">
            <div className="projects__card-media projects__card-media_type_gold">
              {/* <span className="projects__card-placeholder">
                Holiday Navigators
              </span> */}
              <img
                src={holidayNavigatorsScreenshot}
                alt="Holiday Navigators Live Screenshot"
                className="projects__card-image"
              />
              <span className="projects__card-award">Code Jam Winner</span>
            </div>
            <div className="projects__card-body">
              <h3 className="projects__card-title">Holiday Navigators</h3>
              <p className="projects__card-subtitle">
                Holiday travel planning platform
              </p>
              <p className="projects__card-stack">
                HTML · CSS · JavaScript · Team Collaboration
              </p>
              <p className="projects__card-description">Team · 1st Place</p>
              <div className="projects__card-links">
                <a
                  href="https://fancy-faloodeh-695333.netlify.app/"
                  className="projects__link projects__link_type_live"
                >
                  Live ↗
                </a>
                <a
                  href="https://github.com/sensey0702/Project_CJ"
                  className="projects__link"
                >
                  GitHub ↗
                </a>
                <a
                  href="https://www.youtube.com/live/_RwDrjKGR2c?si=4l_US6SFgcKAUwto&t=1890"
                  className="projects__link"
                >
                  Code Jam ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
