import React from "react";
import dayjs from "dayjs";
import { useSelector } from "react-redux";

import s from "./Popup.module.scss";
import { GlobalSvgSelector } from "../../assets/icon/globalSvg/GlobalSvgSelector";
import ThisDayItem from "../ThisDayItem/ThisDayItem";

const Popup = ({ active, setActive, dayCard }) => {
  const weather = useSelector((state) => state.weatherSlice.weather);
  const dayArray = weather.forecast.forecastday;
  const dayInfo = dayArray.find((dayInfo) => dayInfo.date === dayCard);

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
    <div className={active ? s.active : s.popupNon}>
      <div className={s.blur} onClick={() => setActive(false)} />
      <div className={s.popup}>
        <div className={s.day}>
          <div className={s.day_temp}>{Math.floor(dayInfo.day.maxtemp_c)}°</div>
          <div className={s.day_name}>
            {dayjs(dayInfo.date).locale("ru").format("D  MMM")}
          </div>
          <div className={s.img}>
            <img src={dayInfo.day.condition.icon} alt="weather" />
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
        <div className={s.close} onClick={() => setActive(false)}>
          <GlobalSvgSelector id="close" />
        </div>
      </div>
    </div>
  );
};

export default Popup;
