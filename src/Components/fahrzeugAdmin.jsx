import React, { useRef, useState } from "react";
import adlDriverImg1 from "../static/fahrzeugAdmin1.png";
import adlDriverImg2 from "../static/fahrzeugAdmin2.png";
import adlDriverImg3 from "../static/fahrzeugAdmin3.png";
import adlDriverImg4 from "../static/fahrzeugAdmin4.png";
import adlDriverImg5 from "../static/fahrzeugAdmin5.png";
import adlDriverImg6 from "../static/fahrzeugAdmin6.png";
import { useHistory } from "react-router";
import { useEffect } from "react";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";

export default function FahrzeugAdmin(props) {
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
    { url: adlDriverImg1, title: "ثبت وضعیت " },
    { url: adlDriverImg2, title: "ثبت منطقه " },
    { url: adlDriverImg3, title: "تنظیمات قیمت ها" },
    { url: adlDriverImg4, title: "گزارش گیری" },
    { url: adlDriverImg5, title: "اطلاعات کاربران" },
    { url: adlDriverImg6, title: "مدال حذف کاربر" },
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
          <h3>شرکت آلمانی Fahrzeug </h3>
          <h4>پنل ادمین </h4>
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
            href="http://fahrzeugtool.inosup.org/admin"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            https://fahrzeugtool.inosup.org/admin{" "}
          </a>
        </span>
        <p className="description">
          این پنل برای ادمین های شرکت فارزویگ ایجاد شده است تا در محیط وب نواحی،
          مناطق، چک پوینت ها و... مورد استفاده در پنل کاربری را تعریف، ویرایش و
          یا حذف کنند. و گزارش های کاملی از کار کارکنان شرکت دریافت کنند.
        </p>
        <p className="description">
          در این پروژه من به عنوان فریلنسر توسعه و دیباگینگ کار را بر عهده داشتم
          و ناحیه های غیراساسی را نیز به این پنل اضافه کردم. از جمله ایرادات می
          توان به رفع validation در فرم های ثبت منطقه و ناحیه، ثبت ترکینگ برای
          مگا باتن اضافه شده در پنل کاربری، بهبود متن خطاها و ترکینگ ها و ایجاد
          سطح دسترسی برای انواع کارمندان(تعمیرکار، بازرس، پشتیبانی و ...) اشاره
          کرد.
        </p>
        <p className="description">
          تمامی این بخش ها به صورت فول استک یعنی هم بخش React و هم بخش Node و
          MySQL توسط من انجام شده است.
        </p>
        <br />
        <hr />
      </div>
    </div>
  );
}
