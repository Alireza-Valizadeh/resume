import React, { useRef, useState } from "react";
import adlCustomerImg1 from "../static/adlCustomer2.png";
import adlCustomerImg2 from "../static/adlCustomer1.png";
import adlCustomerImg3 from "../static/adlCustomer3.png";
import adlCustomerImg4 from "../static/adlCustomer4.png";
import adlCustomerImg5 from "../static/adlCustomer5.png";
import adlCustomerImg6 from "../static/adlCustomer6.png";
import { useHistory } from "react-router";
import { useEffect } from "react";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
import { useTranslation, useLocalization } from "./Localization";
export default function AdlCustomer(props) {
  const history = useHistory();
  const { languages, language, setLanguage } = useLocalization();
  const t = useTranslation();
  const [state, setState] = useState({
    activeSlider: 1,
    activeImageUrl: adlCustomerImg1,
    selectedImg: 0,
    isOpen: false,
  });
  const buttons = [1, 2, 3, 4, 5, 6];
  const images = [
    { url: adlCustomerImg3, title: t("registering_loads_2") },
    { url: adlCustomerImg2, title: t("search_map") },
    { url: adlCustomerImg1, title: t("registering_loads_1") },
    { url: adlCustomerImg4, title: t("turnover_report") },
    { url: adlCustomerImg5, title: t("profile_info") },
    { url: adlCustomerImg6, title: t("my_loads") },
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
          <h4> {t("adl_customer_panel")} </h4>
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
        <p className="description">{t("adlc_p1")}</p>
        <p className="description">{t("adlc_p2")}</p>
        <p className="description">{t("adlc_p3")}</p>
        <br />
        <hr />
      </div>
    </div>
  );
}
