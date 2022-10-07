import React from "react";
import ProjectsCard from "../Component/ProjectsCard/JS/ProjectsCard";
import classes from "./Projects.module.css";

const Projects = () => {
  const projectData = [
    {
      title: "Chat_Application",
      info: "Web Application containing features like messaging, payments and inventory management",
      created: "2022-01-19",
      link: "https://github.com/UtkarshM-hub/Chat_Application",
      Icons: [
        "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png",
        "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png",
        "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png",
        "https://camo.githubusercontent.com/c10bbec541caa795eee7a0ada0415e2fe7c04b4f89aaa8ebc76e1d1ac2ede1d6/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f3435322f6d6f6e676f64622e706e67",
      ],
    },
    {
      title: "GO_CRUD_API",
      info: "A CRUD_API developed using golang",
      created: "2022-09-15",
      link: "https://github.com/UtkarshM-hub/Go_CRUD_API",
      Icons: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/322px-Go_Logo_Blue.svg.png",
      ],
    },
    {
      title: "Go_Todo_CLI_Tool",
      info: "A command line tool to manage todo list",
      created: "2022-09-01",
      link: "https://github.com/UtkarshM-hub/Go_Todo_CLI_Tool",
      Icons: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/322px-Go_Logo_Blue.svg.png",
      ],
    },
    {
      title: "Social-Media",
      info: "Simple social media website with feature of post and like",
      created: "2022-01-06",
      link: "https://github.com/UtkarshM-hub/Social-Media",
      Icons: [
        "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png",
        "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png",
        "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png",
        "https://camo.githubusercontent.com/c10bbec541caa795eee7a0ada0415e2fe7c04b4f89aaa8ebc76e1d1ac2ede1d6/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f3435322f6d6f6e676f64622e706e67",
      ],
    },
  ];

  return (
    <>
      <div className={classes.Projects_Head}>
        <div className={classes.Projects_ImageContainer}>
          <img
            src="https://res.cloudinary.com/dcglxmssd/image/upload/v1665125348/undraw_version_control_re_mg66_sdlz5e.svg"
            alt="hero"
          />
        </div>
        <div className={classes.Projects_Info}>
          <h1>Projects</h1>
          <p>
            My projects are of various types like command line applications, web
            applications and static websites created using Golang, MongoDB,
            Express Js, React Js and Node JS respectively
          </p>
        </div>
      </div>
      <div className={classes.Projects_Container}>
        {projectData.map((item) => (
          <ProjectsCard
            title={item.title}
            info={item.info}
            date={item.created}
            icons={item.Icons}
            link={item.link}
          />
        ))}
      </div>
      <div className={classes.Projects_Last}>
        <button className={classes.Projects_More}>
          <a
            rel="noreferrer"
            href="https://github.com/UtkarshM-hub"
            target="_blank"
          >
            Load More
          </a>
        </button>
      </div>
    </>
  );
};
export default Projects;
