import React, { useRef, useState } from "react";
import adlCustomerImg1 from "../static/gPricing.png";
import adlCustomerImg2 from "../static/gPricing2.png";
import adlCustomerImg3 from "../static/gPricing3.png";
import adlCustomerImg4 from "../static/gPricing4.png";
import adlCustomerImg5 from "../static/gPricing5.png";
import adlCustomerImg6 from "../static/gPricing6.png";
import { useHistory } from "react-router";
import { useEffect } from "react";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
import { useTranslation, useLocalization } from "./Localization";
export default function Glo3dPricing(props) {
  const history = useHistory();
  const { language } = useLocalization();
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
          <h3> {t("glo3d")} </h3>
          <h4> {t("glo3d_pricing")} </h4>
          <h5>  Node.js - Firebase - Stripe</h5>
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
            href="http://glo3d.net/pricing"
            target="_blank"
            rel="noreferrer"
            style={{ textAlign: language != "fa" ? "right" : "left" }}
          >
            {" "}
            https://Glo3D.net/pricing{" "}
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
