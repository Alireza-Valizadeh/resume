import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { useLocalization } from "./Localization";

export default function ResumeCard(props) {
  const { languages, language, setLanguage } = useLocalization();
  return (
    <NavLink
      className="resumeCard"
      to={props.link}
      style={{
        paddingLeft: language != "fa" ? "0px" : "",
        display: "flex",
        justifyContent: language != "fa" ? "flex-end" : "flex-start",
        marginLeft: language != "fa" ? "0" : "20px",
        marginRight: language != "fa" ? "20px" : "0px",
      }}
    >
      {props.show ? (
        <img
          src={props.img}
          alt="project sample page"
          height="230px"
          width="350px"
          className="s"
          style={{
            paddingRight: language == "fa" ? "20px" : "0px",
            paddingLeft: language != "fa" ? "20px" : "",
          }}
        />
      ) : (
        <div style={{ height: "0px" }}> </div>
      )}
      <div style={{ paddingRight: language == "fa" ? "20px" : "0px" }}>
        <h3
          className="resumeCard2"
          style={{ direction: language != "fa" ? "ltr" : "rtl" }}
        >
          {props.firstTitle}
        </h3>
        <h4 style={{ direction: language != "fa" ? "ltr" : "rtl" }}>
          {props.secondTitle}
        </h4>
        <h5 style={{ direction: language != "fa" ? "ltr" : "rtl" }}>
          {props.thirdTitle}
        </h5>
      </div>
    </NavLink>
  );
}
