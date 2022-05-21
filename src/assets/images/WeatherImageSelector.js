import sun from "./sun.png";
import cloud from "./cloud.png";
import rain from "./rain.png";

export const WeatherImageSelector = ({ id }) => {
  switch (id) {
    case "Солнечно":
      return sun;
    case "Переменная облачность":
      return cloud;
    case "Пасмурно":
      return cloud;
    case "Местами дождь":
      return rain;
    case "Небольшой ливневый дождь":
      return rain;

    default:
      return null;
  }
};
