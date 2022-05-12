interface ProjectProps {
  project: {
    title: string;
    usedTo: Array<string>;
    desc: string;
    mainImg: string;
    subImg: Array<string>;
    url: string;
    github: string;
  };
}

const Project = (props: ProjectProps) => {
  const { project } = props;
  console.log(project);

  return (
    <div>
      {/* <h3>{project.title}</h3> */}
      {/* <img src={project.mainImg} alt={project.title} /> */}
    </div>
  );
};

export default Project;
