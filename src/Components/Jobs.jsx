import React from "react";
import { useTranslation, useLocalization } from "./Localization";
export default function Jobs() {
  const { languages, language, setLanguage } = useLocalization();
  const t = useTranslation();
  return (
    <>
      <div className="jobTemplate">
        <div style={{ direction: language != "fa" ? "ltr" : "rtl" }}>
          <h3 style={{ direction: language != "fa" ? "ltr" : "rtl" }}>
            {" "}
            <lord-icon
              src="https://cdn.lordicon.com/eszyyflr.json"
              trigger="hover"
              colors="primary:#000000,secondary:#000000"
              style={{ width: "100px", height: "100px" }}
            ></lord-icon>
            {t("jobs")}
          </h3>
          {/* <img src={efspco} /> */}
        </div>

        <div className="actualJob">
          <h4>
            <a href="https://glo3d.com" target="_blank">
              {t("glo3d")}
            </a>
          </h4>
          <ul>
            <li style={{ direction: language != "fa" ? "ltr" : "rtl" }}>
              <h5>
                <lord-icon
                  src="https://cdn.lordicon.com/mdgrhyca.json"
                  trigger="hover"
                  colors="primary:#121331,secondary:#000000"
                  style={{
                    width: "25px",
                    height: "25px",
                    marginLeft: "15px",
                    marginRight: "15px",
                  }}
                ></lord-icon>
                {t("glo3d_record")}
              </h5>
            </li>
            <li style={{ direction: language != "fa" ? "ltr" : "rtl" }}>
              <h5>
                <lord-icon
                  src="https://cdn.lordicon.com/jvihlqtw.json"
                  trigger="hover"
                  colors="primary:#000000,secondary:#000000"
                  style={{
                    width: "25px",
                    height: "25px",
                    marginLeft: "15px",
                    marginRight: "15px",
                  }}
                ></lord-icon>
                {t("backend_developer")}
              </h5>
            </li>
            <li style={{ direction: language != "fa" ? "ltr" : "rtl" }}>
              <h5>
                {" "}
                <lord-icon
                  src="https://cdn.lordicon.com/jvihlqtw.json"
                  trigger="hover"
                  colors="primary:#121331,secondary:#000000"
                  style={{
                    width: "25px",
                    height: "25px",
                    marginLeft: "15px",
                    marginRight: "15px",
                  }}
                ></lord-icon>
                Node.js
              </h5>
            </li>
            <li style={{ direction: language != "fa" ? "ltr" : "rtl" }}>
              <h5>
                {" "}
                <lord-icon
                  src="https://cdn.lordicon.com/jvihlqtw.json"
                  trigger="hover"
                  colors="primary:#121331,secondary:#000000"
                  style={{
                    width: "25px",
                    height: "25px",
                    marginLeft: "15px",
                    marginRight: "15px",
                  }}
                ></lord-icon>
                Google Cloud
              </h5>
            </li>
            <li style={{ direction: language != "fa" ? "ltr" : "rtl" }}>
              <h5>
                {" "}
                <lord-icon
                  src="https://cdn.lordicon.com/jvihlqtw.json"
                  trigger="hover"
                  colors="primary:#121331,secondary:#000000"
                  style={{
                    width: "25px",
                    height: "25px",
                    marginLeft: "15px",
                    marginRight: "15px",
                  }}
                ></lord-icon>
                Firebase
              </h5>
            </li>
            <li style={{ direction: language != "fa" ? "ltr" : "rtl" }}>
              <h5>
                {" "}
                <lord-icon
                  src="https://cdn.lordicon.com/jvihlqtw.json"
                  trigger="hover"
                  colors="primary:#121331,secondary:#000000"
                  style={{
                    width: "25px",
                    height: "25px",
                    marginLeft: "15px",
                    marginRight: "15px",
                    marginRight: "15px",
                  }}
                ></lord-icon>
                Image Processing
              </h5>
            </li>
            <li style={{ direction: language != "fa" ? "ltr" : "rtl" }}>
              <h5>
                {" "}
                <lord-icon
                  src="https://cdn.lordicon.com/jvihlqtw.json"
                  trigger="hover"
                  colors="primary:#121331,secondary:#000000"
                  style={{
                    width: "25px",
                    height: "25px",
                    marginLeft: "15px",
                    marginRight: "15px",
                  }}
                ></lord-icon>
                Realtime Database
              </h5>
            </li>
            <li style={{ direction: language != "fa" ? "ltr" : "rtl" }}>
              <h5>
                {" "}
                <lord-icon
                  src="https://cdn.lordicon.com/jvihlqtw.json"
                  trigger="hover"
                  colors="primary:#121331,secondary:#000000"
                  style={{
                    width: "25px",
                    height: "25px",
                    marginLeft: "15px",
                    marginRight: "15px",
                  }}
                ></lord-icon>
                Cloud Storage
              </h5>
            </li>
          </ul>
        </div>
        <div className="actualJob">
          <h4>
            <a href="http://efspco.ir" target="_blank">
              {" "}
              {t("efspco")}{" "}
            </a>
          </h4>
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d803.4495190905371!2d59.52382282921392!3d36.34144337901267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f6c8d9b789894b9%3A0x3f4b183536fada72!2z2KfYqNiq2qnYp9ixINmB2YbYp9mI2LHYp9mGINiz2YfZhtivINm-2YjbjNin!5e0!3m2!1sen!2s!4v1638512086522!5m2!1sen!2s"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
          ></iframe> */}
          <ul>
            <li style={{ direction: language != "fa" ? "ltr" : "rtl" }}>
              <h5>
                <lord-icon
                  src="https://cdn.lordicon.com/mdgrhyca.json"
                  trigger="hover"
                  colors="primary:#121331,secondary:#000000"
                  style={{
                    width: "25px",
                    height: "25px",
                    marginLeft: "15px",
                    marginRight: "15px",
                  }}
                ></lord-icon>
                {t("efspco_record")}
              </h5>
            </li>
            <li style={{ direction: language != "fa" ? "ltr" : "rtl" }}>
              <h5>
                <lord-icon
                  src="https://cdn.lordicon.com/jvihlqtw.json"
                  trigger="hover"
                  colors="primary:#000000,secondary:#000000"
                  style={{
                    width: "25px",
                    height: "25px",
                    marginLeft: "15px",
                    marginRight: "15px",
                  }}
                ></lord-icon>
                {t("fullstack_developer")}
              </h5>
            </li>
            <li style={{ direction: language != "fa" ? "ltr" : "rtl" }}>
              <h5>
                {" "}
                <lord-icon
                  src="https://cdn.lordicon.com/jvihlqtw.json"
                  trigger="hover"
                  colors="primary:#121331,secondary:#000000"
                  style={{
                    width: "25px",
                    height: "25px",
                    marginLeft: "15px",
                    marginRight: "15px",
                  }}
                ></lord-icon>
                Node.js
              </h5>
            </li>
            <li style={{ direction: language != "fa" ? "ltr" : "rtl" }}>
              <h5>
                {" "}
                <lord-icon
                  src="https://cdn.lordicon.com/jvihlqtw.json"
                  trigger="hover"
                  colors="primary:#121331,secondary:#000000"
                  style={{
                    width: "25px",
                    height: "25px",
                    marginLeft: "15px",
                    marginRight: "15px",
                  }}
                ></lord-icon>
                React.js
              </h5>
            </li>
            <li style={{ direction: language != "fa" ? "ltr" : "rtl" }}>
              <h5>
                {" "}
                <lord-icon
                  src="https://cdn.lordicon.com/jvihlqtw.json"
                  trigger="hover"
                  colors="primary:#121331,secondary:#000000"
                  style={{
                    width: "25px",
                    height: "25px",
                    marginLeft: "15px",
                    marginRight: "15px",
                  }}
                ></lord-icon>
                ASP.NET
              </h5>
            </li>
            <li style={{ direction: language != "fa" ? "ltr" : "rtl" }}>
              <h5>
                {" "}
                <lord-icon
                  src="https://cdn.lordicon.com/jvihlqtw.json"
                  trigger="hover"
                  colors="primary:#121331,secondary:#000000"
                  style={{
                    width: "25px",
                    height: "25px",
                    marginLeft: "15px",
                    marginRight: "15px",
                  }}
                ></lord-icon>
                SQL Server
              </h5>
            </li>
            <li style={{ direction: language != "fa" ? "ltr" : "rtl" }}>
              <h5>
                {" "}
                <lord-icon
                  src="https://cdn.lordicon.com/jvihlqtw.json"
                  trigger="hover"
                  colors="primary:#121331,secondary:#000000"
                  style={{
                    width: "25px",
                    height: "25px",
                    marginLeft: "15px",
                    marginRight: "15px",
                  }}
                ></lord-icon>
                MySQL
              </h5>
            </li>
            <li style={{ direction: language != "fa" ? "ltr" : "rtl" }}>
              <h5>
                {" "}
                <lord-icon
                  src="https://cdn.lordicon.com/jvihlqtw.json"
                  trigger="hover"
                  colors="primary:#121331,secondary:#000000"
                  style={{
                    width: "25px",
                    height: "25px",
                    marginLeft: "15px",
                    marginRight: "15px",
                  }}
                ></lord-icon>
                MongoDB
              </h5>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
