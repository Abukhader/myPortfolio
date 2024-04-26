import React, { useState, useRef } from "react";
import "./About.css";
import myProjects from "../../myProjects";
import githubIcon from "../../assets/github.png";
import rightArrowIcon from "../../assets/rightArrow.png";
import { AnimatePresence, motion } from "framer-motion"



export default function About() {
  const aboutRef = useRef(null);

  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);

  const handleClick = (buttonCategory) => {
    setcurrentActive(buttonCategory);
    const newArr = myProjects.filter((item) => {
      const smallArr = item.category.find((myIetm) => {
        return myIetm === buttonCategory;
      });
      return smallArr === buttonCategory;
    });
    setArr(newArr);
  };

  return (
    <main className="flex">
      <section className="left-section flex" ref={aboutRef}>
        <button
          onClick={() => {
            setcurrentActive("all");
            setArr(myProjects);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          All Projects
        </button>

        <button
          onClick={() => {
            handleClick("react");
          }}
          className={currentActive === "react" ? "active" : null}
        >
          React Project
        </button>

        <button
          onClick={() => {
            handleClick("flutter");
          }}
          className={currentActive === "flutter" ? "active" : null}
        >
          Flutter Projects
        </button>

        <button
          onClick={() => {
            handleClick("fullStack");
          }}
          className={currentActive === "fullStack" ? "active" : null}
        >
          Full-Stack Projects
        </button>
        <button
          onClick={() => {
            handleClick("bootstrap");
          }}
          className={currentActive === "bootstrap" ? "active" : null}
        >
          Bootstrap Projects
        </button>
        <button
          onClick={() => {
            handleClick("inProgress");
          }}
          className={currentActive === "inProgress" ? "active" : null}
        >
          Projects under development
        </button>

      </section>

      <section className="right-section flex" id="projects">
        {arr.map((item) => {
          return (
            <AnimatePresence key={item.id}>
              <motion.div
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{type: "spring", damping: 8, stiffness: 100}}
                key={item.id} className="card ">
              
                <img className="homeImage" src={item.imgPath} alt={item.alt} />
              
                <div className="box">
                  <h1 className="title">{item.projectTitle}</h1>
                  <p className="sub-title">{item.projectP}</p>
                  <div className="icons flex">
                    <div style={{ gap: "10px" }} className="flex">
                      <img src={githubIcon} href={item.href} />
              
                    </div>
                    <div>
                      <a href={item.href} className="link flex" target="_blank" rel="noopener noreferrer">
                        GitHub Link
                        <img src={rightArrowIcon} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          );
        })}
      </section>
    </main>
  );
}
