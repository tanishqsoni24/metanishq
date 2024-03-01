import projects from "./projects.json";
import ProjectCard from "./ProjectCard";
import { useState } from "react";


export default function Projects() {

  const [filter, setFilter] = useState('all');
  const [message, setMessage] = useState(null);

  const filterProject = (e) => {
    const btns = document.querySelectorAll('.filter-options button');
    btns.forEach(btn => btn.classList.remove('selected'));
    e.target.classList.add('selected');
    setFilter(e.target.id);
  }

  const filteredProjects = projects.filter(project => {
    return project.category===filter || filter==='all';
  });

  return (
    <div
      id="projects-container"
      className="projects-container px-10 py-20 bg-slate-950"
      style={{ zIndex: 100, position: "relative" }}
    >
      <h3 className="text-white text-center text-3xl font-bold mb-10">
        <span className="text-sky-500"> Top</span> Projects
      </h3>

      {/* Filter Options - ALL, Frontend, Backend, FullStack */}

      <span className="text-white">{message}</span>

      <div className="filter-options flex justify-center gap-5 mb-7">
        <button id="all" className="btn border border-sky-500 px-3 py-2 rounded-md text-white selected" onClick={filterProject}>All</button>
        <button id="frontend" className="btn border border-sky-500 px-3 py-2 rounded-md text-white" onClick={filterProject}>Frontend</button>
        <button id="backend" className="btn border border-sky-500 px-3 py-2 rounded-md text-white" onClick={filterProject}>Backend</button>
        <button id="fullstack" className="btn border border-sky-500 px-3 py-2 rounded-md text-white" onClick={filterProject}>FullStack</button>
      </div>
      
      <div className="project-list flex flex-wrap gap-x-10 gap-y-16 justify-center">
        {filteredProjects.length===0 && <h3 className="text-white text-center text-2xl font-bold">No projects found</h3>}
        {
        filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            Name={project.Name}
            Desc={project.Desc}
            GithubLink={project.GithubLink}
            Demo={project.Demo}
            ImgSrc={project.ImgSrc}
            Category={project.category}
          />
        ))}

        {/* {message && <h3 className="text-white text-center text-2xl font-bold">{message}</h3>} */}
      </div>
    </div>
  );
}
