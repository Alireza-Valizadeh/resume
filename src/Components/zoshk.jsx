import React, { useRef, useState } from "react";
import adlDriverImg1 from "../static/order1.png";
import adlDriverImg2 from "../static/order2.png";
import adlDriverImg3 from "../static/order3.png";
import adlDriverImg4 from "../static/order4.png";
import adlDriverImg5 from "../static/order5.png";
import adlDriverImg6 from "../static/order6.png";
import { useHistory } from "react-router";
import { useEffect } from "react";
import { useTranslation, useLocalization } from "./Localization";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
export default function Zoshk(props) {
  const t = useTranslation();
  const history = useHistory();

  const [state, setState] = useState({
    activeSlider: 1,
    activeImageUrl: adlDriverImg1,
    isOpen: false,
    selectedImg: 0,
  });
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const buttons = [1, 2, 3, 4, 5, 6];
  const images = [
    { url: adlDriverImg1, title: t("login_page") },
    { url: adlDriverImg2, title: t("order_details") },
    { url: adlDriverImg3, title: t("editing_orders") },
    { url: adlDriverImg4, title: t("deliver_loads") },
    { url: adlDriverImg5, title: t("calenders") },
    { url: adlDriverImg6, title: t("access_levels") },
  ];
  const zoom = useRef();

  useEffect(() => {
    zoom.current.scrollIntoView(false);
  }, []);
  const { languages, language, setLanguage } = useLocalization();
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
          <h3> {t("zoshk")} </h3>
          <h4> {t("zoshk_panel")} </h4>
          <h5> ASP.NET - React.js - SQL Server </h5>
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
            href="https://zoshk.efspco.ir:8010"
            target="_blank"
            rel="noreferrer"
            style={{ textAlign: language != "fa" ? "right" : "left" }}
          >
            {" "}
            https://zoshk.efspco.ir{" "}
          </a>
        </span>
        <p className="description">{t("zoshk_p1")}</p>
        <p className="description">{t("zoshk_p2")}</p>
        <p className="description">{t("zoshk_p3")}</p>
        <br />
        <hr />
      </div>
    </div>
  );
}
