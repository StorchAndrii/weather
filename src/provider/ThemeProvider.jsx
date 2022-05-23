import { createContext, useState } from "react";

import { ChangeCssRootVariables } from "../model/ChangeCssRootVariables";

export const Theme = {
  Light: "light",
  Dark: "dark",
};
export const ThemeContext = createContext({});

export const ThemeProvider = ({ children, ...props }) => {
  const [theme, setTheme] = useState(Theme.Light);
  ChangeCssRootVariables(Theme);

  function changeTheme(theme) {
    setTheme(theme);
    ChangeCssRootVariables(theme);
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme,
      }}
      {...props}
    >
      {children}
    </ThemeContext.Provider>
  );
};
