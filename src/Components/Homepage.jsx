import React, { useState, useEffect, useRef } from "react";
import Jobs from "./Jobs";
import Resume from "./Resume";
import { motion } from "framer-motion";
import globe from "../static/globe-bg.png";
import { useTranslation, useLocalization } from "./Localization";
export default function Homepage() {
  const t = useTranslation();
  const [state, setState] = useState({
    isScrolled: false,
    activeAboutMe: 1,
    showLangDD: false,
  });
  const { languages, language, setLanguage } = useLocalization();
  const languageList = Object.entries(languages).map((values) => ({
    code: values[0],
    name: values[1].name,
  }));
  const navLinks = [
    {
      link: "/resume/#",
      title: t("skills"),
    },
    {
      link: "/resume/#resume",
      title: t("resume"),
    },
    {
      link: "/resume/#jobs",
      title: t("jobs"),
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
          <section id="home">
            <nav>
              <div
                id="wrapper"
                // style={{ direction: language != "fa" ? "ltr" : "rtl" }}
              >
                <ul>
                  <div className="globe">
                    <img src={globe} />
                    <div className="languages">
                      {languageList.map((it) => (
                        <button
                          className="langButton"
                          key={it.code}
                          value={it.code}
                          onClick={(e) => setLanguage(it.code)}
                        >
                          {it.name}
                          {it.code === "fa" && (
                            <img src="https://img.icons8.com/fluency/20/000000/iran-circular.png" />
                          )}
                          {it.code === "de" && (
                            <img src="https://img.icons8.com/fluency/20/000000/germany-circular.png" />
                          )}
                          {it.code === "en" && (
                            <img src="https://img.icons8.com/color/20/000000/great-britain-circular.png" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

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
          </section>
        </div>
      </div>
      <div className="resumeWrapper">
        <section
          id="resume"
          style={{ paddingRight: language != "fa" ? "5px" : "45px" }}
        >
          <Resume />
        </section>
      </div>
      <section id="jobs">
        <Jobs />
      </section>
{/* 
      {state.isScrolled ? (
        <button className="scrollButton" onClick={() => backToTop()}>
          <lord-icon
            src="https://cdn.lordicon.com/rvuqcvqy.json"
            trigger="loop"
            colors="primary:#ffffff,secondary:#ffffff"
            style={{ width: "35px", height: "35px" }}
          ></lord-icon>
        </button>
      ) : null} */}
      {/* <footer>
        <AiFillGithub size={45} color={"#666"} />
        <AiFillLinkedin size={45} color={"#666"} />
      </footer> */}
    </>
  );
}
