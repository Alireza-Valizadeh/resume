import React from "react";
import ResumeCard from "./ResumeCard";
import adlDriver from "../static/adl.png";
import adlCustomer from "../static/adlCustomer.png";
import adlCmr from "../static/adlCmr.png";
import webApp from "../static/webApp.png";
import fahrzeug from "../static/fahrzeug.png";
import fahrzeugAdmin from "../static/fahrzeugAdmin.png";
import avidMain from "../static/avidMain.png";
import taxi from "../static/taxi.png";
import englishhob from "../static/englishhob.png";
import order from "../static/order.png";
import taxi1830 from "../static/1830.png";
export default function Resume() {
  return (
    <div className="r">
      <h1> نمونه کارها </h1>
      <ResumeCard
        img={order}
        firstTitle={"رب زشک خراسان"}
        secondTitle={"پنل مدیریت سفارشات"}
        thirdTitle={"ASP.NET - React.js - SQL Server"}
        show={true}
        link={"/zoshk"}
      />
      <ResumeCard
        img={taxi1830}
        firstTitle={"آژانس 1830 مشهد"}
        secondTitle={"پنل اپراتور تلفن و بیسیم"}
        thirdTitle={"ASP.NET - React.js - SQL Server"}
        show={true}
        link={"/taxi1830"}
      />
      <ResumeCard
        img={adlDriver}
        firstTitle={"شرکت باربری عدل ترابران توس"}
        secondTitle={"پنل باربری صاحب کالا"}
        thirdTitle={"ASP.NET - React.js - SQL Server"}
        show={true}
        link={"/adltarabaranCustomerPanel"}
      />
      <ResumeCard
        img={adlCustomer}
        firstTitle={"شرکت باربری عدل ترابران توس"}
        secondTitle={"پنل باربری راننده"}
        thirdTitle={"ASP.NET - React.js - SQL Server"}
        show={true}
        link={"/adltarabaranDriverPanel"}
      />
      <ResumeCard
        img={adlCmr}
        firstTitle={"شرکت باربری عدل ترابران توس"}
        secondTitle={"پنل باربری شرکت حمل و نقل"}
        thirdTitle={"ASP.NET - React.js - SQL Server"}
        show={true}
        link={"/adltarabaranCmrPanel"}
      />
      <ResumeCard
        img={webApp}
        firstTitle={"تاکسی ابتکار"}
        secondTitle={"وب اپلیکیشن تاکسی ابتکار"}
        thirdTitle={"Node.js - React.js - SQL Server"}
        show={true}
        link={"/webApplicationTaxi"}
      />
      <ResumeCard
        img={fahrzeugAdmin}
        firstTitle={"شرکت آلمانی Fahrzeug"}
        secondTitle={"پنل ادمین"}
        thirdTitle={"Node.js - React.js - MySQL"}
        show={true}
        link={"/fahrzeugAdmin"}
      />
      <ResumeCard
        img={fahrzeug}
        firstTitle={"شرکت آلمانی Fahrzeug"}
        secondTitle={"پنل کاربری"}
        thirdTitle={"Node.js - React.js - MySQL"}
        show={true}
        link={"/fahrzeug"}
      />
      <ResumeCard
        img={taxi}
        firstTitle={"شرکت ابتکار فناوران"}
        secondTitle={" پروژه مدیریت آژانس در کل کشور "}
        thirdTitle={"Node.js - React.js - SQL Server - MongoDB"}
        show={true}
        link={"/taxiCountry"}
      />
      <ResumeCard
        img={avidMain}
        firstTitle={" استارتاپ آوید"}
        secondTitle={"شبکه اجتماعی آوید"}
        thirdTitle={"Node.js - Flutter - MySQL"}
        show={true}
        link={"/avid"}
      />
      <ResumeCard
        img={englishhob}
        firstTitle={" موسسه آموزش زبان انگلیش هاب"}
        secondTitle={"سایت و پنل زبان آموزان"}
        thirdTitle={"Node.js - React.js - MySQL"}
        show={true}
        link={"/Englishhob"}
      />
    </div>
  );
}
