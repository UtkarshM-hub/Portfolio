import React from "react";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div>
      <div className={classes.Home_First}>
        <div className={classes.Home_Intro}>
          <h1>Utkarsh Mandape</h1>
          <p>
            I am a MERN stack developer. I Love to explore and build things
            which excites me. I enjoy solving problems whether they are in day
            to day life or in development. I am an Open-Source enthusiast.
          </p>
          <div className={classes.Home_Links}>
            <a
              href="https://github.com/UtkarshM-hub"
              rel="noreferrer"
              target="_blank"
            >
              <div className={classes.Home_Circle}>
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
              <div className={classes.Home_Circle}>
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
              <div className={classes.Home_Circle}>
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
              <div className={classes.Home_Circle}>
                <img
                  src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-1024.png"
                  alt="Twitter"
                />
              </div>
            </a>
          </div>
        </div>
        <div className={classes.Home_Image}>
          <img
            src="https://res.cloudinary.com/dcglxmssd/image/upload/v1665079154/undraw_social_notifications_re_xcbi_ayv11f.svg"
            alt="first"
          />
        </div>
      </div>
      <div className={classes.Home_Header}>
        <h1>What I Do?</h1>
      </div>
      <div className={classes.Home_Second}>
        <div className={classes.Home_ImageSection}>
          <img
            src="https://res.cloudinary.com/dcglxmssd/image/upload/v1665081866/undraw_developer_activity_re_39tg_gk0rsf.svg"
            alt="alternative"
          />
        </div>
        <div className={classes.Home_Info}>
          <h2>MERN Stack Development</h2>
          <div className={classes.Home_Icons}>
            <img
              className={classes.Home_IconItem}
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
              alt="skill"
            />
            <img
              className={classes.Home_IconItem}
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
              alt="skill"
            />
            <img
              className={classes.Home_IconItem}
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
              alt="skill"
            />
            <img
              className={classes.Home_IconItem}
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
              alt="skill"
            />
            <img
              className={classes.Home_IconItem}
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"
              alt="skill"
            />
            <img
              className={classes.Home_IconItem}
              src="https://camo.githubusercontent.com/c10bbec541caa795eee7a0ada0415e2fe7c04b4f89aaa8ebc76e1d1ac2ede1d6/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f3435322f6d6f6e676f64622e706e67"
              alt="skill"
            />
            <img
              className={classes.Home_IconItem}
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png"
              alt="skill"
            />
            <img
              className={classes.Home_IconItem}
              src="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/npm_logo-256.png"
              alt="skill"
            />
          </div>
          <ul className={classes.Home_UnorderedList}>
            <li className={classes.Home_Lists}>
              Developing frontend using react js and CSS
            </li>
            <li className={classes.Home_Lists}>
              Backend server using Node JS and Express JS
            </li>
            <li className={classes.Home_Lists}>MongoDB as a NOSQL Database</li>
            <li className={classes.Home_Lists}>npm for package management</li>
          </ul>
        </div>
      </div>
      <div className={classes.Home_Second}>
        <div className={classes.Home_Info}>
          <h2>I am currently Learning</h2>
          <div className={classes.Home_Icons}>
            <img
              className={classes.Home_IconItem}
              src="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/404/c_logo-1024.png"
              alt="skill"
            />
            <img
              className={classes.Home_IconItem}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/322px-Go_Logo_Blue.svg.png"
              alt="skill"
            />
            <img
              className={classes.Home_IconItem}
              src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png"
              alt="skill"
            />
            <img
              className={classes.Home_IconItem}
              src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_linux-512.png"
              alt="skill"
            />
          </div>
          <ul className={classes.Home_UnorderedList}>
            <li className={classes.Home_Lists}>
              Solving Programming problems on LeetCode using C++
            </li>
            <li className={classes.Home_Lists}>
              Building Command Line tools using Golang
            </li>
            <li className={classes.Home_Lists}>
              Learning Docker to use it in my development process
            </li>
            <li className={classes.Home_Lists}>
              Learning Linux OS to get familiar with Linux environment
            </li>
          </ul>
        </div>
        <div className={classes.Home_ImageSection}>
          <img
            src="https://res.cloudinary.com/dcglxmssd/image/upload/v1665112857/undraw_programming_re_kg9v_1_nb3aya.svg"
            alt="sideimage"
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
