import React from "react";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import s from "./ThisDay.module.scss";

const ThisDay = () => {
  const weather = useSelector((state) => state.weatherSlice.weather);

  return (
    <>
      <div className={s.this_day}>
        <div className={s.top_block}>
          <div className={s.top_block_wrapper}>
            <div className={s.this_temp}>
              {Math.floor(weather.current.temp_c)}°
            </div>
            <div className={s.this_day_name}>Сегодня</div>
          </div>
          <div className={s.img}>
            <img src={weather.current.condition.icon} alt="" />
          </div>
        </div>
        <div className={s.bottom_block}>
          <div className={s.this_time}>
            Время: {dayjs(weather.location.localtime).format("HH:MM")}
          </div>
          <div className={s.this_city}>Город: {weather.location.name}</div>
        </div>
      </div>
    </>
  );
};

export default ThisDay;
