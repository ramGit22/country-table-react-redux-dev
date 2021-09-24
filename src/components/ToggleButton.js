import React, { useContext } from "react";
import ThemeContext, { themes } from "../context/ThemeContext";
import Switch from "@material-ui/core/Switch";

const ToggleButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleDark = () => {
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
  };
  return <Switch onChange={toggleDark} />;
};

export default ToggleButton;
