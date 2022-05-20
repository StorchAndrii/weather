import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";

import s from "./Header.module.scss";
import { GlobalSvgSelector } from "../../../assets/icon/globalSvg/GlobalSvgSelector";
import { getWeather } from "../../../weatherSlice/weatherSlice";
import { useTheme } from "../../../hooks/useTheme";
import { Theme } from "../../../ThemeContext/ThemeContext";

const Header = () => {
  const theme = useTheme();

  const dispatch = useDispatch();
  const city = useSelector((state) => state.weatherSlice.city);

  const options = [
    { value: "city-1", label: "Киев" },
    { value: "city-2", label: "Одесса" },
    { value: "city-3", label: "Львов" },
    { value: "city-4", label: "Кривой Рог" },
    { value: "city-5", label: "Днепропетровск" },
  ];

  const colourStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor:
        theme.theme === Theme.Dark ? "#4f4f4f" : "rgba(71, 147, 255, 0.2)",
      width: "194px",
      height: "37px",
      borderRadius: "10px",
      zIndex: 100,
    }),
    singleValue: (styles) => ({
      ...styles,
      color: theme.theme === Theme.Dark ? "#fff" : "#000",
    }),
  };
  function changeTheme() {
    theme.changeTheme(theme.theme === Theme.Light ? Theme.Dark : Theme.Light);
  }

  return (
    <div className={s.header}>
      <div className={s.wrapper}>
        <div>
          <GlobalSvgSelector id={"header-logo"} />
        </div>
        <h1 className={s.title}>React weather</h1>
      </div>
      <div className={s.wrapper}>
        <div className={s.change_theme} onClick={changeTheme}>
          <GlobalSvgSelector id={"change_theme"} />
        </div>
        <Select
          value={options.find((option) => option.label === city)}
          styles={colourStyles}
          options={options}
          onChange={(e) => {
            dispatch(getWeather(e.label));
          }}
        />
      </div>
    </div>
  );
};

export default Header;
