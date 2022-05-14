import React from "react";
import s from "./Days.module.scss";
import { WeatherSvgSelector } from "../../../assets/icon/weather/WeatherSvgSelector";

export const Card = (props) => {
  const { day_card, day_info, icon_id, temp_day, temp_night, info } = props.day;

  return (
    <div className={s.card}>
      <div className={s.day_card}>{day_card}</div>
      <div className={s.day_info}>{day_info}</div>
      <div className={s.icon_id}>
        <img src={icon_id} alt="" />
        <WeatherSvgSelector id={icon_id} />
      </div>
      <div className={s.temp_day}>{temp_day}</div>
      <div className={s.temp_night}>{temp_night}</div>
      <div className={s.info}>{info}</div>
    </div>
  );
};
