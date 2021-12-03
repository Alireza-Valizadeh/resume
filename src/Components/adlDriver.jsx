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

export default function AdlDriver(props) {
  const history = useHistory();
  const [state, setState] = useState({
    activeSlider: 1,
    activeImageUrl: adlDriverImg1,
    selectedImg: 0,
    isOpen: false,
  });
  const buttons = [1, 2, 3, 4, 5, 6];
  const images = [
    { url: adlDriverImg1, title: "موقعیت بارها" },
    { url: adlDriverImg2, title: "فیلتر بارها" },
    { url: adlDriverImg3, title: "ثبت پیشنهاد" },
    { url: adlDriverImg4, title: "ویرایش خودرو" },
    { url: adlDriverImg5, title: "بار های راننده" },
    { url: adlDriverImg6, title: "اطلاعات کاربر" },
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
          <h3> شرکت باربری عدل ترابران توس </h3>
          <h4>پنل باربری راننده </h4>
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
          {" "}
          آدرس سایـــــــت:{" "}
          <a
            href="http://adltarabaran.efspco.ir:8016"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            https://adltarabaran.efspco.ir{" "}
          </a>
        </span>
        <span>
          {" "}
          آدرس سایـــــــت:{" "}
          <a
            href="http://noorinet.efspco.ir:2005"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            https://noorinet.efspco.ir{" "}
          </a>
        </span>
        <span>
          {" "}
          آدرس سایـــــــت:{" "}
          <a
            href="http://kalaran.efspco.ir:3000"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            https://kalaran.efspco.ir{" "}
          </a>
        </span>
        <p className="description">
          این پنل برای رانندگان شرکت ایجاد شده است تا در محیط وب بار های موجود
          در سامانه باربری عدل ترابر را مشاهده کنند و با ثبت قیمت مورد نظر خود
          برای حمل بار در صورت برنده شدن در مناقصه بارگیری و حمل بار را انجام
          دهند.
        </p>
        <p className="description">
          در این پروژه من توسعه بخش های جستجوی نقشه، احراز هویت راننده،
          validation اطلاعات ثبت شده در فرم های مختلف سایت (از جمله ثبت اطلاعات
          راننده و خودرو)، اضافه شدن بخش نمایش حواله و بارنامه و اطلاعات شرکت
          حمل و نقل در صفحه بار ها، اضافه شدن پیشنهادات و انتقادات و ... را به
          عهده داشتم. موارد فوق به صورت Full-stack انجام شده و تمامی Procedure
          ها و webservice های لازم را نیز ایجاد و ویرایش کردم.
        </p>
        <p className="description">
          این پنل برای 3 شرکت "باربری نوریــ نت" ، "باربری عدل ترابر" و "باربری
          کالاران رهنگار" اعمال شده است که شرکت های نورینت و عدل ترابر نیز مجوز
          رسمی پنل را از وزارتخانه مربوطه دریافت کردند.
        </p>
        <br />
        <hr />
      </div>
    </div>
  );
}
