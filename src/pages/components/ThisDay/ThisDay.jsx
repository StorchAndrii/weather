import React from "react";
import s from "./ThisDay.module.scss";
import { GlobalSvgSelector } from "../../../assets/icon/globalSvg/GlobalSvgSelector";

const ThisDay = () => {
  return (
    <div className={s.this_day}>
      <div className={s.top_block}>
        <div className={s.top_block_wrapper}>
          <div className={s.this_temp}>20°</div>
          <div className={s.this_day_name}>Сегодня</div>
        </div>
        <div className={s.img}>
          <GlobalSvgSelector id={"sun"} />
        </div>
      </div>
      <div className={s.bottom_block}>
        <div className={s.this_time}>Время: 12:40</div>
        <div className={s.this_city}>Город: Киев</div>
      </div>
    </div>
  );
};

export default ThisDay;
