import React from "react";
import s from "./Days.module.scss";
import { Card } from "./Card";
import { Tabs } from "./Tabs";

export const Days = () => {
  const days = [
    {
      day_card: "Сегодня",
      day_info: "28 авг",
      icon_id: "sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облачно",
    },
    {
      day_card: "Завтра",
      day_info: "29 авг",
      icon_id: "small_rain_sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "Небольшой дождь",
    },
    {
      day_card: "Ср",
      day_info: "30 авг",
      icon_id: "small_rain",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облачно",
    },
    {
      day_card: "Чт",
      day_info: "1 сен",
      icon_id: "mainly_cloudy",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облачно",
    },
    {
      day_card: "Пт",
      day_info: "2 сен",
      icon_id: "rain",
      temp_day: "+18",
      temp_night: "+15",
      info: "Дождь",
    },
    {
      day_card: "Сб",
      day_info: "3 сен",
      icon_id: "sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облачно",
    },
    {
      day_card: "Вс",
      day_info: "4 сен",
      icon_id: "rain",
      temp_day: "+18",
      temp_night: "+15",
      info: "Дождь",
    },
  ];
  return (
    <>
      <Tabs />
      <div className={s.card_day}>
        {days.map((day) => (
          <Card key={day.day_info} day={day} />
        ))}
      </div>
    </>
  );
};
