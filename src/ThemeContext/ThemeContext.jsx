import { createContext } from "react";

export const Theme = {
  Light: "light",
  Dark: "dark",
};

export const ThemeContext = createContext({
  Theme: Theme.Light,
  changeTheme: () => {},
});
