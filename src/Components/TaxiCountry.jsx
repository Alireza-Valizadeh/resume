import React, { useRef, useState } from "react";
import adlDriverImg1 from "../static/taxi1.png";
import adlDriverImg2 from "../static/taxi2.png";
import adlDriverImg3 from "../static/taxi3.png";
import adlDriverImg4 from "../static/taxi4.png";
import adlDriverImg5 from "../static/taxi5.png";
import adlDriverImg6 from "../static/taxi6.png";
import { useHistory } from "react-router";
import { useEffect } from "react";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";

export default function TaxiCountry(props) {
  const history = useHistory();
  const [state, setState] = useState({
    activeSlider: 1,
    activeImageUrl: adlDriverImg1,
    selectedImg: 0,
    isOpen: false,
  });
  const buttons = [1, 2, 3, 4, 5, 6];
  const zoom = useRef();
  const images = [
    { url: adlDriverImg1, title: "صفحه ورود" },
    { url: adlDriverImg2, title: "سایدبار اپ" },
    { url: adlDriverImg3, title: "ثبت سفر " },
    { url: adlDriverImg4, title: "پیمایش مسیر تاکسی " },
    { url: adlDriverImg5, title: "موقعیت راننده ها " },
    { url: adlDriverImg6, title: "ویرایش آژانس ها" },
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
          <h3> شرکت ابتکار فناوران </h3>
          <h4>پروژه مدیریت آژانس در کل کشور</h4>
          <h5> Node.js - React.js - SQL Server - MongoDB</h5>
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
          در حال توسعه
          {/* <a
            href="http://fahrzeugtool.inosup.org/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            https://fahrzeugtool.inosup.org{" "}
          </a>  */}
        </span>
        <p className="description">
          این پروژه با 4 سطح دسترسی در سطح کشور تعریف شده است: کاربر اتحادیه
          کشوری، کاربر اتحادیه شهری، مدیر آژانس و اپراتور آژانس. مدیر کشوری بر
          تمامی استان ها و آژانس ها دسترسی دارد و همینطور مرحله به مرحله دسترسی
          ها کم و کمتر می شوند. در نهایت اپراتور آژانس فقط می تواند برای آژانس
          خود سفر ثبت کند و موقعیت رانندگان را روی نقشه مشاهده کند.
        </p>
        <p className="description">
          این پروژه با ASP.NET و React پیش رفته بود اما با توجه به سیاست های
          شرکت تصمیم بر این شد تمامی بخش ASP به Node تغییر پیدا کند. که این کار
          توسط من انجام شد. هم چنین بخش سایدبار سایت نیز توسط من طراحی شد و صفحه
          پیمایش مسیر نیز توسط من انجام شده است.
        </p>
        <p className="description">
          در صفحه پیمایش مسیر، تمامی مختصات های رانندگان در دیتابیس MongoDB هر
          15 ثانیه ذخیره می شود . سپس با توجه به بازه زمانی انتخاب شده و کد
          تاکسی مربوطه مسیر حرکت تاکسی روی نقشه کشیده می شود.
        </p>
        <br />
        <hr />
      </div>
    </div>
  );
}
