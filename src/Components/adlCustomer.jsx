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

export default function AdlCustomer(props) {
  const history = useHistory();
  const [state, setState] = useState({
    activeSlider: 1,
    activeImageUrl: adlCustomerImg1,
    selectedImg: 0,
    isOpen: false,
  });
  const buttons = [1, 2, 3, 4, 5, 6];
  const images = [
    { url: adlCustomerImg3, title: "ثبت بار " },
    { url: adlCustomerImg2, title: "جستجوی نشان" },
    { url: adlCustomerImg1, title: "  ثبت بار " },
    { url: adlCustomerImg4, title: "گزارش گردش حساب" },
    { url: adlCustomerImg5, title: "اطلاعات کاربر" },
    { url: adlCustomerImg6, title: "بار های من" },
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
          <h4>پنل باربری صاحب کالا </h4>
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
          این پنل برای مشتریان شرکت ایجاد شده است تا در محیط وب بار های موجود
          خود را در سامانه ثبت کنند و با اشراف کامل بر فرایند قیمت گزاری و حمل
          بار، بار خود را در مقصد صحیح و سالم از راننده تحویل بگیرند
        </p>
        <p className="description">
          در این پروژه من توسعه بخش های جستجوی نقشه، احراز هویت صاحب کالا
          validation اطلاعات ثبت شده در فرم های مختلف سایت (از جمله ثبت اطلاعات
          شخص حقوقی و حقیقی، ثبت مشخصات بار و ...)، اضافه شدن بخش نمایش حواله و
          بارنامه در صفحه بار ها، اضافه شدن نوع دسته بندی بار هنگام ثبت، رفع
          ایرادات موجود و... را به عهده داشتم. موارد فوق به صورت Full-stack
          انجام شده و تمامی Procedure ها و webservice های لازم را نیز ایجاد و
          ویرایش کردم.
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
