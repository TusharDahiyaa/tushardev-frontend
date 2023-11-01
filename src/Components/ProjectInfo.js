import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import projects from "./projectsData";
import "../styles/projectInfo.css";

export default function ProjectInfo() {
  const { id } = useParams();

  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    // Check if projects is available before searching for the project
    if (projects && !isNaN(id)) {
      const project = projects.find((p) => p.id === parseInt(id, 10));
      setSelectedProject(project);
      // console.log("Projects:", projects);
      // console.log("ID:", id);
    }
  }, [id]);

  if (!selectedProject) {
    return (
      <div>
        <img src="" alt="placeholderImage" />
        <h2>Placeholder title</h2>
        <h4>To be released..</h4>
      </div>
    );
  }

  const handleTopPage = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <header className="sticky-top">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Tushar Dahiya
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbar-items"
              aria-controls="navbar-items"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbar-items">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/">
                    HOME
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#about">
                    ABOUT
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#skills">
                    SKILLS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#portfolio">
                    PORTFOLIO
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#contact">
                    CONTACT
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div className="projectInfo container">
        <div className="img-Container">
          <img
            className="project-Img"
            src={selectedProject.img}
            alt={selectedProject.title}
          />
        </div>
        <h2 className="project-Title">{selectedProject.title}</h2>
        <p>{selectedProject.desc1}</p>
        <p>{selectedProject.desc2}</p>
        <p>{selectedProject.desc3}</p>
        <button className="btn">
          <a href={selectedProject.githubLink}>View on GitHub</a>
        </button>
        <button className="btn">
          <a href={selectedProject.liveLink}>View Live Site</a>
        </button>
      </div>
      <div id="socials">
        <button className="btn top-btn" onClick={handleTopPage}>
          <img src="../../images/up-arrow.png" alt="" />
        </button>
        <hr />
        <p className="inline-social">
          <a href="https://www.facebook.com/tushardahiya20">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
        </p>
        <p className="inline-social">
          <a href="https://www.instagram.com/tushardahiyaa">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </p>
        <p className="inline-social">
          <a href="https://linkedin.com/in/tushardahiya/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </p>
        <p className="inline-social">
          <a href="https://github.com/TusharDahiyaa">
            <i className="fa-brands fa-github"></i>
          </a>
        </p>
        <footer>
          <p>
            <small>TUSHAR DAHIYA &copy; 2023</small>
          </p>
        </footer>
      </div>
    </>
  );
}
