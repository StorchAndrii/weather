import React, { useState } from "react";
import { useSelector } from "react-redux";
import "dayjs/locale/ru";
import dayjs from "dayjs";

import s from "./Days.module.scss";
import Popup from "../Popup/Popup";

export const Days = () => {
  const [popupActive, setPopupActive] = useState(false);

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
  const [idDay, setIdDay] = useState(days[0]?.dayId);

  return (
    <>
      {/*<Tabs />*/}
      <div className={s.card_day}>
        {days.map((day) => (
          <div
            className={s.card}
            key={day.dayId}
            onClick={() => {
              setPopupActive(true);
              setIdDay(day.dayId);
            }}
          >
            <div className={s.day_card}>{day.dayCard}</div>
            <div className={s.icon_id}>
              <img src={day.iconId} alt="" />
            </div>
            <div className={s.temp_day}>{day.tempDay}</div>
            <div className={s.temp_night}>{day.tempNight}</div>
            <div className={s.info}>{day.info}</div>
          </div>
        ))}
      </div>
      {idDay && (
        <Popup
          active={popupActive}
          setActive={setPopupActive}
          dayCard={idDay}
        />
      )}
    </>
  );
};
