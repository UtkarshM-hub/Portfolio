import React from "react";
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <>
      <div className={classes.Contact}>
        <div className={classes.Contact_Image}>
          <img
            src="https://res.cloudinary.com/dcglxmssd/image/upload/v1665138087/Desktop_-_1_qeedzr.png"
            alt="profile"
          />
        </div>
        <div className={classes.Contact_Info}>
          <h1>Contact Me</h1>
          <p>
            You can reach me out through social media links and email provided
            below. I can help you about web development and conmmand line tool
            development.✌
          </p>
          <div className={classes.Contact_Email}>
            <h3>
              Email:<span>utmandape4@gmail.com</span>
            </h3>
          </div>
          <div className={classes.Contact_Links}>
            <a
              href="https://github.com/UtkarshM-hub"
              rel="noreferrer"
              target="_blank"
            >
              <div className={classes.Contact_Circle}>
                <img
                  src="https://cdn0.iconfinder.com/data/icons/font-awesome-brands-vol-1/512/github-256.png"
                  alt="github"
                />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/utkarsh-mandape-3a94a0197/"
              rel="noreferrer"
              target="_blank"
            >
              <div className={classes.Contact_Circle}>
                <img
                  src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-256.png"
                  alt="Linkedin"
                />
              </div>
            </a>
            <a
              href="https://www.instagram.com/utkarshmandape/"
              rel="noreferrer"
              target="_blank"
            >
              <div className={classes.Contact_Circle}>
                <img
                  src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_instagram-256.png"
                  alt="Instagram"
                />
              </div>
            </a>
            <a
              href="https://twitter.com/MandapeUtkarsh"
              rel="noreferrer"
              target="_blank"
            >
              <div className={classes.Contact_Circle}>
                <img
                  src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-1024.png"
                  alt="Twitter"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
