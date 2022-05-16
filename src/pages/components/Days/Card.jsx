import React from "react";

import s from "./Days.module.scss";

export const Card = (props) => {
  // не круто передавать классы через props. Ну и я не люблю не camelCase, если это не данные из сервера
  const { dayCard, iconId, tempDay, tempNight, info } = props.day;

  return (
    <div className={s.card}>
      <div className={s.day_card}>{dayCard}</div>
      <div className={s.icon_id}>
        <img src={iconId} alt="" />
      </div>
      <div className={s.temp_day}>{tempDay}</div>
      <div className={s.temp_night}>{tempNight}</div>
      <div className={s.info}>{info}</div>
    </div>
  );
};
