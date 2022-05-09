import React from "react";
import s from "./ThisDayInfo.module.scss";
import ThisDayItem from "./ThisDayItem";
import cloud from "../../../assets/images/cloud.png";

const ThisDayInfo = () => {
  const items = [
    {
      icon_id: "temp",
      name: "Температура",
      value: "20° - ощущается как 17°",
    },
    {
      icon_id: "pressure",
      name: "Давление",
      value: "765 мм ртутного столба - нормальное",
    },
    {
      icon_id: "precipitation",
      name: "Осадки",
      value: "Без осадков",
    },
    {
      icon_id: "wind",
      name: "Ветер",
      value: "3 м/с юго-запад - легкий ветер",
    },
  ];
  return (
    <div className={s.this_day_info}>
      <img className={s.cloud_img} src={cloud} alt="cloud" />
      <div>
        {items.map((item) => (
          <ThisDayItem key={item.icon_id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ThisDayInfo;
