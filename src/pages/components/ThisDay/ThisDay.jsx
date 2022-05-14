import React from "react";
import s from "./ThisDay.module.scss";
import { useSelector } from "react-redux";

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
            {/*<GlobalSvgSelector id={"sun"} />*/}
          </div>
        </div>
        <div className={s.bottom_block}>
          <div className={s.this_time}>
            {/* Есть такая библиотека day-js, чтобы форматировать время. Афигенно придумал, но, по правильному, лучше использовать ее*/}
            Время: {weather.location.localtime.substring(11, 16)}
          </div>
          <div className={s.this_city}>Город: {weather.location.name}</div>
        </div>
      </div>
    </>
  );
};

export default ThisDay;
