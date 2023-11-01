import "./App.css";
import Homepage from "./Components/Homepage";
import ParticlesBG from "./Components/ParticlesBG";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProjectInfo from "./Components/ProjectInfo";
import projects from "./Components/projectsData";
import { useEffect, useState } from "react";

export default function App() {
  // eslint-disable-next-line
  const [project, setProject] = useState(null);

  useEffect(() => {
    // Simulate fetching the project data (replace with your actual data loading code)
    setProject(projects);
    // console.log("Projects in App:", projects);
  }, []);

  return (
    <>
      <ParticlesBG />
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/project/:id"
            element={<ProjectInfo project={projects} />}
          />
        </Routes>
      </Router>
    </>
  );
}
