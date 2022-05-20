import React from "react";

import s from "./ThisDayInfo.module.scss";
import { IndicatorSvgSelector } from "../../../assets/icon/IndicatorSvgSelector/IndicatorSvgSelector";

const ThisDayItem = (props) => {
  const { iconId, name, value } = props.item;
  return (
    <div className={s.item}>
      <div className={s.indicator}>
        <IndicatorSvgSelector id={iconId} />
      </div>
      <div className={s.indicator_name}>{name}</div>
      <div className={s.indicator_value}>{value}</div>
    </div>
  );
};

export default ThisDayItem;
