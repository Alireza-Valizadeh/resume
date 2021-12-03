import React, { useRef, useState } from "react";
import adlDriverImg1 from "../static/order1.png";
import adlDriverImg2 from "../static/order2.png";
import adlDriverImg3 from "../static/order3.png";
import adlDriverImg4 from "../static/order4.png";
import adlDriverImg5 from "../static/order5.png";
import adlDriverImg6 from "../static/order6.png";
import { useHistory } from "react-router";
import { useEffect } from "react";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";
export default function Zoshk(props) {
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
    { url: adlDriverImg1, title: "صفحه ورود" },
    { url: adlDriverImg2, title: "جزئیات سفارش" },
    { url: adlDriverImg3, title: "ویرایش سفارش" },
    { url: adlDriverImg4, title: "تحویل بار به راننده" },
    { url: adlDriverImg5, title: "تقویم پروژه" },
    { url: adlDriverImg6, title: "سطوح دسترسی" },
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
          <h3> رب زشک خراسان </h3>
          <h4>پنل مدیریت سفارشات </h4>
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
          {" "}
          آدرس سایـــــــت:{" "}
          <a
            href="https://zoshk.efspco.ir:8010"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            https://zoshk.efspco.ir{" "}
          </a>
        </span>
        <p className="description">
          پنل مدیریت سفارشات برای کارخانه رب زشک خراسان طراحی و توسعه داده شده
          است تا سفارشات خود را که قبلا با نرم افزار تحت DOS ثبت و پیگیری می
          کردند، به محیط وب منتقل کنند و کارهایشان آسان تر انجام گردد. این پنل
          برای بحث مالی و صدور فاکتور ها با الگوریتم پویا در تعامل است که جزو
          برترین شرکت ها در این زمینه می باشد.
        </p>
        <p className="description">
          من در این پروژه ابتدا ظاهر سایت را بازنویسی کردم و جلوه ظاهری آن را
          زیبا تر کردم. همچنین باگ های سایت را نیز برطرف کردم و تقویم های آن را
          بروز کردم. سپس بخش های جدیدی که مطابق درخواست شرکت زشک در رابطه با
          تعامل بهتر با پایا بود به سایت اضافه کردم. از جمله این بخش ها می توان
          به انتقال سفارشات تایید شده در پنل به پایا ، صدور پیش فاکتور برای
          سفارشات، افزودن تخفیفات و اضافات به فاکتور ها، انجام فرایند صدور دستور
          خروج و همگام سازی آن با پنل، صدور فاکتور و ثبت برکه دستور خروج در
          هنگام تحویل بار به مشتری، ویرایش فاکتور های برگشتی از مشتری و ...
          اشاره کرد.
        </p>
        <p className="description">
          تمامی این بخش ها به صورت فول استک یعنی هم بخش React و هم بخش ASP.NET و
          SQL Server توسط من انجام شده است و هم چنین تمامی procedure های مربوط
          به پایا نیز توسط خود من نوشته شده اند.
        </p>
        <br />
        <hr />
      </div>
    </div>
  );
}
