import { useState } from "react";
import { Theme, ThemeContext } from "../ThemeContext/ThemeContext";
import { ChangeCssRootVariables } from "../model/ChangeCssRootVariables";

export const ThemeProvider = ({ children, ...props }) => {
  const [theme, setTheme] = useState(Theme.Light);
  ChangeCssRootVariables(Theme);

  function changeTheme(theme: Theme) {
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
