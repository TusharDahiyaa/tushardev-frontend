import React, { useState } from "react";
import "../styles/homepage.css";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import projects from "./projectsData";

export default function Homepage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    // send data to backend here
    try {
      let result = await fetch("https://tushardev-api.onrender.com/signUp", {
        method: "post",
        body: JSON.stringify({ name, email, message }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      var form = document.getElementById("signUpForm");

      result = await result.json();
      console.warn(result);
      if (result && form.checkValidity()) {
        swal({
          title: "Oh Great!",
          text: "Thanks for reaching out. I'll get back to you shortly! \n You can explore my socials for now",
          icon: "success",
          button: "Yesssss!",
        });
        setName("");
        setEmail("");
        setMessage("");
      } else {
        swal({
          title: "You didn't fill the form yet!😞",
          text: "Please try again!",
          icon: "error",
          button: "OK",
        });
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  const handleTopPage = () => {
    window.scrollTo(0, 0);
  };

  const moveToAboutSection = () => {
    window.scrollTo({ top: 700, left: 0, behavior: "smooth" });
  };

  const moveToSkillSection = () => {
    window.scrollTo({ top: 1700, left: 0, behavior: "smooth" });
  };

  const moveToProjectSection = () => {
    window.scrollTo({ top: 2150, left: 0, behavior: "smooth" });
  };

  const moveToContactSection = () => {
    window.scrollTo({ top: 3150, left: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="start-page" id="start-page">
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="animate-character">
                Hello, I'm Tushar Dahiya.
                <br />
                I'm a Full Stack Developer.
              </h1>
            </div>
          </div>
        </div>
      </div>
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
                  <a
                    className="nav-link"
                    aria-current="page"
                    href={() => false}
                    onClick={handleTopPage}
                  >
                    HOME
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href={() => false}
                    onClick={moveToAboutSection}
                  >
                    ABOUT
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href={() => false}
                    onClick={moveToSkillSection}
                  >
                    SKILLS
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href={() => false}
                    onClick={moveToProjectSection}
                  >
                    PORTFOLIO
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href={() => false}
                    onClick={moveToContactSection}
                  >
                    CONTACT
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div id="about">
        <h2>ABOUT</h2>
        <hr />
        <div id="about-image">
          <img src="../../images/photo-portfolio-1.jpg" alt="my-pic" />

          <p>
            I'm a highly motivated individual with a passion for learning new
            technologies. I'm a full-stack developer based in India with
            expertise in the{" "}
            <b>MERN (MongoDB, Express.js, React.js, Node.js) stack</b>, and a
            strong passion for crafting exceptional web applications and
            recently completed the <b>MERN stack bootcamp</b>, equipping me with
            the skills to craft modern web applications. As a bilingual person
            fluent in both <b>German and English</b>, I bring a unique
            perspective to Full Stack Development.
            <br />
            <br />
            My insatiable curiosity and unwavering enthusiasm are what fuel my
            drive to remain at the forefront of technological advancements
            within the industry. I'm committed to continuous learning and I
            thrive on the opportunity to employ the most cutting-edge
            technologies to engineer innovative solutions. If you are in search
            of a developer with a versatile skill set and an unrelenting
            commitment to delivering outstanding web applications, I would be
            delighted to connect with you and explore opportunities for
            collaboration on your next project.
          </p>
        </div>
        <h3>My Roles</h3>
        <hr />
        <div id="role-body">
          <div id="front-end">
            <h5>Front-End Developer:</h5>
            <p>
              In my role as a front-end developer, I'm dedicated to crafting
              engaging user interfaces. I utilize HTML5, CSS3, and JavaScript to
              create visually stunning experiences, and I rely on React.js to
              build interactive components that ensure a seamless and
              captivating user journey.
            </p>
          </div>
          <div id="back-end">
            <h5>Back-End Developer:</h5>
            <p>
              As a back-end developer, I excel in constructing the server-side
              components of applications. My toolkit includes Node.js and
              Express.js, which I use for efficient routing, server logic
              management, and seamless database interactions. MongoDB, paired
              with Mongoose, is my go-to solution for robust data storage and
              retrieval.
            </p>
          </div>
          <div id="db-mngmt">
            <h5>Database Management:</h5>
            <p>
              Beyond back-end development, I bring a wealth of experience in
              database management to the table. Whether it's data storage,
              retrieval, or modeling, I efficiently handle these tasks using
              MongoDB and Mongoose. This expertise guarantees the smooth
              operation and organization of data within the MERN stack.
            </p>
          </div>
        </div>
      </div>
      <div id="skills">
        <h2>SKILLS</h2>
        <hr />
        <div id="skill-types">
          <div className="card">
            <h3>Frontend</h3>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>ReactJS</li>
              <li>Typescript</li>
              <li>Bootstrap 5</li>
            </ul>
          </div>
          <div className="card">
            <h3>Backend</h3>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
              <li>Restful APIs</li>
            </ul>
          </div>
          <div className="card">
            <h3>Database</h3>
            <ul>
              <li>SQL (MySQL)</li>
              <li>NoSQL (MongoDB)</li>
            </ul>
          </div>
        </div>
      </div>
      <div id="portfolio">
        <h2>PROJECTS</h2>
        <hr />
        <div id="project-list">
          {projects.map((project) => (
            <div className="projectGrid" key={project.id}>
              <div className="imgContainer">
                <img
                  className="imgMain"
                  src={project.img}
                  alt="projectImg"
                  key={project.img}
                />
              </div>
              <Link to={`/project/${project.id}`}>
                <h4>{project.title}</h4>
                <br />
                <button className="btn">Read More</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div id="contact">
        <h2>CONTACT</h2>
        <hr />
        <h3>Have a question or want to work together?</h3>
        <div className="container">
          <form action="/signUp" id="signUpForm">
            <div className="mb-1">
              {/* <label for="name">Name: </label> */}
              <input
                type="text"
                name="name"
                value={name}
                placeholder="Enter your full name"
                id="name"
                className="form-control"
                autoComplete="on"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-1">
              {/* <label for="email">Email Address: </label> */}
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Enter your email address"
                id="email"
                className="form-control"
                autoComplete="on"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-0">
              {/* <label for="message">Message: </label> */}
              <textarea
                className="form-control"
                name="message"
                value={message}
                placeholder="Enter your message"
                id="message"
                rows="5"
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <small id="emailHelp" className="form-text text-secondary">
                We'll never share your contact information with anyone else.
              </small>
              <br />
              <button
                type="submit"
                onClick={handleOnSubmit}
                className="btn"
                id="submitBtn"
              >
                Submit
              </button>
              <br />
              <br />
            </div>
          </form>
        </div>
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
