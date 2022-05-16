import React from "react";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import s from "./Days.module.scss";
import { Card } from "./Card";
import { Tabs } from "./Tabs";

export const Days = () => {
  const weather = useSelector((state) => state.weatherSlice.weather);
  const day = weather.forecast.forecastday;
  const days = day.map((day) => ({
    dayCard: dayjs(day.date).locale("ru").format("D  MMM"),
    // а зачем два поля с одинаковой информацией?
    iconId: day.day.condition.icon,
    tempDay: Math.floor(day.day.maxtemp_c),
    tempNight: Math.floor(day.day.mintemp_c),
    info: day.day.condition.text,
  }));

  return (
    <>
      <Tabs />
      <div className={s.card_day}>
        {days.map((day) => (
          <Card key={day.dayCard} day={day} />
        ))}
      </div>
    </>
  );
};
