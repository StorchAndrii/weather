import s from "./Header.module.scss";
import { GlobalSvgSelector } from "../../../assets/icon/globalSvg/GlobalSvgSelector";
import Select from "react-select";

const Header = () => {
  const options = [
    { value: "city-1", label: "Kyiv" },
    { value: "city-2", label: "Odessa" },
    { value: "city-3", label: "Lviv" },
  ];
  const colourStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor:
        "#4f4f4f" === "rgba(71, 147, 255, 0.2)"
          ? "#4f4f4f"
          : "rgba(71, 147, 255, 0.2)",
      width: "194px",
      height: "37px",
      borderRadius: "10px",
      zIndex: 100,
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: "#fff" === "#000" ? "#fff" : "#000",
    }),
  };

  function onChangeCity(city) {
    console.log(city);
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
        <div className={s.change_theme}>
          <GlobalSvgSelector id={"change_theme"} />
        </div>
        <Select
          defaultValue={options[0]}
          styles={colourStyles}
          options={options}
          onChange={onChangeCity}
        />
      </div>
    </div>
  );
};

export default Header;
