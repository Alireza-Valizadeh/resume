import React, { useRef, useState } from "react";
import adlDriverImg1 from "../static/adlDriver1.png";
import adlDriverImg2 from "../static/adlDriver2.png";
import adlDriverImg3 from "../static/adlDriver3.png";
import adlDriverImg4 from "../static/adlDriver4.png";
import adlDriverImg5 from "../static/adlDriver5.png";
import adlDriverImg6 from "../static/adlDriver6.png";
import { useHistory } from "react-router";
import { useEffect } from "react";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
import { useTranslation, useLocalization } from "./Localization";
export default function AdlDriver(props) {
  const history = useHistory();
  const { languages, language, setLanguage } = useLocalization();
  const t = useTranslation();
  const [state, setState] = useState({
    activeSlider: 1,
    activeImageUrl: adlDriverImg1,
    selectedImg: 0,
    isOpen: false,
  });
  const buttons = [1, 2, 3, 4, 5, 6];
  const images = [
    { url: adlDriverImg1, title: t("loads_location") },
    { url: adlDriverImg2, title: t("filtering_loads") },
    { url: adlDriverImg3, title: t("participating_in_tender") },
    { url: adlDriverImg4, title: t("editing_truck") },
    { url: adlDriverImg5, title: t("driver_loads") },
    { url: adlDriverImg6, title: t("driver_info") },
  ];
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
        <header>
          <h3> {t("adl_tarabar")} </h3>
          <h4> {t("adl_driver_panel")} </h4>
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
            href="http://adltarabaran.efspco.ir:8016"
            target="_blank"
            rel="noreferrer"
            style={{ textAlign: language != "fa" ? "right" : "left" }}
          >
            {" "}
            https://adltarabaran.efspco.ir{" "}
          </a>
        </span>
        <span>
          {t("website_address")}
          <a
            href="http://noorinet.efspco.ir:2005"
            target="_blank"
            rel="noreferrer"
            style={{ textAlign: language != "fa" ? "right" : "left" }}
          >
            {" "}
            https://noorinet.efspco.ir{" "}
          </a>
        </span>
        <span>
          {t("website_address")}
          <a
            href="http://kalaran.efspco.ir:3000"
            target="_blank"
            rel="noreferrer"
            style={{ textAlign: language != "fa" ? "right" : "left" }}
          >
            {" "}
            https://kalaran.efspco.ir{" "}
          </a>
        </span>
        <p className="description">{t("adld_p1")}</p>
        <p className="description">{t("adld_p2")}</p>
        <p className="description">{t("adld_p3")}</p>
        <br />
        <hr />
      </div>
    </div>
  );
}
