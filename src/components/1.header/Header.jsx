import React, { useEffect, useState } from "react";
import "./Header.css";
import menuIcon from "../../assets/menu.png";
import moonIcon from "../../assets/moon.png";
import sunIcon from "../../assets/sun.png";
import closeIcon from "../../assets/close.png";

export default function Header() {

  const scrollToAbout = () => {
    const aboutElement = document.getElementById("about");
    if (aboutElement) {
      aboutElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const contactElement = document.getElementById("contact"); // Get the element with ID "contact"
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" }); // Scroll to the element
    }
  };
  const scrollToProjects = () => {
    const projectsElement = document.getElementById("projects");
    if (projectsElement) {
      projectsElement.scrollIntoView({ behavior: "smooth" });
    }
  };


  const [showModel, setShowModel] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );

  const toggleModel = () => {
    setShowModel(!showModel);
  };

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  return (
    <header className="flex">
      <button className="menu" onClick={toggleModel}>
        <img className="menuIcon" src={menuIcon} alt="Button Image" />
      </button>
      <div />
      <nav>
        <ul className="flex">
          <li>
          <a onClick={scrollToAbout}>About</a>
          </li>
          <li>
          <a onClick={scrollToProjects}>Projects</a>
          </li>
          <li>
            <a onClick={scrollToContact}>Contact</a>
          </li>
        </ul>
      </nav>

      <button
        onClick={() => {
          //send value to local storage
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );
          //get value from local storage
          setTheme(localStorage.getItem("currentMode"));
        }}
        className="mode"
      >
        {theme === "light" ? (
          <img className="moonIcon" src={moonIcon} alt="Moon Image" />
        ) : (
          <img className="sunIcon" src={sunIcon} alt="Sun Image" />
        )}
      </button>
      {showModel && (
        <div className="fixed">
          <ul className="model">
            <li>
              <button className="closeIcon" onClick={toggleModel}>
                <img className="closeIcon" src={closeIcon} alt="Close Image" />
              </button>{" "}
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
