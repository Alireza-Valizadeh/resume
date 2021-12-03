import React, { useRef, useState } from "react";
import adlDriverImg1 from "../static/fahrzeug1.png";
import adlDriverImg2 from "../static/fahrzeug2.png";
import adlDriverImg3 from "../static/fahrzeug3.png";
import adlDriverImg4 from "../static/fahrzeug4.png";
import adlDriverImg5 from "../static/fahrzeug5.png";
import adlDriverImg6 from "../static/fahrzeug6.png";
import { useHistory } from "react-router";
import { useEffect } from "react";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";

export default function Fahrzeug(props) {
  const history = useHistory();
  const [state, setState] = useState({
    activeSlider: 1,
    activeImageUrl: adlDriverImg1,
    selectedImg: 0,
    isOpen: false,
  });
  const buttons = [1, 2, 3, 4, 5, 6];
  const images = [
    { url: adlDriverImg1, title: "لیست خودرو ها" },
    { url: adlDriverImg2, title: "ثبت خودرو " },
    { url: adlDriverImg3, title: "ثبت شماره خودرو " },
    { url: adlDriverImg4, title: "بررسی خودرو" },
    { url: adlDriverImg5, title: "چک پوینت ها" },
    { url: adlDriverImg6, title: "صفحه  فروش" },
  ];
  const zoom = useRef();

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
          <h3>شرکت آلمانی Fahrzeug </h3>
          <h4>پنل کاربری </h4>
          <h5> Node.js - React.js - MySQL</h5>
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
          آدرس سایـــــــت:{" "}
          <a
            href="http://fahrzeugtool.inosup.org/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            https://fahrzeugtool.inosup.org{" "}
          </a>
        </span>
        <p className="description">
          این پنل برای کاربران شرکت فارزویگ ایجاد شده است تا در محیط وب خودروهای
          موجود در انبار را ثبت کنند و مرحله به مرحله فرایند ثبت خودرو، شناسایی
          وضعیت خودرو، بررسی چک پوینت های موجود برای خودرو و تعیین وضعیت برای آن
          ها (از جمله: سالم، نیازمند بررسی، نیازمند قطعه و ...)، گرفتن گزارش از
          بخش های مختلف کار و ... را انجام دهند.
        </p>
        <p className="description">
          در این پروژه من به عنوان فریلنسر توسعه و دیباگینگ کار را بر عهده داشتم
          و بخش Mega Button را نیز به این پنل افزودم که با فشردن آن تمامی چک
          پوینت های اساسی سبز می شوند و صفحه جدیدی برای کاربر ایجاد می شود تا یک
          سری چک پوینت غیراساسی نیز کنترل شود
        </p>
        <p className="description">
          تمامی این بخش ها به صورت فول استک یعنی هم بخش React و هم بخش Node و
          MySQL توسط من انجام شده است
        </p>
        <br />
        <hr />
      </div>
    </div>
  );
}
