import React from "react";
import classes from "../CSS/InstituteCard.module.css";

const InstituteCard = ({ name, course, duration, info, link }) => {
  return (
    <div className={classes.InstituteCard}>
      <div className={classes.InstituteCard_Heading}>
        <div className={classes.InstituteCard_Basic}>
          <h3>{name}</h3>
          <h4>{course}</h4>
        </div>
        <div className={classes.InstituteCard_Duration}>{duration}</div>
      </div>
      <div className={classes.InstituteCard_Info}>
        <ul>
          {info.map((item) => (
            <li
              className={classes.InstituteCard_ListItem}
              key={Math.random() * 100}
            >
              {item}
            </li>
          ))}
        </ul>
        <a href={link} rel="noreferrer" target="_blank">
          <button className={classes.InstituteCard_VisitBtn}>
            visit website
          </button>
        </a>
      </div>
    </div>
  );
};

export default InstituteCard;
