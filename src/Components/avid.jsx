import React, { useRef, useState } from "react";
import webAppImg1 from "../static/avid1.png";
import webAppImg2 from "../static/avid2.png";
import webAppImg3 from "../static/avid3.png";
import webAppImg4 from "../static/avid4.png";
import webAppImg5 from "../static/avid5.png";
import webAppImg6 from "../static/avid6.png";
import webAppImg7 from "../static/avid7.png";
import webAppImg8 from "../static/avid8.png";
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
  const buttons = [1, 2, 3, 4, 5, 6, 7, 8];
  const images = [
    { url: webAppImg1, title: "انتخاب مبدا" },
    { url: webAppImg2, title: "سایدبار اپ" },
    { url: webAppImg3, title: "سفر های ذخیره شده" },
    { url: webAppImg4, title: "امکانات سفر " },
    { url: webAppImg5, title: "صفحه ورود" },
    { url: webAppImg6, title: "درخواست تاکسی" },
    { url: webAppImg7, title: "درخواست تاکسی" },
    { url: webAppImg8, title: "درخواست تاکسی" },
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
          <h3>استارتاپ آوید</h3>
          <h4>شبکه اجتماعی آوید</h4>
          <h5> Node.js - Flutter - MySQL</h5>
        </header>
        <div className="avidAlbum">
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
        {/* {state.isOpen && (
            <Lightbox
              images={images}
              allowRotate={false}
              style={{height: '100vh'}}
              onClose={() => setState({ isOpen: false })}
              startIndex={state.selectedImg}
              keyboardInteraction={true}
            />
          )} */}
        <span>
          {" "}
          آدرس سایـــــــت: (در حال توسعه)
          <a
            href="https://englishhob.ir/chat16/gettypes/en?type=0&groupCode=0"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            نمونه ای از مسیر اطلاعات انگلیسی{" "}
          </a>
        </span>
        <span>
          {" "}
          آدرس سایـــــــت: (در حال توسعه)
          <a
            href="https://englishhob.ir/chat16/gettypes/fa?type=0&groupCode=0"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            نمونه ای از مسیر اطلاعات فارسی{" "}
          </a>
        </span>
        <p className="description">
          آوید یک شبکه اجتماعی است که بر مبنای تست شخصیتی مایر بریگز بنیان گزاری
          شده است . امکانات مختلفی از جمله تشخیص تیپ شخصیتی کاربر با آزمون تهیه
          شده، چت با بقیه کاربران، یافتن افراد نزدیک شخص با پروفایل پابلیک،
          یافتن افرادی که تیپ شخصیتی مکمل فرد را دارند و... را داراست
        </p>
        <p className="description">
          این اپلیکیشن با فلاتر انجام شده است و قسمت backend آن توسط من انجام
          شده و تمامی بخش سرور توسط من هندل شده است (تهیه هاست و آپلود فایل ها و
          خرید دامنه)
        </p>
        <p className="description">
          این اپلیکیشن فعلا در حال توسعه است و امکاناتی مثل تست شخصیت و الگوریتم
          تشخیص تیپ شخصیتی بر اساس پاسخ، چت با بقیه کاربران، یافتن افراد نزدیک
          شخص و ویرایش پروفایل اجرا شده اند و بخش هایی مثل دو زبانه شدن نرم
          افزار و یافتن افراد دارای تیپ شخصیتی مکمل فرد نیز در حال اجرا هستند
        </p>
        <br />
        <hr />
      </div>
    </div>
  );
}
