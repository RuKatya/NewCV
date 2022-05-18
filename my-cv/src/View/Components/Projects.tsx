import React, { useEffect, useState } from "react";
import axios from "axios";
import Project from "./Project/Project";

const Projects = () => {
  const [projects, setProjects] = useState<any[]>([]);
  useEffect(() => {
    async function getData() {
      await axios.get("/getProjects").then((res) => {
        setProjects(res.data);
      });
    }

    getData();
  }, []);

  useEffect(() => {
    console.log(projects);
  });
  return (
    <>
      {projects ? (
        <div className="projects">
          <h2>Projects</h2>
          {/* {projects.map((project: any) => {
            return <div>{project.title}</div>;
          })} */}
          {projects.map((project: any) => {
            return <Project project={project} />;
          })}
        </div>
      ) : (
        <div>loading</div>
      )}
    </>
  );
};

export default Projects;
