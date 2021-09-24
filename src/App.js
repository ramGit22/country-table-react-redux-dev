import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import MainPage from "./screen/MainPage";
//import CountryHeader from "./components/CountryHeader";
import { Route, Switch } from "react-router-dom";
import SingleCountry from "./screen/SingleCountry";
import { BrowserRouter } from "react-router-dom";
// import ToggleButton from "./components/ToggleButton";
import { themes } from "./context/ThemeContext";
import ThemeContext from "./context/ThemeContext";
// import Header from "./components/Header";
// import ThemeContext from "./context/ThemeContext";
// import { themes } from "./context/ThemeContext";
// import { useState, useEffect } from "react";

import "./App.css";
// import { ThemeContext } from "./context/ThemeContext";

function App() {
  const [theme, setTheme] = useState(themes.dark);

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={MainPage}></Route>
            <Route exact path="/:countryName" component={SingleCountry}></Route>
          </Switch>
        </BrowserRouter>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
