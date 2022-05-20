import React from "react";
import dayjs from "dayjs";

import s from "./Popup.module.scss";
import { GlobalSvgSelector } from "../../../assets/icon/globalSvg/GlobalSvgSelector";
import ThisDayItem from "../ThisDayInfo/ThisDayItem";
import { NavLink, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Popup = () => {
  const { dayCard } = useParams();
  console.log(dayCard);
  const weather = useSelector((state) => state.weatherSlice.weather);
  const dayArray = weather.forecast.forecastday;
  const dayInfo = dayArray.find((dayInfo) => dayInfo.date === dayCard);
  // likeUser.find((nameUserInfo) => nameUserInfo.name.first === userName)
  const pressure = dayInfo.hour[0].pressure_mb;
  console.log(pressure);

  const items = [
    {
      iconId: "temp",
      name: "Температура",
      value: ` максимальная- ${Math.floor(
        dayInfo.day.maxtemp_c
      )}°. минимальная- ${Math.floor(dayInfo.day.mintemp_c)}°`,
    },
    {
      iconId: "pressure",
      name: "Давление",
      value: `${dayInfo.hour[0].pressure_mb} мм ртутного столба - нормальное`,
    },
    {
      iconId: "precipitation",
      name: "Осадки",
      value: dayInfo.day.condition.text,
    },
    {
      iconId: "wind",
      name: "Ветер",
      value: `${dayInfo.day.avgvis_km} км/ч`,
    },
  ];

  return (
    <>
      <div className={s.blur}></div>
      <div className={s.popup}>
        <div className={s.day}>
          <div className={s.day_temp}>{Math.floor(dayInfo.day.maxtemp_c)}°</div>
          <div className={s.day_name}>
            {dayjs(dayInfo.date).locale("ru").format("D  MMM")}
          </div>
          <div className={s.img}>
            <img src={dayInfo.day.condition.icon} alt="weather" />
            {/*<GlobalSvgSelector id="sun" />*/}
          </div>
          <div className={s.day_time}>
            Время:
            <span>{dayjs(weather.location.localtime).format("HH:MM")}</span>
          </div>
          <div className={s.day_city}>{weather.location.name}</div>
        </div>
        <div className={s.this_day_info_items}>
          {items.map((item: Item) => (
            <ThisDayItem key={item.iconId} item={item} />
          ))}
        </div>
        <NavLink to={"/"}>
          <div className={s.close}>
            <GlobalSvgSelector id="close" />
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default Popup;
