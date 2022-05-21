import React from "react";
import { useSelector } from "react-redux";

import s from "./ThisDayInfo.module.scss";
import ThisDayItem from "../ThisDayItem/ThisDayItem";
import { WeatherImageSelector } from "../../../assets/images/WeatherImageSelector";

const ThisDayInfo = () => {
  const weather = useSelector((state) => state.weatherSlice.weather);

  const id = weather.current.condition.text;
  const weatherImage = WeatherImageSelector({ id });
  const items = [
    {
      iconId: "temp",
      name: "Температура",
      value: `${Math.floor(
        weather.current.temp_c
      )}° - ощущается как ${Math.floor(weather.current.feelslike_c)}°`,
    },
    {
      iconId: "pressure",
      name: "Давление",
      value: `${weather.current.pressure_mb} мм ртутного столба`,
    },
    {
      iconId: "precipitation",
      name: "Осадки",
      value: `${weather.current.condition.text}`,
    },
    {
      iconId: "wind",
      name: "Ветер",
      value: `${weather.current.wind_kph} км/ч ${weather.current.wind_dir}`,
    },
  ];
  return (
    <div className={s.this_day_info}>
      <img className={s.cloud_img} src={weatherImage} alt="cloud" />
      <div>
        {items.map((item) => (
          <ThisDayItem key={item.iconId} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ThisDayInfo;
