import React from "react";

export const themes = {
  light: {
    foreground: "white",
    background: "grey",
  },
  dark: {
    foreground: "grey",
    background: "white",
  },
};

// create context
export const ThemeContext = React.createContext({
  theme: themes.light,
  setTheme: () => {},
});

export default ThemeContext;
