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
import gloPricing from "../static/gPricing2.png";
import taxi1830 from "../static/1830.png";
import { useTranslation, useLocalization } from "./Localization";
export default function Resume() {
  const t = useTranslation();
  const { languages, language, setLanguage } = useLocalization();
  return (
    <div className="r">
      <h1 style={{ direction: language != "fa" ? "ltr" : "rtl" }}>
        {t("resume")}{" "}
      </h1>
      <ResumeCard
        img={gloPricing}
        firstTitle={t("glo3d")}
        secondTitle={t("glo3d_pricing")}
        thirdTitle={"Node.js - Firebase - Stripe"}
        show={true}
        link={"/Glo3D-pricing"}
      />
      <ResumeCard
        img={order}
        firstTitle={t("zoshk")}
        secondTitle={t("zoshk_panel")}
        thirdTitle={"ASP.NET - React.js - SQL Server"}
        show={true}
        link={"/zoshk"}
      />
      <ResumeCard
        img={taxi1830}
        firstTitle={t("1830")}
        secondTitle={t("panel_operator")}
        thirdTitle={"ASP.NET - React.js - SQL Server"}
        show={true}
        link={"/taxi1830"}
      />
      <ResumeCard
        img={adlDriver}
        firstTitle={t("adl_tarabar")}
        secondTitle={t("adl_customer_panel")}
        thirdTitle={"ASP.NET - React.js - SQL Server"}
        show={true}
        link={"/adltarabaranCustomerPanel"}
      />
      <ResumeCard
        img={adlCustomer}
        firstTitle={t("adl_tarabar")}
        secondTitle={t("adl_driver_panel")}
        thirdTitle={"ASP.NET - React.js - SQL Server"}
        show={true}
        link={"/adltarabaranDriverPanel"}
      />
      <ResumeCard
        img={adlCmr}
        firstTitle={t("adl_tarabar")}
        secondTitle={t("adl_cmr_panel")}
        thirdTitle={"ASP.NET - React.js - SQL Server"}
        show={true}
        link={"/adltarabaranCmrPanel"}
      />
      <ResumeCard
        img={webApp}
        firstTitle={t("taxi_ebtekar")}
        secondTitle={t("ebtekar_web_app")}
        thirdTitle={"Node.js - React.js - SQL Server"}
        show={true}
        link={"/webApplicationTaxi"}
      />
      <ResumeCard
        img={fahrzeugAdmin}
        firstTitle={t("fahrzeug")}
        secondTitle={t("fahrzeug_admin")}
        thirdTitle={"Node.js - React.js - MySQL"}
        show={true}
        link={"/fahrzeugAdmin"}
      />
      <ResumeCard
        img={fahrzeug}
        firstTitle={t("fahrzeug")}
        secondTitle={t("fahrzeug_user")}
        thirdTitle={"Node.js - React.js - MySQL"}
        show={true}
        link={"/fahrzeug"}
      />
      <ResumeCard
        img={taxi}
        firstTitle={t("efspco")}
        secondTitle={t("taxi_country")}
        thirdTitle={"Node.js - React.js - SQL Server - MongoDB"}
        show={true}
        link={"/taxiCountry"}
      />
      <ResumeCard
        img={avidMain}
        firstTitle={t("avid_startup")}
        secondTitle={t("avid_social_media")}
        thirdTitle={"Node.js - Flutter - MySQL"}
        show={true}
        link={"/avid"}
      />
      <ResumeCard
        img={englishhob}
        firstTitle={t("englishhob")}
        secondTitle={t("englishhob_site")}
        thirdTitle={"Node.js - React.js - MySQL"}
        show={true}
        link={"/Englishhob"}
      />
    </div>
  );
}
