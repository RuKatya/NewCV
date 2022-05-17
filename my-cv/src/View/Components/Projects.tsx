import React, { useEffect, useState } from "react";
import axios from "axios";
import Project from "./Project/Project";

const Projects = () => {
  const [projects, setProjects] = useState<any[]>([]);
  useEffect(() => {
    async function getData() {
      await axios.get("/getProjects").then((res) => {
        // setProjects(res.data);
      });
    }

    getData();
  }, []);

  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="projects__eachProject">
        {projects ? (
          <div className="projects">
            {projects.map((project: any) => {
              return <Project project={project} />;
            })}
          </div>
        ) : (
          <div className="lds-default">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
