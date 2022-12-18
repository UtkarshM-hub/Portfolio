import React from "react";
import CertificateCard from "../Component/CertificateCard/JS/CertificateCard";
import InstituteCard from "../Component/InstituteCard/JS/InstituteCard";
import classes from "./Education.module.css";

const Education = () => {
  const firstInfo = [
    "I have studied Data structures and algorithms and operating system",
    "Learned languages like Javascript, C , C++ and Python",
    "Apart from the academics I was doing courses on MongoDB, Node JS, React JS and Data Structures and Algorithms and building projects using what I've learned",
    "I was also a part of NCC in my college which is worlds largest uniformed youth organization",
    "I scored 9.3 CGPA in the last year of my diploma",
  ];
  const SecondInfo = [
    "I have completed my primary education and scored 78% in my 10th board exam",
    "I was curious about the technology from my childhood and as a result I was learning programming when I was in 8th grade",
    "Apart from academics I was the sergeant of my NCC batch 2017-18 and led my troop in various events like independance day parade and republic day parade",
    "I have also participated in some sports competitions organized by the government",
  ];
  const thirdInfo = [
    "I am a member of Technical team of ACM club"
  ];

  const courseData = [
    {
      name: "Mastering Data Structures And Algorithm Using C and C++",
      image: "https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg",
      provider: "Udemy",
      link: "https://www.udemy.com/certificate/UC-b402d136-77f1-469d-809b-df9bdf0d1a6b/",
    },
    {
      name: "React The Complete Guide",
      image: "https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg",
      provider: "Udemy",
      link: "https://www.udemy.com/certificate/UC-c3812c5c-6727-4749-ab59-736d65e44e05/",
    },
  ];
  return (
    <div>
      <div className={classes.Education_}>
        <div className={classes.Education_ImageSection}>
          <img
            src="https://res.cloudinary.com/dcglxmssd/image/upload/v1665117141/undraw_certificate_re_yadi_jp4nsu.svg"
            alt="justAnImage"
          />
        </div>
        <div className={classes.Education_Info}>
          <h1>Education</h1>
          <p>Basic Education and Certificates</p>
          <div className={classes.Education_IconsContainer}>
            <a
              href="https://leetcode.com/Utkarsh_Mandape/"
              rel="noreferrer"
              target="_blank"
            >
              <div className={classes.Education_Icon}>
                <img
                  src="https://res.cloudinary.com/dcglxmssd/image/upload/v1665117415/leetcode_ad5uib.svg"
                  alt="icon"
                />
              </div>
            </a>
            <div className={classes.Education_Icon}>
              <img
                src="https://res.cloudinary.com/dcglxmssd/image/upload/v1665117509/udemy_c2wtkh.svg"
                alt="icon"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.Education_EducationInstitutes}>
      <InstituteCard
          name="Walchand College of Engineering Sangli"
          course="BTech in Information Technology"
          duration="2012-2025"
          info={thirdInfo}
          link="http://www.walchandsangli.ac.in/"
        />
        <InstituteCard
          name="Institute of petrochemical engineering Lonere"
          course="Diploma in Computer Engineering"
          duration="2019-2022"
          info={firstInfo}
          link="https://iopelonere.com/"
        />
        <InstituteCard
          name="Shri Venna Vidya Mandir Medha"
          course="Primary Education"
          duration="2014-2019"
          info={SecondInfo}
          link="https://www.schoolsworld.in/schools/showcollege.php?college_id=27310116801"
        />
      </div>
      <div className={classes.Education_Certificates}>
        <h1>Certificates</h1>
        <div className={classes.Education_CertificatesContainer}>
          {courseData.map((item) => (
            <CertificateCard
              key={Math.random() * 100}
              name={item.name}
              image={item.image}
              provider={item.provider}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Education;
