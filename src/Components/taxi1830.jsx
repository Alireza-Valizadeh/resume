import React, { useRef, useState } from "react";
import adlDriverImg1 from "../static/18301.png";
import adlDriverImg2 from "../static/18302.png";
import adlDriverImg3 from "../static/18303.png";
import adlDriverImg4 from "../static/18304.png";
import adlDriverImg5 from "../static/18305.png";
import adlDriverImg6 from "../static/18306.png";
import { useHistory } from "react-router";
import { useEffect } from "react";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";

export default function Taxi1830(props) {
  const history = useHistory();

  const [state, setState] = useState({
    activeSlider: 1,
    activeImageUrl: adlDriverImg1,
    selectedImg: 0,
    isOpen: false,
  });
  const images = [
    { url: adlDriverImg1, title: "صفحه ورود" },
    { url: adlDriverImg2, title: "ثبت سفر " },
    { url: adlDriverImg3, title: "آدرس های ثبت شده" },
    { url: adlDriverImg4, title: "محدوده ایستگاه ها" },
    { url: adlDriverImg5, title: "  تلفن آنلاین " },
    { url: adlDriverImg6, title: "جستجوی سفر ها" },
  ];

  const buttons = [1, 2, 3, 4, 5, 6];

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
        {/* <img src={title} /> */}
        {/* <iframe
          src="https://carbon.now.sh/embed?bg=rgba%28243%2C243%2C247%2C1%29&t=seti&wt=none&l=stylus&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%2520%2520%2520%2520%2520%2520%2520%2520%253Cheader%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch3%253E%2520%25D8%25A2%25DA%2598%25D8%25A7%25D9%2586%25D8%25B3%25201830%2520%25D9%2585%25D8%25B4%25D9%2587%25D8%25AF%2520%253C%252Fh3%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch4%253E%2520%25D9%25BE%25D9%2586%25D9%2584%2520%25D8%25A7%25D9%25BE%25D8%25B1%25D8%25A7%25D8%25AA%25D9%2588%25D8%25B1%2520%25D8%25AA%25D9%2584%25D9%2581%25D9%2586%2520%25D9%2588%2520%25D8%25A8%25DB%258C%25D8%25B3%25DB%258C%25D9%2585%2520%253C%252Fh4%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch5%253E%2520ASP.NET%2520-%2520React.js%2520-%2520SQL%2520Server%2520%253C%252Fh5%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fheader%253E"
          style={{width: '588px', height:' 276px', border:'0', transform: 'scale(1)', overflow:'hidden', }}
          sandbox="allow-scripts allow-same-origin"
        ></iframe> */}
        <header>
          <h3> آژانس 1830 مشهد </h3>
          <h4>پنل اپراتور تلفن و بیسیم</h4>
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
          <a href="https://panel1830.ir" target="_blank" rel="noreferrer">
            {" "}
            https://panel1830.ir{" "}
          </a>
        </span>
        <p className="description">
          این پنل برای ثبت سفر تاکسی 1830 مشهد طراحی شده است که اپراتور ها با آن
          می توانند سفر های موجود را ثبت یا پیگیری کنند.
        </p>
        <p className="description">
          در این پروژه من بخش هایی که ایراد داشت (ثبت سفر و یا بخش آدرس های اخیر
          مشتری) را رفع ایراد کردم و بخش های جدیدی نیز به پروژه افزودم. از جمله
          این بخش ها می توان به اضافه شدن کپچا، دریافت شماره تماس گیرنده و پر
          شدن فرم بر اساس اطلاعات موجود از مشتری، بخش کنسلی سرویس ها و از همه
          مهم تر تماس اینترنتی در محیط وب در همان صفحه با استفاده از SIP و
          ارتباط این بخش با سرور، ارسال متن صوتی تماس مشتری با اپراتور برای
          راننده و موارد دیگر اشاره کرد.
        </p>
        <p className="description">
          تمامی این بخش ها به صورت فول استک یعنی هم بخش React و هم بخش ASP.NET و
          SQL Server توسط من انجام شده است
        </p>
        <br />
        <hr />
      </div>
    </div>
  );
}
