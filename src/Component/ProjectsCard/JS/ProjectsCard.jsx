import React from "react";
import classes from "../CSS/ProjectsCard.module.css";

const ProjectsCard = ({ title, info, date, icons, link }) => {
  return (
    <div className={classes.ProjectsCard}>
      <div className={classes.ProjectsCard_Header}>
        <h3>
          📁{" "}
          <a href={link} rel="noreferrer" target="_blank">
            {title}
          </a>
        </h3>
      </div>
      <div className={classes.ProjectsCard_Info}>
        <p>{info}</p>
      </div>
      <div className={classes.ProjectsCard_Tech}>
        <p>Created on {date}</p>
        <div className={classes.ProjectsCard_Icons}>
          {icons.map((item) => (
            <div className={classes.ProjectsCard_Icon}>
              <img src={item} alt="tech" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
