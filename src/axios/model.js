// лично я не выношу это в отдельные файлы а просто делаю константу initialValue прямо в слайсе

export const weather = {
  location: {
    name: "",
    localtime: "",
  },
  current: {
    temp_c: 0,
    condition: {
      text: "",
      icon: "",
    },
    wind_kph: 0,
    wind_dir: "",
    pressure_mb: 0,
  },
  forecast: {
    forecastday: [],
  },
};
