import React, { useRef, useState } from "react";
import adlDriverImg1 from "../static/englishhob1.png";
import adlDriverImg2 from "../static/englishhob2.png";
import adlDriverImg3 from "../static/englishhob3.png";
import adlDriverImg4 from "../static/englishhob4.png";
import adlDriverImg5 from "../static/englishhob5.png";
import adlDriverImg6 from "../static/englishhob6.png";
import { useHistory } from "react-router";
import { useEffect } from "react";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";

export default function Englishhob(props) {
  const history = useHistory();
  const [state, setState] = useState({
    activeSlider: 1,
    activeImageUrl: adlDriverImg1,
    selectedImg: 0,
    isOpen: false,
  });
  const buttons = [1, 2, 3, 4, 5, 6];
  const images = [
    { url: adlDriverImg1, title: "لیست کلاس ها" },
    { url: adlDriverImg2, title: "صفحه ورود" },
    { url: adlDriverImg3, title: "  پنل زبان آموزان" },
    { url: adlDriverImg4, title: "کارنامه زبان آموز" },
    { url: adlDriverImg5, title: "ارسال پیشنهاد" },
    { url: adlDriverImg6, title: "صفحه  ارتباط" },
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
          <h3> موسسه آموزش زبان انگلیش هاب </h3>
          <h4>سایت و پنل زبان آموزان </h4>
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
          <a href="https://englishhob.ir" target="_blank" rel="noreferrer">
            {" "}
            https://englishhob.ir{" "}
          </a>
        </span>
        <p className="description">
          سایت انگلیش هاب برای تدریس زبان انگلیسی و اشتراک دوره های رایگان
          آنلاین طراحی شده است. در این سایت که اولین سایت ساخته شده توسط من است،
          صفحات مختلفی وجود دارد و پنلی برای زبان آموزان تعبیه شده است تا در آن
          کلاس های ثبت نامی خود و پیشرفت خود در دوره های آنلاین را ببینند و یا
          با اساتید و دیگر زبان آموزان در محیط سایت چت کنند و آموخته های خود را
          به اشتراک بگذارند
        </p>
        <p className="description">
          در این پروژه من به عنوان فریلنسر تمامی بخش های کار را بر عهده داشتم و
          ایده این آموزشگاه نیز توسط من بوده تا در محیط اسکایپ معلومات زبان
          انگلیسی خودم را با زبان آموزان به اشتراک بگذارم
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
