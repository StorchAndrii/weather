import React from "react";

import sun from "../../assets/images/sun.png";
import cloud from "../../assets/images/cloud.png";
import rain from "../../assets/images/rain.png";

const conditions = {
  Солнечно: sun,
  "Переменная облачность": cloud,
  Пасмурно: cloud,
  "Местами дождь": rain,
  "Небольшой ливневый дождь": rain,
};

const WeatherImage = ({ condition, className }) => {
  return <img src={conditions[condition]} className={className} />;
};

export default WeatherImage;
