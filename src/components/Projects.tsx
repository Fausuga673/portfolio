import { useState } from "react";
import projectsList from "../mocks/projects.tsx";
import "../css/projects.css";

function Project() {
  const [projects] = useState(projectsList);

  return (
    <>
      {projects.map((project, index) => (
        <article key={index} className={project.id + " projects__project"}>
          <video src={project.video} autoPlay loop muted></video>
          <p className="projects__project--title">{project.title}</p>
          <div className="projects__project--bottom">
            <div className="projects__project--bottom-imgContainer">
              {project.technologies.map((technology, index) => (
                <img
                  key={index}
                  src={`https://skillicons.dev/icons?i=${technology}`}
                />
              ))}
            </div>
            <div className="projects__project--bottom-buttons">
              <a href={project.link} target="_blank">
                Visitar
              </a>
              <a href={project.github} target="_blank">
                {"<code/>"}
              </a>
            </div>
          </div>
        </article>
      ))}
    </>
  );
}

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="projects__title">
        <span>PRO</span>
        <span>YEC</span>
        <span>TOS</span>
      </h2>
      <Project />
    </section>
  );
}

export default Projects;
