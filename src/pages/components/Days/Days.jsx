import React from "react";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import "dayjs/locale/ru";
import { NavLink } from "react-router-dom";

import s from "./Days.module.scss";

export const Days = () => {
  const weather = useSelector((state) => state.weatherSlice.weather);
  const day = weather.forecast.forecastday;
  const days = day.map((day) => ({
    dayId: day.date,
    dayCard: dayjs(day.date).locale("ru").format("D  MMM"),
    iconId: day.day.condition.icon,
    tempDay: Math.floor(day.day.maxtemp_c),
    tempNight: Math.floor(day.day.mintemp_c),
    info: day.day.condition.text,
  }));

  return (
    <>
      {/*<Tabs />*/}
      <div className={s.card_day}>
        {days.map((day) => (
          <NavLink to={`/Info/${day.dayId}`} key={day.dayId}>
            <div className={s.card}>
              <div className={s.day_card}>{day.dayCard}</div>
              <div className={s.icon_id}>
                <img src={day.iconId} alt="" />
              </div>
              <div className={s.temp_day}>{day.tempDay}</div>
              <div className={s.temp_night}>{day.tempNight}</div>
              <div className={s.info}>{day.info}</div>
            </div>
          </NavLink>
        ))}
      </div>
    </>
  );
};
