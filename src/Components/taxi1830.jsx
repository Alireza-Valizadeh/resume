import React, { useRef, useState } from "react";
import adlDriverImg1 from "../static/18301.png";
import adlDriverImg2 from "../static/18302.png";
import adlDriverImg3 from "../static/18303.png";
import adlDriverImg4 from "../static/18304.png";
import adlDriverImg5 from "../static/18305.png";
import adlDriverImg6 from "../static/18306.png";
import { useHistory } from "react-router";
import { useEffect } from "react";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
import { useTranslation, useLocalization } from "./Localization";
export default function Taxi1830(props) {
  const history = useHistory();
  const { languages, language, setLanguage } = useLocalization();
  const t = useTranslation();
  const [state, setState] = useState({
    activeSlider: 1,
    activeImageUrl: adlDriverImg1,
    selectedImg: 0,
    isOpen: false,
  });
  const images = [
    { url: adlDriverImg1, title: t("login_page") },
    { url: adlDriverImg2, title: t("registering_trip") },
    { url: adlDriverImg3, title: t("registered_addresses") },
    { url: adlDriverImg4, title: t("stations_radius") },
    { url: adlDriverImg5, title: t("online_phone") },
    { url: adlDriverImg6, title: t("searching_trip") },
  ];

  const buttons = [1, 2, 3, 4, 5, 6];

  const zoom = useRef();

  useEffect(() => {
    zoom.current.scrollIntoView(false);
  }, []);

  return (
    <div
      className="mainWrapper"
      style={{ direction: language != "fa" ? "ltr" : "rtl" }}
    >
      <div className="button-up" onClick={() => history.push("/#")} ref={zoom}>
        {" "}
      </div>
      <div className="main">
        {/* <img src={title} /> */}
        {/* <iframe
          src="https://carbon.now.sh/embed?bg=rgba%28243%2C243%2C247%2C1%29&t=seti&wt=none&l=stylus&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%2520%2520%2520%2520%2520%2520%2520%2520%253Cheader%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch3%253E%2520%25D8%25A2%25DA%2598%25D8%25A7%25D9%2586%25D8%25B3%25201830%2520%25D9%2585%25D8%25B4%25D9%2587%25D8%25AF%2520%253C%252Fh3%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch4%253E%2520%25D9%25BE%25D9%2586%25D9%2584%2520%25D8%25A7%25D9%25BE%25D8%25B1%25D8%25A7%25D8%25AA%25D9%2588%25D8%25B1%2520%25D8%25AA%25D9%2584%25D9%2581%25D9%2586%2520%25D9%2588%2520%25D8%25A8%25DB%258C%25D8%25B3%25DB%258C%25D9%2585%2520%253C%252Fh4%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch5%253E%2520ASP.NET%2520-%2520React.js%2520-%2520SQL%2520Server%2520%253C%252Fh5%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fheader%253E"
          style={{width: '588px', height:' 276px', border:'0', transform: 'scale(1)', overflow:'hidden', }}
          sandbox="allow-scripts allow-same-origin"
        ></iframe> */}
        <header>
          <h3> {t("1830")}</h3>
          <h4>{t("panel_operator")}</h4>
          <h5> ASP.NET - React.js - SQL Server</h5>
        </header>
        <div className="album">
          {images.map((img, index) => (
            <img
              src={img.url}
              alt={img.title}
              key={index + "img"}
              onClick={() => {
                setState((prevState) => ({
                  ...prevState,
                  isOpen: true,
                  selectedImg: index,
                }));
              }}
            />
          ))}
        </div>
        {state.isOpen && (
          <Lightbox
            images={images}
            allowRotate={false}
            style={{ height: "100vh" }}
            onClose={() => setState({ isOpen: false })}
            startIndex={state.selectedImg}
            keyboardInteraction={true}
          />
        )}
        <span>
          {t("website_address")}
          <a
            href="https://panel1830.ir"
            target="_blank"
            rel="noreferrer"
            style={{ textAlign: language != "fa" ? "right" : "left" }}
          >
            {" "}
            https://panel1830.ir{" "}
          </a>
        </span>
        <p className="description">{t("1830_p1")}</p>
        <p className="description">{t("1830_p2")}</p>
        <p className="description">{t("1830_p3")}</p>
        <br />
        <hr />
      </div>
    </div>
  );
}
