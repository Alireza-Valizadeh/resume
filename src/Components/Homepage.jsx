import React, { useState, useEffect, useRef } from "react";
import Jobs from "./Jobs";
import Resume from "./Resume";
import { motion } from "framer-motion";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
export default function Homepage() {
  const [state, setState] = useState({
    isScrolled: false,
    activeAboutMe: 1,
  });
  const AboutMes = [
    {
      firstTitle: " اسم من1 ",
      secondTitle: "علیرضا ولی زاده است",
      paragraph:
        "من یک برنامه نویس Full-stack در بخش وب و هم چنین دارای مدرک کارشناسی مهندسی عمران از دانشگاه فردوسی مشهد هستم",
    },
    {
      firstTitle: " اسم من 2",
      secondTitle: "2علیرضا ولی زاده است",
      paragraph:
        "من یک برنامه نویس Full-stack در بخش وب و هم چنین دارای مدرک کارشناسی مهندسی عمران از دانشگاه فردوسی مشهد هستم",
    },
    {
      firstTitle: " اسم من3 ",
      secondTitle: "3علیرضا ولی زاده است",
      paragraph:
        "من یک برنامه نویس Full-stack در بخش وب و هم چنین دارای مدرک کارشناسی مهندسی عمران از دانشگاه فردوسی مشهد هستم",
    },
  ];
  const interval = setInterval(() => {
    setState((prevState) => ({
      ...prevState,
      activeAboutMe:
        state.activeAboutMe === AboutMes.length - 1
          ? 0
          : state.activeAboutMe + 1,
    }));
    clearInterval(interval);
  }, 5000);

  const navLinks = [
    {
      link: "/resume/#",
      title: "مهارت ها",
    },
    {
      link: "/resume/#resume",
      title: "نمونه کار ها",
    },
    {
      link: "/resume/#jobs",
      title: "سابقه شغلی",
    },
  ];
  let handleShow = (boolean) => {
    // console.log(state.activeAboutMe);
    setState((prevState) => ({
      ...prevState,
      isScrolled: boolean,
    }));
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", {});
    };
  }, []);
  const backToTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };
  const reactRef = useRef(null);
  const nodeRef = useRef(null);
  const mysqlRef = useRef(null);
  const mongoRef = useRef(null);
  const mssqlRef = useRef(null);
  const ts = useRef(null);
  const html = useRef(null);
  const css = useRef(null);
  const csharp = useRef(null);
  return (
    <>
      <div className="homePage">
        <div className="bg-home">
          <div className="example-container">
            <motion.div className="drag-area-react" ref={reactRef}>
              <motion.div drag dragConstraints={reactRef} className="react" />
            </motion.div>
            <motion.div className="drag-area-node" ref={nodeRef}>
              <motion.div drag dragConstraints={nodeRef} className="node" />
            </motion.div>
            <motion.div className="drag-area-mysql" ref={mysqlRef}>
              <motion.div drag dragConstraints={mysqlRef} className="mysql" />
            </motion.div>
            <motion.div className="drag-area-mongo" ref={mongoRef}>
              <motion.div drag dragConstraints={mongoRef} className="mongo" />
            </motion.div>
            <motion.div className="drag-area-mssql" ref={mssqlRef}>
              <motion.div drag dragConstraints={mssqlRef} className="mssql" />
            </motion.div>
            <motion.div className="drag-area-ts" ref={ts}>
              <motion.div drag dragConstraints={ts} className="ts" />
            </motion.div>
            <motion.div className="drag-area-html" ref={html}>
              <motion.div drag dragConstraints={html} className="html" />
            </motion.div>
            <motion.div className="drag-area-css" ref={css}>
              <motion.div drag dragConstraints={css} className="css" />
            </motion.div>
            <motion.div className="drag-area-csharp" ref={csharp}>
              <motion.div drag dragConstraints={csharp} className="csharp" />
            </motion.div>
          </div>

          {/* <div className="mysql"></div> */}
          {/* <div className="node"></div>
          <div className="mongo"></div> */}
          <section id="home">
            <nav>
              <div id="wrapper">
                <ul>
                  {navLinks.map((item, index) => (
                    <li className="different" key={index * 13}>
                      <a href={item.link} key={index}>
                        <span className="aLink" key={index * 12}>
                          {item.title}{" "}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
            {/* <div className="about-me">
              <h2> {AboutMes[state.activeAboutMe].firstTitle} </h2>
              <h1> {AboutMes[state.activeAboutMe].secondTitle} </h1>
              <br />
              <p> {AboutMes[state.activeAboutMe].paragraph} </p>
              <ProgressCircles isActive={state.activeAboutMe} />
            </div> */}
          </section>
        </div>
      </div>
      <div className="resumeWrapper">
        <section id="resume">
          <Resume />
        </section>
      </div>
      <section id="jobs">
        <Jobs />
      </section>

      {state.isScrolled ? (
        <button className="scrollButton" onClick={() => backToTop()}>
          <lord-icon
            src="https://cdn.lordicon.com/rvuqcvqy.json"
            trigger="loop"
            colors="primary:#ffffff,secondary:#ffffff"
            style={{ width: "35px", height: "35px" }}
          ></lord-icon>
        </button>
      ) : null}
      {/* <footer>
        <AiFillGithub size={45} color={"#666"} />
        <AiFillLinkedin size={45} color={"#666"} />
      </footer> */}
    </>
  );
}
