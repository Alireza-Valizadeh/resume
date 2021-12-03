import React from "react";
import SlideRoutes from "react-slide-routes";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";

import "./App.css";
import "./static/Styles/styles.css";
import "./static/Styles/lightbox.css";
import Homepage from "./Components/Homepage";
import AdlDriver from "./Components/adlDriver";
import AdlCustomer from "./Components/adlCustomer";
import AdlCmr from "./Components/adlCmr";
import WebApplicationTaxi from "./Components/webApp";
import Avid from "./Components/avid";
import Fahrzeug from "./Components/fahrzeug";
import FahrzeugAdmin from "./Components/fahrzeugAdmin";
import TaxiCountry from "./Components/TaxiCountry";
import Englishhob from "./Components/englishhob";
import Zoshk from "./Components/zoshk";
import Taxi1830 from "./Components/taxi1830";

function App() {
  // const location = useLocation();
  const routes = [
    { path: "/", component: Homepage },
    { path: "/adltarabaranDriverPanel", component: AdlDriver },
    { path: "/adltarabaranCustomerPanel", component: AdlCustomer },
    { path: "/adltarabaranCmrPanel", component: AdlCmr },
    { path: "/webApplicationTaxi", component: WebApplicationTaxi },
    { path: "/avid", component: Avid },
    { path: "/fahrzeug", component: Fahrzeug },
    { path: "/fahrzeugAdmin", component: FahrzeugAdmin },
    { path: "/taxiCountry", component: TaxiCountry },
    { path: "/Englishhob", component: Englishhob },
    { path: "/zoshk", component: Zoshk },
    { path: "/taxi1830", component: Taxi1830 },
  ];
  return (
    <Router basename={window.location.pathname || ""}>
      <Switch>
        {/* <SlideRoutes > */}
        {routes.map((route, index) => (
          <Route
            key={index}
            exact
            component={route.component}
            path={route.path}
          />
        ))}
        {/* </SlideRoutes> */}
      </Switch>
    </Router>
  );
}

export default App;
