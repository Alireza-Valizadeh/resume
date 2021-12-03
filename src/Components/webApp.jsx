import React, { useRef, useState } from "react";

import webAppImg1 from "../static/webApp1.png";
import webAppImg2 from "../static/webApp2.png";
import webAppImg3 from "../static/webApp3.png";
import webAppImg4 from "../static/webApp4.png";
import webAppImg5 from "../static/webApp5.png";
import webAppImg6 from "../static/webApp6.png";
import { useHistory } from "react-router";
import { useEffect } from "react";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";

export default function WebApplicationTaxi(props) {
  const history = useHistory();
  const [state, setState] = useState({
    activeSlider: 1,
    activeImageUrl: webAppImg1,
    selectedImg: 0,
    isOpen: false,
  });
  const buttons = [1, 2, 3, 4, 5, 6];
  const zoom = useRef();
  const images = [
    { url: webAppImg1, title: "انتخاب مبدا" },
    { url: webAppImg2, title: "سایدبار اپ" },
    { url: webAppImg3, title: "سفر های ذخیره شده" },
    { url: webAppImg4, title: "امکانات سفر " },
    { url: webAppImg5, title: "صفحه ورود" },
    { url: webAppImg6, title: "درخواست تاکسی" },
  ];
  useEffect(() => {
    zoom.current.scrollIntoView(false);
  }, []);
  return (
    <div className="mainWrapper">
      <div className="button-up" onClick={() => history.push("/#")} ref={zoom}>
        {" "}
      </div>
      <div className="main">
        <header>
          <h3> شرکت ابتکار فناوران سهند پویا </h3>
          <h4>وب اپلیکیشن تاکسی ابتکار</h4>
          <h5> Node.js - React.js - SQL Server</h5>
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
          {" "}
          آدرس سایـــــــت: (در حال توسعه)
          <a href="http://efspco.ir:3001" target="_blank" rel="noreferrer">
            {" "}
            https://efspco.ir:3001{" "}
          </a>
        </span>
        <p className="description">
          این وب اپلیکیشن برای تاکسی ابتکار طراحی شده است که تمامی امکانات
          درخواست تاکسی، ذخیره مبدا و مقصد، ذخیره مسیر و ... را داراست و کارایی
          آن مشابه اسنپ می باشد.
        </p>
        <p className="description">
          این اپلیکیشن تماما یعنی تمامی بخش های فرانت اند (React و MaterialUI) و
          تمامی بخش های بک اند (Node.js و SQL Server) توسط من انجام شده است. از
          جمله امکانات این اپ نقشه OpenStreetMap کتابخانه زیبای MaterialUI است.
        </p>
        <p className="description">
          این اپلیکیشن فعلا در حال توسعه است و امکاناتی مثل ثبت سفر، محاسبه
          هزینه سفر، پیمایش مسیر و تنظیمات سفر اجرا شده اند و بخش هایی مثل کیف
          پول و پیگیری سفر نیز در حال اجرا هستند
        </p>
        <br />
        <hr />
      </div>
    </div>
  );
}
